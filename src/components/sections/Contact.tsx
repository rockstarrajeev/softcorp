"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiCheck, FiClock, FiShield } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short" }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsSuccess(true);
                setErrorMsg("");
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                const data = await res.json().catch(() => ({}));
                setErrorMsg(data.error || "Failed to transmit message. Please contact us directly at softcorp@wesoftcorp.com.");
            }
        } catch {
            setErrorMsg("Network error. Please try again or reach us at softcorp@wesoftcorp.com.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                        Initiate Collaboration
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Schedule a Free <span className="gradient-text-animated">IT Architecture Discovery</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
                        Ready to eliminate downtime vulnerabilities or deploy autonomous AI agent pipelines? 
                        Let&apos;s map out your solution.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column — Contact Cards & Global Time */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <SpotlightCard className="p-8 space-y-6">
                            <h3 className="text-xl font-bold text-white mb-2">Direct Enterprise Channels</h3>
                            
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0 shadow-md">
                                    <FiMail size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Direct Email</p>
                                    <a
                                        href="mailto:softcorp@wesoftcorp.com"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-mono"
                                    >
                                        softcorp@wesoftcorp.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0 shadow-md">
                                    <FiMapPin size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Registered Operations &amp; HQ</p>
                                    <p className="text-slate-300 text-xs leading-relaxed">
                                        Lucknow, Uttar Pradesh - 226028, India
                                    </p>
                                    <span className="inline-block text-[11px] font-mono text-emerald-400 mt-0.5">
                                        MSME Reg: UDYAM-UP-50-0298723
                                    </span>
                                </div>
                            </div>
                        </SpotlightCard>

                        {/* Live SLA & Global Coverage Widget */}
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                            <div className="flex items-center justify-between text-xs font-mono">
                                <span className="flex items-center gap-1.5 text-slate-300">
                                    <FiClock className="text-cyan-400" />
                                    Active System Time
                                </span>
                                <span className="text-cyan-400 font-semibold">{currentTime || "Live Telemetry"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/5">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <FiShield className="text-emerald-400" />
                                    <span>NDA Protected</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300">
                                    <FiCheck className="text-emerald-400" />
                                    <span>24-Hour Response</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column — Modern Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <SpotlightCard className="p-8 lg:p-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                                            placeholder="john@enterprise.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                                            Phone / WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                                            Area of Engagement
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                                        >
                                            <option value="">Select Focus Area</option>
                                            <option value="Cloud Infrastructure">High-Availability Cloud Architecture</option>
                                            <option value="Server Maintenance">24/7 Server & Zabbix Telemetry</option>
                                            <option value="AI Automation">Autonomous AI Agents & Workflows</option>
                                            <option value="Software Development">Full-Stack Platform Engineering</option>
                                            <option value="Network Security">Zero-Trust & Compliance Audits</option>
                                            <option value="Other">Custom Enterprise Engagement</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                                        Project Scope & Challenges *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none text-sm"
                                        placeholder="Describe your current infrastructure bottlenecks, goals, or AI modernization requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-8 py-4 gradient-brand text-white font-bold text-sm tracking-wide rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-cyan-500/25 shine-sweep card-lift cursor-pointer"
                                >
                                    <span>{isSubmitting ? "Transmitting..." : "Send Architecture Inquiry"}</span>
                                    <FiSend size={15} />
                                </button>

                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium flex items-center gap-2"
                                    >
                                        <FiCheck size={18} />
                                        <span>Message transmitted successfully! Our team will respond within 24 hours.</span>
                                    </motion.div>
                                )}

                                {errorMsg && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-medium"
                                    >
                                        {errorMsg}
                                    </motion.div>
                                )}
                            </form>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
