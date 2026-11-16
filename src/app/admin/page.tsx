import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import AdminDashboardClient from "./AdminDashboardClient";

export default async function AdminDashboard() {
    const session = await auth();

    if (
        !session?.user ||
        (session.user as { role?: string }).role !== "admin"
    ) {
        redirect("/login");
    }

    const [
        totalClients,
        totalOrders,
        totalRevenue,
        totalMessages,
        orders,
        messages,
        services,
        clients,
        totalUnreadChat,
    ] = await Promise.all([
        prisma.user.count({ where: { role: "client" } }),
        prisma.order.count(),
        prisma.payment.aggregate({
            _sum: { amount: true },
            where: { status: "succeeded" },
        }),
        prisma.contactMessage.count(),
        prisma.order.findMany({
            orderBy: { createdAt: "desc" },
            include: { user: true, service: true, payment: true },
        }),
        prisma.contactMessage.findMany({
            orderBy: { createdAt: "desc" },
        }),
        prisma.service.findMany({
            orderBy: { sortOrder: "asc" },
        }),
        prisma.user.findMany({
            where: { role: "client" },
            orderBy: { createdAt: "desc" },
            include: { _count: { select: { orders: true } } },
        }),
        prisma.chatMessage.count({
            where: { senderRole: "client", isRead: false },
        }),
    ]);

    const data = {
        stats: {
            totalClients,
            totalOrders,
            totalRevenue: totalRevenue._sum.amount || 0,
            totalMessages,
            totalUnreadChat,
        },
        orders: (orders as any[]).map((o) => ({
            id: o.id,
            userId: o.userId,
            clientName: o.user?.name || "Unknown",
            clientEmail: o.user?.email || "",
            serviceName: o.service?.name || "Service",
            status: o.status,
            totalAmount: o.totalAmount,
            currency: o.currency,
            requirements: o.requirements,
            notes: o.notes,
            createdAt: o.createdAt.toISOString(),
            paymentStatus: o.payment?.status || "unpaid",
        })),
        messages: (messages as any[]).map((m) => ({
            id: m.id,
            name: m.name,
            email: m.email,
            phone: m.phone,
            subject: m.subject,
            message: m.message,
            isRead: m.isRead,
            createdAt: m.createdAt.toISOString(),
        })),
        services: (services as any[]).map((s) => ({
            id: s.id,
            name: s.name,
            slug: s.slug,
            category: s.category,
            description: s.description,
            price: s.price,
            pricingModel: s.pricingModel,
            isActive: s.isActive,
        })),
        clients: (clients as any[]).map((c) => ({
            id: c.id,
            name: c.name || "No Name",
            email: c.email,
            image: c.image,
            ordersCount: c._count?.orders || 0,
            createdAt: c.createdAt.toISOString(),
        })),
    };

    return <AdminDashboardClient data={data} />;
}
