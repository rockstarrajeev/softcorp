import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softcorp Group LLC | Digital Marketing & Freelance Services",
  description:
    "Full-service digital marketing agency offering social media management, content creation, web development, branding, and more. Connect with us at wesoftcorp.com.",
  keywords: [
    "digital marketing",
    "social media marketing",
    "freelance services",
    "web development",
    "branding",
    "Softcorp Group",
  ],
  openGraph: {
    title: "Softcorp Group LLC",
    description: "Your partner for digital growth. Social media, web, and creative services.",
    url: "https://wesoftcorp.com",
    siteName: "Softcorp Group LLC",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
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
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
