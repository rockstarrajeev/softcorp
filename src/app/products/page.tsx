"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiDownload,
  FiShield,
  FiZap,
  FiCheck,
  FiX,
  FiCopy,
  FiExternalLink,
  FiCpu,
  FiStar,
  FiArrowRight,
  FiKey,
  FiCheckCircle,
  FiHelpCircle
} from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SOFTWARE_PRODUCTS, SoftwareProduct, generateProductLicense } from "@/lib/products";

export default function ProductsPage() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [selectedProduct, setSelectedProduct] = useState<SoftwareProduct | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [paymentTab, setPaymentTab] = useState<"paypal" | "upi">("paypal");

  // Form State
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Completed Order State
  const [completedLicenseKey, setCompletedLicenseKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const openCheckout = (product: SoftwareProduct) => {
    setSelectedProduct(product);
    setCheckoutModalOpen(true);
    setErrorMessage("");
    setCompletedLicenseKey(null);
    setPaymentTab(currency === "INR" ? "upi" : "paypal");
  };

  const handlePayPalSubmit = async () => {
    if (!customerEmail || !customerEmail.includes("@")) {
      setErrorMessage("Please enter a valid email address to receive your license key.");
      return;
    }

    if (!selectedProduct) return;

    setIsProcessing(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/products/paypal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selectedProduct.id,
          customerName: customerName || "Licensed Customer",
          customerEmail,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.approveUrl) {
        throw new Error(data.error || "Unable to initiate PayPal checkout.");
      }

      // Redirect to PayPal approval page
      window.location.href = data.approveUrl;
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "PayPal connection error.");
      setIsProcessing(false);
    }
  };

  const handleUpiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail || !customerEmail.includes("@")) {
      setErrorMessage("Please enter a valid email address for license issuance.");
      return;
    }

    if (!utrNumber || utrNumber.trim().length < 8) {
      setErrorMessage("Please enter a valid 12-digit UPI UTR / Transaction Reference Number.");
      return;
    }

    if (!selectedProduct) return;

    setIsProcessing(true);
    // Instant simulation/generation of official license key with logging
    setTimeout(() => {
      const license = generateProductLicense(selectedProduct.id);
      setCompletedLicenseKey(license);
      setIsProcessing(false);
    }, 1200);
  };

  const copyLicense = () => {
    if (completedLicenseKey) {
      navigator.clipboard.writeText(completedLicenseKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2500);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* ─── Hero Section ─── */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
          <FiCpu className="animate-spin-slow" /> Softcorp Commercial Software Suite
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          High-Performance Desktop Engines,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
            Engineered for Creators.
          </span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Zero bloat. Hardware-accelerated execution. Standalone Windows installers with
          lifetime licenses and no recurring subscription traps.
        </p>

        {/* Currency Switcher */}
        <div className="pt-4 flex items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Pricing Currency:</span>
          <div className="inline-flex rounded-lg border border-white/10 bg-slate-900/80 p-1">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                currency === "USD"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              $ USD (International)
            </button>
            <button
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                currency === "INR"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ₹ INR (India UPI / Cards)
            </button>
          </div>
        </div>
      </div>

      {/* ─── Products Grid (2x2 Multi-Product Matrix) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SOFTWARE_PRODUCTS.map((product) => {
          const isSDM = product.id === "sdm";
          const isTradeboard = product.id === "tradeboard";
          const isSpectrum = product.id === "spectrum";
          const isMelodrift = product.id === "melodrift";
          const displayPrice = currency === "USD" ? `$${product.usdPrice}` : `₹${product.inrPrice}`;

          let badgeStyle = "border-cyan-500/40 bg-cyan-500/10 text-cyan-300";
          let spotlightColor = "rgba(6, 182, 212, 0.15)";
          let btnGradient = "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950";

          if (isTradeboard) {
            badgeStyle = "border-indigo-500/40 bg-indigo-500/10 text-indigo-300";
            spotlightColor = "rgba(99, 102, 241, 0.18)";
            btnGradient = "bg-gradient-to-r from-indigo-500 to-blue-600 text-white";
          } else if (isSpectrum) {
            badgeStyle = "border-sky-500/40 bg-sky-500/10 text-sky-300";
            spotlightColor = "rgba(14, 165, 233, 0.16)";
            btnGradient = "bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950";
          } else if (isMelodrift) {
            badgeStyle = "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
            spotlightColor = "rgba(16, 185, 129, 0.16)";
            btnGradient = "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950";
          }

          return (
            <SpotlightCard
              key={product.id}
              className={`flex flex-col justify-between p-7 relative transition-all duration-300 ${
                isSDM ? "border-cyan-500/40 ring-1 ring-cyan-500/20" : "border-white/10"
              }`}
              spotlightColor={spotlightColor}
            >
              <div className="space-y-6">
                {/* Header & Badges */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badgeStyle}`}
                  >
                    {product.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <FiStar className="fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-500 font-normal">({product.downloadsCount})</span>
                  </div>
                </div>

                {/* Product Name & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{product.name}</h3>
                  <div className="text-xs text-cyan-400/80 font-mono mt-0.5">
                    {product.version} • {product.platform}
                  </div>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                    {product.tagline}
                  </p>
                </div>

                {/* Pricing Block */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Lifetime License</span>
                    <span className="text-3xl font-extrabold text-white tracking-tight">
                      {displayPrice}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">/ one-time</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    {isTradeboard ? "Self-Hosted Core" : isSDM ? "Free Trial Included" : "Store Version Ready"}
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Capabilities
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {product.features.slice(0, 6).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FiCheck className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Specs Table */}
                <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px]">
                  {product.specs.slice(0, 4).map((spec, idx) => (
                    <div key={idx} className="bg-slate-950/40 p-2 rounded border border-white/5">
                      <div className="text-slate-500">{spec.label}</div>
                      <div className="text-slate-200 font-medium truncate">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5">
                {/* Primary: Buy License */}
                <button
                  type="button"
                  onClick={() => openCheckout(product)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 shadow-lg hover:brightness-110 ${btnGradient}`}
                >
                  <FiKey size={16} /> Buy Lifetime Pro ({displayPrice})
                </button>

                {/* Secondary: Download / Store / Docs / Web & Dashboard */}
                {isMelodrift ? (
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={product.webUrl || "https://melodrift.rajeevupadhyay.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <FiExternalLink size={13} /> Launch Player
                      </a>
                      <a
                        href={product.dashboardUrl || "https://melodash.wesoftcorp.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl font-semibold text-xs text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <FiExternalLink size={13} /> Dashboard
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 pt-0.5">
                      <a
                        href={product.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1"
                      >
                        <FiExternalLink size={11} /> Microsoft Store
                      </a>
                      <span>•</span>
                      <a
                        href={product.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 underline underline-offset-2 flex items-center gap-1"
                      >
                        <FiExternalLink size={11} /> Google Play
                      </a>
                    </div>
                  </div>
                ) : (
                  <a
                    href={product.downloadUrl}
                    download={isSDM ? product.installerFileName : undefined}
                    target={!isSDM ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {isSDM && <FiDownload size={14} />}
                    {isTradeboard && <FiExternalLink size={14} />}
                    {isSpectrum && <FiExternalLink size={14} />}
                    <span>
                      {isSDM && "Download Free Trial (.exe, 133 MB)"}
                      {isTradeboard && "Open Documentation & Quickstart"}
                      {isSpectrum && "Get on Microsoft Store (Verified)"}
                    </span>
                  </a>
                )}
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* ─── Enterprise Credibility & Compliance Banner ─── */}
      <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="space-y-1">
          <FiShield className="text-cyan-400 text-2xl mx-auto mb-2" />
          <h4 className="text-white font-bold text-sm">Hardware-Bound DRM</h4>
          <p className="text-slate-400 text-xs">
            Tamper-proof cryptographic verification bound to your machine. Zero account lock-in.
          </p>
        </div>
        <div className="space-y-1">
          <FiZap className="text-emerald-400 text-2xl mx-auto mb-2" />
          <h4 className="text-white font-bold text-sm">100% Clean Software</h4>
          <p className="text-slate-400 text-xs">
            Zero adware, zero spyware, and no background telemetry. Pure native execution.
          </p>
        </div>
        <div className="space-y-1">
          <FiCheckCircle className="text-teal-400 text-2xl mx-auto mb-2" />
          <h4 className="text-white font-bold text-sm">30-Day Money-Back</h4>
          <p className="text-slate-400 text-xs">
            Not completely satisfied? Email softcorp@wesoftcorp.com for an immediate full refund.
          </p>
        </div>
      </div>

      {/* ─── Multi-Option Checkout Modal ─── */}
      <AnimatePresence>
        {checkoutModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setCheckoutModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <FiX size={18} />
              </button>

              {/* Modal Content: Completed License View */}
              {completedLicenseKey ? (
                <div className="space-y-6 text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <FiCheckCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">License Key Activated!</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Thank you for purchasing {selectedProduct.name}. Your license is ready.
                    </p>
                  </div>

                  {/* License Key Box */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/40 text-left space-y-2">
                    <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider flex justify-between">
                      <span>Pro Lifetime Serial</span>
                      <span className="text-emerald-400">Verified</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 bg-white/5 px-3 py-2 rounded border border-white/10 font-mono text-base font-bold text-white tracking-widest">
                      <span>{completedLicenseKey}</span>
                      <button
                        type="button"
                        onClick={copyLicense}
                        className="text-cyan-400 hover:text-cyan-300 p-1.5 rounded hover:bg-white/10 transition-colors"
                        title="Copy Key"
                      >
                        {copiedKey ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                      </button>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Also delivered to: <span className="text-slate-300 font-mono">{customerEmail}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={selectedProduct.downloadUrl}
                      download={selectedProduct.id === "sdm" ? selectedProduct.installerFileName : undefined}
                      target={selectedProduct.id !== "sdm" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/25"
                    >
                      {selectedProduct.id === "sdm" ? <FiDownload size={16} /> : <FiExternalLink size={16} />}
                      {selectedProduct.id === "sdm"
                        ? `Download Installer (${selectedProduct.installerFileName})`
                        : selectedProduct.id === "tradeboard"
                        ? "Open Tradeboard Documentation & Platform"
                        : selectedProduct.id === "melodrift"
                        ? "Launch Melodrift Web Player"
                        : "Open Microsoft Store / App Portal"}
                    </a>
                    <button
                      type="button"
                      onClick={() => setCheckoutModalOpen(false)}
                      className="w-full py-2.5 text-xs text-slate-400 hover:text-white"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                /* Modal Content: Checkout Form */
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Order {selectedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                      <span>One-Time Lifetime License</span>
                      <span className="font-bold text-white text-base">
                        {currency === "USD" ? `$${selectedProduct.usdPrice} USD` : `₹${selectedProduct.inrPrice} INR`}
                      </span>
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Rajeev Upadhyay"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Delivery Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="softcorp@wesoftcorp.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                      <span className="text-[11px] text-slate-500 mt-0.5 block">
                        Your license key and invoice will be sent to this email.
                      </span>
                    </div>
                  </div>

                  {/* Payment Gateway Tabs */}
                  <div className="space-y-3">
                    <label className="text-xs font-medium text-slate-300 block">
                      Select Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentTab("paypal")}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          paymentTab === "paypal"
                            ? "border-cyan-500 bg-cyan-500/10 text-cyan-300"
                            : "border-white/10 bg-slate-950/60 text-slate-400 hover:text-white"
                        }`}
                      >
                        <FaPaypal className="text-[#00457C]" size={22} />
                        <span className="text-xs font-bold">PayPal / Cards</span>
                        <span className="text-[10px] text-slate-500">Global (USD)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentTab("upi")}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          paymentTab === "upi"
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                            : "border-white/10 bg-slate-950/60 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="font-bold text-emerald-400 text-sm">UPI Instant</span>
                        <span className="text-xs font-bold">GPay / PhonePe / Paytm</span>
                        <span className="text-[10px] text-slate-500">India (INR ₹)</span>
                      </button>
                    </div>
                  </div>

                  {/* Tab Details */}
                  {paymentTab === "paypal" ? (
                    <div className="space-y-4 p-4 rounded-xl bg-slate-950/50 border border-white/5 text-xs text-slate-400">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <FaPaypal /> Instant PayPal Checkout
                      </div>
                      <p>
                        Pay securely with your PayPal account or any International Credit/Debit Card
                        (Visa, Mastercard, Amex).
                      </p>
                      <button
                        type="button"
                        onClick={handlePayPalSubmit}
                        disabled={isProcessing}
                        className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-[#0070BA] hover:bg-[#005ea6] text-white flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-50"
                      >
                        {isProcessing ? "Connecting to PayPal..." : `Proceed to PayPal ($${selectedProduct.usdPrice})`}
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleUpiSubmit}
                      className="space-y-4 p-4 rounded-xl bg-slate-950/50 border border-emerald-500/20 text-xs"
                    >
                      <div className="flex items-center justify-between text-emerald-400 font-semibold">
                        <span>Direct UPI Scan & Pay</span>
                        <span className="font-mono text-sm font-bold">₹{selectedProduct.inrPrice}</span>
                      </div>

                      {/* UPI QR & VPA Box */}
                      <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[11px] text-slate-500">Official Merchant VPA / UPI ID:</div>
                          <div className="font-mono text-sm font-bold text-white select-all">
                            softcorp@wesoftcorp.com
                          </div>
                          <div className="text-[10px] text-emerald-400 mt-0.5">
                            Verified Business: Softcorp Group (MSME)
                          </div>
                        </div>
                        <div className="shrink-0 p-1.5 rounded bg-white">
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=${encodeURIComponent(
                              `upi://pay?pa=softcorp@wesoftcorp.com&pn=Softcorp%20Group&am=${selectedProduct.inrPrice}&cu=INR`
                            )}`}
                            alt="UPI QR Code"
                            className="w-16 h-16"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-medium text-slate-300 block mb-1">
                          Enter 12-Digit UPI UTR / Reference ID <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={utrNumber}
                          onChange={(e) => setUtrNumber(e.target.value)}
                          placeholder="e.g. 429381928374"
                          className="w-full px-3 py-2 rounded bg-slate-950 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                      >
                        {isProcessing ? "Verifying Transaction..." : `Confirm Payment & Unlock Key`}
                      </button>
                    </form>
                  )}

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      {errorMessage}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
