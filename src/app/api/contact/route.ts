import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
    try {
        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(`contact_${clientIp}`, 5, 10 * 60 * 1000);

        if (!rateLimit.success) {
            return NextResponse.json(
                { error: "Too many message submissions. Please wait 10 minutes before sending another inquiry." },
                {
                    status: 429,
                    headers: {
                        "Retry-After": Math.ceil(rateLimit.resetMs / 1000).toString(),
                    },
                }
            );
        }

        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || typeof name !== "string" || !name.trim()) {
            return NextResponse.json({ error: "Name is required." }, { status: 400 });
        }

        if (!email || typeof email !== "string" || !email.trim()) {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        const normalizedEmail = email.trim().toLowerCase();
        if (!EMAIL_REGEX.test(normalizedEmail) || normalizedEmail.length > 254) {
            return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
        }

        if (!message || typeof message !== "string" || !message.trim()) {
            return NextResponse.json({ error: "Message content is required." }, { status: 400 });
        }

        if (message.trim().length > 4000) {
            return NextResponse.json({ error: "Message exceeds maximum length (4000 characters)." }, { status: 400 });
        }

        const sanitizedName = name.trim().slice(0, 100);
        const sanitizedPhone = phone && typeof phone === "string" ? phone.trim().slice(0, 25) : null;
        const sanitizedSubject = subject && typeof subject === "string" && subject.trim() 
            ? subject.trim().slice(0, 200) 
            : "General Inquiry";
        const sanitizedMessage = message.trim().slice(0, 4000);

        const contactMessage = await prisma.contactMessage.create({
            data: {
                name: sanitizedName,
                email: normalizedEmail,
                phone: sanitizedPhone,
                subject: sanitizedSubject,
                message: sanitizedMessage,
            },
        });

        return NextResponse.json(
            { success: true, id: contactMessage.id, message: "Your message has been received." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Unable to submit your message at this time." },
            { status: 500 }
        );
    }
}
