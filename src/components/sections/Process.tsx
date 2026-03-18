"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiClipboard, FiPlay, FiCheckCircle } from "react-icons/fi";

const steps = [
    {
        step: "01",
        icon: FiMessageSquare,
        title: "Discovery & Consultation",
        description:
            "We begin with a deep-dive conversation to understand your brand, goals, audience, and competition. This shapes a tailored strategy.",
    },
    {
        step: "02",
        icon: FiClipboard,
        title: "Strategy & Planning",
        description:
            "Our team crafts a comprehensive plan including content calendar, platform selection, ad budgets, and KPI targets.",
    },
    {
        step: "03",
        icon: FiPlay,
        title: "Execution & Launch",
        description:
            "We produce high-quality content, launch campaigns, and begin active community engagement across your chosen channels.",
    },
    {
        step: "04",
        icon: FiCheckCircle,
        title: "Optimize & Report",
        description:
            "Continuous monitoring, A/B testing, and monthly performance reports ensure we maximize your ROI at every step.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 relative">
            <div className="absolute inset-0">
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        How It Works
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="gradient-text">Process</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A proven, transparent workflow that keeps you informed at every stage.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, i) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative glass rounded-2xl p-8 hover:border-white/15 transition-all group"
                        >
                            {/* Step Number */}
                            <span className="absolute -top-4 -right-2 text-6xl font-black text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors">
                                {item.step}
                            </span>

                            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5 shadow-lg shadow-brand-600/20">
                                <item.icon size={22} className="text-white" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>

                            {/* Connector line for desktop */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
