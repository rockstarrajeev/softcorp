"use client";

import { motion } from "framer-motion";
import { 
  FiServer, 
  FiCloud, 
  FiShield, 
  FiCpu, 
  FiAward, 
  FiActivity 
} from "react-icons/fi";

const enterprisePartners = [
  {
    name: "Swissport",
    role: "Global Aviation IT Ops",
    detail: "High-Availability Support",
    icon: FiServer,
  },
  {
    name: "Air Liquide",
    role: "Industrial Gas Enterprise",
    detail: "24/7 Infrastructure",
    icon: FiActivity,
  },
  {
    name: "Tata Teleservices",
    role: "Telecom Infrastructure",
    detail: "Mission-Critical SLAs",
    icon: FiShield,
  },
  {
    name: "TCS Enterprise",
    role: "Global IT Standards",
    detail: "Fortune 500 Workflows",
    icon: FiAward,
  },
  {
    name: "BHU Varanasi",
    role: "Computer Science Alumni",
    detail: "Academic Excellence",
    icon: FiCpu,
  },
  {
    name: "AWS & Azure Hybrid",
    role: "Cloud Architectures",
    detail: "Zero-Downtime Migration",
    icon: FiCloud,
  },
];

export default function EnterpriseMarquee() {
  return (
    <div className="relative w-full py-10 overflow-hidden border-y border-white/5 bg-slate-950/40 backdrop-blur-md">
      {/* Side fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <div className="container mx-auto px-6 mb-4">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase">
          Proven Track Record Supporting Global Enterprise IT Ecosystems
        </p>
      </div>

      <div className="flex select-none overflow-hidden py-2">
        <div className="animate-marquee flex gap-8 md:gap-12 items-center">
          {[...enterprisePartners, ...enterprisePartners].map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 group shrink-0"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                <partner.icon size={18} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </span>
                <span className="block text-[11px] text-slate-400 font-medium">
                  {partner.role} • <span className="text-slate-500">{partner.detail}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
