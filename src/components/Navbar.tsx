"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const dashboardHref = session?.user
        ? (session.user as { role?: string }).role === "admin"
            ? "/admin"
            : "/dashboard"
        : "/login";

    if (pathname?.startsWith("/studio")) return null;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "glass shadow-lg shadow-black/10 py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight">
                    <span className="gradient-text">Soft</span>
                    <span className="text-white">corp</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-brand rounded-full transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    {session?.user ? (
                        <Link
                            href={dashboardHref}
                            className="px-5 py-2.5 text-sm font-semibold text-white gradient-brand rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand-600/25 flex items-center gap-2"
                        >
                            <FiUser size={14} />
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            href="/login"
                            className="px-5 py-2.5 text-sm font-semibold text-white gradient-brand rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand-600/25"
                        >
                            Get Started
                        </Link>
                    )}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/5"
                    >
                        <nav className="flex flex-col items-center py-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-slate-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Link
                                href={session?.user ? dashboardHref : "/login"}
                                onClick={() => setIsOpen(false)}
                                className="mt-2 px-6 py-3 text-white gradient-brand rounded-lg font-semibold"
                            >
                                {session?.user ? "Dashboard" : "Get Started"}
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
