"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCategories } from "@/utils/serviceData";
import { FiArrowRight, FiZap, FiCpu, FiCheckCircle, FiActivity, FiLayers } from "react-icons/fi";
import Link from "next/link";
import SpotlightCard from "@/components/ui/SpotlightCard";

const aiCategories = serviceCategories.filter(cat => 
    cat.title.toLowerCase().includes("ai")
);

const interactiveWorkflows = [
    {
        id: "document-intelligence",
        title: "Autonomous Document Intelligence",
        subtitle: "10x faster invoice & contract analysis",
        tag: "NLP + Vector DB",
        steps: [
            { label: "Ingestion", desc: "PDFs, scans, & EDI streams received securely" },
            { label: "AI Extraction", desc: "Zero-shot NER extracts metadata & line-items" },
            { label: "ERP Sync", desc: "Automated reconciliation into SAP/Oracle/Postgres" },
        ],
        metric: "99.8% Precision • 0 Human Firefights",
    },
    {
        id: "self-healing-infra",
        title: "Self-Healing IT Infrastructure Agent",
        subtitle: "Zero-latency automated incident mitigation",
        tag: "AIOps + Zabbix",
        steps: [
            { label: "Telemetry Probe", desc: "Anomaly detected in memory or connection pool" },
            { label: "Heuristic AI Fix", desc: "Container restarted or read-replica promoted" },
            { label: "Incident Logged", desc: "Post-mortem auto-generated and dispatched to Slack" },
        ],
        metric: "14ms Remediation • 99.99% Uptime",
    },
    {
        id: "omnichannel-agent",
        title: "Enterprise Multi-Agent Orchestrator",
        subtitle: "Task coordination across business systems",
        tag: "Autonomous LLM Agents",
        steps: [
            { label: "Intent Routing", desc: "Customer or team request parsed into sub-goals" },
            { label: "Tool Execution", desc: "APIs called across CRM, cloud storage, & email" },
            { label: "Synthesized Output", desc: "Polished deliverables delivered instantaneously" },
        ],
        metric: "45+ Hours Saved Per Employee Weekly",
    },
];

export default function AISolutions() {
    const [selectedWorkflow, setSelectedWorkflow] = useState(interactiveWorkflows[0]);

    return (
        <section id="ai-solutions" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl text-left">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                            <FiZap /> Applied Enterprise Intelligence
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Next-Gen <span className="gradient-text">AI Solutions</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                            We don&apos;t just demo toy chatbots. We architect resilient, enterprise-grade 
                            AI workflows that automate routine operations, prevent system downtime, 
                            and multiply your operational throughput.
                        </p>
                    </div>
                    <Link 
                        href="/ai-solutions" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all font-semibold text-sm group"
                    >
                        Explore All AI Services 
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Interactive Workflow Architecture Sandbox */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-2xl p-6 lg:p-8 shadow-2xl overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                        <div>
                            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase block">
                                Interactive Architecture Preview
                            </span>
                            <h3 className="text-xl font-bold text-white mt-1">
                                How Our AI Agents Operate Inside Enterprise Stacks
                            </h3>
                        </div>

                        {/* Workflow Toggle Buttons */}
                        <div className="flex flex-wrap gap-2">
                            {interactiveWorkflows.map((wf) => {
                                const isSelected = selectedWorkflow.id === wf.id;
                                return (
                                    <button
                                        type="button"
                                        key={wf.id}
                                        onClick={() => setSelectedWorkflow(wf)}
                                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                                            isSelected
                                                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md shadow-cyan-500/10"
                                                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent"
                                        }`}
                                    >
                                        {wf.title.split(" ")[1]}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active Workflow Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedWorkflow.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="pt-6 grid lg:grid-cols-12 gap-8 items-center"
                        >
                            <div className="lg:col-span-4 space-y-3">
                                <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono">
                                    {selectedWorkflow.tag}
                                </span>
                                <h4 className="text-2xl font-bold text-white">{selectedWorkflow.title}</h4>
                                <p className="text-sm text-slate-300">{selectedWorkflow.subtitle}</p>
                                <div className="p-3 rounded-xl bg-black/40 border border-cyan-500/20 text-xs font-mono text-emerald-400">
                                    {selectedWorkflow.metric}
                                </div>
                            </div>

                            {/* 3 Steps Pipeline */}
                            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4 relative">
                                {selectedWorkflow.steps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2 relative group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center justify-center font-bold">
                                                {idx + 1}
                                            </span>
                                            <FiActivity className="text-slate-600 group-hover:text-cyan-400 transition-colors" size={14} />
                                        </div>
                                        <h5 className="font-bold text-sm text-white">{step.label}</h5>
                                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* AI Service Offerings Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {aiCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <SpotlightCard className="p-8 h-full flex flex-col justify-between group">
                                <div>
                                    {/* Category Header */}
                                    <div className="flex items-center gap-4 mb-5">
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform`}
                                        >
                                            <category.icon size={22} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                            {category.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                        {category.description}
                                    </p>

                                    {/* Service list */}
                                    <div className="space-y-2.5 pt-5 border-t border-white/5 mb-8">
                                        {category.services.slice(0, 3).map((service, sIndex) => (
                                            <div key={sIndex} className="flex items-center gap-2.5 text-slate-300 text-sm">
                                                <FiCheckCircle size={14} className="text-cyan-400 shrink-0" />
                                                <span>{service.name}</span>
                                            </div>
                                        ))}
                                        {category.services.length > 3 && (
                                            <div className="text-xs text-cyan-400 font-medium pl-6 pt-1">
                                                + {category.services.length - 3} more tailored capabilities
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Get Started Button */}
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const elem = document.getElementById("contact");
                                        if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }}
                                    className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2 group-hover:text-cyan-300 cursor-pointer"
                                >
                                    <span>Deploy This Solution</span>
                                    <FiArrowRight size={15} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
