import crypto from "crypto";

export interface SoftwareProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  version: string;
  category: string;
  platform: string;
  usdPrice: number;
  inrPrice: number;
  originalUsdPrice?: number;
  originalInrPrice?: number;
  isLimitedTimeFree?: boolean;
  isComingSoonBeta?: boolean;
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
    description: "High-performance parallel download accelerator and universal video stream grabber for Windows. Uses 32 concurrent HTTP range sockets to maximize download speeds by up to 500%, captures 4K/8K media with built-in FFmpeg muxing, and operates silently in the system tray so downloads never stop.",
    highlights: [
      "32-Socket HTTP Range Acceleration",
      "Universal In-Page Video Grabber",
      "Silent Background Tray Persistence"
    ],
    version: "v1.0.0 (Official Release)",
    category: "Network & Media Acceleration",
    platform: "Windows 10 / 11 (64-bit)",
    usdPrice: 19.99,
    inrPrice: 999,
    installerFileName: "SDM_Setup_v1.0.exe",
    downloadUrl: "/downloads/SDM_Setup_v1.0.exe",
    badge: "Free 14-Day Trial Available",
    isComingSoonBeta: false,
    rating: 4.9,
    downloadsCount: "Official v1.0",
    features: [
      "14-Day Full-Featured Evaluation Trial included automatically on install — zero credit card or registration required",
      "Up to 500% acceleration via 32 parallel socket chunk streams with dynamic load rebalancing",
      "Universal In-Page Video Grabber for YouTube, X (Twitter), Reddit, TikTok, Facebook & Vimeo",
      "Integrated FFmpeg single-file muxer for automatic 4K/8K audio+video stream merge",
      "Manifest V3 browser extensions for Chrome, Edge, Brave, Arc & Firefox with floating capture button",
      "Real-time socket array visualizer & live waveform throughput oscilloscope",
      "Byte-level sparse disk allocation with instant pause/resume checkpoints (.sdm.json)",
      "Obsidian Cyber-Glass UI with hardware-bound cryptographic activation & anti-tamper DRM"
    ],
    specs: [
      { label: "Evaluation", value: "14-Day Full Free Trial" },
      { label: "OS Support", value: "Windows 10/11 (64-bit)" },
      { label: "Installer Type", value: "Self-Contained Setup (.exe)" },
      { label: "Package Size", value: "133.15 MB" },
      { label: "Engine Core", value: "Bundled Node.js + Tray Daemon" },
      { label: "License Model", value: "14-Day Trial Included (Lifetime Pro Upgrade)" }
    ],
    licensePrefix: "SDM-PRO"
  },
  {
    id: "tradeboard",
    name: "Tradeboard Algo Platform",
    tagline: "Unified Multi-Broker Algorithmic Trading Platform, Flow Visual Strategy Builder & Options Analytics Engine",
    description: "Unified multi-broker algorithmic trading workstation and strategy development platform. Connects directly to 34+ Indian brokers via low-latency REST APIs, featuring a drag-and-drop visual strategy flow builder, Python isolation runtime, real-time options Greeks analytics, and a ₹1 Crore virtual paper-trading sandbox.",
    highlights: [
      "34+ Direct Broker Integrations",
      "Drag-and-Drop Visual Flow Builder",
      "₹1 Crore Paper Trading Sandbox"
    ],
    version: "v2.0",
    category: "Fintech & Algorithmic Trading",
    platform: "Self-Hosted Web / Python 3.12+ / Docker",
    usdPrice: 49.99,
    inrPrice: 3999,
    installerFileName: "tradeboard-v2.0.zip",
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
    description: "Ultra-fast, hardware-accelerated RAW digital photo viewer and darkroom workstation for Windows. Delivers continuous 60/120 FPS momentum zoom across massive 5,000+ photo collections in under 800 KB RAM, with non-destructive GPU color grading and native camera RAW decoding.",
    highlights: [
      "Buttery 60/120 FPS Momentum Zoom",
      "Native Camera RAW Decoding",
      "Micro-Footprint (< 800 KB RAM)"
    ],
    version: "v0.1.1",
    category: "Photography & Digital Imaging",
    platform: "Windows 10 / 11 (MSIX / x64)",
    usdPrice: 0,
    inrPrice: 0,
    originalUsdPrice: 24.99,
    originalInrPrice: 1499,
    isLimitedTimeFree: false,
    promoBadge: "Microsoft Store Certified",
    installerFileName: "Spectrum_Setup_v0.1.1.exe",
    downloadUrl: "https://apps.microsoft.com/detail/9P1QW99KRX7N?hl=en-us&gl=IN&ocid=pdpshare",
    storeUrl: "https://apps.microsoft.com/detail/9P1QW99KRX7N?hl=en-us&gl=IN&ocid=pdpshare",
    badge: "🖼️ Microsoft Store (Windows)",
    rating: 4.8,
    downloadsCount: "18,400+",
    features: [
      "Official Microsoft Store release with seamless background updates",
      "Frameless spatial viewer with continuous analog momentum zoom (60/120 FPS)",
      "Native RAW support for Sony ARW, Canon CR2/CR3, Nikon NEF, DNG, Fuji RAF & standard images",
      "Creative Darkroom with interactive 8-point crop engine & rule-of-thirds alignment",
      "GPU-accelerated Exposure, Contrast, Color Temp, Saturation, Highlights & Shadows adjustments",
      "Virtualized viewport handles 5,000+ photo collections in < 800 KB RAM",
      "Hardware-accelerated rendering engine with sub-millisecond frame dispatch"
    ],
    specs: [
      { label: "Distribution", value: "Official Microsoft Store" },
      { label: "OS Support", value: "Windows 10/11 (MSIX / x64)" },
      { label: "Store App ID", value: "9P1QW99KRX7N" },
      { label: "Memory Footprint", value: "< 800 KB for 5,000 Photos" },
      { label: "Access Model", value: "Free on Microsoft Store" }
    ],
    licensePrefix: "SPEC-PRO"
  },
  {
    id: "melodrift",
    name: "Melodrift",
    tagline: "High-Fidelity Ad-Free Music Streaming Client, 10-Band Studio Equalizer & Offline Vault",
    description: "Ad-free, high-fidelity music streaming client and acoustic darkroom player. Features an audiophile 10-band studio equalizer with bass boost, synchronized real-time karaoke lyrics, cross-platform cloud library synchronization across Web, Windows, and Android, and an encrypted offline music vault.",
    highlights: [
      "Audiophile 10-Band Studio Equalizer",
      "Real-Time Synchronized Lyrics",
      "Cross-Platform Sync (Web/Win/Android)"
    ],
    version: "v1.3.0",
    category: "Audio Streaming & Media Player",
    platform: "Web / Windows 10/11 (MSIX) / Android",
    usdPrice: 0,
    inrPrice: 0,
    originalUsdPrice: 14.99,
    originalInrPrice: 799,
    isLimitedTimeFree: false,
    promoBadge: "100% Free & Ad-Free",
    installerFileName: "Melodrift_Setup_v1.3.0.exe",
    downloadUrl: "https://melodrift.rajeevupadhyay.com/",
    webUrl: "https://melodrift.rajeevupadhyay.com/",
    storeUrl: "https://apps.microsoft.com/detail/9NTMFZ12Q80S?hl=en-us&gl=IN&ocid=pdpshare",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.melodrift",
    badge: "🎵 100% Free Ad-Free Music",
    rating: 4.9,
    downloadsCount: "42,000+",
    features: [
      "100% Free ad-free high-fidelity music streaming across devices",
      "Official live web player at melodrift.rajeevupadhyay.com",
      "High-fidelity 320kbps audio engine with offline caching and zero buffering",
      "10-band studio equalizer with bass boost, audio virtualizer & acoustic presets",
      "Synchronized real-time karaoke lyrics with line-by-line and offline lyric caching",
      "Cross-platform cloud library sync across Android, Web and Windows devices",
      "100% ad-free & privacy-focused: Zero audio interruptions, Google AD_ID omitted"
    ],
    specs: [
      { label: "Access Model", value: "100% Free & Ad-Free" },
      { label: "Official Web", value: "melodrift.rajeevupadhyay.com" },
      { label: "Audio Engine", value: "320kbps Studio Acoustic Engine" },
      { label: "Platforms", value: "Web, Windows & Android" },
      { label: "Distribution", value: "Web, Windows Store & Google Play" }
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
