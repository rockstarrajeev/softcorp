"use client";

import { motion } from "framer-motion";
import { serviceCategories } from "@/utils/serviceData";
import { FiArrowLeft, FiCheckCircle, FiZap, FiArrowRight, FiShield, FiCpu } from "react-icons/fi";
import Link from "next/link";
import SpotlightCard from "@/components/ui/SpotlightCard";

const aiCategories = serviceCategories.filter(cat => 
    cat.title.toLowerCase().includes("ai")
);

export default function AISolutionsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-slate-950 font-sans antialiased text-white selection:bg-cyan-500/30">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Navigation Back */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                    >
                        <FiArrowLeft size={16} /> 
                        Back to Home
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="max-w-4xl mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6"
                    >
                        <FiZap /> Applied Enterprise Intelligence
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                    >
                        Enterprise-Grade <br />
                        <span className="gradient-text">AI Modernization Solutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl"
                    >
                        Softcorp bridges legacy databases with autonomous, privacy-preserving AI architectures. 
                        We integrate specialized machine learning, document parsers, and automated multi-agent 
                        workflows directly into your enterprise stack to deliver 10x throughput with zero hallucination risk.
                    </motion.p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-28">
                    {aiCategories.map((category, index) => (
                        <motion.section 
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="grid lg:grid-cols-12 gap-12 items-center"
                        >
                            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl shadow-cyan-500/10 text-white`}>
                                        <category.icon size={28} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">Enterprise Domain</span>
                                        <h2 className="text-3xl font-extrabold text-white">{category.title}</h2>
                                    </div>
                                </div>

                                <p className="text-base text-slate-300 leading-relaxed">
                                    {category.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                    {category.services.map((service, sIndex) => (
                                        <div 
                                            key={sIndex} 
                                            className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all group"
                                        >
                                            <div className="flex items-center gap-2.5 mb-1.5">
                                                <service.icon size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                                                <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">{service.name}</h3>
                                            </div>
                                            <p className="text-xs text-slate-400 leading-relaxed">
                                                Fully managed architecture from integration to continuous model monitoring.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <SpotlightCard className="p-8 border-cyan-500/20 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">Architecture Blueprint</span>
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    </div>

                                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                                            <FiCpu className="text-cyan-400" />
                                            <span>Zero Data Leakage Pipeline</span>
                                        </div>
                                        <p className="text-xs text-slate-400">
                                            All enterprise models run inside dedicated virtual private clouds (VPC) with strictly isolated data boundaries.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2.5 text-xs text-slate-300">
                                            <FiCheckCircle className="text-emerald-400 shrink-0" size={15} />
                                            <span>Deterministic Outputs via RAG & Vector Indices</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-xs text-slate-300">
                                            <FiCheckCircle className="text-emerald-400 shrink-0" size={15} />
                                            <span>Full Audit Logging & SOC2 Compliance</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-xs text-slate-300">
                                            <FiCheckCircle className="text-emerald-400 shrink-0" size={15} />
                                            <span>Instant ERP / CRM REST API Connectors</span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/#contact"
                                        className="w-full py-3 px-4 gradient-brand rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
                                    >
                                        <span>Deploy This Architecture</span>
                                        <FiArrowRight />
                                    </Link>
                                </SpotlightCard>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Final Call To Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-blue-950/40 border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                    
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative z-10 text-white">
                        Ready to Modernize Your Operations with <span className="gradient-text">Softcorp AI</span>?
                    </h2>
                    <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Schedule an executive discovery call with Rajeev Upadhyay and our solutions architects to review your technical roadmap.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link 
                            href="/#contact" 
                            className="px-8 py-4 gradient-brand text-white font-bold text-sm rounded-xl hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                        >
                            <span>Book Architecture Discovery</span>
                            <FiArrowRight />
                        </Link>
                        <Link 
                            href="/" 
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors"
                        >
                            Return to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
