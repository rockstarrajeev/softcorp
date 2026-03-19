import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
    trustHost: true,
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    cookies: {
        pkceCodeVerifier: {
            name: "next-auth.pkce.code_verifier",
            options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true,
            },
        },
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!user || !user.password) return null;

                const isValid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );

                if (!isValid) return null;

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    image: user.image,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            // For Google SSO, auto-create user if not exists
            if (account?.provider === "google" && user.email) {
                const existing = await prisma.user.findUnique({
                    where: { email: user.email },
                });
                if (!existing) {
                    await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name || "Client",
                            image: user.image,
                            role: "client",
                        },
                    });
                }
            }
            return true;
        },
        async jwt({ token, user, account }) {
            if (user) {
                // For credentials login, role comes from authorize()
                if ((user as { role?: string }).role) {
                    token.role = (user as { role?: string }).role;
                    token.id = user.id;
                } else if (account?.provider === "google" && user.email) {
                    // For Google SSO, fetch role from database
                    const dbUser = await prisma.user.findUnique({
                        where: { email: user.email },
                    });
                    token.role = dbUser?.role || "client";
                    token.id = dbUser?.id || user.id;
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as { role?: string }).role = token.role as string;
                (session.user as { id?: string }).id = token.id as string;
            }
            return session;
        },
    },
});
