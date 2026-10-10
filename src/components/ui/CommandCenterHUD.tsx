"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiServer, 
  FiCpu, 
  FiShield, 
  FiActivity, 
  FiCheckCircle, 
  FiZap,
  FiTerminal,
  FiRefreshCw
} from "react-icons/fi";

const logsData = {
  infra: [
    "09:42:01 [CLUSTER-US1] Health check OK • 128/128 pods synchronized",
    "09:42:09 [ZABBIX-SYNC] 0 latency anomalies detected across 42 endpoints",
    "09:42:18 [FAILOVER-HA] Multi-region hot-standby verified in 14ms",
    "09:42:25 [LOAD-BALANCER] Traffic routing optimal: 48,200 req/sec",
  ],
  ai: [
    "09:42:03 [AI-ORCHESTRATOR] Autonomous agent workflow processing queued tasks",
    "09:42:11 [DOC-PARSER] 2,450 invoices vectorized with 100% extraction precision",
    "09:42:20 [NLP-PIPELINE] Multi-lingual enterprise assistant response time: 210ms",
    "09:42:30 [LLM-CACHE] Semantic retrieval cache hit ratio: 94.6%",
  ],
  security: [
    "09:42:05 [ZERO-TRUST] Mutual TLS cryptographic handshake confirmed",
    "09:42:14 [WAF-SHIELD] 312 automated probe vectors safely mitigated",
    "09:42:22 [COMPLIANCE] Automated audit logs immutable • SOC2 & ISO valid",
    "09:42:32 [ENCRYPTION] AES-256 at-rest rotation executed seamlessly",
  ],
};

export default function CommandCenterHUD() {
  const [activeTab, setActiveTab] = useState<"infra" | "ai" | "security">("infra");
  const [tick, setTick] = useState(0);

  // Periodically increment tick for live heartbeat effect (paused when backgrounded)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (!timer) {
        timer = setInterval(() => {
          setTick((t) => (t + 1) % 4);
        }, 3500);
      }
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const handleVisibility = () => {
      if (typeof document !== "undefined" && document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    if (typeof document !== "undefined" && !document.hidden) {
      startTimer();
    }

    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibility);
    }

    return () => {
      stopTimer();
      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", handleVisibility);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto perspective-1000">
      {/* Ambient background glow behind HUD */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-500/30 rounded-3xl blur-2xl opacity-60 animate-pulse pointer-events-none" />

      {/* Main HUD Window */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-2xl border border-cyan-500/20 bg-slate-950/85 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono font-medium text-slate-400 pl-2 flex items-center gap-1.5">
              <FiTerminal className="text-cyan-400" size={13} />
              softcorp-telemetry.sys
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Live • 99.99% Uptime
            </span>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="grid grid-cols-3 p-1.5 gap-1.5 bg-slate-900/50 border-b border-white/5">
          {[
            { id: "infra", label: "Infra Cluster", icon: FiServer },
            { id: "ai", label: "AI Workflows", icon: FiCpu },
            { id: "security", label: "Zero Trust", icon: FiShield },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/30 shadow-md shadow-cyan-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-cyan-400" : "text-slate-400"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live Metrics Content */}
        <div className="p-5 space-y-4">
          <AnimatePresence mode="wait">
            {activeTab === "infra" && (
              <motion.div
                key="infra"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Node Fleet</span>
                    <span className="text-lg font-bold font-mono text-white flex items-center gap-1.5 mt-0.5">
                      128<span className="text-xs text-emerald-400 font-normal">/128 OK</span>
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Latency Avg</span>
                    <span className="text-lg font-bold font-mono text-cyan-400 mt-0.5 block">14ms</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Failover SLA</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">&lt; 0.2s</span>
                  </div>
                </div>

                {/* Simulated Telemetry Sparkline Wave */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <FiActivity className="text-cyan-400 animate-pulse" size={13} />
                      Real-time Network Throughput
                    </span>
                    <span className="text-xs font-mono text-slate-400">98.4 Gbps</span>
                  </div>
                  {/* SVG Wave */}
                  <svg className="w-full h-12 text-cyan-500 overflow-visible" viewBox="0 0 300 40" fill="none">
                    <defs>
                      <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,25 Q30,10 60,22 T120,15 T180,28 T240,12 T300,20 L300,40 L0,40 Z"
                      fill="url(#waveGrad)"
                    />
                    <path
                      d="M0,25 Q30,10 60,22 T120,15 T180,28 T240,12 T300,20"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Live pulse dot */}
                    <circle cx="240" cy="12" r="3" fill="#ffffff" className="animate-ping" />
                    <circle cx="240" cy="12" r="3" fill="#22d3ee" />
                  </svg>
                </div>
              </motion.div>
            )}

            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Agent Speed</span>
                    <span className="text-lg font-bold font-mono text-cyan-400 mt-0.5 block">10.4x</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Accuracy</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">99.8%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Manual Saved</span>
                    <span className="text-lg font-bold font-mono text-white mt-0.5 block">42 hrs/wk</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <FiZap className="text-yellow-400" size={13} />
                      AI Pipeline: Intelligent Document Parser
                    </span>
                    <span className="text-emerald-400 font-semibold">Active</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "20%" }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>14,280 docs processed today</span>
                    <span>0 human errors</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">DDOS Shield</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">TLS Handshake</span>
                    <span className="text-lg font-bold font-mono text-cyan-400 mt-0.5 block">v1.3 mTLS</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Audits</span>
                    <span className="text-lg font-bold font-mono text-white mt-0.5 block">SOC2 / ISO</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <FiCheckCircle size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white font-mono">Zero Trust Architecture Deployed</h5>
                    <p className="text-[11px] text-slate-400">End-to-end encrypted tunnels across cloud VPCs & on-prem clusters.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Console Output Log Stream */}
          <div className="p-3 rounded-xl bg-black/60 border border-white/[0.07] font-mono text-[11px] space-y-1.5 text-slate-400 overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-white/5">
              <span>LIVE LOG BUFFER</span>
              <FiRefreshCw className="animate-spin text-cyan-400" size={10} style={{ animationDuration: "8s" }} />
            </div>
            {logsData[activeTab].map((log, i) => (
              <div
                key={i}
                className={`truncate transition-colors ${
                  i === tick ? "text-cyan-300 font-semibold" : "text-slate-400"
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="px-5 py-2.5 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            ENGINEERED BY RAJEEV UPADHYAY
          </span>
          <span className="text-slate-400">STATUS: NOMINAL</span>
        </div>
      </motion.div>
    </div>
  );
}
