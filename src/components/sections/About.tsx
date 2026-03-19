"use client";

import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiZap, FiAward } from "react-icons/fi";

const highlights = [
    {
        icon: FiAward,
        title: "Academic Rigor",
        description:
            "Post Graduate in Computer Science from the prestigious BHU Varanasi.",
    },
    {
        icon: FiUsers,
        title: "Corporate Standard",
        description:
            "Project execution experience at TCS, mastering global SLAs and workflows.",
    },
    {
        icon: FiZap,
        title: "High-Stakes IT",
        description:
            "Managing complex infrastructure for Swissport, Air Liquide, and Tata.",
    },
    {
        icon: FiTarget,
        title: "AI Modernization",
        description:
            "Leading the transition from legacy systems to intelligent AI ecosystems.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            {/* Background accent */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">
                            The Expertise
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Personal Branding Meets <br />
                            <span className="gradient-text">Corporate Trust</span>
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                            <p>
                                I am <strong>Rajeev Upadhyay</strong>, an Infrastructure Support 
                                Engineer and the founder of Softcorp Group LLC. With over 6 years 
                                of hands-on experience in managing global IT infrastructure, I build 
                                systems that scale with authority.
                            </p>
                            <p>
                                Having executed critical projects under industry giants like 
                                <strong>TCS</strong> and supported global organizations like 
                                <strong>Swissport</strong> and <strong>Air Liquide</strong>, I 
                                understand the non-negotiable nature of uptime, security, and 
                                professional communication.
                            </p>
                            <p>
                                My academic foundation from <strong>BHU Varanasi</strong> combined 
                                with years of enterprise troubleshooting allows me to bridge the 
                                gap between legacy reliability and modern AI-driven innovation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="glass rounded-xl p-6 hover:border-white/15 transition-all"
                            >
                                <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center mb-4">
                                    <item.icon size={20} className="text-white" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
