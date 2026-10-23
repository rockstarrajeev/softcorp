"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiShield, 
  FiCpu, 
  FiServer, 
  FiCloud, 
  FiCheckCircle, 
  FiDownload, 
  FiZap, 
  FiActivity, 
  FiUsers, 
  FiKey 
} from "react-icons/fi";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SOFTWARE_PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <div className="font-sans antialiased text-white selection:bg-cyan-500/30">
      {/* ─── 1. Hero Section ─── */}
      <Hero />

      {/* ─── 2. Commercial Software Suite Highlight ─── */}
      <section className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                Flagship Native Applications
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                High-Performance <span className="gradient-text">Software Suite</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
                Purpose-built desktop engines and creative workstations engineered for zero-latency execution.
                Direct standalone Windows installers with lifetime licensing.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group shrink-0"
            >
              <span>Explore All Software & Downloads</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_PRODUCTS.map((product) => {
              const isSDM = product.id === "sdm";
              const isTradeboard = product.id === "tradeboard";
              return (
                <SpotlightCard
                  key={product.id}
                  className="p-7 flex flex-col justify-between border-white/10"
                  spotlightColor={isSDM ? "rgba(6, 182, 212, 0.2)" : isTradeboard ? "rgba(99, 102, 241, 0.18)" : "rgba(16, 185, 129, 0.15)"}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                        {product.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{product.version}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">{product.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {product.tagline}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-baseline justify-between text-xs">
                      <div>
                        <span className="text-slate-500 block">Lifetime Pro</span>
                        <span className="text-lg font-bold text-white">${product.usdPrice}</span>
                        <span className="text-slate-500 text-[11px] ml-1">/ ₹{product.inrPrice}</span>
                      </div>
                      <span className="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {isTradeboard ? "Self-Hosted Core" : "Free Trial Included"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2">
                    <Link
                      href="/products"
                      className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center justify-center gap-2 transition-colors"
                    >
                      <FiDownload size={13} />
                      {isSDM ? "Download Trial (.exe)" : isTradeboard ? "Docs & Platform" : "Get Software"}
                    </Link>
                    <Link
                      href="/products"
                      className="py-2.5 px-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 flex items-center justify-center gap-1.5 hover:brightness-110 shadow-md shadow-cyan-500/20 shrink-0"
                    >
                      <FiKey size={13} /> Buy
                    </Link>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. Core Enterprise Capabilities ─── */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Disciplined Architecture
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Enterprise Infrastructure & <span className="gradient-text">Cloud Systems</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
                We manage mission-critical corporate computing operations, automated Linux failover clusters, 
                and zero-downtime microservice migrations backed by 6+ years of operational rigor.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group shrink-0"
            >
              <span>View All Services & Pricing</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard className="p-6 border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FiServer size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">IT Infrastructure & HA Clusters</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Zabbix telemetry, 24/7 server monitoring, Linux clustering, and proactive anomaly detection with 99.99% uptime SLAs.
              </p>
              <Link href="/services" className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1">
                Learn more <FiArrowRight size={11} />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="p-6 border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <FiCloud size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Cloud & DevSecOps</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Zero-downtime migrations between AWS, Azure, and Oracle Cloud with automated CI/CD pipelines and hardened security.
              </p>
              <Link href="/services" className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1">
                Learn more <FiArrowRight size={11} />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="p-6 border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FiCpu size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Custom Software Engineering</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full-cycle high-concurrency backend microservices, real-time WebSockets, and resilient enterprise web architecture.
              </p>
              <Link href="/services" className="text-xs font-semibold text-blue-400 hover:underline inline-flex items-center gap-1">
                Learn more <FiArrowRight size={11} />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="p-6 border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <FiZap size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Applied AI & Automation</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Multi-agent LLM systems, deterministic invoice/document parsing, and autonomous business process automation.
              </p>
              <Link href="/ai-solutions" className="text-xs font-semibold text-teal-400 hover:underline inline-flex items-center gap-1">
                Explore AI <FiArrowRight size={11} />
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ─── 4. Case Studies Preview ─── */}
      <section className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Proven Track Record
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Enterprise <span className="gradient-text">Impact & Metrics</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
                Real measurable business outcomes delivered for global aviation cargo, industrial enterprises, and high-load web systems.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group shrink-0"
            >
              <span>Read All Case Studies</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="p-8 border-white/10 space-y-4">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                99.4%
              </span>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Downtime Cut in Q1
              </div>
              <h3 className="text-lg font-bold text-white">Global Aviation Cargo Carrier</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Eliminated recurring legacy server crashes and automated anomaly failovers across international logistics facilities.
              </p>
              <Link href="/case-studies" className="text-xs text-slate-300 hover:text-white font-semibold inline-flex items-center gap-1 pt-2">
                View study <FiArrowRight size={11} />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="p-8 border-white/10 space-y-4">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                10x
              </span>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Processing Speedup
              </div>
              <h3 className="text-lg font-bold text-white">Autonomous AI Document Pipeline</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Scrapped 40+ hours per week of manual invoice reconciliation using multi-modal LLM vector parsers.
              </p>
              <Link href="/case-studies" className="text-xs text-slate-300 hover:text-white font-semibold inline-flex items-center gap-1 pt-2">
                View study <FiArrowRight size={11} />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="p-8 border-white/10 space-y-4">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                40%
              </span>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                Cloud Cost Reduction
              </div>
              <h3 className="text-lg font-bold text-white">Zero-Downtime Multi-Cloud Migration</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Migrated 200+ microservices from aging on-prem hardware into a unified AWS/Azure hybrid VPC with zero customer downtime.
              </p>
              <Link href="/case-studies" className="text-xs text-slate-300 hover:text-white font-semibold inline-flex items-center gap-1 pt-2">
                View study <FiArrowRight size={11} />
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ─── 5. Executive Leadership & Process Link ─── */}
      <section className="py-20 relative bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpotlightCard className="p-8 border-white/10 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <FiUsers /> Leadership & Rigor
              </div>
              <h3 className="text-2xl font-bold text-white">Engineering Philosophy & Pedigree</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Founded and directed by Rajeev Upadhyay, post-graduate in Computer Science from Banaras Hindu University (BHU).
                Trained in high-compliance SLA execution and corporate incident management at TCS Enterprise standards.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 group pt-2"
            >
              <span>Meet Leadership & Core Credentials</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </SpotlightCard>

          <SpotlightCard className="p-8 border-white/10 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <FiActivity /> Delivery Protocol
              </div>
              <h3 className="text-2xl font-bold text-white">Structured 4-Phase Delivery</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                From technical discovery and infrastructure health audits to strategy blueprints, zero-downtime cutover drills,
                and 24/7 production cluster telemetry.
              </p>
            </div>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 group pt-2"
            >
              <span>Explore Our 4-Phase Delivery Framework</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </SpotlightCard>
        </div>
      </section>

      {/* ─── 6. FAQ Section ─── */}
      <FAQ />

      {/* ─── 7. Global Consultation CTA Banner ─── */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/10 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FiShield /> Direct Technical Engagement
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Upgrade Your <span className="gradient-text">IT Architecture?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a direct technical consultation with our lead architect. We review your server topology,
            uptime vulnerabilities, and custom software requirements under strict NDA.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:brightness-110 transition-all shadow-xl shadow-cyan-500/25 flex items-center gap-2 cursor-pointer"
            >
              <span>Book Architecture Consultation</span>
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FiDownload size={16} className="text-cyan-400" />
              <span>Download Desktop Apps</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
