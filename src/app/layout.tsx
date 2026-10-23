import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import AmbientBackground from "@/components/ui/AmbientBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wesoftcorp.com"),
  title: "SOFTCORP GROUP | Enterprise IT Infrastructure & AI Modernization (Govt. MSME Certified)",
  description:
    "Government of India Certified MSME Micro Enterprise (UDYAM-UP-50-0298723). High-availability IT infrastructure, cloud architecture, and autonomous AI automation. 6+ years experience supporting global giants like Swissport, Air Liquide, and Tata Teleservices.",
  keywords: [
    "SOFTCORP GROUP",
    "MSME Certified",
    "UDYAM-UP-50-0298723",
    "IT infrastructure",
    "cloud migration",
    "AI automation",
    "server monitoring",
    "Zabbix",
    "DevOps",
    "Rajeev Upadhyay",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SOFTCORP GROUP | Enterprise IT Infrastructure & AI Modernization",
    description:
      "Government of India Certified MSME Micro Enterprise (UDYAM-UP-50-0298723). Enterprise-grade IT infrastructure, cloud solutions, and autonomous AI modernization.",
    url: "https://wesoftcorp.com",
    siteName: "SOFTCORP GROUP",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOFTCORP GROUP | Enterprise IT Infrastructure & AI Modernization",
    description: "Govt. MSME Certified Enterprise IT Infrastructure, Multi-Cloud Migration & AI Automation.",
    creator: "@rajeevrockstar",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/logo-icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
      { url: "/logo-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white">
        <Providers>
          <AmbientBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <ScrollProgress />
        </Providers>
      </body>
    </html>
  );
}
