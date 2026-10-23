"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMail, FiMapPin } from "react-icons/fi";
import {
    FaLinkedinIn,
    FaXTwitter,
    FaYoutube,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa6";
import { UdyamMiniBadge } from "@/components/UdyamVerification";

const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rajeevrockstar/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/rajeevrockstar", label: "X" },
    { icon: FaYoutube, href: "https://www.youtube.com/@RajeevRockstar", label: "YouTube" },
    { icon: FaInstagram, href: "https://www.instagram.com/rockstar_rajeevupadhyay/", label: "Instagram" },
    { icon: FaFacebookF, href: "https://www.facebook.com/rajeevrohitupadhyay", label: "Facebook" },
];

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Software Products", href: "/products" },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Leadership & About", href: "/about" },
    { name: "Delivery Process", href: "/process" },
    { name: "Contact & HQ", href: "/contact" },
];

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith("/studio")) return null;

    return (
        <footer className="bg-slate-950 border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-5">
                        <Link 
                            href="/" 
                            onClick={(e) => {
                                if (pathname === "/" || pathname === "" || !pathname) {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    try { window.history.pushState(null, "", "/"); } catch {}
                                }
                            }}
                            className="inline-block group cursor-pointer"
                        >
                            <Image 
                                src="/logo-clean.png" 
                                alt="SoftCorp Group" 
                                width={240}
                                height={60}
                                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark-logo"
                            />
                            <Image 
                                src="/logo-dark.png" 
                                alt="SoftCorp Group" 
                                width={240}
                                height={60}
                                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 light-logo"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Enterprise-grade IT infrastructure, high-availability cloud architecture, 
                            and intelligent AI automation. Certified Government of India MSME Micro Enterprise.
                        </p>

                        {/* Government of India MSME Mini-Badge Trigger */}
                        <div>
                            <UdyamMiniBadge />
                        </div>

                        <div className="flex gap-2.5 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer card-lift"
                                >
                                    <social.icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-wider text-cyan-400">
                            Navigation
                        </h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-300 transition-colors text-sm cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Registered Operations Column */}
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-white font-bold mb-4 text-xs font-mono uppercase tracking-wider text-cyan-400">
                            Registered Office &amp; Operations
                        </h3>
                        <ul className="space-y-3.5 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <FiMail className="mt-0.5 text-cyan-400 shrink-0" size={16} />
                                <a href="mailto:softcorp@wesoftcorp.com" className="hover:text-white transition-colors font-mono">
                                    softcorp@wesoftcorp.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-0.5 text-cyan-400 shrink-0" size={16} />
                                <span className="leading-relaxed">
                                    Lucknow, Uttar Pradesh - 226028, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar with MSMED Act Compliance Notice */}
                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>
                        © {new Date().getFullYear()} SOFTCORP GROUP (UDYAM-UP-50-0298723). Protected under Section 15 of MSMED Act. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="hover:text-slate-400 cursor-pointer transition-colors">
                            Privacy Policy
                        </span>
                        <span className="hover:text-slate-400 cursor-pointer transition-colors">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
