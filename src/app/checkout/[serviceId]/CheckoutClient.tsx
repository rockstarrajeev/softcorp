"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FiArrowLeft,
    FiShield,
    FiCheck,
    FiCreditCard,
    FiLoader,
} from "react-icons/fi";
import {
    FaPaypal,
    FaStripe,
    FaCcVisa,
    FaCcMastercard,
} from "react-icons/fa";

interface ServiceDetails {
    id: string;
    name: string;
    description: string;
    price: number;
    pricingModel: string;
    currency: string;
    category: string;
}

interface Props {
    service: ServiceDetails;
    gateways: { paypal: boolean; stripe: boolean };
    userName: string;
    userEmail: string;
}

const categoryLabels: Record<string, string> = {
    "software-engineering": "Software Eng (NIC 62011)",
    "web-platforms": "Web Platforms (NIC 62012)",
    "infrastructure": "IT Infrastructure (NIC 62013)",
    "it-consultancy": "IT Consultancy (NIC 62020)",
    "ai-modernization": "Autonomous AI (NIC 62099)",
    "cloud-hosting": "Cloud & Data (NIC 63119)",
    "web-portals": "Web Portals (NIC 63121)",
    "it-amc": "IT AMC & Facilities (NIC 62020)",
    "social-media": "Social Media",
    platform: "Platform",
    "web-tech": "Web & Tech",
    creative: "Creative",
};

const pricingLabels: Record<string, string> = {
    fixed: "One-time payment",
    hourly: "Per hour",
    monthly: "Per month",
};

export default function CheckoutClient({
    service,
    gateways,
    userName,
    userEmail,
}: Props) {
    const router = useRouter();
    const [requirements, setRequirements] = useState("");
    const [selectedGateway, setSelectedGateway] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");

    async function handlePayPal() {
        setProcessing(true);
        setError("");
        try {
            // Create PayPal order
            const res = await fetch("/api/payments/paypal/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    serviceId: service.id,
                    requirements: requirements || null,
                }),
            });
            const data = await res.json();

            if (!data.paypalOrderId) {
                throw new Error(data.error || "Failed to create PayPal order");
            }

            // Redirect to PayPal approval
            const baseUrl =
                process.env.NEXT_PUBLIC_PAYPAL_MODE === "live"
                    ? "https://www.paypal.com"
                    : "https://www.sandbox.paypal.com";

            window.location.href = `${baseUrl}/checkoutnow?token=${data.paypalOrderId}&returnUrl=${encodeURIComponent(window.location.origin + `/checkout/success?orderId=${data.orderId}&paypal=true&paypalOrderId=${data.paypalOrderId}`)}&cancelUrl=${encodeURIComponent(window.location.origin + `/checkout/cancel?orderId=${data.orderId}`)}`;
        } catch (err) {
            setError(err instanceof Error ? err.message : "PayPal error");
            setProcessing(false);
        }
    }

    async function handleStripe() {
        setProcessing(true);
        setError("");
        try {
            const res = await fetch("/api/payments/stripe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    serviceId: service.id,
                    requirements: requirements || null,
                }),
            });
            const data = await res.json();

            if (!data.url) {
                throw new Error(data.error || "Failed to create Stripe session");
            }

            window.location.href = data.url;
        } catch (err) {
            setError(err instanceof Error ? err.message : "Stripe error");
            setProcessing(false);
        }
    }

    function handlePay() {
        if (selectedGateway === "paypal") handlePayPal();
        else if (selectedGateway === "stripe") handleStripe();
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/8 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Back */}
                <Link
                    href="/dashboard"
                    className="text-slate-400 hover:text-white text-sm mb-6 inline-flex items-center gap-2 transition-colors"
                >
                    <FiArrowLeft size={14} /> Back to Dashboard
                </Link>

                <div className="grid lg:grid-cols-5 gap-6">
                    {/* ─── Left: Service + Requirements ─── */}
                    <div className="lg:col-span-3 space-y-5">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass rounded-2xl p-6"
                        >
                            <h1 className="text-2xl font-bold text-white mb-1">Checkout</h1>
                            <p className="text-slate-400 text-sm mb-5">
                                Complete your order for the service below
                            </p>

                            {/* Service Card */}
                            <div className="bg-white/[0.03] rounded-xl p-5 border border-white/5 mb-5">
                                <span className="text-xs font-medium text-brand-400 uppercase tracking-wider">
                                    {categoryLabels[service.category] || service.category}
                                </span>
                                <h2 className="text-lg font-semibold text-white mt-1">
                                    {service.name}
                                </h2>
                                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Requirements */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Project Requirements{" "}
                                    <span className="text-slate-500 font-normal">(optional)</span>
                                </label>
                                <textarea
                                    value={requirements}
                                    onChange={(e) => setRequirements(e.target.value)}
                                    rows={4}
                                    placeholder="Describe your project goals, timeline, specific requests..."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none transition-all"
                                />
                            </div>
                        </motion.div>

                        {/* Payment Method */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass rounded-2xl p-6"
                        >
                            <h2 className="text-lg font-semibold text-white mb-4">
                                Select Payment Method
                            </h2>

                            <div className="space-y-3">
                                {gateways.paypal && (
                                    <GatewayOption
                                        id="paypal"
                                        label="PayPal"
                                        description="Pay with PayPal balance, cards, or bank transfer"
                                        icon={<FaPaypal className="text-[#00457C]" size={22} />}
                                        selected={selectedGateway === "paypal"}
                                        onSelect={() => setSelectedGateway("paypal")}
                                    />
                                )}
                                {gateways.stripe && (
                                    <GatewayOption
                                        id="stripe"
                                        label="Credit / Debit Cards & Global Checkout"
                                        description="Visa, Mastercard, Amex, Apple Pay via Stripe"
                                        icon={
                                            <div className="flex gap-1.5 items-center">
                                                <FaCcVisa className="text-[#1A1F71]" size={20} />
                                                <FaCcMastercard className="text-[#EB001B]" size={20} />
                                                <FaStripe className="text-[#635BFF]" size={28} />
                                            </div>
                                        }
                                        selected={selectedGateway === "stripe"}
                                        onSelect={() => setSelectedGateway("stripe")}
                                    />
                                )}
                            </div>

                            {error && (
                                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                    {error}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* ─── Right: Order Summary ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-2"
                    >
                        <div className="glass rounded-2xl p-6 lg:sticky lg:top-24">
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Order Summary
                            </h3>

                            <div className="space-y-3 mb-5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Service</span>
                                    <span className="text-white font-medium text-right max-w-[180px] truncate">
                                        {service.name}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Billing Model</span>
                                    <span className="text-white">
                                        {pricingLabels[service.pricingModel] || service.pricingModel}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Client</span>
                                    <span className="text-white">{userName}</span>
                                </div>
                                <div className="border-t border-white/10 pt-3 flex justify-between items-baseline">
                                    <span className="text-white font-semibold">Total</span>
                                    <span className="text-2xl font-bold text-white">
                                        ₹{service.price.toLocaleString("en-IN")}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={handlePay}
                                disabled={!selectedGateway || processing}
                                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20 cursor-pointer"
                            >
                                {processing ? (
                                    <>
                                        <FiLoader className="animate-spin" size={16} />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <FiCreditCard size={16} />
                                        {selectedGateway
                                            ? `Pay ₹${service.price.toLocaleString("en-IN")} with ${
                                                  selectedGateway === "paypal" ? "PayPal" : "Stripe"
                                              }`
                                            : "Select a payment method"}
                                    </>
                                )}
                            </button>

                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                                <FiShield size={12} />
                                Secure 256-bit SSL encrypted checkout
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function GatewayOption({
    id,
    label,
    description,
    icon,
    selected,
    onSelect,
}: {
    id: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    selected: boolean;
    onSelect: () => void;
}) {
    return (
        <div
            onClick={onSelect}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                selected
                    ? "bg-brand-500/10 border-brand-500/50 ring-1 ring-brand-500/30"
                    : "bg-white/[0.02] border-white/5 hover:border-white/15"
            }`}
        >
            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                {selected && <div className="w-2.5 h-2.5 rounded-full bg-brand-400" />}
            </div>
            <div className="shrink-0">{icon}</div>
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">{label}</div>
                <div className="text-xs text-slate-400 truncate">{description}</div>
            </div>
        </div>
    );
}
