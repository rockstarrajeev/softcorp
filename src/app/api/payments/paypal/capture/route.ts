import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// POST — Capture PayPal payment after client approval
export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { paypalOrderId, orderId } = await request.json();

        if (!paypalOrderId || !orderId) {
            return NextResponse.json({ error: "Missing IDs" }, { status: 400 });
        }

        const clientId = process.env.PAYPAL_CLIENT_ID;
        const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

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
            // Update payment record
            await prisma.payment.update({
                where: { orderId },
                data: {
                    status: "succeeded",
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
        console.error("PayPal capture:", error);
        return NextResponse.json({ error: "Failed to capture payment" }, { status: 500 });
    }
}
