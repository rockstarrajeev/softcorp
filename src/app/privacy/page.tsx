"use client";

import Link from "next/link";
import { FiShield, FiLock, FiCheckCircle, FiArrowLeft, FiHardDrive, FiCpu, FiGlobe, FiMail } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 10, 2026";

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto relative text-slate-300">
      {/* Back to Home */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <FiArrowLeft /> Back to Softcorp Platform
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
          <FiShield /> Privacy Policy &amp; Security Compliance
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy for Softcorp Software &amp; SDM
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Softcorp Group is committed to complete data privacy and transparency. This policy outlines our absolute zero-telemetry architecture for <strong>Softcorp Download Manager (SDM)</strong>, desktop suites, browser integration extensions, and enterprise web services.
        </p>
        <div className="text-xs font-mono text-slate-500">
          Last Updated: {lastUpdated} • Entity: SOFTCORP GROUP (UDYAM-UP-50-0298723)
        </div>
      </div>

      {/* Core Privacy Guarantees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(6, 182, 212, 0.15)">
          <FiLock className="text-2xl text-cyan-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">Zero Telemetry</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We do not track, log, or transmit your downloads, browsing history, visited URLs, or system telemetry to any external server.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(16, 185, 129, 0.15)">
          <FiHardDrive className="text-2xl text-emerald-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">100% Local Storage</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All download tasks, cookies, intercepted media links, and downloaded files remain strictly on your physical machine.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(99, 102, 241, 0.15)">
          <FiCheckCircle className="text-2xl text-indigo-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">Clean Software Pledge</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Zero adware, zero bundled toolbars, zero background crypto-miners, and zero third-party monetization SDKs.
          </p>
        </SpotlightCard>
      </div>

      {/* Detailed Policy Sections */}
      <div className="space-y-8 bg-slate-900/40 border border-white/10 rounded-2xl p-6 sm:p-10 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">1.</span> Information We Do NOT Collect
          </h2>
          <p>
            When using <strong>Softcorp Download Manager (SDM)</strong>, whether downloaded via the Microsoft Windows Store or our official website:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>We do not collect or monitor the URLs, files, or streams you download.</li>
            <li>We do not collect personal identifiers, IP addresses, or device analytics.</li>
            <li>We do not use tracking cookies, analytics pixels, or third-party behavioral profiling.</li>
            <li>We do not sell, rent, or monetize user data under any circumstance.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">2.</span> Application Permissions &amp; Technical Usage
          </h2>
          <p>
            SDM requests standard Windows operating system capabilities to perform its core download functions:
          </p>
          <div className="space-y-3 pt-1">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">internetClient &amp; privateNetworkClientServer</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Required exclusively to establish outgoing multi-threaded HTTP Range socket connections directly between your computer and the host server providing your download, and for local loopback communication (127.0.0.1) between the desktop interface and background engine.
              </span>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">runFullTrust (MSIX Desktop Bridge)</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Required for high-speed multi-part file allocation, sparse disk writing, background system tray daemon management, and executing bundled media multiplexers (FFmpeg).
              </span>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">Browser Extension Integration (Manifest V3)</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                The optional browser extension uses <code>webRequest</code> and native messaging solely to detect media streams in the active browser tab and dispatch the download URL to the local SDM engine at your command.
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">3.</span> Copyright &amp; Fair Use Responsibility
          </h2>
          <p>
            Softcorp Download Manager is an open, general-purpose utility designed for accelerating file transfers, managing personal media, and archiving authorized content. Users are responsible for complying with the copyright policies and Terms of Service of the respective platforms from which they download content. SDM does not bypass digital rights management (DRM) or encryption mechanisms.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">4.</span> Microsoft Windows Store Policy Compliance
          </h2>
          <p>
            SDM complies fully with Microsoft Store Certification Requirements (Policy 10.x):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>Policy 10.1 (Distinct Functionality):</strong> Real-time 32-socket acceleration, resumable checkpoints, and integrated multiplexing.</li>
            <li><strong>Policy 10.2 (Security &amp; Clean Uninstall):</strong> Standalone self-contained package with clean, residue-free uninstallation.</li>
            <li><strong>Policy 10.5 (Customer Privacy):</strong> Full transparency with zero unauthorized background data transmission.</li>
            <li><strong>Policy 10.8 (Financial Transparency):</strong> 100% Free &amp; Unrestricted Edition with zero hidden subscriptions or paywalls.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">5.</span> Enterprise Identity &amp; Contact
          </h2>
          <p>
            For privacy inquiries, technical support, or enterprise licensing:
          </p>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 space-y-1 text-xs">
            <div><strong className="text-white">Legal Entity:</strong> SOFTCORP GROUP</div>
            <div><strong className="text-white">Enterprise Registration:</strong> UDYAM-UP-50-0298723 (Govt. of India MSME)</div>
            <div><strong className="text-white">Registered Headquarters:</strong> Chinhat, Dewa Road, Lucknow, Uttar Pradesh - 226028, India</div>
            <div><strong className="text-white">Support Email:</strong> <a href="mailto:softcorp@wesoftcorp.com" className="text-cyan-400 underline">softcorp@wesoftcorp.com</a></div>
            <div><strong className="text-white">Official Website:</strong> <a href="https://wesoftcorp.com" className="text-cyan-400 underline">https://wesoftcorp.com</a></div>
          </div>
        </section>
      </div>
    </div>
  );
}

