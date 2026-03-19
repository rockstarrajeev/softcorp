"use client";
import { useEffect } from "react";
import { FiAlertCircle, FiRefreshCw, FiHome } from "react-icons/fi";
import Link from "next/link";

export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Dashboard Error:", error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="glass rounded-2xl p-8 max-w-md w-full text-center border border-red-500/20 shadow-2xl shadow-red-500/5">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiAlertCircle size={32} className="text-red-500" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
                <p className="text-slate-400 mb-8 text-sm">
                    We encountered an error while loading your dashboard. This might be a temporary issue.
                    {error.digest && (
                        <span className="block mt-2 text-xs font-mono text-slate-500">
                            Error ID: {error.digest}
                        </span>
                    )}
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={reset}
                        className="w-full py-3 px-4 gradient-brand text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                        <FiRefreshCw size={18} />
                        Try Again
                    </button>
                    
                    <Link
                        href="/"
                        className="w-full py-3 px-4 bg-white/5 text-slate-300 font-semibold rounded-xl border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                    >
                        <FiHome size={18} />
                        Back to Home
                    </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs text-slate-500">
                        If the problem persists, please contact our support team.
                    </p>
                </div>
            </div>
        </div>
    );
}
