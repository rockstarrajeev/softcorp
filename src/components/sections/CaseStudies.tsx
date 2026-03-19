"use client";

import { motion } from "framer-motion";
import { FiServer, FiCpu, FiCloud, FiArrowRight } from "react-icons/fi";

const caseStudies = [
    {
        title: "Eliminating 99% System Downtime",
        client: "Global Logistics Firm",
        icon: FiServer,
        problem: "Legacy monitoring and fragmented server architecture leading to frequent outages.",
        solution: "Implemented a unified Zabbix monitoring ecosystem and high-availability server clusters.",
        result: "Reduced critical downtime by 99.4% within the first quarter.",
    },
    {
        title: "AI-Driven Workflow Automation",
        client: "Regional Enterprise",
        icon: FiCpu,
        problem: "Manual data entry or document processing consuming 40% of operational hours.",
        solution: "Deployed custom AI-powered document parsers and automated routing using OpenAI API.",
        result: "10x faster processing speed and 0% human error in data extraction.",
    },
    {
        title: "Seamless Global Cloud Migration",
        client: "Multi-National Corporation",
        icon: FiCloud,
        problem: "Inefficient on-premise infrastructure causing latency for international branches.",
        solution: "Migrated 200+ servers to AWS/Azure using a zero-downtime phased approach.",
        result: "40% reduction in infrastructure costs and instant global accessibility.",
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 relative overflow-hidden bg-slate-950/50">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        Proof of Excellence
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Case <span className="gradient-text">Studies</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Real-world problems solved with enterprise-grade engineering and 
                        intelligent AI modernization.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-2xl p-8 hover:border-white/15 transition-all group flex flex-col h-full"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                                <study.icon size={24} className="text-brand-400" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4">
                                {study.title}
                            </h3>
                            
                            <div className="space-y-4 flex-grow">
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Problem</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{study.problem}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-wider text-brand-400/80 font-semibold">Solution</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Impact</p>
                                    <p className="text-brand-400 font-bold">{study.result}</p>
                                </div>
                                <FiArrowRight className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
