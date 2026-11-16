import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import crypto from "crypto";
import { checkRateLimit } from "@/lib/rate-limit";

/** POST /api/payments/razorpay/verify
 *  Verifies the HMAC-SHA256 signature and marks the order as confirmed.
 */
export async function POST(request: Request) {
    try {
        // ── Auth ──────────────────────────────────────────────
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = (session.user as { id?: string }).id;
        if (!userId) {
            return NextResponse.json({ error: "Invalid session" }, { status: 401 });
        }

        // ── Rate limit ────────────────────────────────────────
        const rateLimit = checkRateLimit(`rzp_verify_${userId}`, 10, 10 * 60 * 1000);
        if (!rateLimit.success) {
            return NextResponse.json({ error: "Too many requests." }, { status: 429 });
        }

        // ── Env check ─────────────────────────────────────────
        const keySecret = process.env.RAZORPAY_KEY_SECRET;
        if (!keySecret) {
            return NextResponse.json({ error: "Razorpay not configured" }, { status: 500 });
        }

        // ── Parse body ────────────────────────────────────────
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature, orderId } =
            await request.json();

        if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature || !orderId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // ── Cryptographic verification ────────────────────────
        // Razorpay spec: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
        const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
        const expectedSignature = crypto
            .createHmac("sha256", keySecret)
            .update(payload)
            .digest("hex");

        const signaturesMatch = crypto.timingSafeEqual(
            Buffer.from(expectedSignature, "hex"),
            Buffer.from(razorpay_signature, "hex")
        );

        if (!signaturesMatch) {
            console.warn("Razorpay signature mismatch for orderId:", orderId);
            return NextResponse.json({ error: "Payment signature invalid" }, { status: 400 });
        }

        // ── Confirm in DB ─────────────────────────────────────
        await prisma.$transaction([
            prisma.payment.updateMany({
                where: { orderId, userId, gateway: "razorpay" },
                data: {
                    status: "succeeded",
                    gatewayPaymentId: razorpay_payment_id,
                    paidAt: new Date(),
                },
            }),
            prisma.order.update({
                where: { id: orderId },
                data: { status: "confirmed" },
            }),
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Razorpay verify:", error);
        return NextResponse.json({ error: "Verification failed" }, { status: 500 });
    }
}

