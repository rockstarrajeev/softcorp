"use client";

import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiZap, FiAward } from "react-icons/fi";

const highlights = [
    {
        icon: FiTarget,
        title: "Results-Driven",
        description:
            "Every campaign is backed by data and optimized for measurable ROI.",
    },
    {
        icon: FiUsers,
        title: "Dedicated Team",
        description:
            "A specialized team assigned to each project for personalized attention.",
    },
    {
        icon: FiZap,
        title: "Fast Delivery",
        description:
            "Rapid turnaround without compromising quality or strategic depth.",
    },
    {
        icon: FiAward,
        title: "Industry Expertise",
        description:
            "Deep knowledge across tech, enterprise IT, and digital marketing.",
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
                            About Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Why Choose{" "}
                            <span className="gradient-text">Softcorp Group?</span>
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                            <p>
                                Softcorp Group LLC is a full-service digital marketing and
                                technology agency. We help businesses and creators amplify their
                                digital presence across every major platform.
                            </p>
                            <p>
                                From social media strategy to custom web development, our team
                                combines creative excellence with data-driven insights to
                                deliver impactful results. We don&apos;t just post content — we build
                                brands.
                            </p>
                            <p>
                                Whether you&apos;re a startup looking for your first 1,000 followers
                                or an enterprise scaling across multiple channels, we tailor our
                                approach to your unique goals.
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
