import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // Defense-in-depth: enforce admin role authorization across all current and future /admin routes
    if (
        !session?.user ||
        (session.user as { role?: string }).role !== "admin"
    ) {
        redirect("/login");
    }

    return <>{children}</>;
}
