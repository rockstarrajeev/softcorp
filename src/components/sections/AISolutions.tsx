"use client";

import { motion } from "framer-motion";
import { serviceCategories } from "@/utils/serviceData";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const aiCategories = serviceCategories.filter(cat => 
    cat.title.toLowerCase().includes("ai")
);

export default function AISolutions() {
    return (
        <section id="ai-solutions" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl text-left">
                        <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">
                            Future-Proof Your Business
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Next-Gen <span className="gradient-text">AI Solutions</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We don't just use AI; we build tailored AI ecosystems that automate 
                            your operations, supercharge your content, and turn data into 
                            your competitive advantage.
                        </p>
                    </div>
                    <Link 
                        href="/ai-solutions" 
                        className="inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors group"
                    >
                        Explore All AI Services 
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* AI Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {aiCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass rounded-2xl p-8 hover:border-white/15 transition-all group flex flex-col h-full border border-white/5 bg-white/5 backdrop-blur-sm"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shadow-black/20`}
                                >
                                    <category.icon size={22} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <p className="text-slate-400 text-sm mb-6 flex-grow">
                                {category.description}
                            </p>

                            {/* Service list for snippet */}
                            <div className="space-y-3 pt-6 border-t border-white/5 mb-8">
                                {category.services.slice(0, 3).map((service, sIndex) => (
                                    <div key={sIndex} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <service.icon size={14} className="text-brand-500/70" />
                                        <span>{service.name}</span>
                                    </div>
                                ))}
                                {category.services.length > 3 && (
                                    <div className="text-xs text-brand-400 font-medium pl-6">
                                        + {category.services.length - 3} more services
                                    </div>
                                )}
                            </div>

                            {/* Get Started Button */}
                            <Link
                                href="/login?callbackUrl=/dashboard"
                                className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group-hover:bg-brand-600/10 group-hover:border-brand-500/30"
                            >
                                Get Started
                                <FiArrowRight size={16} className="text-brand-400" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
