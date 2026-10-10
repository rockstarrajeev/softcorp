import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import Stripe from "stripe";

// POST — Verify Stripe payment after redirect
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

        const { sessionId, orderId } = await request.json();

        if (!sessionId || !orderId) {
            return NextResponse.json({ error: "Missing required identifiers" }, { status: 400 });
        }

        // Validate order ownership
        const order = await prisma.order.findUnique({
            where: { id: orderId },
        });

        if (!order) {
            return NextResponse.json({ error: "Order not found" }, { status: 404 });
        }

        if (order.userId !== userId) {
            return NextResponse.json({ error: "Forbidden: Order does not belong to user" }, { status: 403 });
        }

        const secretKey = process.env.STRIPE_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
        }

        const stripe = new Stripe(secretKey);
        const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

        // Verify the checkout session corresponds to this order
        if (checkoutSession.metadata?.orderId && checkoutSession.metadata.orderId !== orderId) {
            console.error("Stripe session metadata orderId mismatch:", checkoutSession.metadata.orderId, orderId);
            return NextResponse.json({ error: "Payment session does not match order" }, { status: 400 });
        }

        if (checkoutSession.payment_status === "paid") {
            await prisma.payment.update({
                where: { orderId },
                data: {
                    status: "succeeded",
                    gatewayPaymentId: sessionId,
                    paidAt: new Date(),
                },
            });

            await prisma.order.update({
                where: { id: orderId },
                data: { status: "confirmed" },
            });

            return NextResponse.json({ success: true, status: "paid" });
        }

        return NextResponse.json({ success: false, status: checkoutSession.payment_status });
    } catch (error) {
        console.error("Stripe verify error:", error);
        return NextResponse.json({ error: "Failed to verify Stripe payment" }, { status: 500 });
    }
}
