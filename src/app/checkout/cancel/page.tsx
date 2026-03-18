"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";

export default function CheckoutCancelPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/8 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-500/8 rounded-full blur-[128px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 glass rounded-2xl p-10 text-center max-w-md w-full"
            >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center mb-5">
                    <FiXCircle className="text-red-400" size={32} />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">
                    Payment Cancelled
                </h1>
                <p className="text-slate-400 text-sm mb-6">
                    Your payment was cancelled. No charges were made. You can try again
                    anytime.
                </p>
                <div className="flex gap-3 justify-center">
                    <Link
                        href="/dashboard"
                        className="px-6 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
