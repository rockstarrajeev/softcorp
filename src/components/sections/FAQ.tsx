"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

const faqs = [
  {
    q: "What is Softcorp's uptime SLA and infrastructure guarantee?",
    a: "We architect mission-critical systems targeting a 99.99% uptime SLA. By implementing redundant multi-region keepalived clusters, continuous Zabbix telemetry, and automated health checks, we eliminate single points of failure across your entire infrastructure.",
  },
  {
    q: "How quickly can your team audit and onboard our existing architecture?",
    a: "We initiate comprehensive discovery audits within 24 to 48 hours. Our read-only assessment captures your server topology, resource bottlenecks, and security posture without causing any downtime or disruption to production workloads.",
  },
  {
    q: "How do you guarantee proprietary data confidentiality in AI deployments?",
    a: "We enforce strict zero-data-retention policies. All models and vector databases are deployed inside dedicated Virtual Private Clouds (VPC) or on-premise enclaves with AES-256 encryption, role-based access control, and full SOC2/ISO compliance logging.",
  },
  {
    q: "Can Softcorp integrate seamlessly with our existing DevOps and engineering team?",
    a: "Absolutely. We actively collaborate with internal engineering teams, integrating with your existing CI/CD pipelines (GitHub Actions, GitLab), ticketing systems (Jira, ServiceNow), and communication channels (Slack, Teams) for frictionless collaboration.",
  },
  {
    q: "What global timezones and geographic regions do you support?",
    a: "SOFTCORP GROUP is a Government of India registered MSME Micro Enterprise (UDYAM-UP-50-0298723) with registered headquarters in Lucknow, India. We provide active enterprise operational coverage across North America, Europe (GMT/CET), the UAE, India, and the Asia-Pacific region, backed by 24/7 telemetry monitoring.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FiHelpCircle /> Transparent Answers
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Frequently Asked <span className="gradient-text-animated">Questions</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Everything you need to know about our enterprise IT SLAs, AI security boundaries, and collaboration models.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard
                  className={`transition-all duration-300 ${
                    isOpen ? "border-cyan-500/40 bg-slate-900/80 shadow-lg shadow-cyan-500/10" : "border-white/5 bg-slate-950/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-cyan-500/20 text-cyan-300 rotate-180"
                          : "bg-white/5 text-slate-400"
                      }`}
                    >
                      <FiChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
