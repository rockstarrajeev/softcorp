import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// GET /api/services — Returns all active services grouped by category
export async function GET() {
    try {
        const services = await prisma.service.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: "asc" },
        });

        return NextResponse.json({ services });
    } catch (error) {
        console.error("Services error:", error);
        return NextResponse.json(
            { error: "Failed to fetch services" },
            { status: 500 }
        );
    }
}
