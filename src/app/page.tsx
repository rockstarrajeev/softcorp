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
                High-Performance <span className="gradient-text-animated">Software Suite</span>
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
            {SOFTWARE_PRODUCTS.map((product, idx) => {
              const isSDM = product.id === "sdm";
              const isTradeboard = product.id === "tradeboard";
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full flex"
                >
                    <SpotlightCard
                    className="p-7 flex flex-col justify-between border-white/10 w-full"
                    spotlightColor={isSDM ? "rgba(245, 158, 11, 0.2)" : isTradeboard ? "rgba(99, 102, 241, 0.18)" : "rgba(16, 185, 129, 0.15)"}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${
                          isSDM
                            ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                            : "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                        }`}>
                          {isSDM && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                          )}
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
                          {product.isComingSoonBeta ? (
                            <div>
                              <span className="text-amber-400 font-bold block text-[10px] uppercase tracking-wide">
                                Beta Testing Phase
                              </span>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-lg font-bold text-amber-300">COMING SOON</span>
                              </div>
                            </div>
                          ) : product.isLimitedTimeFree ? (
                            <div>
                              <span className="text-amber-400 font-bold block text-[10px] uppercase tracking-wide">
                                Limited Free Access
                              </span>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-lg font-bold text-emerald-400">FREE</span>
                                <span className="text-xs text-slate-500 line-through">
                                  ${product.originalUsdPrice}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <span className="text-slate-500 block">Lifetime Pro</span>
                              <span className="text-lg font-bold text-white">${product.usdPrice}</span>
                              <span className="text-slate-500 text-[11px] ml-1">/ ₹{product.inrPrice}</span>
                            </div>
                          )}
                        </div>
                        <span className={`text-[11px] px-2 py-0.5 rounded border ${
                          product.isComingSoonBeta
                            ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                            : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                        }`}>
                          {product.isComingSoonBeta
                            ? "Beta Testing"
                            : product.isLimitedTimeFree
                            ? "Showcase Special"
                            : isTradeboard
                            ? "Self-Hosted Core"
                            : "Free Trial Included"}
                        </span>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2">
                      <Link
                        href="/products"
                        className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center justify-center gap-2 transition-all shine-sweep"
                      >
                        <FiDownload size={13} className={isSDM ? "text-amber-400" : ""} />
                        {isSDM ? "Download Beta (.exe)" : isTradeboard ? "Docs & Platform" : product.id === "spectrum" ? "Microsoft Store" : product.id === "melodrift" ? "Launch Web Player" : "Get Software"}
                      </Link>
                      <Link
                        href="/products"
                        className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 hover:brightness-110 shadow-md shrink-0 shine-sweep card-lift ${
                          product.isComingSoonBeta
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20"
                            : "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-cyan-500/20"
                        }`}
                      >
                        <FiKey size={13} /> {product.isComingSoonBeta ? "Join Beta" : product.isLimitedTimeFree ? "Claim" : "Buy"}
                      </Link>
                    </div>
                  </SpotlightCard>
                </motion.div>
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
                Enterprise Infrastructure & <span className="gradient-text-animated">Cloud Systems</span>
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
            {[
              {
                icon: FiServer,
                iconColor: "text-cyan-400",
                iconBg: "bg-cyan-500/10 border-cyan-500/20",
                title: "IT Infrastructure & HA Clusters",
                desc: "Zabbix telemetry, 24/7 server monitoring, Linux clustering, and proactive anomaly detection with 99.99% uptime SLAs.",
                link: "/services",
                linkText: "Learn more",
                linkColor: "text-cyan-400"
              },
              {
                icon: FiCloud,
                iconColor: "text-emerald-400",
                iconBg: "bg-emerald-500/10 border-emerald-500/20",
                title: "Multi-Cloud & DevSecOps",
                desc: "Zero-downtime migrations between AWS, Azure, and Oracle Cloud with automated CI/CD pipelines and hardened security.",
                link: "/services",
                linkText: "Learn more",
                linkColor: "text-emerald-400"
              },
              {
                icon: FiCpu,
                iconColor: "text-blue-400",
                iconBg: "bg-blue-500/10 border-blue-500/20",
                title: "Custom Software Engineering",
                desc: "Full-cycle high-concurrency backend microservices, real-time WebSockets, and resilient enterprise web architecture.",
                link: "/services",
                linkText: "Learn more",
                linkColor: "text-blue-400"
              },
              {
                icon: FiZap,
                iconColor: "text-teal-400",
                iconBg: "bg-teal-500/10 border-teal-500/20",
                title: "Applied AI & Automation",
                desc: "Multi-agent LLM systems, deterministic invoice/document parsing, and autonomous business process automation.",
                link: "/ai-solutions",
                linkText: "Explore AI",
                linkColor: "text-teal-400"
              }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpotlightCard className="p-6 border-white/10 space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl ${cap.iconBg} border flex items-center justify-center ${cap.iconColor}`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                    <Link href={cap.link} className={`text-xs font-semibold ${cap.linkColor} hover:underline inline-flex items-center gap-1 pt-2`}>
                      {cap.linkText} <FiArrowRight size={11} />
                    </Link>
                  </SpotlightCard>
                </motion.div>
              );
            })}
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
                Enterprise <span className="gradient-text-animated">Impact & Metrics</span>
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
            {[
              {
                metric: "99.4%",
                grad: "from-cyan-400 to-teal-400",
                labelColor: "text-cyan-400",
                label: "Downtime Cut in Q1",
                title: "Global Aviation Cargo Carrier",
                desc: "Eliminated recurring legacy server crashes and automated anomaly failovers across international logistics facilities.",
              },
              {
                metric: "10x",
                grad: "from-emerald-400 to-teal-400",
                labelColor: "text-emerald-400",
                label: "Processing Speedup",
                title: "Autonomous AI Document Pipeline",
                desc: "Scrapped 40+ hours per week of manual invoice reconciliation using multi-modal LLM vector parsers.",
              },
              {
                metric: "40%",
                grad: "from-blue-400 to-indigo-400",
                labelColor: "text-blue-400",
                label: "Cloud Cost Reduction",
                title: "Zero-Downtime Multi-Cloud Migration",
                desc: "Migrated 200+ microservices from aging on-prem hardware into a unified AWS/Azure hybrid VPC with zero customer downtime.",
              },
            ].map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-8 border-white/10 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${cs.grad}`}>
                      {cs.metric}
                    </span>
                    <div className={`text-xs font-mono ${cs.labelColor} uppercase tracking-wider`}>
                      {cs.label}
                    </div>
                    <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {cs.desc}
                    </p>
                  </div>
                  <Link href="/case-studies" className="text-xs text-slate-300 hover:text-white font-semibold inline-flex items-center gap-1 pt-2">
                    View study <FiArrowRight size={11} />
                  </Link>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Executive Leadership & Process Link ─── */}
      <section className="py-20 relative bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard className="p-8 border-white/10 space-y-5 flex flex-col justify-between h-full">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard className="p-8 border-white/10 space-y-5 flex flex-col justify-between h-full">
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
          </motion.div>
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
            Ready to Upgrade Your <span className="gradient-text-animated">IT Architecture?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a direct technical consultation with our lead architect. We review your server topology,
            uptime vulnerabilities, and custom software requirements under strict NDA.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:brightness-110 transition-all shadow-xl shadow-cyan-500/25 flex items-center gap-2 cursor-pointer shine-sweep card-lift"
            >
              <span>Book Architecture Consultation</span>
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all flex items-center gap-2 cursor-pointer shine-sweep card-lift"
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
