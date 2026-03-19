"use client";

import { motion } from "framer-motion";
import { serviceCategories } from "@/utils/serviceData";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const aiCategories = serviceCategories.filter(cat => 
    cat.title.toLowerCase().includes("ai")
);

export default function AISolutionsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-slate-950 font-sans antialiased text-white selection:bg-brand-500/30">
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
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        <FiArrowLeft size={16} /> 
                        Back to Home
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="max-w-4xl mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-400 font-bold uppercase tracking-[0.2em] text-sm mb-6"
                    >
                        AI-First IT Agency
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                    >
                        Enterprise-Grade <br />
                        <span className="gradient-text">AI Powered Solutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-slate-400 leading-relaxed font-light"
                    >
                        Softcorp is leading the shift towards AI-powered business operations. 
                        We integrate advanced machine learning, natural language processing, 
                        and automation into your existing ecosystem to drive 10x efficiency.
                    </motion.p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-32">
                    {aiCategories.map((category, index) => (
                        <motion.section 
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid lg:grid-cols-2 gap-16 items-start"
                        >
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl shadow-black/20 mb-8`}>
                                    <category.icon size={32} className="text-white" />
                                </div>
                                <h2 className="text-4xl font-bold mb-6">{category.title}</h2>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="grid sm:grid-cols-1 gap-4">
                                    {category.services.map((service, sIndex) => (
                                        <div key={sIndex} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group">
                                            <div className="mt-1">
                                                <service.icon size={20} className="text-brand-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white mb-1">{service.name}</h3>
                                                <p className="text-sm text-slate-500">
                                                    Fully managed AI service from integration to lifecycle management.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} h-full`}>
                                <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden glass border border-white/5 group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                                    <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                                        <div>
                                            <div className="mb-6 inline-flex p-4 rounded-full bg-white/5 text-brand-400">
                                                <FiCheckCircle size={48} className="animate-pulse" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">Value Proposition</h3>
                                            <p className="text-slate-400">
                                                Our {category.title} services are designed to specifically target 
                                                high-friction areas in your business model, offering immediate 
                                                ROI through intelligent automation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 lg:p-24 rounded-[3rem] bg-gradient-to-br from-brand-600/20 to-fuchsia-600/20 border border-white/10 text-center backdrop-blur-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent)]" />
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10">
                        Ready to Transform Your <br />
                        Business with <span className="gradient-text">Softcorp AI</span>?
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
                        Stop wondering about AI. Start implementing it. Schedule a discovery call with our solutions architects today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link 
                            href="/#contact" 
                            className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors"
                        >
                            Book a Consultation
                        </Link>
                        <Link 
                            href="/" 
                            className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
