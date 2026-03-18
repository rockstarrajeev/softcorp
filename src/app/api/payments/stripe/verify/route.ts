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

        const { sessionId, orderId } = await request.json();

        if (!sessionId || !orderId) {
            return NextResponse.json({ error: "Missing IDs" }, { status: 400 });
        }

        const secretKey = process.env.STRIPE_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
        }

        const stripe = new Stripe(secretKey);
        const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

        if (checkoutSession.payment_status === "paid") {
            await prisma.payment.update({
                where: { orderId },
                data: {
                    status: "succeeded",
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
        console.error("Stripe verify:", error);
        return NextResponse.json({ error: "Failed to verify" }, { status: 500 });
    }
}
