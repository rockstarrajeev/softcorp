"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { FiMenu, FiX, FiUser, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeHover, setActiveHover] = useState<string | null>(null);

    useEffect(() => {
        let lastScrolled = false;
        const handleScroll = () => {
            const next = window.scrollY > 30;
            if (next !== lastScrolled) {
                lastScrolled = next;
                setIsScrolled(next);
            }
        };

        const frameId = window.requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const dashboardHref = session?.user
        ? (session.user as { role?: string }).role === "admin"
            ? "/admin"
            : "/dashboard"
        : "/login";

    if (pathname?.startsWith("/studio")) return null;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-slate-950/85 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-black/40 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <Image 
                        src="/logo-clean.png" 
                        alt="SoftCorp Group" 
                        width={240}
                        height={60}
                        className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark-logo"
                        priority
                    />
                    <Image 
                        src="/logo-dark.png" 
                        alt="SoftCorp Group" 
                        width={240}
                        height={60}
                        className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 light-logo"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-xl">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onMouseEnter={() => setActiveHover(link.name)}
                                onMouseLeave={() => setActiveHover(null)}
                                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                                    isActive ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-white"
                                }`}
                            >
                                {activeHover === link.name && (
                                    <motion.span
                                        layoutId="navHover"
                                        className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 -z-10"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                {isActive && !activeHover && (
                                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 rounded-full" />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    <ThemeToggle />
                    {session?.user ? (
                        <Link
                            href={dashboardHref}
                            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white gradient-brand rounded-full hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                        >
                            <FiUser size={14} />
                            <span>Dashboard</span>
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                                title="Client Portal Login & Instant Payments"
                            >
                                <FiUser size={13} className="text-cyan-400" />
                                <span>Client Portal</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white gradient-brand rounded-full hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                            >
                                <span>Book Consultation</span>
                                <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Right Controls */}
                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all cursor-pointer ${
                                            isActive
                                                ? "text-cyan-400 bg-cyan-500/10 font-bold border border-cyan-500/20"
                                                : "text-slate-300 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-3">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-3 text-center text-sm font-bold text-white gradient-brand rounded-xl cursor-pointer"
                                >
                                    Book a Free Consultation
                                </Link>
                                <Link
                                    href={session?.user ? dashboardHref : "/login"}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-3 text-center text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-xl"
                                >
                                    {session?.user ? "Go to Dashboard" : "Client Portal Login & Payments"}
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
