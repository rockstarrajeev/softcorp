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
  installerFileName: string;
  downloadUrl: string;
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
    tagline: "Next-Gen 32-Socket Accelerator, Universal Video Grabber & Obsidian Cyber-Glass Engine",
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
      "Up to 500% download acceleration via 32 parallel chunk sockets",
      "Universal In-Page Video Grabber with 8K/4K/60fps detection (YouTube, Vimeo, Social)",
      "Integrated FFmpeg single-file muxer for instant merged video+audio streams",
      "Obsidian Cyber-Glass UI with real-time waveform speed oscilloscope",
      "Hardware-bound anti-tamper security & automatic fake serial lockdown",
      "Smart browser extension interception for Chrome, Edge, Brave & Firefox",
      "Clean Windows uninstaller & zero telemetry spyware"
    ],
    specs: [
      { label: "OS Support", value: "Windows 10/11 (64-bit)" },
      { label: "Installer Type", value: "Self-Contained Setup (.exe)" },
      { label: "Package Size", value: "133.10 MB" },
      { label: "Engine Runtime", value: "Bundled Isolated Node.js" },
      { label: "License Model", value: "Lifetime License / 1 PC" }
    ],
    licensePrefix: "SDM-PRO"
  },
  {
    id: "spectrum",
    name: "Spectrum Studio",
    tagline: "Ultra-Fast Professional RAW Image Viewer & GPU-Accelerated Batch Conversion Studio",
    version: "v1.2.0",
    category: "Photography & Digital Imaging",
    platform: "Windows 10 / 11 (MSIX / x64)",
    usdPrice: 24.99,
    inrPrice: 1499,
    installerFileName: "Spectrum_Setup_v1.2.exe",
    downloadUrl: "https://apps.microsoft.com/",
    badge: "Windows Store Ready",
    rating: 4.8,
    downloadsCount: "18,400+",
    features: [
      "Instant zero-latency preview for Sony ARW, Canon CR3, Nikon NEF, DNG & Fuji RAF",
      "Hardware GPU-accelerated color grading & Lanczos batch resampling",
      "Lossless WebP, AVIF, JPEG-XL & PNG export pipelines",
      "Color-managed HDR rendering supporting sRGB, DCI-P3 & Adobe RGB",
      "Batch metadata EXIF sanitizer and smart copyright tagging",
      "Native Windows 11 fluent design & dark mode integration"
    ],
    specs: [
      { label: "OS Support", value: "Windows 10/11 (x64)" },
      { label: "Store Package", value: "MSIX App Package" },
      { label: "Memory Footprint", value: "< 95 MB RAM" },
      { label: "RAW Engines", value: "LibRaw GPU Pipeline" },
      { label: "License Model", value: "Perpetual Commercial" }
    ],
    licensePrefix: "SPEC-PRO"
  },
  {
    id: "melodrift",
    name: "Melodrift",
    tagline: "Generative Lo-Fi Beat Engine & Spatial Soundscape Workstation for Deep Focus",
    version: "v2.1.0",
    category: "Generative Audio & Soundscapes",
    platform: "Web App / Windows Desktop / Android",
    usdPrice: 14.99,
    inrPrice: 799,
    installerFileName: "Melodrift_Setup_v2.1.exe",
    downloadUrl: "https://melodrift.wesoftcorp.com",
    badge: "Deep Focus Studio",
    rating: 4.9,
    downloadsCount: "42,000+",
    features: [
      "Procedural algorithmic lo-fi beat generator tailored for deep programming sessions",
      "Spatial rain, thunderstorms, vinyl crackle, and acoustic café oscillators",
      "Multi-track stem mixer with independent parametric EQ, reverb & tape flutter",
      "Integrated Pomodoro productivity timer & adaptive sleep sound machine",
      "Full offline audio synthesis — runs with zero internet connection",
      "Cloud preset sync and high-resolution FLAC/WAV stem export"
    ],
    specs: [
      { label: "Platforms", value: "Web / Windows / Android" },
      { label: "Audio Engine", value: "WebAudio & Oboe Native" },
      { label: "Audio Quality", value: "32-bit Float 48kHz" },
      { label: "Offline Mode", value: "100% Autonomous" },
      { label: "License Model", value: "Producer Lifetime" }
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
