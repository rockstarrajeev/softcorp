import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// PATCH /api/admin/messages — Mark message as read
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
        const { messageId } = body;

        if (!messageId) {
            return NextResponse.json(
                { error: "messageId is required" },
                { status: 400 }
            );
        }

        await prisma.contactMessage.update({
            where: { id: messageId },
            data: { isRead: true },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Admin message update:", error);
        return NextResponse.json(
            { error: "Failed to update message" },
            { status: 500 }
        );
    }
}
