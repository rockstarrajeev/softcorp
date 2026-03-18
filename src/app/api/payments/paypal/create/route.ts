import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// POST — Create a PayPal order
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

        const { serviceId, requirements } = await request.json();

        const service = await prisma.service.findUnique({
            where: { id: serviceId },
        });
        if (!service || !service.isActive) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        // Create PayPal order via REST API
        const clientId = process.env.PAYPAL_CLIENT_ID;
        const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

        if (!clientId || !clientSecret) {
            return NextResponse.json({ error: "PayPal not configured" }, { status: 500 });
        }

        const baseUrl = process.env.PAYPAL_MODE === "live"
            ? "https://api-m.paypal.com"
            : "https://api-m.sandbox.paypal.com";

        // Get access token
        const tokenRes = await fetch(`${baseUrl}/v1/oauth2/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
            },
            body: "grant_type=client_credentials",
        });
        const tokenData = await tokenRes.json();

        // Create order
        const orderRes = await fetch(`${baseUrl}/v2/checkout/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenData.access_token}`,
            },
            body: JSON.stringify({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: service.currency,
                            value: service.price.toFixed(2),
                        },
                        description: service.name,
                    },
                ],
            }),
        });
        const paypalOrder = await orderRes.json();

        // Create DB order
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

        // Create payment record
        await prisma.payment.create({
            data: {
                orderId: order.id,
                userId,
                amount: service.price,
                currency: service.currency,
                gateway: "paypal",
                gatewayPaymentId: paypalOrder.id,
                status: "pending",
            },
        });

        return NextResponse.json({
            paypalOrderId: paypalOrder.id,
            orderId: order.id,
        });
    } catch (error) {
        console.error("PayPal create:", error);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}
