"use client";

import { useState, useEffect } from "react";
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
  FiArrowLeft,
  FiKey,
  FiCheckCircle,
  FiActivity,
  FiMusic,
  FiMaximize2,
  FiLayers,
  FiGlobe,
  FiSmartphone,
  FiMonitor
} from "react-icons/fi";
import { FaPaypal, FaMicrosoft, FaGooglePlay } from "react-icons/fa";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SOFTWARE_PRODUCTS, SoftwareProduct, generateProductLicense } from "@/lib/products";

export default function ProductsPage() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [selectedProduct, setSelectedProduct] = useState<SoftwareProduct | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"details" | "checkout">("details");
  const [paymentTab, setPaymentTab] = useState<"paypal" | "upi">("paypal");

  // Form State for Checkout / Free Claim
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Completed Order State
  const [completedLicenseKey, setCompletedLicenseKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDetailsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openProductDetails = (product: SoftwareProduct) => {
    setSelectedProduct(product);
    setModalMode("details");
    setErrorMessage("");
    setCompletedLicenseKey(null);
    setDetailsModalOpen(true);
  };

  const startCheckout = () => {
    setModalMode("checkout");
    setErrorMessage("");
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
    setTimeout(() => {
      const license = generateProductLicense(selectedProduct.id);
      setCompletedLicenseKey(license);
      setIsProcessing(false);
    }, 1200);
  };

  const handleDirectLicenseClaim = () => {
    if (!customerEmail || !customerEmail.includes("@")) {
      setErrorMessage("Please enter a valid email address to receive your license key.");
      return;
    }
    if (!selectedProduct) return;
    setErrorMessage("");
    setIsProcessing(true);
    setTimeout(() => {
      const license = generateProductLicense(selectedProduct.id);
      setCompletedLicenseKey(license);
      setIsProcessing(false);
    }, 1000);
  };

  const copyLicense = () => {
    if (completedLicenseKey) {
      navigator.clipboard.writeText(completedLicenseKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2500);
    }
  };

  // Helper to render distinct product icon
  const getProductIcon = (id: string, className = "text-xl") => {
    switch (id) {
      case "sdm":
        return <FiDownload className={`${className} text-amber-400`} />;
      case "tradeboard":
        return <FiActivity className={`${className} text-indigo-400`} />;
      case "spectrum":
        return <FiMaximize2 className={`${className} text-sky-400`} />;
      case "melodrift":
        return <FiMusic className={`${className} text-emerald-400`} />;
      default:
        return <FiCpu className={`${className} text-cyan-400`} />;
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
          Zero bloat. Hardware-accelerated execution. Standalone Windows installers, store distributions,
          and generous evaluation trials with zero recurring subscription traps.
        </p>

        {/* Currency Switcher */}
        <div className="pt-4 flex items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Currency:</span>
          <div className="inline-flex rounded-lg bg-slate-900 border border-white/10 p-0.5">
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                currency === "USD"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              $ USD (Global)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                currency === "INR"
                  ? "bg-cyan-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ₹ INR (India UPI / Cards)
            </button>
          </div>
        </div>
      </div>

      {/* ─── Limited-Time Product Showcase Access Banner ─── */}
      <motion.div
        initial={{ opacity: 0, y: -15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-cyan-500/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-amber-500/5 shine-sweep"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0 border border-amber-500/30">
            🔥
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-bold text-sm sm:text-base">Limited-Time Product Showcase & Evaluation Access</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Active
              </span>
            </div>
            <p className="text-slate-300 text-xs mt-0.5">
              Experience Softcorp Download Manager with a full 14-day free trial, or claim 100% free showcase access for Spectrum Studio & Melodrift.
            </p>
          </div>
        </div>
        <div className="text-xs font-mono text-amber-300 shrink-0 bg-amber-500/15 px-3 py-1.5 rounded-lg border border-amber-500/30 flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Click Any Card to Open Details & Downloads
        </div>
      </motion.div>

      {/* ─── Symmetrical Product Cards Grid (No Buttons, Uniform Height, Click to Open) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {SOFTWARE_PRODUCTS.map((product, idx) => {
          const isSDM = product.id === "sdm";
          const isTradeboard = product.id === "tradeboard";
          const isSpectrum = product.id === "spectrum";
          const isMelodrift = product.id === "melodrift";
          const displayPrice = currency === "USD" ? `$${product.usdPrice}` : `₹${product.inrPrice}`;

          let badgeStyle = "border-cyan-500/40 bg-cyan-500/10 text-cyan-300";
          let spotlightColor = "rgba(6, 182, 212, 0.15)";
          let cardBorder = "border-white/10 hover:border-cyan-500/40";
          let iconBg = "bg-cyan-500/10 border-cyan-500/30";

          if (isSDM) {
            badgeStyle = "border-amber-500/50 bg-amber-500/15 text-amber-300";
            spotlightColor = "rgba(245, 158, 11, 0.18)";
            cardBorder = "border-amber-500/30 hover:border-amber-500/60";
            iconBg = "bg-amber-500/10 border-amber-500/30";
          } else if (isTradeboard) {
            badgeStyle = "border-indigo-500/40 bg-indigo-500/10 text-indigo-300";
            spotlightColor = "rgba(99, 102, 241, 0.18)";
            cardBorder = "border-indigo-500/30 hover:border-indigo-500/60";
            iconBg = "bg-indigo-500/10 border-indigo-500/30";
          } else if (isSpectrum) {
            badgeStyle = "border-sky-500/40 bg-sky-500/10 text-sky-300";
            spotlightColor = "rgba(14, 165, 233, 0.16)";
            cardBorder = "border-sky-500/30 hover:border-sky-500/60";
            iconBg = "bg-sky-500/10 border-sky-500/30";
          } else if (isMelodrift) {
            badgeStyle = "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
            spotlightColor = "rgba(16, 185, 129, 0.16)";
            cardBorder = "border-emerald-500/30 hover:border-emerald-500/60";
            iconBg = "bg-emerald-500/10 border-emerald-500/30";
          }

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <div
                onClick={() => openProductDetails(product)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProductDetails(product);
                  }
                }}
                className="h-full text-left cursor-pointer group focus:outline-none"
              >
                <SpotlightCard
                  className={`h-full flex flex-col justify-between p-7 relative transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl ${cardBorder}`}
                  spotlightColor={spotlightColor}
                >
                  {/* Top Details & Identity */}
                  <div className="space-y-5">
                    {/* Header Row: Category Badge + Rating */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${badgeStyle}`}>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                        </span>
                        {product.badge}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold shrink-0">
                        <FiStar className="fill-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-500 font-normal">({product.downloadsCount})</span>
                      </div>
                    </div>

                    {/* Product Name & Icon */}
                    <div className="flex items-start gap-3.5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${iconBg} shadow-inner`}>
                        {getProductIcon(product.id, "text-2xl")}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                          {product.name}
                        </h3>
                        <div className="text-xs text-slate-400 font-mono mt-0.5 flex items-center gap-2">
                          <span className="text-cyan-400">{product.version}</span>
                          <span>•</span>
                          <span className="truncate">{product.platform}</span>
                        </div>
                      </div>
                    </div>

                    {/* App Description (What it does) */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* 3 Key Capability Highlights */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {product.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                        >
                          <FiCheck className="text-cyan-400 shrink-0 text-xs" />
                          <span>{highlight}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Symmetrical Card Footer: Price / Access & Interaction Cue */}
                  <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                    {/* Left: Pricing / Access Status */}
                    <div>
                      {isSDM ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                            14-Day Free Trial
                          </span>
                          <span className="text-xs text-slate-400">
                            (Pro: {displayPrice})
                          </span>
                        </div>
                      ) : product.isLimitedTimeFree ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                            100% Free Showcase
                          </span>
                          <span className="text-xs text-slate-500 line-through">
                            {currency === "USD" ? `$${product.originalUsdPrice}` : `₹${product.originalInrPrice}`}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-sm font-extrabold text-white">
                            {displayPrice}
                          </span>
                          <span className="text-[11px] text-slate-500">/ one-time license</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Click Action Prompt */}
                    <div className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors shrink-0">
                      <span>View Details & Options</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
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

      {/* ─── Product Details & Actions Modal (Interactive Popup) ─── */}
      <AnimatePresence>
        {detailsModalOpen && selectedProduct && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) setDetailsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl border border-white/15 bg-slate-900 shadow-2xl text-left flex flex-col overflow-hidden"
            >
              {modalMode === "details" ? (
                /* ─── View 1: Full Product Details & Download / Store Links ─── */
                <>
                  {/* Pinned Modal Header (Never Blocked) */}
                  <div className="shrink-0 flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-slate-900/95 backdrop-blur-md z-10">
                    <div className="flex items-center gap-3 pr-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10 shadow-sm">
                        {getProductIcon(selectedProduct.id, "text-xl")}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                            {selectedProduct.name}
                          </h2>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shrink-0">
                            {selectedProduct.version}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2 truncate">
                          <span className="text-amber-400 font-bold flex items-center gap-1 shrink-0">
                            <FiStar className="fill-amber-400" /> {selectedProduct.rating}
                          </span>
                          <span>•</span>
                          <span className="truncate">{selectedProduct.category}</span>
                          <span>•</span>
                          <span className="truncate">{selectedProduct.platform}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pinned Close Button */}
                    <button
                      type="button"
                      onClick={() => setDetailsModalOpen(false)}
                      className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                      title="Close (Esc)"
                    >
                      <FiX size={18} />
                    </button>
                  </div>

                  {/* Scrollable Modal Body */}
                  <div className="overflow-y-auto px-5 sm:px-6 py-5 space-y-5 flex-1">
                    {/* Description */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <FiCpu className="text-cyan-400" /> Product Overview
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Core Capabilities Grid */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <FiZap className="text-cyan-400" /> Core Capabilities & Architecture
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {selectedProduct.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-white/5">
                            <FiCheck className="text-cyan-400 shrink-0 mt-0.5 text-sm" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specifications */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <FiLayers className="text-cyan-400" /> Technical Specifications
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                        {selectedProduct.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="bg-slate-950/40 p-2.5 rounded-lg border border-white/5">
                            <div className="text-[11px] text-slate-500">{spec.label}</div>
                            <div className="text-slate-200 font-medium truncate mt-0.5">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing / Evaluation Summary */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-white/10 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs text-slate-400">License & Access Model:</div>
                        <div className="text-base font-bold text-white mt-0.5">
                          {selectedProduct.id === "sdm" ? (
                            <span className="text-amber-300">14-Day Full Free Trial Included</span>
                          ) : selectedProduct.isLimitedTimeFree ? (
                            <span className="text-emerald-400">100% Free Showcase License</span>
                          ) : (
                            <span>One-Time Lifetime License: {currency === "USD" ? `$${selectedProduct.usdPrice} USD` : `₹${selectedProduct.inrPrice} INR`}</span>
                          )}
                        </div>
                      </div>
                      {selectedProduct.id === "sdm" && (
                        <div className="text-right">
                          <div className="text-[11px] text-slate-400">Lifetime Pro:</div>
                          <div className="text-sm font-extrabold text-cyan-400">
                            {currency === "USD" ? `$${selectedProduct.usdPrice}` : `₹${selectedProduct.inrPrice}`}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pinned Action & Download Options Footer */}
                  <div className="shrink-0 px-5 sm:px-6 py-3.5 border-t border-white/10 bg-slate-950/90 backdrop-blur-md z-10">
                    {/* SDM: 14-Day Free Trial EXE + Buy Pro */}
                    {selectedProduct.id === "sdm" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href={selectedProduct.downloadUrl}
                          download={selectedProduct.installerFileName}
                          className="py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all cursor-pointer text-center"
                        >
                          <FiDownload size={16} /> Download 14-Day Trial (.exe)
                        </a>
                        <button
                          type="button"
                          onClick={startCheckout}
                          className="py-2.5 px-4 rounded-xl font-bold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                        >
                          <FiKey size={16} /> Buy Lifetime Pro ({currency === "USD" ? `$${selectedProduct.usdPrice}` : `₹${selectedProduct.inrPrice}`})
                        </button>
                      </div>
                    )}

                    {/* Melodrift: Web Player + Microsoft Store + Google Play + Claim Free */}
                    {selectedProduct.id === "melodrift" && (
                      <div className="space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <a
                            href={selectedProduct.webUrl || "https://melodrift.rajeevupadhyay.com/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                          >
                            <FiGlobe size={15} /> Launch Web Player
                          </a>
                          <button
                            type="button"
                            onClick={startCheckout}
                            className="py-2.5 px-4 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                          >
                            <FiKey size={15} /> Claim Free Showcase License
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={selectedProduct.storeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-colors"
                          >
                            <FaMicrosoft size={13} className="text-cyan-400" />
                            <span>Microsoft Store</span>
                          </a>
                          <a
                            href={selectedProduct.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-colors"
                          >
                            <FaGooglePlay size={12} className="text-emerald-400" />
                            <span>Google Play</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Spectrum: Microsoft Store + Claim Free */}
                    {selectedProduct.id === "spectrum" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href={selectedProduct.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-4 rounded-xl font-bold text-xs bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
                        >
                          <FaMicrosoft size={15} /> Get on Microsoft Store (Verified)
                        </a>
                        <button
                          type="button"
                          onClick={startCheckout}
                          className="py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                        >
                          <FiKey size={15} /> Claim 100% Free Showcase License
                        </button>
                      </div>
                    )}

                    {/* Tradeboard: Docs + Buy Pro */}
                    {selectedProduct.id === "tradeboard" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href={selectedProduct.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-4 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/15 text-white border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <FiExternalLink size={15} /> Open Platform & Quickstart
                        </a>
                        <button
                          type="button"
                          onClick={startCheckout}
                          className="py-2.5 px-4 rounded-xl font-bold text-xs bg-indigo-500 hover:bg-indigo-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
                        >
                          <FiKey size={15} /> Buy Self-Hosted Pro ({currency === "USD" ? `$${selectedProduct.usdPrice}` : `₹${selectedProduct.inrPrice}`})
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : completedLicenseKey ? (
                /* ─── View 2: License Key Completed / Issued ─── */
                <>
                  <div className="shrink-0 flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-slate-900/95">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400" /> License Key Activated!
                    </h3>
                    <button
                      type="button"
                      onClick={() => setDetailsModalOpen(false)}
                      className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <FiX size={18} />
                    </button>
                  </div>

                  <div className="overflow-y-auto px-5 sm:px-6 py-6 space-y-5 text-center flex-1">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <FiCheckCircle size={32} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mt-1">
                        Thank you for choosing {selectedProduct.name}. Your hardware-bound license key is ready.
                      </p>
                    </div>

                    {/* License Key Box */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/40 text-left space-y-2 max-w-lg mx-auto">
                      <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider flex justify-between">
                        <span>Pro Lifetime Serial Key</span>
                        <span className="text-emerald-400">Verified</span>
                      </div>
                      <div className="flex items-center justify-between gap-3 bg-white/5 px-3 py-2 rounded border border-white/10 font-mono text-base font-bold text-white tracking-widest">
                        <span>{completedLicenseKey}</span>
                        <button
                          type="button"
                          onClick={copyLicense}
                          className="text-cyan-400 hover:text-cyan-300 p-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
                          title="Copy Key"
                        >
                          {copiedKey ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Delivered to: <span className="text-slate-300 font-mono">{customerEmail}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 px-5 sm:px-6 py-3.5 border-t border-white/10 bg-slate-950/90 flex items-center gap-3">
                    {selectedProduct.id === "sdm" ? (
                      <a
                        href={selectedProduct.downloadUrl}
                        download={selectedProduct.installerFileName}
                        className="flex-1 py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-amber-500/25 text-center"
                      >
                        <FiDownload size={16} /> Download SDM Setup Installer (.exe)
                      </a>
                    ) : selectedProduct.id === "melodrift" ? (
                      <a
                        href={selectedProduct.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl font-bold text-sm bg-emerald-500 text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 text-center"
                      >
                        <FiGlobe size={16} /> Open Melodrift Web Player
                      </a>
                    ) : selectedProduct.id === "spectrum" ? (
                      <a
                        href={selectedProduct.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl font-bold text-sm bg-sky-500 text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 text-center"
                      >
                        <FaMicrosoft size={16} /> Open in Microsoft Store
                      </a>
                    ) : (
                      <a
                        href={selectedProduct.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl font-bold text-sm bg-indigo-500 text-white flex items-center justify-center gap-2 hover:brightness-110 text-center"
                      >
                        <FiExternalLink size={16} /> Open Tradeboard Platform
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setDetailsModalOpen(false)}
                      className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Done & Close
                    </button>
                  </div>
                </>
              ) : (
                /* ─── View 3: Checkout / Free Claim Form ─── */
                <>
                  <div className="shrink-0 flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-slate-900/95">
                    <button
                      type="button"
                      onClick={() => setModalMode("details")}
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                    >
                      <FiArrowLeft /> Back to Details
                    </button>
                    <span className="text-xs text-slate-400 font-mono">
                      {selectedProduct.isLimitedTimeFree ? "Free License Claim" : "Secure Checkout"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setDetailsModalOpen(false)}
                      className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <FiX size={18} />
                    </button>
                  </div>

                  <div className="overflow-y-auto px-5 sm:px-6 py-5 space-y-5 flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {selectedProduct.isLimitedTimeFree
                          ? "Claim Free Showcase License: "
                          : "Order License: "}
                        {selectedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                        <span>
                          {selectedProduct.isLimitedTimeFree
                            ? "100% Free Lifetime Showcase Promo"
                            : "One-Time Lifetime Hardware-Bound Pro Serial"}
                        </span>
                        <span className="font-bold text-base text-emerald-400">
                          {selectedProduct.isLimitedTimeFree
                            ? "100% FREE"
                            : currency === "USD"
                            ? `$${selectedProduct.usdPrice} USD`
                            : `₹${selectedProduct.inrPrice} INR`}
                        </span>
                      </div>
                    </div>

                    {/* Customer Inputs */}
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
                          placeholder="customer@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <span className="text-[11px] text-slate-500 mt-0.5 block">
                          Your permanent license key and invoice will be sent here.
                        </span>
                      </div>
                    </div>

                    {selectedProduct.isLimitedTimeFree ? (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                          <FiZap /> 100% Free Showcase License
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          During our live software showcase, {selectedProduct.name} is available 100% free with full commercial features and zero subscription fees.
                        </p>
                        {errorMessage && (
                          <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-lg">
                            {errorMessage}
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={handleDirectLicenseClaim}
                          disabled={isProcessing}
                          className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isProcessing ? (
                            <span className="flex items-center gap-2">
                              <FiCpu className="animate-spin" /> Issuing Lifetime License...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <FiKey /> Claim 100% Free Lifetime Key
                            </span>
                          )}
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Payment Method Selector */}
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
                              <FaPaypal className="text-[#00457C]" size={20} />
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

                        {/* Payment Gateway Tabs */}
                        {paymentTab === "paypal" ? (
                          <div className="space-y-4 p-4 rounded-xl bg-slate-950/50 border border-white/5 text-xs text-slate-400">
                            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                              <FaPaypal /> Instant PayPal Checkout
                            </div>
                            <p>
                              Pay securely with your PayPal account or any International Credit/Debit Card
                              (Visa, Mastercard, Amex).
                            </p>
                            {errorMessage && (
                              <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-lg">
                                {errorMessage}
                              </div>
                            )}
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

                            {errorMessage && (
                              <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-lg">
                                {errorMessage}
                              </div>
                            )}

                            <button
                              type="submit"
                              disabled={isProcessing}
                              className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                            >
                              {isProcessing ? "Verifying Transaction..." : `Confirm Payment & Generate License Key`}
                            </button>
                          </form>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
