"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiMail,
    FiLock,
    FiArrowRight,
    FiEye,
    FiEyeOff,
    FiShield,
    FiUser,
    FiHelpCircle,
    FiX,
    FiPhone,
    FiCheckCircle,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    const router = useRouter();
    const [portalMode, setPortalMode] = useState<"client" | "admin">("client");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showSupportModal, setShowSupportModal] = useState(false);
    const [showDemoDrawer, setShowDemoDrawer] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const result = await signIn("credentials", {
            email: email.trim(),
            password,
            redirect: false,
        });

        if (result?.error) {
            setError(
                portalMode === "admin"
                    ? "Invalid administrative credentials or insufficient authorization."
                    : "Invalid email or password. Please verify your credentials."
            );
            setLoading(false);
        } else {
            // Direct to appropriate portal
            if (portalMode === "admin") {
                router.push("/admin");
            } else {
                router.push("/dashboard");
            }
        }
    };

    const handleDemoFill = (role: "client" | "admin") => {
        if (role === "admin") {
            setPortalMode("admin");
            setEmail("admin@wesoftcorp.com");
            setPassword("admin123");
        } else {
            setPortalMode("client");
            setEmail("john@test.com");
            setPassword("password123");
        }
        setError("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/15 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-[128px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Logo & Portal Branding */}
                <div className="text-center mb-6">
                    <Link href="/" className="inline-block mb-3 hover:opacity-90 transition-opacity">
                        <Image
                            src="/logo-clean.png"
                            alt="SoftCorp Group"
                            width={220}
                            height={55}
                            className="h-10 md:h-11 w-auto object-contain mx-auto dark-logo"
                            priority
                        />
                        <Image
                            src="/logo-dark.png"
                            alt="SoftCorp Group"
                            width={220}
                            height={55}
                            className="h-10 md:h-11 w-auto object-contain mx-auto light-logo"
                            priority
                        />
                    </Link>
                    <p className="text-xs uppercase tracking-widest text-brand-400 font-semibold mb-1">
                        SoftCorp Group • Govt. MSME Registered
                    </p>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-100">
                        {portalMode === "admin" ? "Administrative Console" : "Client Project Portal"}
                    </h1>
                </div>

                <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
                    {/* Portal Switcher Segmented Control */}
                    <div className="grid grid-cols-2 p-1 bg-white/5 border border-white/10 rounded-xl mb-6">
                        <button
                            type="button"
                            onClick={() => {
                                setPortalMode("client");
                                setError("");
                            }}
                            className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                                portalMode === "client"
                                    ? "bg-brand-500/20 text-brand-300 border border-brand-500/30 shadow-md"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            <FiUser size={15} />
                            Client Portal
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setPortalMode("admin");
                                setError("");
                            }}
                            className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                                portalMode === "admin"
                                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-md"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            <FiShield size={15} />
                            Admin Portal
                        </button>
                    </div>

                    {/* Mode Notice Pill */}
                    {portalMode === "admin" ? (
                        <div className="mb-5 p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-start gap-3 text-xs text-purple-200">
                            <FiShield className="text-purple-400 shrink-0 mt-0.5" size={16} />
                            <div>
                                <span className="font-semibold text-purple-300">Restricted Operations:</span> Softcorp administrators can review project orders, update statuses, inspect financials, and message clients.
                            </div>
                        </div>
                    ) : (
                        <div className="mb-5 p-3 rounded-xl bg-brand-950/40 border border-brand-500/30 flex items-start gap-3 text-xs text-brand-200">
                            <FiCheckCircle className="text-brand-400 shrink-0 mt-0.5" size={16} />
                            <div>
                                <span className="font-semibold text-brand-300">Client Access:</span> Track deliverables, monitor real-time project milestones, download invoices, and chat directly with your engineering lead.
                            </div>
                        </div>
                    )}

                    {/* Google SSO (For Client Portal) */}
                    {portalMode === "client" && (
                        <>
                            <button
                                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                                className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-3 mb-5 text-sm"
                            >
                                <FcGoogle size={18} />
                                Continue with Google
                            </button>

                            <div className="flex items-center gap-4 mb-5">
                                <div className="flex-1 h-px bg-white/10" />
                                <span className="text-slate-500 text-xs uppercase tracking-wider">
                                    or email credentials
                                </span>
                                <div className="flex-1 h-px bg-white/10" />
                            </div>
                        </>
                    )}

                    {/* Credentials Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-xs leading-relaxed"
                            >
                                {error}
                            </motion.div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                                {portalMode === "admin" ? "Admin Authorized Email" : "Client Email Address"}
                            </label>
                            <div className="relative">
                                <FiMail
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={16}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                                    placeholder={portalMode === "admin" ? "admin@wesoftcorp.com" : "you@company.com"}
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowSupportModal(true)}
                                    className="text-xs text-brand-400 hover:text-brand-300 transition-colors"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <FiLock
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={16}
                                />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-11 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                                    placeholder="••••••••••••"
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded bg-white/10 border-white/20 text-brand-500 focus:ring-brand-500/40"
                                />
                                Remember this device
                            </label>

                            <button
                                type="button"
                                onClick={() => setShowDemoDrawer(!showDemoDrawer)}
                                className="text-xs text-slate-400 hover:text-brand-300 underline underline-offset-4 transition-colors"
                            >
                                {showDemoDrawer ? "Hide Quick Fill" : "Quick Fill Demo"}
                            </button>
                        </div>

                        {/* Quick Demo Fill Accordion */}
                        <AnimatePresence>
                            {showDemoDrawer && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden pt-2"
                                >
                                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-2 text-xs">
                                        <p className="text-slate-400 font-medium">Evaluation Demo Accounts:</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleDemoFill("client")}
                                                className="p-2 text-left bg-brand-500/10 border border-brand-500/20 rounded-lg hover:bg-brand-500/20 transition-colors"
                                            >
                                                <div className="font-semibold text-brand-300 flex items-center gap-1">
                                                    <FiUser size={12} /> Test Client
                                                </div>
                                                <div className="text-[10px] text-slate-400 truncate">john@test.com</div>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDemoFill("admin")}
                                                className="p-2 text-left bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors"
                                            >
                                                <div className="font-semibold text-purple-300 flex items-center gap-1">
                                                    <FiShield size={12} /> Admin Team
                                                </div>
                                                <div className="text-[10px] text-slate-400 truncate">admin@wesoftcorp.com</div>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg text-sm ${
                                portalMode === "admin"
                                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-purple-600/25"
                                    : "gradient-brand shadow-brand-600/25"
                            }`}
                        >
                            {loading
                                ? "Authenticating..."
                                : portalMode === "admin"
                                ? "Authorize & Open Admin Console"
                                : "Sign In to Client Portal"}
                            <FiArrowRight size={16} />
                        </button>
                    </form>

                    {/* Portal Footer Links */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                        {portalMode === "client" ? (
                            <>
                                <span>New enterprise client?</span>
                                <Link
                                    href="/register"
                                    className="text-brand-400 hover:text-brand-300 font-semibold"
                                >
                                    Create Client Account
                                </Link>
                            </>
                        ) : (
                            <>
                                <span>Not an administrator?</span>
                                <button
                                    type="button"
                                    onClick={() => setPortalMode("client")}
                                    className="text-brand-400 hover:text-brand-300 font-semibold"
                                >
                                    Switch to Client Portal
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Support / Password Reset Modal */}
            <AnimatePresence>
                {showSupportModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-slate-900 border border-white/15 rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-left"
                        >
                            <button
                                type="button"
                                onClick={() => setShowSupportModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white"
                            >
                                <FiX size={20} />
                            </button>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-brand-500/10 border border-brand-500/20 rounded-xl text-brand-400">
                                    <FiHelpCircle size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Client & Admin Support</h3>
                                    <p className="text-xs text-slate-400">Direct Softcorp Engineering Assistance</p>
                                </div>
                            </div>

                            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                                For security and MSME regulatory compliance, password resets and account key recoveries are handled directly by our DevOps team. Please reach out via our verified channels:
                            </p>

                            <div className="space-y-2.5 mb-5 text-xs">
                                <a
                                    href="mailto:support@wesoftcorp.com?subject=Softcorp%20Portal%20Access%20Recovery"
                                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl text-slate-200 hover:bg-white/10 transition-colors"
                                >
                                    <FiMail className="text-brand-400 shrink-0" size={16} />
                                    <div>
                                        <div className="font-semibold">Email Engineering Support</div>
                                        <div className="text-[11px] text-slate-400">support@wesoftcorp.com</div>
                                    </div>
                                </a>

                                <a
                                    href="tel:+919170333177"
                                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl text-slate-200 hover:bg-white/10 transition-colors"
                                >
                                    <FiPhone className="text-emerald-400 shrink-0" size={16} />
                                    <div>
                                        <div className="font-semibold">Direct Telephone / WhatsApp</div>
                                        <div className="text-[11px] text-slate-400">+91 91703 33177 (IST 09:00 - 21:00)</div>
                                    </div>
                                </a>
                            </div>

                            <div className="p-3 bg-brand-500/5 border border-brand-500/15 rounded-xl text-[11px] text-slate-400 mb-4">
                                <strong>Registered Office:</strong> Plot No 17/18, Gulab Ashiyana, Chinhat, Matiyari, Dewa Road, Lucknow, UP 226028, India • MoMSME Reg: <span className="text-brand-300">UDYAM-UP-50-0298723</span>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowSupportModal(false)}
                                className="w-full py-2.5 bg-white/10 hover:bg-white/15 rounded-xl text-white text-xs font-semibold transition-colors"
                            >
                                Close & Return to Login
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
