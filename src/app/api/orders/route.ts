import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// POST /api/orders — Create a new order (authenticated clients)
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

        const body = await request.json();
        const { serviceId, requirements } = body;

        if (!serviceId) {
            return NextResponse.json(
                { error: "serviceId is required" },
                { status: 400 }
            );
        }

        const service = await prisma.service.findUnique({
            where: { id: serviceId },
        });

        if (!service || !service.isActive) {
            return NextResponse.json(
                { error: "Service not found" },
                { status: 404 }
            );
        }

        const order = await prisma.order.create({
            data: {
                userId,
                serviceId: service.id,
                totalAmount: service.price,
                currency: service.currency,
                requirements: requirements || null,
                status: "pending",
            },
            include: { service: true },
        });

        return NextResponse.json({
            success: true,
            order: {
                id: order.id,
                serviceName: order.service.name,
                totalAmount: order.totalAmount,
                status: order.status,
                createdAt: order.createdAt.toISOString(),
            },
        });
    } catch (error) {
        console.error("Order error:", error);
        return NextResponse.json(
            { error: "Failed to create order" },
            { status: 500 }
        );
    }
}
