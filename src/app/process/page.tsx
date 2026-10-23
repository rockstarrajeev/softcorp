"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Process from "@/components/sections/Process";

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-slate-950 font-sans antialiased text-white selection:bg-cyan-500/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>

      <Process />
    </main>
  );
}
