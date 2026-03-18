import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import Razorpay from "razorpay";

// POST — Create Razorpay order
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

        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        if (!keyId || !keySecret) {
            return NextResponse.json({ error: "Razorpay not configured" }, { status: 500 });
        }

        const razorpay = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
        });

        const { serviceId, requirements } = await request.json();

        const service = await prisma.service.findUnique({
            where: { id: serviceId },
        });
        if (!service || !service.isActive) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        // Create Razorpay order (amount in paise for INR)
        const currency = "INR";
        const amountInSmallest = Math.round(service.price * 100);

        const razorpayOrder = await razorpay.orders.create({
            amount: amountInSmallest,
            currency,
            receipt: `order_${Date.now()}`,
        });

        // Create DB order
        const order = await prisma.order.create({
            data: {
                userId,
                serviceId: service.id,
                totalAmount: service.price,
                currency,
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
                currency,
                gateway: "razorpay",
                gatewayPaymentId: razorpayOrder.id,
                status: "pending",
            },
        });

        return NextResponse.json({
            razorpayOrderId: razorpayOrder.id,
            razorpayKeyId: keyId,
            amount: amountInSmallest,
            currency,
            orderId: order.id,
            serviceName: service.name,
        });
    } catch (error) {
        console.error("Razorpay create:", error);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}
