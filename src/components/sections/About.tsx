"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiZap, FiTarget, FiCheckCircle, FiGlobe, FiTerminal } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

const highlights = [
    {
        icon: FiAward,
        title: "Academic Pedigree",
        org: "BHU Varanasi",
        description:
            "Post Graduate in Computer Science from Banaras Hindu University, grounding every architectural choice in sound computer science theory.",
    },
    {
        icon: FiUsers,
        title: "Corporate Rigor",
        org: "TCS Enterprise Standards",
        description:
            "Trained in high-compliance SLA execution, incident management, and change-control protocols established by global tech giants.",
    },
    {
        icon: FiZap,
        title: "Mission-Critical IT",
        org: "Swissport & Air Liquide",
        description:
            "Hands-on operational control keeping mission-critical infrastructure available 24/7 across international cargo & industrial plants.",
    },
    {
        icon: FiTarget,
        title: "AI Modernization",
        org: "SOFTCORP GROUP",
        description:
            "Leading the bridge between legacy enterprise databases and modern autonomous AI agent fleets with provable business ROI.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left Column — Founder Overview */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                            Executive Leadership
                        </span>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                            Personal Craftsmanship <br />
                            Meets <span className="gradient-text-animated">Enterprise Trust</span>
                        </h2>

                        <div className="space-y-4 text-slate-300 leading-relaxed text-base md:text-lg">
                            <p>
                                I am <strong className="text-white font-semibold">Rajeev Upadhyay</strong>, 
                                founder of <strong className="text-white font-semibold">SOFTCORP GROUP</strong> (Government of India MSME Registered: UDYAM-UP-50-0298723) 
                                and an Infrastructure Support Engineer with over 6 years of specialized engineering experience supporting mission-critical enterprise systems.
                            </p>
                            <p>
                                Having executed infrastructure workflows for industry leaders like 
                                <strong className="text-cyan-300"> TCS</strong> and managed mission-critical operational stability for 
                                <strong className="text-cyan-300"> Swissport</strong>, <strong className="text-cyan-300">Air Liquide</strong>, 
                                and <strong className="text-cyan-300">Tata Teleservices</strong>, I understand that in enterprise IT, 
                                there is zero tolerance for unplanned downtime.
                            </p>
                            <p>
                                By pairing my computer science foundation from 
                                <strong className="text-white font-semibold"> BHU Varanasi</strong> with real-world enterprise troubleshooting, 
                                I provide scaling businesses with enterprise-grade stability combined with modern AI workflows.
                            </p>
                        </div>

                        {/* Global Availability Pill */}
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <FiGlobe size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Global Client Coverage</h4>
                                    <p className="text-xs text-slate-400">Serving United States, Europe, UAE, Australia & New Zealand</p>
                                </div>
                            </div>
                            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Column — 4 Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
                    >
                        {highlights.map((item, i) => (
                            <SpotlightCard key={item.title} className="p-6 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-[11px] font-mono font-semibold text-cyan-400 block mb-1">
                                        {item.org}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                                    <FiCheckCircle size={12} />
                                    <span>Verified Experience</span>
                                </div>
                            </SpotlightCard>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
