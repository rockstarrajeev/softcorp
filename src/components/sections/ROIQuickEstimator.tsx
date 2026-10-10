"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiClock, FiShield, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Deterministic comma-formatting that never produces SSR/client locale mismatch
const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function ROIQuickEstimator() {
  const [servers, setServers] = useState(25);
  const [teamHours, setTeamHours] = useState(30);

  // Calculation formulas:
  // Downtime risk reduction value + automated AI ops hours saved
  const annualSavings = Math.round(servers * 2400 + teamHours * 52 * 45);
  const hoursAutomated = Math.round(teamHours * 0.75 * 52);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-2xl p-8 lg:p-14 shadow-2xl relative">
          {/* Subtle top glow line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <FiTrendingUp /> Enterprise Value Calculator
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Estimate Your <span className="gradient-text">Efficiency & Savings</span>
            </h2>
            <p className="text-slate-400 text-sm lg:text-base">
              See what high-availability IT clustering and AI workflow automation can save your organization each year.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Slider 1: Servers */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-300">Managed Servers / Cloud Instances</span>
                  <span className="text-cyan-400 font-mono text-base font-bold bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                    {servers} instances
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={servers}
                  onChange={(e) => setServers(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>5 (Startup)</span>
                  <span>75 (Mid-Market)</span>
                  <span>150+ (Enterprise)</span>
                </div>
              </div>

              {/* Slider 2: Manual Operations Hours */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-300">Weekly Team Hours on Manual Tasks & IT Firefighting</span>
                  <span className="text-cyan-400 font-mono text-base font-bold bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                    {teamHours} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={teamHours}
                  onChange={(e) => setTeamHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>10 hrs</span>
                  <span>60 hrs</span>
                  <span>120+ hrs</span>
                </div>
              </div>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FiShield className="text-cyan-400 shrink-0" size={16} />
                  <span>99.99% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FiClock className="text-cyan-400 shrink-0" size={16} />
                  <span>24/7 Monitored Response</span>
                </div>
              </div>
            </div>

            {/* Results Card Column */}
            <div className="lg:col-span-5">
              <motion.div
                key={`${servers}-${teamHours}`}
                initial={{ scale: 0.96, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-blue-950/40 border border-cyan-500/30 text-center space-y-6 shadow-xl relative overflow-hidden"
              >
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    Estimated Annual ROI
                  </span>
                  <div 
                    suppressHydrationWarning
                    className="text-4xl lg:text-5xl font-black text-white font-mono tracking-tight text-glow"
                  >
                    ${formatNumber(annualSavings)}
                  </div>
                  <p className="text-xs text-cyan-300/80 font-medium">
                    in recovered productivity & downtime prevention
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-xs font-mono text-slate-400">Human Hours Reclaimed</span>
                  <div 
                    suppressHydrationWarning
                    className="text-xl font-bold font-mono text-emerald-400"
                  >
                    +{formatNumber(hoursAutomated)} hrs / year
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const elem = document.getElementById("contact");
                    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="w-full py-3.5 px-6 gradient-brand text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 group cursor-pointer"
                >
                  <span>Book Free IT Audit</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
