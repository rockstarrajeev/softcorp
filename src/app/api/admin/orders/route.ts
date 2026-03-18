import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// PATCH /api/admin/orders — Update order status
export async function PATCH(request: Request) {
    try {
        const session = await auth();
        if (
            !session?.user ||
            (session.user as { role?: string }).role !== "admin"
        ) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { orderId, status, notes } = body;

        if (!orderId || !status) {
            return NextResponse.json(
                { error: "orderId and status are required" },
                { status: 400 }
            );
        }

        const validStatuses = [
            "pending",
            "confirmed",
            "in_progress",
            "completed",
            "cancelled",
        ];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { error: "Invalid status" },
                { status: 400 }
            );
        }

        const order = await prisma.order.update({
            where: { id: orderId },
            data: {
                status,
                ...(notes !== undefined ? { notes } : {}),
            },
            include: { user: true, service: true },
        });

        return NextResponse.json({
            success: true,
            order: {
                id: order.id,
                status: order.status,
                clientName: order.user.name,
                serviceName: order.service.name,
            },
        });
    } catch (error) {
        console.error("Admin order update:", error);
        return NextResponse.json(
            { error: "Failed to update order" },
            { status: 500 }
        );
    }
}
