import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";

// GET /api/chat — Fetch messages for client or admin
export async function GET(request: Request) {
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

        const { searchParams } = new URL(request.url);

        // ─── ADMIN FLOW ───
        if (role === "admin") {
            const summary = searchParams.get("summary");
            const clientId = searchParams.get("clientId");
            const orderId = searchParams.get("orderId");

            if (summary === "true") {
                const clients = await prisma.user.findMany({
                    where: { role: "client" },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true,
                        createdAt: true,
                        orders: {
                            select: {
                                id: true,
                                status: true,
                                totalAmount: true,
                                currency: true,
                                createdAt: true,
                                service: { select: { name: true, category: true } },
                            },
                            orderBy: { createdAt: "desc" },
                        },
                    },
                    orderBy: { createdAt: "desc" },
                });

                const clientSummaries = await Promise.all(
                    clients.map(async (client) => {
                        const [latestMessage, unreadCount] = await Promise.all([
                            prisma.chatMessage.findFirst({
                                where: {
                                    OR: [
                                        { senderId: client.id },
                                        { receiverId: client.id },
                                    ],
                                },
                                orderBy: { createdAt: "desc" },
                            }),
                            prisma.chatMessage.count({
                                where: {
                                    senderId: client.id,
                                    isRead: false,
                                },
                            }),
                        ]);

                        return {
                            id: client.id,
                            name: client.name || "Client",
                            email: client.email,
                            image: client.image,
                            createdAt: client.createdAt.toISOString(),
                            latestMessage: latestMessage
                                ? {
                                      id: latestMessage.id,
                                      message: latestMessage.message,
                                      senderRole: latestMessage.senderRole,
                                      createdAt: latestMessage.createdAt.toISOString(),
                                  }
                                : null,
                            unreadCount,
                            orders: client.orders.map((o) => ({
                                id: o.id,
                                status: o.status,
                                totalAmount: o.totalAmount,
                                currency: o.currency,
                                createdAt: o.createdAt.toISOString(),
                                serviceName: o.service.name,
                            })),
                        };
                    })
                );

                // Sort: unread first, then latest message time, then created date
                clientSummaries.sort((a, b) => {
                    if (a.unreadCount !== b.unreadCount) return b.unreadCount - a.unreadCount;
                    const timeA = a.latestMessage ? new Date(a.latestMessage.createdAt).getTime() : 0;
                    const timeB = b.latestMessage ? new Date(b.latestMessage.createdAt).getTime() : 0;
                    return timeB - timeA;
                });

                return NextResponse.json({ success: true, clients: clientSummaries });
            }

            if (!clientId) {
                return NextResponse.json(
                    { error: "clientId is required for admin message fetch" },
                    { status: 400 }
                );
            }

            // Fetch messages with specific client
            const whereClause: {
                OR: Array<{ senderId: string; receiverId?: string | null } | { receiverId: string }>;
                orderId?: string;
            } = {
                OR: [
                    { senderId: clientId },
                    { receiverId: clientId },
                ],
            };

            if (orderId) {
                whereClause.orderId = orderId;
            }

            const messages = await prisma.chatMessage.findMany({
                where: whereClause,
                include: {
                    sender: { select: { id: true, name: true, role: true, image: true } },
                    order: { select: { id: true, service: { select: { name: true } }, status: true } },
                },
                orderBy: { createdAt: "asc" },
            });

            return NextResponse.json({
                success: true,
                messages: (messages as any[]).map((m) => ({
                    id: m.id,
                    senderId: m.senderId,
                    receiverId: m.receiverId,
                    orderId: m.orderId,
                    message: m.message,
                    senderRole: m.senderRole,
                    senderName: m.sender.name || (m.senderRole === "admin" ? "Softcorp Admin" : "Client"),
                    isRead: m.isRead,
                    createdAt: m.createdAt.toISOString(),
                    order: m.order ? {
                        id: m.order.id,
                        serviceName: m.order.service.name,
                        status: m.order.status,
                    } : null,
                })),
            });
        }

        // ─── CLIENT FLOW ───
        const orderId = searchParams.get("orderId");
        const whereClause: {
            OR: Array<{ senderId: string } | { receiverId: string } | { receiverId: null; senderRole: string }>;
            orderId?: string;
        } = {
            OR: [
                { senderId: userId },
                { receiverId: userId },
                { receiverId: null, senderRole: "admin" },
            ],
        };

        if (orderId) {
            whereClause.orderId = orderId;
        }

        const [messages, unreadCount, orders] = await Promise.all([
            prisma.chatMessage.findMany({
                where: whereClause,
                include: {
                    sender: { select: { id: true, name: true, role: true, image: true } },
                    order: { select: { id: true, service: { select: { name: true } }, status: true } },
                },
                orderBy: { createdAt: "asc" },
            }),
            prisma.chatMessage.count({
                where: {
                    receiverId: userId,
                    isRead: false,
                },
            }),
            prisma.order.findMany({
                where: { userId },
                include: { service: true, payment: true },
                orderBy: { createdAt: "desc" },
            }),
        ]);

        return NextResponse.json({
            success: true,
            unreadCount,
            messages: (messages as any[]).map((m) => ({
                id: m.id,
                senderId: m.senderId,
                receiverId: m.receiverId,
                orderId: m.orderId,
                message: m.message,
                senderRole: m.senderRole,
                senderName: m.sender?.name || (m.senderRole === "admin" ? "Softcorp Technical Lead" : "You"),
                isRead: m.isRead,
                createdAt: m.createdAt.toISOString(),
                order: m.order ? {
                    id: m.order.id,
                    serviceName: m.order.service.name,
                    status: m.order.status,
                } : null,
            })),
            orders: (orders as any[]).map((o) => ({
                id: o.id,
                serviceName: o.service.name,
                category: o.service.category,
                status: o.status,
                totalAmount: o.totalAmount,
                currency: o.currency,
                createdAt: o.createdAt.toISOString(),
                paymentStatus: o.payment?.status || "pending",
            })),
        });
    } catch (error) {
        console.error("Chat GET error:", error);
        return NextResponse.json({ error: "Failed to load chat messages" }, { status: 500 });
    }
}

// POST /api/chat — Send a new chat message
export async function POST(request: Request) {
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

        const rateLimit = checkRateLimit(`chat_msg_${userId}`, 30, 60 * 1000);
        if (!rateLimit.success) {
            return NextResponse.json(
                { error: "Too many messages sent. Please wait a moment." },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { message, orderId, receiverId } = body;

        if (!message || typeof message !== "string" || message.trim().length === 0) {
            return NextResponse.json({ error: "Message content cannot be empty" }, { status: 400 });
        }

        const sanitizedMessage = message.trim().slice(0, 2000);

        if (role === "admin") {
            if (!receiverId) {
                return NextResponse.json({ error: "receiverId is required for admin replies" }, { status: 400 });
            }

            const targetClient = await prisma.user.findUnique({
                where: { id: receiverId },
            });
            if (!targetClient) {
                return NextResponse.json({ error: "Client not found" }, { status: 404 });
            }

            const created = await prisma.chatMessage.create({
                data: {
                    senderId: userId,
                    receiverId,
                    orderId: orderId || null,
                    message: sanitizedMessage,
                    senderRole: "admin",
                    isRead: false,
                },
                include: {
                    sender: { select: { id: true, name: true, role: true, image: true } },
                    order: { select: { id: true, service: { select: { name: true } }, status: true } },
                },
            });

            return NextResponse.json({
                success: true,
                message: {
                    id: created.id,
                    senderId: created.senderId,
                    receiverId: created.receiverId,
                    orderId: created.orderId,
                    message: created.message,
                    senderRole: created.senderRole,
                    senderName: created.sender.name || "Softcorp Admin",
                    isRead: created.isRead,
                    createdAt: created.createdAt.toISOString(),
                    order: created.order ? {
                        id: created.order.id,
                        serviceName: created.order.service.name,
                        status: created.order.status,
                    } : null,
                },
            });
        }

        // Role === "client"
        if (orderId) {
            const clientOrder = await prisma.order.findUnique({
                where: { id: orderId },
            });
            if (!clientOrder || clientOrder.userId !== userId) {
                return NextResponse.json({ error: "Invalid order association" }, { status: 403 });
            }
        }

        const adminUser = await prisma.user.findFirst({
            where: { role: "admin" },
        });

        const created = await prisma.chatMessage.create({
            data: {
                senderId: userId,
                receiverId: adminUser?.id || receiverId || null,
                orderId: orderId || null,
                message: sanitizedMessage,
                senderRole: "client",
                isRead: false,
            },
            include: {
                sender: { select: { id: true, name: true, role: true, image: true } },
                order: { select: { id: true, service: { select: { name: true } }, status: true } },
            },
        });

        return NextResponse.json({
            success: true,
            message: {
                id: created.id,
                senderId: created.senderId,
                receiverId: created.receiverId,
                orderId: created.orderId,
                message: created.message,
                senderRole: created.senderRole,
                senderName: created.sender.name || "You",
                isRead: created.isRead,
                createdAt: created.createdAt.toISOString(),
                order: created.order ? {
                    id: created.order.id,
                    serviceName: created.order.service.name,
                    status: created.order.status,
                } : null,
            },
        });
    } catch (error) {
        console.error("Chat POST error:", error);
        return NextResponse.json({ error: "Failed to dispatch message" }, { status: 500 });
    }
}
