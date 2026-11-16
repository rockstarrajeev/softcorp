import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import Razorpay from "razorpay";
import { checkRateLimit } from "@/lib/rate-limit";

/** POST /api/payments/razorpay/create-order
 *  Creates a Razorpay order and a pending DB record.
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
        const rateLimit = checkRateLimit(`rzp_create_${userId}`, 10, 10 * 60 * 1000);
        if (!rateLimit.success) {
            return NextResponse.json(
                { error: "Too many requests. Please wait a moment." },
                { status: 429 }
            );
        }

        // ── Env check ─────────────────────────────────────────
        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;
        if (!keyId || !keySecret) {
            return NextResponse.json({ error: "Razorpay not configured" }, { status: 500 });
        }

        // ── Parse body ────────────────────────────────────────
        const { serviceId, requirements } = await request.json();
        const sanitizedRequirements =
            requirements && typeof requirements === "string"
                ? requirements.trim().slice(0, 3000)
                : null;

        // ── Fetch service ─────────────────────────────────────
        const service = await prisma.service.findFirst({
            where: {
                OR: [
                    { id: serviceId },
                    { slug: serviceId },
                ],
                isActive: true,
            },
        });
        if (!service || !service.isActive) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        // ── Convert to paise (INR smallest unit) ──────────────
        // service.price is stored as INR for Indian services
        const amountPaise = Math.round(service.price * 100);
        if (amountPaise < 100) {
            return NextResponse.json(
                { error: "Amount must be at least ₹1 (100 paise)" },
                { status: 400 }
            );
        }

        // ── Create DB order first ─────────────────────────────
        const order = await prisma.order.create({
            data: {
                userId,
                serviceId: service.id,
                totalAmount: service.price,
                currency: "INR",
                requirements: sanitizedRequirements,
                status: "pending",
            },
        });

        // ── Create Razorpay order ─────────────────────────────
        const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

        const rzpOrder = await razorpay.orders.create({
            amount: amountPaise,
            currency: "INR",
            receipt: `order_${order.id}`,
            notes: {
                orderId: order.id,
                userId,
                serviceName: service.name,
            },
        });

        // ── Persist payment record ────────────────────────────
        await prisma.payment.create({
            data: {
                orderId: order.id,
                userId,
                amount: service.price,
                currency: "INR",
                gateway: "razorpay",
                gatewayPaymentId: rzpOrder.id,
                status: "pending",
            },
        });

        return NextResponse.json({
            order_id: rzpOrder.id,
            amount: rzpOrder.amount,
            currency: rzpOrder.currency,
            orderId: order.id, // internal DB order id
        });
    } catch (error) {
        console.error("Razorpay create-order:", error);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}

