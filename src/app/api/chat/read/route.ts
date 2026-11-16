import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";

// PATCH /api/chat/read — Mark conversation messages as read
export async function PATCH(request: Request) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = (session.user as { id?: string }).id;
        const role = (session.user as { role?: string }).role || "client";
        if (!userId) {
            return NextResponse.json({ error: "Invalid session" }, { status: 401 });
        }

        if (role === "admin") {
            const body = await request.json().catch(() => ({}));
            const { clientId } = body;

            if (clientId) {
                await prisma.chatMessage.updateMany({
                    where: {
                        senderId: clientId,
                        isRead: false,
                    },
                    data: { isRead: true },
                });
            } else {
                // Mark all unread incoming messages as read
                await prisma.chatMessage.updateMany({
                    where: {
                        senderRole: "client",
                        isRead: false,
                    },
                    data: { isRead: true },
                });
            }

            return NextResponse.json({ success: true });
        }

        // Client role: mark all messages sent by admin to this client as read
        await prisma.chatMessage.updateMany({
            where: {
                OR: [
                    { receiverId: userId },
                    { receiverId: null, senderRole: "admin" },
                ],
                isRead: false,
            },
            data: { isRead: true },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Chat read PATCH error:", error);
        return NextResponse.json({ error: "Failed to mark messages as read" }, { status: 500 });
    }
}
