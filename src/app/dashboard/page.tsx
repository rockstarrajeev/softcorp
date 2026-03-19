import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import ClientDashboardClient from "./ClientDashboardClient";

export default async function ClientDashboard() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    const userId = (session.user as { id?: string }).id;
    const role = (session.user as { role?: string }).role;

    if (role === "admin") {
        redirect("/admin");
    }

    const [orders, services] = await Promise.all([
        prisma.order.findMany({
            where: { userId },
            include: { service: true, payment: true },
            orderBy: { createdAt: "desc" },
        }),
        prisma.service.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: "asc" },
        }),
    ]);

    const serializedOrders = orders.map((o) => {
        // Safe Date conversion helper
        const toSafeISOString = (date: any) => {
            if (!date) return null;
            if (date instanceof Date && !isNaN(date.getTime())) {
                return date.toISOString();
            }
            // If it's already a string, return it as is or try to parse
            if (typeof date === "string") return date;
            return null;
        };

        return {
            id: o.id,
            serviceName: o.service?.name || "Deleted Service",
            serviceCategory: o.service?.category || "unknown",
            status: o.status,
            totalAmount: o.totalAmount,
            currency: o.currency,
            requirements: o.requirements,
            notes: o.notes,
            deadline: toSafeISOString(o.deadline),
            createdAt: toSafeISOString(o.createdAt) || new Date().toISOString(),
            updatedAt: toSafeISOString(o.updatedAt) || new Date().toISOString(),
            paymentStatus: o.payment?.status || "unpaid",
        };
    });

    const serializedServices = services.map((s) => ({
        id: s.id,
        name: s.name,
        slug: s.slug,
        category: s.category,
        description: s.description,
        price: s.price,
        pricingModel: s.pricingModel,
        currency: s.currency,
    }));

    return (
        <ClientDashboardClient
            userName={session.user.name || "Client"}
            userEmail={session.user.email || ""}
            userImage={session.user.image || null}
            orders={serializedOrders}
            services={serializedServices}
        />
    );
}
