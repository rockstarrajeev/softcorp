import crypto from "crypto";

export interface SoftwareProduct {
  id: string;
  name: string;
  tagline: string;
  version: string;
  category: string;
  platform: string;
  usdPrice: number;
  inrPrice: number;
  originalUsdPrice?: number;
  originalInrPrice?: number;
  isLimitedTimeFree?: boolean;
  promoBadge?: string;
  installerFileName: string;
  downloadUrl: string;
  storeUrl?: string;
  playStoreUrl?: string;
  docsUrl?: string;
  webUrl?: string;
  dashboardUrl?: string;
  badge: string;
  rating: number;
  downloadsCount: string;
  features: string[];
  specs: { label: string; value: string }[];
  licensePrefix: string;
}

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    id: "sdm",
    name: "Softcorp Download Manager (SDM)",
    tagline: "High-Performance 32-Socket HTTP Range Accelerator, Universal Video Grabber & Obsidian Cyber-Glass Engine",
    version: "v1.0.0 Stable",
    category: "Network & Media Acceleration",
    platform: "Windows 10 / 11 (64-bit)",
    usdPrice: 19.99,
    inrPrice: 999,
    installerFileName: "SDM_Setup_v1.0.exe",
    downloadUrl: "/downloads/SDM_Setup_v1.0.exe",
    badge: "Flagship Accelerator",
    rating: 4.9,
    downloadsCount: "25,000+",
    features: [
      "Up to 500% acceleration via 32 parallel socket chunk streams with dynamic load rebalancing",
      "Universal In-Page Video Grabber for YouTube, X (Twitter), Reddit, TikTok, Facebook & Vimeo",
      "Integrated FFmpeg single-file muxer for automatic 4K/8K audio+video stream merge",
      "Manifest V3 browser extensions for Chrome, Edge, Brave, Arc & Firefox with floating capture button",
      "Real-time socket array visualizer & live waveform throughput oscilloscope",
      "Byte-level sparse disk allocation with instant pause/resume checkpoints (.sdm.json)",
      "Obsidian Cyber-Glass UI with hardware-bound cryptographic activation & anti-tamper DRM"
    ],
    specs: [
      { label: "OS Support", value: "Windows 10/11 (64-bit)" },
      { label: "Installer Type", value: "Self-Contained Setup (.exe)" },
      { label: "Package Size", value: "133.10 MB" },
      { label: "Engine Core", value: "Bundled Node.js + Electron" },
      { label: "License Model", value: "Lifetime License / 1 PC" }
    ],
    licensePrefix: "SDM-PRO"
  },
  {
    id: "tradeboard",
    name: "Tradeboard Algo Platform",
    tagline: "Unified Multi-Broker Algorithmic Trading Platform, Flow Visual Strategy Builder & Options Analytics Engine",
    version: "v2.0.2.7",
    category: "Fintech & Algorithmic Trading",
    platform: "Self-Hosted Web / Python 3.12+ / Docker",
    usdPrice: 49.99,
    inrPrice: 3999,
    installerFileName: "tradeboard-v2.0.2.7.zip",
    downloadUrl: "https://docs.algo.wesoftcorp.com",
    docsUrl: "https://docs.algo.wesoftcorp.com",
    badge: "Algorithmic Platform",
    rating: 4.9,
    downloadsCount: "12,800+",
    features: [
      "Unified REST API supporting 34+ Indian brokers (Zerodha, AngelOne, Dhan, Kotak Neo, Fyers, Upstox, Delta)",
      "Flow: Drag-and-drop no-code visual strategy builder with live market data nodes & condition handles",
      "Python Strategy Host: In-browser editor with IST market schedule, process isolation & live log streaming",
      "Options Suite: 12 built-in tools (Options Chain, live Greeks, Payoff diagrams, IV Smile, Max Pain, GEX)",
      "₹1 Crore sandbox paper-trading engine with realistic execution slippage and exchange auto square-off",
      "Real-time WebSocket streaming with ZeroMQ high-speed message bus & Telegram trade alerts",
      "AI / MCP Server integration for autonomous Claude, Gemini & LLM agent strategy execution"
    ],
    specs: [
      { label: "Supported Brokers", value: "34+ Direct Plugins" },
      { label: "Core Runtime", value: "Python 3.12+ / Flask / React 19" },
      { label: "Streaming", value: "ZeroMQ WebSocket Proxy" },
      { label: "Paper Trading", value: "₹1 Crore Sandbox Capital" },
      { label: "License Model", value: "Self-Hosted Enterprise Pro" }
    ],
    licensePrefix: "TRADE-PRO"
  },
  {
    id: "spectrum",
    name: "Spectrum Studio",
    tagline: "Ultra-Fast Hardware-Accelerated RAW Photo Viewer, Inspector & 60/120 FPS Darkroom for Windows",
    version: "v0.1.1",
    category: "Photography & Digital Imaging",
    platform: "Windows 10 / 11 (MSIX / x64)",
    usdPrice: 0,
    inrPrice: 0,
    originalUsdPrice: 24.99,
    originalInrPrice: 1499,
    isLimitedTimeFree: true,
    promoBadge: "Limited-Time Free Access",
    installerFileName: "Spectrum_Setup_v0.1.1.exe",
    downloadUrl: "https://apps.microsoft.com/detail/9P1QW99KRX7N?hl=en-us&gl=IN&ocid=pdpshare",
    storeUrl: "https://apps.microsoft.com/detail/9P1QW99KRX7N?hl=en-us&gl=IN&ocid=pdpshare",
    badge: "🔥 Free Showcase Access",
    rating: 4.8,
    downloadsCount: "18,400+",
    features: [
      "Limited-Time Showcase Access: 100% Free full commercial Pro features",
      "Frameless spatial viewer with continuous analog momentum zoom (60/120 FPS)",
      "Native RAW support for Sony ARW, Canon CR2/CR3, Nikon NEF, DNG, Fuji RAF & standard images",
      "Creative Darkroom with interactive 8-point crop engine & rule-of-thirds alignment",
      "GPU-accelerated Exposure, Contrast, Color Temp, Saturation, Highlights & Shadows adjustments",
      "Virtualized viewport handles 5,000+ photo collections in < 800 KB RAM",
      "Official Microsoft Store distribution with automated sandboxed background updates"
    ],
    specs: [
      { label: "Showcase Offer", value: "100% Free Limited Access" },
      { label: "OS Support", value: "Windows 10/11 (x64)" },
      { label: "Microsoft Store ID", value: "9P1QW99KRX7N" },
      { label: "Memory Footprint", value: "< 800 KB for 5,000 Photos" },
      { label: "License Model", value: "Full Pro Showcase License" }
    ],
    licensePrefix: "SPEC-PRO"
  },
  {
    id: "melodrift",
    name: "Melodrift",
    tagline: "High-Fidelity Ad-Free Music Streaming Client, 10-Band Studio Equalizer & Offline Vault",
    version: "v1.0.0",
    category: "Audio Streaming & Media Player",
    platform: "Web / Windows 10/11 (MSIX) / Android",
    usdPrice: 0,
    inrPrice: 0,
    originalUsdPrice: 14.99,
    originalInrPrice: 799,
    isLimitedTimeFree: true,
    promoBadge: "Limited-Time Free Access",
    installerFileName: "Melodrift_Setup_v1.0.exe",
    downloadUrl: "https://melodrift.rajeevupadhyay.com/",
    webUrl: "https://melodrift.rajeevupadhyay.com/",
    storeUrl: "https://apps.microsoft.com/detail/9NTMFZ12Q80S?hl=en-us&gl=IN&ocid=pdpshare",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.melodrift",
    badge: "🔥 Free Showcase Access",
    rating: 4.9,
    downloadsCount: "42,000+",
    features: [
      "Limited-Time Showcase Access: 100% Free ad-free high-fidelity music streaming",
      "Live high-fidelity web player at melodrift.rajeevupadhyay.com",
      "High-fidelity 320kbps audio engine with offline caching and zero buffering",
      "10-band studio equalizer with bass boost, audio virtualizer & acoustic presets",
      "Synchronized real-time karaoke lyrics with line-by-line and offline lyric caching",
      "Cross-platform cloud library sync across Android, Web and Windows devices",
      "100% ad-free & privacy-focused: Zero audio interruptions, Google AD_ID omitted"
    ],
    specs: [
      { label: "Showcase Offer", value: "100% Free Limited Access" },
      { label: "Web Player", value: "melodrift.rajeevupadhyay.com" },
      { label: "Audio Engine", value: "320kbps Studio Acoustic Engine" },
      { label: "Platforms", value: "Web, Windows & Android" },
      { label: "License Model", value: "Full Supporter Showcase License" }
    ],
    licensePrefix: "MELO-PRO"
  }
];

export function generateProductLicense(productId: string): string {
  const product = SOFTWARE_PRODUCTS.find((p) => p.id === productId);
  const prefix = product ? product.licensePrefix : "SOFTCORP-PRO";
  const chunk = () => crypto.randomBytes(2).toString("hex").toUpperCase();
  return `${prefix}-${chunk()}-${chunk()}-${chunk()}`;
}
