import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import CheckoutClient from "./CheckoutClient";

export default async function CheckoutPage({
    params,
}: {
    params: Promise<{ serviceId: string }>;
}) {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    const { serviceId } = await params;

    const service = await prisma.service.findUnique({
        where: { id: serviceId },
    });

    if (!service || !service.isActive) {
        redirect("/dashboard");
    }

    const gateways = {
        paypal: !!process.env.PAYPAL_CLIENT_ID && !!process.env.PAYPAL_CLIENT_SECRET,
        stripe: !!process.env.STRIPE_SECRET_KEY,
        razorpay: !!process.env.RAZORPAY_KEY_ID && !!process.env.RAZORPAY_KEY_SECRET,
    };

    return (
        <CheckoutClient
            service={{
                id: service.id,
                name: service.name,
                description: service.description,
                price: service.price,
                pricingModel: service.pricingModel,
                currency: service.currency,
                category: service.category,
            }}
            gateways={gateways}
            userName={session.user.name || "Client"}
            userEmail={session.user.email || ""}
        />
    );
}
