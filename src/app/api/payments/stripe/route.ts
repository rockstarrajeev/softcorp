import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import Stripe from "stripe";

// POST — Create Stripe Checkout Session
export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = (session.user as { id?: string }).id;
        if (!userId) {
            return NextResponse.json({ error: "Invalid session" }, { status: 401 });
        }

        const secretKey = process.env.STRIPE_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
        }

        const stripe = new Stripe(secretKey);

        const { serviceId, requirements } = await request.json();

        const service = await prisma.service.findUnique({
            where: { id: serviceId },
        });
        if (!service || !service.isActive) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        // Create DB order first
        const order = await prisma.order.create({
            data: {
                userId,
                serviceId: service.id,
                totalAmount: service.price,
                currency: service.currency,
                requirements: requirements || null,
                status: "pending",
            },
        });

        // Create Stripe Checkout Session
        const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: service.currency.toLowerCase(),
                        product_data: {
                            name: service.name,
                            description: service.description,
                        },
                        unit_amount: Math.round(service.price * 100), // Stripe uses cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${baseUrl}/checkout/success?orderId=${order.id}&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/checkout/cancel?orderId=${order.id}`,
            metadata: {
                orderId: order.id,
                userId,
            },
        });

        // Create payment record
        await prisma.payment.create({
            data: {
                orderId: order.id,
                userId,
                amount: service.price,
                currency: service.currency,
                gateway: "stripe",
                gatewayPaymentId: checkoutSession.id,
                status: "pending",
            },
        });

        return NextResponse.json({
            url: checkoutSession.url,
            orderId: order.id,
        });
    } catch (error) {
        console.error("Stripe create:", error);
        return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
    }
}
