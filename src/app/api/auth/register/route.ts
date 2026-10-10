import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

// RFC 5322 compliant simplified email validator
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
    try {
        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(`register_${clientIp}`, 5, 15 * 60 * 1000);

        if (!rateLimit.success) {
            return NextResponse.json(
                { error: "Too many registration attempts. Please try again after 15 minutes." },
                {
                    status: 429,
                    headers: {
                        "Retry-After": Math.ceil(rateLimit.resetMs / 1000).toString(),
                    },
                }
            );
        }

        const body = await request.json();
        const { name, email, password, phone } = body;

        if (!name || typeof name !== "string" || !name.trim()) {
            return NextResponse.json({ error: "Full name is required." }, { status: 400 });
        }

        if (!email || typeof email !== "string" || !email.trim()) {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        const normalizedEmail = email.trim().toLowerCase();
        if (!EMAIL_REGEX.test(normalizedEmail) || normalizedEmail.length > 254) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        if (!password || typeof password !== "string") {
            return NextResponse.json({ error: "Password is required." }, { status: 400 });
        }

        if (password.length < 8) {
            return NextResponse.json(
                { error: "Password must be at least 8 characters long." },
                { status: 400 }
            );
        }

        if (password.length > 128) {
            return NextResponse.json(
                { error: "Password exceeds maximum allowable length." },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "An account with this email address already exists." },
                { status: 409 }
            );
        }

        // Hash password with salt rounds = 12
        const hashedPassword = await bcrypt.hash(password, 12);
        const trimmedName = name.trim().slice(0, 100);
        const sanitizedPhone = phone && typeof phone === "string" ? phone.trim().slice(0, 25) : null;

        // Create the user
        const user = await prisma.user.create({
            data: {
                name: trimmedName,
                email: normalizedEmail,
                password: hashedPassword,
                phone: sanitizedPhone,
                role: "client",
            },
        });

        return NextResponse.json(
            { success: true, user: { id: user.id, name: user.name, email: user.email } },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error during registration." },
            { status: 500 }
        );
    }
}
