"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiClipboard, FiPlay, FiCheckCircle, FiCheck } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

const steps = [
    {
        step: "01",
        icon: FiMessageSquare,
        title: "Audit & Discovery",
        description:
            "Deep-dive technical assessment of your infrastructure, server topology, downtime bottlenecks, and AI modernization potential.",
        deliverables: ["Infrastructure Health Audit", "SLA & RTO/RPO Targets", "Security & Compliance Check"],
    },
    {
        step: "02",
        icon: FiClipboard,
        title: "Strategy & Blueprint",
        description:
            "We design a high-availability architecture blueprint, zero-downtime cutover plan, and custom AI pipeline specifications.",
        deliverables: ["HA Cluster Architecture", "AI Automation Roadmap", "Disaster Recovery Runbook"],
    },
    {
        step: "03",
        icon: FiPlay,
        title: "Execution & Testing",
        description:
            "Live server provisioning, microservice containerization, AI model integration, and simulated failure testing.",
        deliverables: ["Zero-Downtime Deployment", "Automated Failover Drill", "API & ERP Integrations"],
    },
    {
        step: "04",
        icon: FiCheckCircle,
        title: "Telemetry & SRE Ops",
        description:
            "24/7 continuous monitoring, automated incident self-healing, monthly performance reviews, and proactive scaling.",
        deliverables: ["24/7 Zabbix/Cloud Telemetry", "Self-Healing Automation", "Monthly Executive SLA Reports"],
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                        Disciplined Methodology
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Our Engineered <span className="gradient-text">Delivery Process</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
                        A battle-tested 4-phase workflow designed for zero surprises, high transparency, and rock-solid stability.
                    </p>
                </motion.div>

                {/* Steps Grid with Connecting Animation */}
                <div className="relative">
                    {/* Animated Connecting Pulse Line on Desktop */}
                    <div className="hidden lg:block absolute top-28 left-[10%] right-[10%] h-0.5 bg-white/10 z-0">
                        <motion.div
                            animate={{
                                x: ["-100%", "200%"],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {steps.map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="h-full"
                            >
                                <SpotlightCard className="p-7 h-full flex flex-col justify-between group relative overflow-hidden">
                                    {/* Big Watermark Step Number */}
                                    <span className="absolute -top-4 -right-2 text-7xl font-black font-mono text-white/[0.03] select-none group-hover:text-cyan-400/[0.08] transition-colors">
                                        {item.step}
                                    </span>

                                    <div>
                                        {/* Step Icon & Badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg group-hover:scale-105 transition-transform">
                                                <item.icon size={22} />
                                            </div>
                                            <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                                                PHASE {item.step}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Deliverables Checklist */}
                                    <div className="pt-4 border-t border-white/5 space-y-2">
                                        <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                                            Key Deliverables
                                        </p>
                                        {item.deliverables.map((d, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                                                <FiCheck className="text-emerald-400 shrink-0" size={12} />
                                                <span className="truncate">{d}</span>
                                            </div>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
