import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// PATCH /api/admin/orders — Update order status
export async function PATCH(request: Request) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        if ((session.user as { role?: string }).role !== "admin") {
            return NextResponse.json({ error: "Forbidden: Admin access required" }, { status: 403 });
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

        const sanitizedNotes = notes !== undefined && typeof notes === "string"
            ? notes.trim().slice(0, 2000)
            : notes;

        const order = await prisma.order.update({
            where: { id: orderId },
            data: {
                status,
                ...(notes !== undefined ? { notes: sanitizedNotes } : {}),
            },
            include: { user: true, service: true },
        });

        // Automated status update message inserted into chat stream
        const statusDisplay: Record<string, string> = {
            pending: "Pending Review",
            confirmed: "Confirmed & Scheduled",
            in_progress: "In Progress (Active Sprint)",
            completed: "Completed & Verified",
            cancelled: "Cancelled",
        };

        const adminUserId = (session.user as { id?: string }).id;
        try {
            await prisma.chatMessage.create({
                data: {
                    senderId: adminUserId || order.userId,
                    receiverId: order.userId,
                    orderId: order.id,
                    message: `📢 Status Update: ${order.service.name} is now marked as "${statusDisplay[status] || status}".${sanitizedNotes ? ` (Admin Note: ${sanitizedNotes})` : ""}`,
                    senderRole: "system",
                    isRead: false,
                },
            });
        } catch (chatErr) {
            console.error("Non-blocking chat notify error:", chatErr);
        }

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
