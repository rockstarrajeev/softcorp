"use client";

import Link from "next/link";
import { FiShield, FiLock, FiCheckCircle, FiArrowLeft, FiHardDrive, FiCpu, FiGlobe, FiMail } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function SDMPrivacyPage() {
  const lastUpdated = "November 10, 2026";

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto relative text-slate-300">
      {/* Back to Products */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <FiArrowLeft /> Back to Softcorp Products
        </Link>
        <Link
          href="/terms"
          className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          Terms of Service &amp; EULA ↗
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
          <FiShield /> Official Product Privacy Policy
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy for Softcorp Download Manager (SDM) &amp; Browser Extension
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          This privacy policy specifically governs <strong>Softcorp Download Manager (SDM)</strong>, including the Windows Desktop Application, the Microsoft Edge Add-on, and the Google Chrome Extension. Softcorp Group operates under an uncompromising <strong>zero-telemetry and privacy-by-design</strong> architecture.
        </p>
        <div className="text-xs font-mono text-slate-500">
          Last Updated: {lastUpdated} • Product: SDM v1.1.1 (Desktop &amp; MV3 Extension) • Entity: SOFTCORP GROUP (UDYAM-UP-50-0298723)
        </div>
      </div>

      {/* Core Privacy Guarantees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(6, 182, 212, 0.15)">
          <FiLock className="text-2xl text-cyan-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">Zero Remote Telemetry</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We do not log, track, or transmit your URLs, download history, search terms, or device analytics to any remote server.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(16, 185, 129, 0.15)">
          <FiHardDrive className="text-2xl text-emerald-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">100% Local Execution</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All file interception, media stream extraction, and socket allocation happen strictly between your browser and local desktop engine (127.0.0.1).
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(99, 102, 241, 0.15)">
          <FiCheckCircle className="text-2xl text-indigo-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">No Data Monetization</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Zero adware, zero third-party monetization SDKs, zero user profiling, and zero sale or sharing of user information.
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
            When you install and use the <strong>Softcorp Download Manager (SDM)</strong> browser extension or Windows desktop software:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>No Browsing History:</strong> We do not track, collect, or store the websites you browse or visit.</li>
            <li><strong>No Download Content Tracking:</strong> We do not monitor, log, or record the files, videos, audio tracks, or documents you download.</li>
            <li><strong>No Personal Identifiers:</strong> We do not collect names, email addresses, IP addresses, or device hardware IDs.</li>
            <li><strong>No Account Required:</strong> SDM is 100% Free and requires zero account creation, registration, or logins.</li>
            <li><strong>No Data Sales:</strong> We never sell, rent, or transfer user information to third-party data brokers or advertisers.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">2.</span> Browser Extension Permissions &amp; Technical Usage
          </h2>
          <p>
            The SDM Browser Extension (Manifest V3) requests specific browser permissions solely to deliver core acceleration and stream grabber features:
          </p>
          <div className="space-y-3 pt-1">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">webRequest</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Used strictly on your local machine to inspect outgoing network headers in active tabs to detect media streaming manifests (HLS <code>.m3u8</code>, MPEG-DASH <code>.mpd</code>, and direct video streams) playing in your active tab. Media URLs are never sent to external servers.
              </span>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">nativeMessaging (com.softcorp.sdm)</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Enables secure, zero-latency local communication (stdio IPC) between your browser and the installed Windows SDM desktop application. When you click &quot;Download with SDM&quot;, the download task is passed directly to your local application with zero browser popups.
              </span>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">cookies</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Required exclusively to forward session cookies for user-authorized private downloads to your local desktop engine, ensuring authenticated file downloads succeed without 401/403 authorization errors. Cookies are stored only in your local download checkpoint.
              </span>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">storage</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Saves your personal extension settings (such as floating grabber toggle and format preferences) in the browser&apos;s local storage.
              </span>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">tabs &amp; activeTab</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Allows the extension to attach the floating &quot;Download This Video&quot; banner over active video player elements in your current tab.
              </span>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <strong className="text-white block font-mono text-xs text-cyan-300">&lt;all_urls&gt; (Host Permissions)</strong>
              <span className="text-xs text-slate-400 mt-1 block">
                Required so the universal video grabber and download accelerator can capture authorized media and file downloads across any website you choose to browse.
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">3.</span> Microsoft Edge Add-ons &amp; Store Compliance
          </h2>
          <p>
            This extension is engineered in full compliance with the <strong>Microsoft Edge Add-ons Developer Policies</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>Single Purpose:</strong> Serving exclusively as a download accelerator and media stream companion.</li>
            <li><strong>User Data Disclosure:</strong> Does not collect or transmit personal user data or telemetry.</li>
            <li><strong>Security:</strong> Contains zero remote script loading, zero obfuscated code, and zero <code>eval()</code> calls.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">4.</span> Copyright &amp; Fair Use
          </h2>
          <p>
            Softcorp Download Manager is a neutral utility for accelerating file transfers, managing personal media, and archiving authorized or public-domain content. Users are responsible for complying with the Terms of Service and copyright policies of content hosts. SDM does not bypass digital rights management (DRM) or encryption mechanisms.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">5.</span> Entity &amp; Contact Details
          </h2>
          <p>
            For privacy inquiries, security questions, or support:
          </p>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 space-y-1 text-xs">
            <div><strong className="text-white">Legal Entity:</strong> SOFTCORP GROUP</div>
            <div><strong className="text-white">Enterprise Registration:</strong> UDYAM-UP-50-0298723 (Govt. of India MSME)</div>
            <div><strong className="text-white">Chief Architect:</strong> Rajeev Upadhyay</div>
            <div><strong className="text-white">Headquarters:</strong> Chinhat, Dewa Road, Lucknow, Uttar Pradesh - 226028, India</div>
            <div><strong className="text-white">Support &amp; Privacy Email:</strong> <a href="mailto:softcorp@wesoftcorp.com" className="text-cyan-400 underline">softcorp@wesoftcorp.com</a></div>
            <div><strong className="text-white">Official Website:</strong> <a href="https://wesoftcorp.com" className="text-cyan-400 underline">https://wesoftcorp.com</a></div>
          </div>
        </section>
      </div>
    </div>
  );
}
