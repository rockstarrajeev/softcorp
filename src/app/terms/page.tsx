"use client";

import Link from "next/link";
import { FiFileText, FiShield, FiCheckCircle, FiArrowLeft, FiAlertTriangle, FiCpu, FiGlobe, FiMail } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function TermsOfServicePage() {
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
          <FiFileText /> Legal Terms &amp; End User License Agreement (EULA)
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms of Service &amp; EULA
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          These Terms of Service and End User License Agreement (&quot;Agreement&quot;) constitute a legally binding agreement between you and <strong>SOFTCORP GROUP</strong> governing your access to and use of <strong>Softcorp Download Manager (SDM)</strong>, desktop applications, browser companion extensions, and associated web services.
        </p>
        <div className="text-xs font-mono text-slate-500">
          Last Updated: {lastUpdated} • Entity: SOFTCORP GROUP (UDYAM-UP-50-0298723)
        </div>
      </div>

      {/* Core Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(6, 182, 212, 0.15)">
          <FiCheckCircle className="text-2xl text-cyan-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">100% Free &amp; Open</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            SDM is distributed completely free of charge. No subscriptions, no mandatory product keys, and no feature paywalls.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(245, 158, 11, 0.15)">
          <FiShield className="text-2xl text-amber-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">Lawful Use Only</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            You agree to download only content you own, have licensed, or that is freely accessible in the public domain.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-6 border border-white/10" spotlightColor="rgba(99, 102, 241, 0.15)">
          <FiCpu className="text-2xl text-indigo-400 mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5">Zero Telemetry</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All file transfers, URLs, and temporary chunks remain strictly on your local computer. We do not track what you download.
          </p>
        </SpotlightCard>
      </div>

      {/* Detailed Legal Sections */}
      <div className="space-y-8 bg-slate-900/40 border border-white/10 rounded-2xl p-6 sm:p-10 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">1.</span> License Grant &amp; Scope of Use
          </h2>
          <p>
            Softcorp Group grants you a personal, worldwide, non-exclusive, non-transferable, royalty-free revocable license to install, execute, and use Softcorp Download Manager (SDM) on compatible personal computers running Microsoft Windows 10/11.
          </p>
          <p>
            This license permits both personal and commercial use of the software for general file downloading, network connection acceleration, and local media caching, subject strictly to the conditions set forth herein.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">2.</span> Copyright Compliance &amp; Third-Party Rights (Store Policy 10.7)
          </h2>
          <p>
            Softcorp Download Manager is engineered as a neutral, general-purpose network utility and HTTP Range socket accelerator. In accordance with applicable intellectual property laws and Microsoft Store Certification Policies:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              <strong>User Responsibility:</strong> You are solely responsible for verifying that your use of SDM to download, store, or cache any file, video, audio track, or stream complies with all applicable copyright, intellectual property, and privacy laws.
            </li>
            <li>
              <strong>Third-Party Terms of Service:</strong> You agree to comply with the terms of service, acceptable use policies, and access restrictions of any website, cloud provider, or content delivery network (CDN) from which you initiate downloads.
            </li>
            <li>
              <strong>No DRM or TPM Circumvention:</strong> SDM does <em>not</em> decrypt, bypass, or circumvent Digital Rights Management (DRM) technologies (including Widevine, FairPlay, PlayReady, or encrypted content streams). Any attempt to use the Software to circumvent access control or copy protection mechanisms is strictly unauthorized and terminates this license immediately.
            </li>
            <li>
              <strong>Neutral Technology:</strong> Softcorp Group does not host, index, or distribute third-party copyrighted files, streams, or media libraries.
            </li>
          </ul>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">3.</span> Prohibited Activities
          </h2>
          <p>You expressly agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>Repackage, bundle, or distribute SDM with malware, spyware, adware, toolbars, or unwanted third-party software.</li>
            <li>Sell, rent, or lease SDM for financial compensation without express written agreement from Softcorp Group.</li>
            <li>Reverse engineer, decompile, or disassemble the binary executables except to the extent expressly permitted by applicable law.</li>
            <li>Use the Software to initiate denial-of-service (DoS) attacks, flood servers, or overwhelm third-party web infrastructure.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">4.</span> Microsoft Windows Store Terms
          </h2>
          <p>
            When downloaded through the Microsoft Windows Store, this application is distributed under the Microsoft Standard Application License Terms (SALT) supplemented by these Terms. In the event of a conflict between these Terms and Microsoft Store Policies, Microsoft Store Policies shall govern.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">5.</span> Privacy &amp; Data Protection (Store Policy 10.5)
          </h2>
          <p>
            SDM adheres strictly to a zero-telemetry architecture. The software does not track, store, or transmit your URLs, downloaded files, network tokens, or browser cookies to remote servers. All application operations and checkpoints remain strictly local on your machine.
          </p>
          <p>
            For full details on data handling and system capabilities, please review our official <Link href="/privacy" className="text-cyan-400 underline hover:text-cyan-300">Privacy Policy</Link>.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">6.</span> Disclaimer of Warranties
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed uppercase">
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OPERATIONAL STABILITY, AND NON-INFRINGEMENT. SOFTCORP GROUP DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE SOFTWARE WILL MEET YOUR REQUIREMENTS OR THAT THE OPERATION OF THE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">7.</span> Limitation of Liability
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed uppercase">
            IN NO EVENT SHALL SOFTCORP GROUP, RAJEEV UPADHYAY, OR ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM THE USE OF OR INABILITY TO USE THE SOFTWARE, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF GOODWILL, WORK STOPPAGE, COMPUTER FAILURE, LOSS OF DATA, OR SERVER THROTTONG IMPOSED BY THIRD-PARTY HOSTS.
          </p>
        </section>

        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">8.</span> Governing Law &amp; Legal Entity
          </h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh, India.
          </p>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 space-y-1 text-xs mt-3">
            <div><strong className="text-white">Legal Entity:</strong> SOFTCORP GROUP</div>
            <div><strong className="text-white">Enterprise Registration:</strong> UDYAM-UP-50-0298723 (Govt. of India MSME)</div>
            <div><strong className="text-white">Chief Architect:</strong> Rajeev Upadhyay</div>
            <div><strong className="text-white">Registered Headquarters:</strong> Chinhat, Dewa Road, Lucknow, Uttar Pradesh - 226028, India</div>
            <div><strong className="text-white">Legal Email:</strong> <a href="mailto:softcorp@wesoftcorp.com" className="text-cyan-400 underline">softcorp@wesoftcorp.com</a></div>
            <div><strong className="text-white">Official Website:</strong> <a href="https://wesoftcorp.com" className="text-cyan-400 underline">https://wesoftcorp.com</a></div>
          </div>
        </section>
      </div>
    </div>
  );
}

