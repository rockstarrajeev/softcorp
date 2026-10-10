import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// GET /api/services — Returns all active services grouped by category
export async function GET() {
    try {
        const services = await prisma.service.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: "asc" },
        });

        return NextResponse.json(
            { services },
            {
                headers: {
                    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
                },
            }
        );
    } catch (error) {
        console.error("Services error:", error);
        return NextResponse.json(
            { error: "Failed to fetch services" },
            { status: 500 }
        );
    }
}
