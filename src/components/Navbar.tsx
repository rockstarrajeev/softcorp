"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { FiMenu, FiX, FiUser, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Products", href: "/products" },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Services", href: "/#services" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "MSME Verification", href: "/#udyam-verification" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
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

    // Robust smooth scroll executor
    const scrollToTarget = (targetId: string) => {
        if (!targetId || targetId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            try {
                window.history.pushState(null, "", "/");
            } catch {}
            return;
        }

        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth", block: "start" });
            try {
                window.history.pushState(null, "", `#${targetId}`);
            } catch {}
        }
    };

    // Smooth scroll handler that works reliably across routes, ids, and hash targets
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        // If it's an external or subpage link without a hash (e.g. "/ai-solutions"), let default navigation run
        if (!target.includes("#") && target !== "contact" && target !== "home") {
            return;
        }

        const targetId = target.includes("#")
            ? target.split("#")[1]
            : target.replace(/^\/?#?/, "");

        if (pathname === "/" || pathname === "" || !pathname) {
            e.preventDefault();
            scrollToTarget(targetId);
        }
    };

    // Automatically smooth scroll to section if URL has a hash upon initial load or page transition
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const hash = window.location.hash.replace("#", "");
            if (hash) {
                const timer = setTimeout(() => {
                    const elem = document.getElementById(hash);
                    if (elem) {
                        elem.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }, 150);
                return () => clearTimeout(timer);
            }
        }
    }, [pathname]);

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
                    onClick={(e) => {
                        if (pathname === "/" || pathname === "" || !pathname) {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            try {
                                window.history.pushState(null, "", "/");
                            } catch {}
                        }
                    }}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <Image 
                        src="/logo-clean.png" 
                        alt="SoftCorp Group" 
                        width={240}
                        height={60}
                        className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            onMouseEnter={() => setActiveHover(link.name)}
                            onMouseLeave={() => setActiveHover(null)}
                            className="relative px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            {activeHover === link.name && (
                                <motion.span
                                    layoutId="navHover"
                                    className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 -z-10"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-3">
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
                                href="/#contact"
                                onClick={(e) => handleNavClick(e, "contact")}
                                className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white gradient-brand rounded-full hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                            >
                                <span>Book Consultation</span>
                                <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
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
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        handleNavClick(e, link.href);
                                    }}
                                    className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-3">
                                <Link
                                    href="/#contact"
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        handleNavClick(e, "contact");
                                    }}
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
