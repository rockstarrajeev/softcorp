"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function Hero({ companyData }: { companyData: any }) {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-[128px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-700/10 rounded-full blur-[160px]" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-brand-300 mb-8"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Now Accepting New Clients
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
                    >
                        {companyData?.name ? (
                            <>
                                <span className="gradient-text">{companyData.name}</span>
                            </>
                        ) : (
                            <>
                                We Build{" "}
                                <span className="gradient-text">Digital Presence</span>
                                <br />
                                That Drives{" "}
                            </>
                        )}
                        <span className="text-white relative ml-2">
                            {companyData?.name ? "Group" : "Results"}
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 8"
                                fill="none"
                            >
                                <path
                                    d="M1 5.5C40 2 80 2 100 4C120 6 160 3 199 5.5"
                                    stroke="url(#grad)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3288ff" />
                                        <stop offset="1" stopColor="#22d3ee" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        {companyData?.tagline ||
                            "Full-service digital marketing agency specializing in social media management, content creation, web development, and brand strategy. Let us amplify your brand across every platform."}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#services"
                            className="group px-8 py-4 gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-brand-600/25"
                        >
                            Explore Services
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 glass-light text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            <FiPlay size={16} />
                            Learn More
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 flex flex-wrap gap-12"
                    >
                        {[
                            { value: "50+", label: "Projects Delivered" },
                            { value: "30+", label: "Happy Clients" },
                            { value: "6+", label: "Platforms Covered" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
