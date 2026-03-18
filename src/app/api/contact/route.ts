import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const contactMessage = await prisma.contactMessage.create({
            data: {
                name,
                email,
                phone: phone || null,
                subject: subject || "General Inquiry",
                message,
            },
        });

        return NextResponse.json(
            { success: true, id: contactMessage.id },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
