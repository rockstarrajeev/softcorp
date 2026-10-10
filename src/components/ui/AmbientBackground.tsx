"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Primary Cyan Aurora Blob */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-cyan-500/12 rounded-full blur-[140px] transform-gpu pointer-events-none"
      />

      {/* Royal Indigo Aurora Blob */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -50, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
        className="absolute top-1/3 -right-48 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] transform-gpu pointer-events-none"
      />

      {/* Deep Violet Center Flow */}
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[160px] transform-gpu pointer-events-none"
      />

      {/* Cybernetic Dot & Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.6) 1px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 80px 80px, 80px 80px",
        }}
      />

      {/* Top subtle vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent" />

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}
