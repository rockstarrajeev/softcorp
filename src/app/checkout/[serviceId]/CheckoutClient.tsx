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
import { SiRazorpay } from "react-icons/si";

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
    gateways: { paypal: boolean; stripe: boolean; razorpay: boolean };
    userName: string;
    userEmail: string;
}

const categoryLabels: Record<string, string> = {
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

declare global {
    interface Window {
        Razorpay: new (options: Record<string, unknown>) => {
            open: () => void;
        };
    }
}

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

    async function handleRazorpay() {
        setProcessing(true);
        setError("");
        try {
            const res = await fetch("/api/payments/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    serviceId: service.id,
                    requirements: requirements || null,
                }),
            });
            const data = await res.json();

            if (!data.razorpayOrderId) {
                throw new Error(data.error || "Failed to create Razorpay order");
            }

            // Load Razorpay script
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                const options = {
                    key: data.razorpayKeyId,
                    amount: data.amount,
                    currency: data.currency,
                    name: "Softcorp Group LLC",
                    description: data.serviceName,
                    order_id: data.razorpayOrderId,
                    prefill: { name: userName, email: userEmail },
                    theme: { color: "#6366f1" },
                    handler: async (response: { razorpay_payment_id: string }) => {
                        await fetch("/api/payments/razorpay/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                orderId: data.orderId,
                                razorpayPaymentId: response.razorpay_payment_id,
                            }),
                        });
                        router.push(`/checkout/success?orderId=${data.orderId}`);
                    },
                };
                const razorpay = new window.Razorpay(options);
                razorpay.open();
                setProcessing(false);
            };
            document.body.appendChild(script);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Razorpay error");
            setProcessing(false);
        }
    }

    function handlePay() {
        if (selectedGateway === "paypal") handlePayPal();
        else if (selectedGateway === "stripe") handleStripe();
        else if (selectedGateway === "razorpay") handleRazorpay();
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

                        {/* Gateway Selection */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass rounded-2xl p-6"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Payment Method
                            </h3>

                            <div className="space-y-3">
                                {gateways.paypal && (
                                    <GatewayOption
                                        id="paypal"
                                        label="PayPal"
                                        description="Pay with PayPal account or card"
                                        icon={<FaPaypal className="text-[#00457C]" size={22} />}
                                        selected={selectedGateway === "paypal"}
                                        onSelect={() => setSelectedGateway("paypal")}
                                    />
                                )}
                                {gateways.stripe && (
                                    <GatewayOption
                                        id="stripe"
                                        label="Credit / Debit Card"
                                        description="Visa, Mastercard, Amex via Stripe"
                                        icon={
                                            <div className="flex gap-1">
                                                <FaCcVisa className="text-[#1A1F71]" size={20} />
                                                <FaCcMastercard className="text-[#EB001B]" size={20} />
                                            </div>
                                        }
                                        selected={selectedGateway === "stripe"}
                                        onSelect={() => setSelectedGateway("stripe")}
                                    />
                                )}
                                {gateways.razorpay && (
                                    <GatewayOption
                                        id="razorpay"
                                        label="UPI / Indian Cards / Wallets"
                                        description="Razorpay — UPI, Paytm, PhonePe, Cards"
                                        icon={<SiRazorpay className="text-[#3395FF]" size={22} />}
                                        selected={selectedGateway === "razorpay"}
                                        onSelect={() => setSelectedGateway("razorpay")}
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
                                    <span className="text-slate-400">{service.name}</span>
                                    <span className="text-white font-medium">
                                        ${service.price}
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Pricing</span>
                                    <span className="text-slate-400">
                                        {pricingLabels[service.pricingModel]}
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-white/5 pt-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-white font-semibold">Total</span>
                                    <span className="text-2xl font-bold text-white">
                                        ${service.price}
                                    </span>
                                </div>
                                <p className="text-slate-500 text-xs mt-1">
                                    {service.currency}
                                </p>
                            </div>

                            <button
                                onClick={handlePay}
                                disabled={!selectedGateway || processing}
                                className="w-full py-3.5 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-brand-600/25"
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
                                            ? `Pay $${service.price} with ${selectedGateway === "paypal"
                                                ? "PayPal"
                                                : selectedGateway === "stripe"
                                                    ? "Card"
                                                    : "Razorpay"
                                            }`
                                            : "Select a payment method"}
                                    </>
                                )}
                            </button>

                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                                <FiShield size={12} />
                                Secure payment · 256-bit SSL
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
        <button
            onClick={onSelect}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${selected
                    ? "border-brand-500/40 bg-brand-600/10"
                    : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
        >
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-slate-500 text-xs">{description}</p>
            </div>
            <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selected
                        ? "border-brand-400 bg-brand-500"
                        : "border-white/20"
                    }`}
            >
                {selected && <FiCheck size={10} className="text-white" />}
            </div>
        </button>
    );
}
