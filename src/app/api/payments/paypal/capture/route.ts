import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// POST — Securely capture PayPal payment after client approval
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

        const { paypalOrderId, orderId } = await request.json();

        if (!paypalOrderId || !orderId) {
            return NextResponse.json({ error: "Missing required identifiers" }, { status: 400 });
        }

        // Validate order ownership (Prevent IDOR)
        const order = await prisma.order.findUnique({
            where: { id: orderId },
        });

        if (!order) {
            return NextResponse.json({ error: "Order not found" }, { status: 404 });
        }

        if (order.userId !== userId) {
            return NextResponse.json({ error: "Forbidden: Order does not belong to user" }, { status: 403 });
        }

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

        if (!tokenRes.ok || !tokenData.access_token) {
            return NextResponse.json({ error: "PayPal authentication failed" }, { status: 502 });
        }

        // Capture the payment
        const captureRes = await fetch(
            `${baseUrl}/v2/checkout/orders/${paypalOrderId}/capture`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenData.access_token}`,
                },
            }
        );
        const captureData = await captureRes.json();

        if (captureData.status === "COMPLETED") {
            // Verify captured amount and currency to prevent amount-spoofing attacks
            const capturePayment = captureData.purchase_units?.[0]?.payments?.captures?.[0];
            const capturedAmount = parseFloat(capturePayment?.amount?.value || "0");
            const capturedCurrency = capturePayment?.amount?.currency_code;
            const expectedAmount = parseFloat(order.totalAmount.toFixed(2));

            if (Math.abs(capturedAmount - expectedAmount) > 0.01 || capturedCurrency !== order.currency) {
                console.error("PayPal capture amount/currency mismatch:", {
                    received: { amount: capturedAmount, currency: capturedCurrency },
                    expected: { amount: expectedAmount, currency: order.currency },
                });
                return NextResponse.json(
                    { error: "Payment verification failed: captured amount does not match order price." },
                    { status: 400 }
                );
            }

            // Update payment record
            await prisma.payment.update({
                where: { orderId },
                data: {
                    status: "succeeded",
                    gatewayPaymentId: paypalOrderId,
                    paidAt: new Date(),
                },
            });

            // Update order status
            await prisma.order.update({
                where: { id: orderId },
                data: { status: "confirmed" },
            });

            return NextResponse.json({ success: true, status: "COMPLETED" });
        } else {
            return NextResponse.json({
                success: false,
                status: captureData.status,
                error: "Payment not completed",
            });
        }
    } catch (error) {
        console.error("PayPal capture error:", error);
        return NextResponse.json({ error: "Failed to capture payment" }, { status: 500 });
    }
}
