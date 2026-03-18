"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError("Invalid email or password.");
            setLoading(false);
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/8 rounded-full blur-[128px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="text-3xl font-bold inline-block mb-2">
                        <span className="gradient-text">Soft</span>
                        <span className="text-white">corp</span>
                    </Link>
                    <p className="text-slate-400">Sign in to your account</p>
                </div>

                <div className="glass rounded-2xl p-8">
                    {/* Google SSO */}
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                        className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-3 mb-6"
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-slate-500 text-xs uppercase tracking-wider">
                            or
                        </span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Credentials Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <FiMail
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    size={16}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <FiLock
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    size={16}
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-brand-600/25"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                            <FiArrowRight size={16} />
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-400">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-brand-400 hover:text-brand-300 font-medium"
                        >
                            Create one
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
