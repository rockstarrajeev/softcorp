"use client";

import { motion } from "framer-motion";
import {
    FiTrendingUp,
    FiVideo,
    FiLayout,
    FiPenTool,
    FiBarChart2,
    FiGlobe,
    FiYoutube,
    FiInstagram,
    FiTwitter,
    FiShield,
    FiCode,
    FiMail,
    FiShoppingBag,
    FiImage,
    FiEdit3,
    FiActivity,
} from "react-icons/fi";
import { FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa6";

const serviceCategories = [
    {
        title: "Social Media Marketing",
        icon: FiTrendingUp,
        color: "from-blue-500 to-cyan-400",
        services: [
            { name: "Social Media Strategy", icon: FiBarChart2 },
            { name: "Content Creation & Design", icon: FiImage },
            { name: "Social Media Management", icon: FiGlobe },
            { name: "Paid Ads Management", icon: FiTrendingUp },
            { name: "Influencer Marketing", icon: FiActivity },
            { name: "Analytics & Reporting", icon: FiBarChart2 },
            { name: "Reputation Management", icon: FiShield },
        ],
    },
    {
        title: "Platform Services",
        icon: FiVideo,
        color: "from-purple-500 to-pink-400",
        services: [
            { name: "YouTube Management", icon: FiYoutube },
            { name: "Instagram Growth", icon: FiInstagram },
            { name: "Facebook Marketing", icon: FaFacebookF },
            { name: "X (Twitter) Marketing", icon: FiTwitter },
            { name: "LinkedIn Marketing", icon: FaLinkedinIn },
            { name: "TikTok Marketing", icon: FaTiktok },
        ],
    },
    {
        title: "Web & Tech",
        icon: FiLayout,
        color: "from-emerald-500 to-teal-400",
        services: [
            { name: "Website Design & Dev", icon: FiCode },
            { name: "SEO & SEM", icon: FiGlobe },
            { name: "Email Marketing", icon: FiMail },
            { name: "E-commerce Setup", icon: FiShoppingBag },
        ],
    },
    {
        title: "Creative & Branding",
        icon: FiPenTool,
        color: "from-orange-500 to-amber-400",
        services: [
            { name: "Brand Identity Design", icon: FiPenTool },
            { name: "Video Production", icon: FiVideo },
            { name: "Copywriting", icon: FiEdit3 },
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        What We Offer
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Comprehensive digital solutions to grow your brand, engage your
                        audience, and drive measurable results across every platform.
                    </p>
                </motion.div>

                {/* Service Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {serviceCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass rounded-2xl p-8 hover:border-white/15 transition-all group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                                >
                                    <category.icon size={22} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Service Tags */}
                            <div className="flex flex-wrap gap-2">
                                {category.services.map((service) => (
                                    <span
                                        key={service.name}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                    >
                                        <service.icon size={14} className="text-slate-500" />
                                        {service.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-brand-600/25"
                    >
                        Request a Quote
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
