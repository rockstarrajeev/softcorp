"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiShield, FiCpu, FiAward, FiCheckCircle } from "react-icons/fi";
import CommandCenterHUD from "@/components/ui/CommandCenterHUD";
import EnterpriseMarquee from "@/components/ui/EnterpriseMarquee";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 lg:pt-36"
        >
            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex items-center py-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
                    {/* Left Column — Value Proposition & Actions */}
                    <div className="lg:col-span-7 max-w-2xl">
                        {/* Live Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-xl text-xs font-semibold text-cyan-300 mb-8 shadow-lg shadow-cyan-500/10"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            <span>Enterprise Infrastructure Support & AI Modernization</span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
                        >
                            Zero-Downtime <br />
                            <span className="gradient-text-animated text-glow">IT Infrastructure</span>
                            <br />
                            <span className="text-white relative inline-block mt-1">
                                & AI Modernization
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 240 10"
                                    fill="none"
                                >
                                    <path
                                        d="M2 6.5C50 2 110 2 150 4C190 6 220 3 238 6.5"
                                        stroke="url(#heroGrad)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="heroGrad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#06b6d4" />
                                            <stop offset="0.5" stopColor="#3b82f6" />
                                            <stop offset="1" stopColor="#8b5cf6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-8 max-w-xl"
                        >
                            6+ years of mission-critical engineering managing complex IT environments for 
                            global giants including <strong className="text-white font-semibold">Swissport</strong>, 
                            <strong className="text-white font-semibold"> Air Liquide</strong>, and 
                            <strong className="text-white font-semibold"> Tata Teleservices</strong>. We combine enterprise reliability with autonomous AI workflows.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4 mb-12"
                        >
                            <Link
                                href="/contact"
                                className="group relative px-7 py-4 gradient-brand text-white font-bold text-sm tracking-wide rounded-xl hover:brightness-110 transition-all flex items-center gap-2.5 shadow-xl shadow-cyan-500/25 cursor-pointer shine-sweep card-lift"
                            >
                                <span>Book Free IT Consultation</span>
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-7 py-4 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer shine-sweep card-lift"
                            >
                                <FiCpu className="text-cyan-400" />
                                <span>Explore Solutions</span>
                            </Link>
                        </motion.div>

                        {/* Key Credential Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
                        >
                            <div>
                                <div className="flex items-center gap-1.5 text-2xl font-bold font-mono text-cyan-400">
                                    <span>6+</span>
                                    <span className="text-xs text-slate-400 font-sans font-normal">Yrs</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">Enterprise Expertise</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5 text-2xl font-bold font-mono text-emerald-400">
                                    <span>99.99%</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">Target SLA Uptime</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5 text-2xl font-bold font-mono text-blue-400">
                                    <span>Global</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">US, EMEA & APAC</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column — Interactive Command Center HUD */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <CommandCenterHUD />
                    </div>
                </div>
            </div>

            {/* Credibility Marquee at base of hero */}
            <EnterpriseMarquee />
        </section>
    );
}
