import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// POST — Verify Razorpay payment
export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { orderId, razorpayPaymentId } = await request.json();

        if (!orderId || !razorpayPaymentId) {
            return NextResponse.json({ error: "Missing IDs" }, { status: 400 });
        }

        // Update payment record
        await prisma.payment.update({
            where: { orderId },
            data: {
                status: "succeeded",
                gatewayPaymentId: razorpayPaymentId,
                paidAt: new Date(),
            },
        });

        // Update order status
        await prisma.order.update({
            where: { id: orderId },
            data: { status: "confirmed" },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Razorpay verify:", error);
        return NextResponse.json({ error: "Failed to verify" }, { status: 500 });
    }
}
