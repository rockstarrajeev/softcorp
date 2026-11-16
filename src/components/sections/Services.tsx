"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { udyamServicesList } from "@/utils/serviceData";
import {
    FiArrowRight,
    FiCheck,
    FiChevronDown,
    FiChevronUp,
    FiCreditCard,
    FiUser,
    FiLock,
    FiShield,
} from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function Services() {
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [currency, setCurrency] = useState<"INR" | "USD">("INR");
    const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedServiceId((prev) => (prev === id ? null : id));
    };

    const filteredServices = udyamServicesList.filter((service) => {
        if (selectedFilter === "all") return true;
        return service.filterCategory === selectedFilter;
    });

    const filterTabs = [
        { id: "all", label: "All Engineering Services (20)", count: 20 },
        { id: "web", label: "Web & E-Commerce (6)", count: 6 },
        { id: "ai", label: "Autonomous AI & Automation (4)", count: 4 },
        { id: "tools", label: "Specialized Software & Algo (5)", count: 5 },
        { id: "infra", label: "Cloud DevOps, FinOps & Recovery (5)", count: 5 },
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                        Government of India MSME Certified Activities (UDYAM-UP-50-0298723)
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Our Core <span className="gradient-text-animated">Service Offerings</span>
                    </h2>
                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-6">
                        Enterprise digital engineering, autonomous AI workflows, and cloud infrastructure operations 
                        built for Indian and global enterprises with transparent, competitive pricing.
                    </p>

                    {/* Currency Switcher Toggle */}
                    <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
                        <span className="text-xs text-slate-400 font-medium px-2">Market Pricing:</span>
                        <button
                            type="button"
                            onClick={() => setCurrency("INR")}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                currency === "INR"
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            🇮🇳 ₹ INR (Domestic &amp; UPI)
                        </button>
                        <button
                            type="button"
                            onClick={() => setCurrency("USD")}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                currency === "USD"
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            🌐 $ USD (Global Export)
                        </button>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {filterTabs.map((filter) => {
                            const isSelected = selectedFilter === filter.id;
                            return (
                                <button
                                    type="button"
                                    key={filter.id}
                                    onClick={() => setSelectedFilter(filter.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                                        isSelected
                                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                                            : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent"
                                    }`}
                                >
                                    <span>{filter.label}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? "bg-cyan-500/30 text-white" : "bg-white/10 text-slate-400"}`}>
                                        {filter.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Customer Self-Service & Online Checkout Portal Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 p-6 lg:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-blue-950/60 border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-y-24 translate-x-24" />
                    
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                        <div className="max-w-2xl space-y-2">
                            <div className="flex items-center gap-2.5">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                                    <FiLock size={12} />
                                    Client Self-Service &amp; Booking
                                </span>
                                <span className="text-xs text-slate-400 font-mono">
                                    Instant Razorpay, Stripe &amp; UPI Checkout
                                </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                Book Verified Services Online or Access Portal
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Choose any service below to proceed with immediate online booking or log in to our 24/7 client portal to submit technical briefs, track milestone deliveries, and review enterprise telemetry.
                            </p>
                        </div>

                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                            <Link
                                href="/login"
                                className="w-full sm:w-auto px-6 py-3.5 gradient-brand text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 shine-sweep card-lift"
                            >
                                <FiUser size={14} />
                                <span>Client Portal</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2"
                            >
                                <span>Custom Inquiry</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Service Categories Grid */}
                <motion.div 
                    layout
                    className="grid lg:grid-cols-2 gap-8"
                >
                    <AnimatePresence>
                        {filteredServices.map((service, index) => {
                            const Icon = service.icon;
                            const isExpanded = expandedServiceId === service.id;
                            const displayPrice = currency === "INR" 
                                ? `₹${service.inrPrice.toLocaleString("en-IN")}` 
                                : `$${service.usdPrice}`;

                            return (
                                <motion.div
                                    layout
                                    key={service.id}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3, delay: index * 0.03 }}
                                >
                                    <SpotlightCard className="p-8 h-full flex flex-col justify-between group border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300">
                                        <div>
                                            {/* Top Metadata Header with Live Pricing */}
                                            <div className="flex items-center justify-between gap-3 mb-5">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                                                        {service.nicCode}
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-medium">
                                                        Govt. Certified Activity
                                                    </span>
                                                </div>

                                                <div className="text-right">
                                                    <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">
                                                        {service.pricingModel === "monthly" ? "Retainer" : "Fixed Scope"}
                                                    </span>
                                                    <span className="text-lg font-black text-white gradient-text-animated">
                                                        {displayPrice}
                                                        <span className="text-[11px] font-normal text-slate-400">
                                                            {service.pricingModel === "monthly" ? "/mo" : ""}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Service Title & Icon Header */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform`}
                                                >
                                                    <Icon size={22} className="text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                                                        {service.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Official Classification / Summary */}
                                            <div className="mb-5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 font-mono italic">
                                                <span className="text-emerald-400 not-italic font-semibold block text-[11px] mb-0.5">
                                                    Activity Classification:
                                                </span>
                                                &ldquo;{service.officialDescription}&rdquo;
                                            </div>

                                            {/* Specialized Deliverables List */}
                                            <div className="space-y-2.5 mb-6">
                                                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                                                    Core Deliverables:
                                                </span>
                                                {service.deliverables.map((item, dIdx) => (
                                                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                                        <FiCheck size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                                                        <div>
                                                            <strong className="text-white font-medium">{item.name}: </strong>
                                                            <span className="text-slate-400">{item.desc}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech Stack Pills */}
                                            <div className="flex flex-wrap gap-1.5 mb-6">
                                                {service.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300 text-[11px] font-mono hover:border-cyan-500/30 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Expandable Brief Detail Section */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden mb-6 pt-4 border-t border-cyan-500/20"
                                                    >
                                                        <div className="space-y-4 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs">
                                                            <div>
                                                                <h4 className="font-bold text-white text-sm mb-1">
                                                                    Architecture Overview
                                                                </h4>
                                                                <p className="text-slate-300 leading-relaxed">
                                                                    {service.briefDetail.architectureOverview}
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <h4 className="font-bold text-cyan-300 text-xs mb-1.5">
                                                                    Enterprise Use Cases:
                                                                </h4>
                                                                <ul className="space-y-1 text-slate-400 list-disc list-inside">
                                                                    {service.briefDetail.enterpriseUseCases.map((useCase, uIdx) => (
                                                                        <li key={uIdx}>{useCase}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                                                                <span>SLA: <strong className="text-white">{service.slaMetrics}</strong></span>
                                                                <span>Turnaround: <strong className="text-white">{service.turnaround}</strong></span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Action Buttons Bar */}
                                        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                                            {/* Toggle Detail Section Button */}
                                            <button
                                                type="button"
                                                onClick={() => toggleExpand(service.id)}
                                                className="w-full sm:w-auto text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-1.5 cursor-pointer py-2 px-3 rounded-lg hover:bg-cyan-500/10 transition-all"
                                            >
                                                <span>{isExpanded ? "Hide Specs" : "Technical Specs"}</span>
                                                {isExpanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                                            </button>

                                            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                                {/* Consult / Discovery Button */}
                                                <Link
                                                    href="/contact"
                                                    className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer text-center shine-sweep"
                                                >
                                                    Inquire
                                                </Link>

                                                {/* Direct Book Online Button */}
                                                <Link
                                                    href={`/checkout/${service.portalSlug}`}
                                                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer shine-sweep card-lift"
                                                    title={`Book ${service.title} online with Razorpay / Cards / UPI`}
                                                >
                                                    <FiCreditCard size={13} />
                                                    <span>Book Online ({displayPrice})</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Navigation Link to Udyam Verification Component */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                        <span className="text-xs text-slate-400 font-mono">
                            Need official documentation for vendor registration or corporate onboarding?
                        </span>
                        <a
                            href="#udyam-verification"
                            onClick={(e) => {
                                e.preventDefault();
                                const elem = document.getElementById("udyam-verification");
                                if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 transition-all text-xs font-semibold cursor-pointer"
                        >
                            <FiShield size={13} />
                            <span>Verify Government MSME Certificate</span>
                            <FiArrowRight size={13} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
