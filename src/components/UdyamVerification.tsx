"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Building2, 
  User, 
  FileCheck, 
  Calendar, 
  MapPin, 
  Code, 
  Layout, 
  Server, 
  Cpu, 
  Layers, 
  Database, 
  Globe, 
  Copy, 
  Check, 
  ExternalLink,
  Clock,
  Wrench
} from "lucide-react";
import { motion } from "framer-motion";

export interface NICItem {
  code: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

export const udyamDataset = {
  legalName: "SOFTCORP GROUP (wesoftcorp.com)",
  enterpriseType: "Micro Enterprise (Services Sector)",
  organizationType: "Proprietary (Sole Proprietorship)",
  registeredOwner: "Rajeev Upadhyay",
  udyamNumber: "UDYAM-UP-50-0298723",
  registrationDate: "06/09/2026",
  ministry: "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
  portalUrl: "https://udyamregistration.gov.in",
  address: "Plot No 17/18, Gulab Ashiyana, Behind Kohinoor Pearl Apartments, Chinhat, Matiyari, Dewa Road, Lucknow, Uttar Pradesh, Pin - 226028, India",
  nicCodes: [
    {
      code: "NIC 62011",
      title: "Custom Software Engineering",
      description: "Writing, modifying, testing client-specific computer programs, enterprise APIs & automated architectures.",
      icon: Code,
      tag: "Software Engineering",
    },
    {
      code: "NIC 62012",
      title: "Web Architecture & Design",
      description: "Full-scale website and web-application designing, high-conversion UI/UX systems & digital interfaces.",
      icon: Layout,
      tag: "Web Systems",
    },
    {
      code: "NIC 62013",
      title: "IT Infrastructure Support",
      description: "Providing software support, continuous telemetry maintenance, and high-availability operations to enterprise clients.",
      icon: Server,
      tag: "Infrastructure",
    },
    {
      code: "NIC 62020",
      title: "Computer Consultancy & Facilities Management",
      description: "Planning, designing, and operating integrated computer systems blending hardware, software, and communication tech.",
      icon: Cpu,
      tag: "Consultancy",
    },
    {
      code: "NIC 62099",
      title: "Core Information Technology Services",
      description: "Comprehensive IT consulting, cloud workflow deployments, system installations, and specialized computer services.",
      icon: Layers,
      tag: "Core IT",
    },
    {
      code: "NIC 63119",
      title: "Data Processing & Cloud Hosting",
      description: "High-throughput data extraction, cloud container hosting, multi-region database operations, and related activities.",
      icon: Database,
      tag: "Cloud & Data",
    },
    {
      code: "NIC 63121",
      title: "Web Portals & Search Engine Operations",
      description: "Architecting web platforms, data search systems, knowledge indices, and internet software infrastructure.",
      icon: Globe,
      tag: "Platform Systems",
    },
    {
      code: "NIC 62020 (AMC)",
      title: "IT Facilities Management & Annual Maintenance (AMC)",
      description: "Comprehensive hardware & software facilities management, workplace endpoint upkeep, and preventive maintenance contracts.",
      icon: Wrench,
      tag: "Facilities Management",
    },
  ] as NICItem[],
  legalNote:
    "SOFTCORP GROUP is legally protected under Section 15 of the MSMED Act, guaranteeing standard 45-day B2B settlement compliances for all global and domestic tech transactions.",
};

/**
 * Compact MSME Micro Certified Mini-Badge
 * Easy drop-in for Footer, Navbars, Checkout, or Header strips
 */
export function UdyamMiniBadge({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/#udyam-verification"
      onClick={(e) => {
        const elem = document.getElementById("udyam-verification");
        if (elem) {
          e.preventDefault();
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all text-xs font-medium group cursor-pointer ${className}`}
      title="Verified Government of India MSME Micro Enterprise"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
      <span className="font-mono font-semibold tracking-wide">MSME Micro Certified</span>
      <span className="hidden sm:inline text-[11px] text-emerald-400/80 font-mono">
        (UDYAM-UP-50-0298723)
      </span>
    </Link>
  );
}

/**
 * Full UdyamVerification Component
 * Production-ready showcase for enterprise buyers, compliance teams, and payment gateways.
 */
export default function UdyamVerification() {
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleCopy = () => {
    navigator.clipboard.writeText(udyamDataset.udyamNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredNIC = udyamDataset.nicCodes.filter((item) => {
    if (activeFilter === "all") return true;
    return item.tag.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="udyam-verification" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Government of India MSME Registration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Corporate &amp; Legal <span className="gradient-text">Verification</span>
          </h2>
          <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
            Officially certified by the Ministry of Micro, Small and Medium Enterprises (MoMSME). 
            Engineered to provide enterprise buyers, compliance auditors, and global payment processors 
            with absolute transparency.
          </p>
        </motion.div>

        {/* Master Certificate Card */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
          {/* Top Tricolor Accent Bar (Subtle Tiranga Glow) */}
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-white to-emerald-500" />

          {/* Card Header Banner */}
          <div className="p-6 lg:p-8 bg-slate-950/60 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-500/10">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {udyamDataset.legalName}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                    ACTIVE • VERIFIED
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-2">
                  <span>{udyamDataset.ministry}</span>
                </p>
              </div>
            </div>

            {/* Registration Number Copy Box */}
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-2.5 sm:p-3 rounded-2xl self-start md:self-auto">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider font-semibold">
                  Udyam Registration No.
                </span>
                <span className="text-sm sm:text-base font-mono font-bold text-emerald-400 tracking-wider">
                  {udyamDataset.udyamNumber}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-all ml-1 group cursor-pointer"
                title="Copy Udyam Registration Number"
                aria-label="Copy Udyam Registration Number"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Verification Attributes Grid */}
          <div className="p-6 lg:p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-slate-800/80 bg-slate-900/30">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Enterprise Category</span>
              </div>
              <p className="text-sm font-bold text-white">{udyamDataset.enterpriseType}</p>
              <p className="text-[11px] text-slate-400">Classified under MSMED Act 2006</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Organization Type</span>
              </div>
              <p className="text-sm font-bold text-white">{udyamDataset.organizationType}</p>
              <p className="text-[11px] text-slate-400">Sole Proprietorship Firm</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>Registered Owner</span>
              </div>
              <p className="text-sm font-bold text-white">{udyamDataset.registeredOwner}</p>
              <p className="text-[11px] text-slate-400">Infrastructure Engineer &amp; Founder</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Registration Date</span>
              </div>
              <p className="text-sm font-bold text-white font-mono">{udyamDataset.registrationDate}</p>
              <p className="text-[11px] text-emerald-400 font-mono">Permanent Active Status</p>
            </div>
          </div>

          {/* Registered Office Location Bar */}
          <div className="p-6 lg:p-8 bg-slate-950/40 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                  Registered Office &amp; Development Center
                </span>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                  {udyamDataset.address}
                </p>
              </div>
            </div>

            <a
              href={udyamDataset.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 text-xs font-semibold text-slate-300 hover:text-white transition-all shrink-0 self-start md:self-auto group"
            >
              <span>Udyam National Portal</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Certified NIC Codes Section */}
          <div className="p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold block">
                  National Industrial Classification (NIC 2008)
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  Certified Commercial &amp; Technical Activities
                </h4>
              </div>

              {/* Quick filter pills */}
              <div className="flex flex-wrap gap-1.5">
                {["all", "Software", "Web", "Infrastructure", "Cloud"].map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeFilter.toLowerCase() === filter.toLowerCase()
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-white/5 text-slate-400 hover:text-white border border-transparent"
                    }`}
                  >
                    {filter === "all" ? "All Codes (7)" : filter}
                  </button>
                ))}
              </div>
            </div>

            {/* NIC Codes Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNIC.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.code}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-slate-800/80 hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                          {item.code}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h5 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors mb-2">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Services Sector</span>
                      <span className="text-emerald-400 font-semibold">Government Certified</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* B2B Legal Footer Note (Section 15 MSMED Act Compliance) */}
          <div className="p-6 bg-emerald-950/20 border-t border-emerald-500/20 flex items-start sm:items-center gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-emerald-300/90 leading-relaxed font-medium">
              <strong className="text-emerald-200">Legal Compliance Notice: </strong>
              {udyamDataset.legalNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
