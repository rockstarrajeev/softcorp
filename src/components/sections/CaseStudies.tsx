"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiServer, FiCpu, FiCloud, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

const caseStudies = [
    {
        title: "Eliminating 99.4% System Downtime",
        client: "Global Logistics & Cargo Carrier",
        domain: "Enterprise Infrastructure",
        icon: FiServer,
        tech: "Zabbix HA • Linux Clusters • Keepalived",
        problem: "Legacy monitoring and fragmented physical server topology caused recurrent outages during peak cargo dispatch hours.",
        solution: "Engineered a redundant high-availability cluster with active-passive failover and automated Zabbix anomaly triggers.",
        result: "99.4%",
        metricLabel: "Downtime Cut in Q1",
    },
    {
        title: "Autonomous AI Document Pipeline",
        client: "Industrial Supply Group",
        domain: "AI & Workflow Automation",
        icon: FiCpu,
        tech: "LLM Agents • Vector DB • FastAPI",
        problem: "Manual multi-page bill-of-lading and compliance invoice extraction bottlenecked finance operations by 40+ hours per week.",
        solution: "Architected a zero-shot multi-modal document parser that vectorizes, extracts, and reconciles records straight into the ERP.",
        result: "10x",
        metricLabel: "Processing Speedup",
    },
    {
        title: "Zero-Downtime Multi-Cloud Migration",
        client: "Global Manufacturing Enterprise",
        domain: "Cloud & DevSecOps",
        icon: FiCloud,
        tech: "AWS / Azure Hybrid • Terraform • Docker",
        problem: "Aging on-premise infrastructure suffering high latency and localized power disruptions across 4 continents.",
        solution: "Orchestrated live database replication and phased zero-downtime cutover of 200+ microservices into a hybrid cloud VPC.",
        result: "40%",
        metricLabel: "Cost Reduction",
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                        Proof of Execution
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Proven Enterprise <span className="gradient-text-animated">Case Studies</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
                        Measurable impact delivered through disciplined IT engineering and intelligent modernization.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 }}
                            className="h-full"
                        >
                            <SpotlightCard className="p-8 h-full flex flex-col justify-between group">
                                <div>
                                    {/* Top Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                                            <study.icon size={22} />
                                        </div>
                                        <span className="text-[11px] font-mono font-medium text-slate-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                                            {study.domain}
                                        </span>
                                    </div>

                                    {/* Client and Title */}
                                    <span className="text-xs text-cyan-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                                        {study.client}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                                        {study.title}
                                    </h3>

                                    {/* Problem / Solution Boxes */}
                                    <div className="space-y-4 mb-6">
                                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                                            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                                                Challenge
                                            </p>
                                            <p className="text-slate-300 text-xs leading-relaxed">
                                                {study.problem}
                                            </p>
                                        </div>

                                        <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                                            <p className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                                                Engineered Solution
                                            </p>
                                            <p className="text-slate-200 text-xs leading-relaxed">
                                                {study.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stack tags */}
                                    <p className="text-[11px] font-mono text-slate-400 mb-6">
                                        Stack: <span className="text-slate-300">{study.tech}</span>
                                    </p>
                                </div>

                                {/* Impact Metric Banner */}
                                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                    <div>
                                        <span className="text-3xl font-black font-mono text-white gradient-text">
                                            {study.result}
                                        </span>
                                        <p className="text-[11px] text-slate-400 font-medium">
                                            {study.metricLabel}
                                        </p>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all cursor-pointer card-lift"
                                    >
                                        <FiArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
