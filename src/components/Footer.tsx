"use client";

import { usePathname } from "next/navigation";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {
    FaLinkedinIn,
    FaXTwitter,
    FaYoutube,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa6";

const socialLinks = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "#", label: "X" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
];

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith("/studio")) return null;

    return (
        <footer className="bg-surface-950 border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">
                            <span className="gradient-text">Soft</span>
                            <span className="text-white">corp</span>
                            <span className="text-slate-500 text-lg ml-1">Group LLC</span>
                        </h2>
                        <p className="text-slate-400 max-w-md leading-relaxed mb-6">
                            Your trusted partner for digital growth. We help businesses scale
                            through expert social media marketing, web development, and
                            creative branding solutions.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg glass-light text-slate-400 hover:text-white hover:bg-brand-600/20 transition-all"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-brand-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <FiMail className="mt-0.5 text-brand-400 shrink-0" size={16} />
                                <span>support@wesoftcorp.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <FiPhone className="mt-0.5 text-brand-400 shrink-0" size={16} />
                                <span>+1 9292664560 US</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <FiMapPin className="mt-0.5 text-brand-400 shrink-0" size={16} />
                                <span>United States</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Softcorp Group LLC. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-slate-300 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-slate-300 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
