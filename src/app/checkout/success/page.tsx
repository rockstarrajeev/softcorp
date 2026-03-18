"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiLoader } from "react-icons/fi";

function CheckoutSuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const isPaypal = searchParams.get("paypal") === "true";
    const paypalOrderId = searchParams.get("paypalOrderId");
    const sessionId = searchParams.get("session_id");
    const [verified, setVerified] = useState(false);
    const [verifying, setVerifying] = useState(true);

    useEffect(() => {
        async function verify() {
            try {
                if (isPaypal && paypalOrderId && orderId) {
                    // Capture PayPal payment
                    const res = await fetch("/api/payments/paypal/capture", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ paypalOrderId, orderId }),
                    });
                    const data = await res.json();
                    setVerified(data.success);
                } else if (sessionId && orderId) {
                    // Verify Stripe payment
                    const res = await fetch("/api/payments/stripe/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ sessionId, orderId }),
                    });
                    const data = await res.json();
                    setVerified(data.success);
                } else if (orderId) {
                    // Razorpay already verified client-side
                    setVerified(true);
                }
            } catch {
                setVerified(false);
            }
            setVerifying(false);
        }
        verify();
    }, [isPaypal, paypalOrderId, sessionId, orderId]);

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-500/8 rounded-full blur-[128px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 glass rounded-2xl p-10 text-center max-w-md w-full"
            >
                {verifying ? (
                    <>
                        <FiLoader className="mx-auto text-brand-400 mb-4 animate-spin" size={48} />
                        <h1 className="text-2xl font-bold text-white mb-2">Verifying Payment</h1>
                        <p className="text-slate-400 text-sm">Please wait...</p>
                    </>
                ) : verified ? (
                    <>
                        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-5">
                            <FiCheckCircle className="text-green-400" size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Payment Successful!
                        </h1>
                        <p className="text-slate-400 text-sm mb-6">
                            Your order has been placed and our team will get started soon.
                        </p>
                        <Link
                            href="/dashboard"
                            className="inline-block px-6 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Go to Dashboard
                        </Link>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Payment Pending
                        </h1>
                        <p className="text-slate-400 text-sm mb-6">
                            We couldn&apos;t verify your payment yet. If you completed the
                            payment, it may take a moment to process.
                        </p>
                        <Link
                            href="/dashboard"
                            className="inline-block px-6 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Go to Dashboard
                        </Link>
                    </>
                )}
            </motion.div>
        </div>
    );
}

export default function CheckoutSuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><FiLoader className="animate-spin text-brand-400" size={48} /></div>}>
            <CheckoutSuccessContent />
        </Suspense>
    );
}
