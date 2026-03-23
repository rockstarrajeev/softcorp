"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiPhone, FiArrowRight } from "react-icons/fi";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Registration failed.");
                setLoading(false);
                return;
            }

            router.push("/login?registered=true");
        } catch {
            setError("Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    const fields = [
        {
            name: "name",
            label: "Full Name",
            type: "text",
            icon: FiUser,
            placeholder: "John Doe",
            required: true,
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            icon: FiMail,
            placeholder: "you@example.com",
            required: true,
        },
        {
            name: "phone",
            label: "Phone (optional)",
            type: "tel",
            icon: FiPhone,
            placeholder: "+1 (555) 000-0000",
            required: false,
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            icon: FiLock,
            placeholder: "Minimum 8 characters",
            required: true,
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            icon: FiLock,
            placeholder: "Re-enter password",
            required: true,
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent-500/8 rounded-full blur-[128px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-2">
                        <Image 
                            src="/logo.png" 
                            alt="SoftCorp Group" 
                            width={256}
                            height={256}
                            className="h-24 lg:h-32 w-auto object-contain mx-auto"
                            unoptimized
                        />
                    </Link>
                    <p className="text-slate-400">Create your account</p>
                </div>

                <div className="glass rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {fields.map((field) => (
                            <div key={field.name}>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                    {field.label}
                                </label>
                                <div className="relative">
                                    <field.icon
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                        size={16}
                                    />
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={handleChange}
                                        required={field.required}
                                        className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                                        placeholder={field.placeholder}
                                    />
                                </div>
                            </div>
                        ))}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-brand-600/25 mt-2"
                        >
                            {loading ? "Creating account..." : "Create Account"}
                            <FiArrowRight size={16} />
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-brand-400 hover:text-brand-300 font-medium"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
