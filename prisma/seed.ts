// Softcorp Enterprise, Freelance & AI Services Seed (20 Core Offerings)
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import bcrypt from "bcryptjs";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Seeding Softcorp 20 Core, Freelance & AI Service Offerings...");

    const adminPassword = await bcrypt.hash("Admin@123", 12);
    const admin = await prisma.user.upsert({
        where: { email: "admin@wesoftcorp.com" },
        update: {},
        create: {
            name: "Softcorp Admin",
            email: "admin@wesoftcorp.com",
            password: adminPassword,
            role: "admin",
        },
    });
    console.log("Admin account verified:", admin.email);

    /*
     * PRICING MATRIX (2026 Market Researched)
     * All INR prices calibrated <= ₹89,999 for 100% instant UPI compatibility.
     * Currency set to INR for domestic checkout; USD equivalence provided for global clients.
     */
    const services = [
        // ── Group 1: Modern Web Platforms, UI/UX & E-Commerce ──
        {
            name: "High-Converting Landing Page & Lead Funnel",
            slug: "landing-page-funnel",
            category: "web-platforms",
            description: "High-velocity Next.js 16 + Tailwind v4 conversion landing page. Includes responsive mobile design, dynamic lead capture forms, email notifications, and instant live deployment.",
            price: 14999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 1,
        },
        {
            name: "AI-Driven UI/UX & Website Layout Design",
            slug: "website-layout-design",
            category: "web-platforms",
            description: "Bespoke design systems in Figma translated to high-performance React/Tailwind layouts. Cyber-obsidian aesthetics, fluid micro-interactions, and conversion-optimized typography.",
            price: 24999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 2,
        },
        {
            name: "Modern E-Commerce Store & Payment Setup",
            slug: "ecommerce-store-setup",
            category: "web-platforms",
            description: "End-to-end e-commerce store (Next.js Commerce or Shopify). Includes Razorpay/Stripe checkout, catalog setup up to 100 products, inventory tracking, and mobile-first UX.",
            price: 34999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 3,
        },
        {
            name: "Corporate Web Architecture & Platform (NIC 62012)",
            slug: "web-architecture-platforms",
            category: "web-platforms",
            description: "High-performance enterprise web presence built with Next.js 16, accessible component libraries, SEO & Core Web Vitals 95+, and custom database/CMS integration.",
            price: 49999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 4,
        },
        {
            name: "Rapid Full-Stack Web App / SaaS MVP Builder",
            slug: "fullstack-mvp-builder",
            category: "software-engineering",
            description: "Production-ready MVP built in 2–3 weeks: Next.js + SQLite/PostgreSQL + NextAuth session management + Stripe/Razorpay billing tiers + comprehensive Admin Dashboard.",
            price: 79999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 5,
        },
        {
            name: "WordPress / Shopify to Headless Next.js Migration",
            slug: "headless-migration",
            category: "web-platforms",
            description: "Rebuild slow, bloated legacy CMS sites on ultra-fast headless Next.js platforms while strictly preserving all existing Google SEO rankings, URLs, and blog content.",
            price: 39999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 6,
        },

        // ── Group 2: Autonomous AI, LLMs & Automation ──
        {
            name: "Custom AI Chatbot & Customer Support Widget",
            slug: "ai-support-chatbot",
            category: "ai-modernization",
            description: "Embeddable intelligent chat widget grounded in your company FAQs, PDFs, and documentation using OpenAI/Gemini/Anthropic with automated human email escalation.",
            price: 29999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 7,
        },
        {
            name: "Autonomous AI Workflows & Multi-Agent Systems (NIC 62099)",
            slug: "autonomous-ai-workflows",
            category: "ai-modernization",
            description: "Deterministic enterprise RAG pipelines, multi-agent automated task execution, real-time tool calling, and self-healing intelligence for back-office operations.",
            price: 54999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 8,
        },
        {
            name: "API Integration & Webhook Workflow Automation",
            slug: "api-workflow-automation",
            category: "software-engineering",
            description: "Seamless integration across CRMs, ERPs, accounting software, custom webhooks, n8n/Zapier automations, and scheduled data extraction pipelines.",
            price: 24999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 9,
        },
        {
            name: "Private Local AI Host & Ollama / DeepSeek VPS Setup",
            slug: "local-ai-host-setup",
            category: "ai-modernization",
            description: "Deploy private, self-hosted open-source LLMs (DeepSeek R1, Llama 3, Mistral) on private cloud VPS/GPU with secure REST API access for data-sensitive companies.",
            price: 19999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 10,
        },

        // ── Group 3: Specialized Software, Extensions & Algorithmic Tools ──
        {
            name: "Chrome & Browser Extension Engineering (Manifest V3)",
            slug: "chrome-extension-engineering",
            category: "software-engineering",
            description: "Custom Manifest V3 extensions for Chrome, Edge, and Brave. Includes background service workers, content DOM scrapers, custom HUD popups, and Web Store packaging.",
            price: 24999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 11,
        },
        {
            name: "Algorithmic Trading Bot & PineScript Automation",
            slug: "algo-trading-automation",
            category: "software-engineering",
            description: "Convert TradingView PineScript or proprietary indicators into low-latency automated Python execution engines connected to 34+ Indian brokers or Crypto exchanges.",
            price: 24999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 12,
        },
        {
            name: "Web Scraping & Automated Data Extraction Engine",
            slug: "web-scraping-engine",
            category: "software-engineering",
            description: "High-volume headless Puppeteer/Playwright scrapers with automatic proxy rotation, anti-bot mitigation, and clean JSON/CSV/PostgreSQL pipelines.",
            price: 19999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 13,
        },
        {
            name: "Cross-Platform Mobile App MVP",
            slug: "mobile-app-mvp",
            category: "software-engineering",
            description: "Production mobile application for iOS & Android built with React Native / Expo or Flutter. Native device APIs, push notifications, offline cache, and app store deployment.",
            price: 89999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 14,
        },
        {
            name: "Desktop Application Development (Windows & Mac)",
            slug: "desktop-app-development",
            category: "software-engineering",
            description: "Custom native desktop utilities, system tray tools, file accelerators, and offline software using Tauri or Electron (leveraging Softcorp's proven desktop engine).",
            price: 49999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 15,
        },

        // ── Group 4: Cloud DevOps, Security, FinOps & Maintenance ──
        {
            name: "Production Cloud Deployment & DevOps Pipeline",
            slug: "cloud-devops-deployment",
            category: "infrastructure",
            description: "Docker containerization, OCI / AWS / Vercel cloud setup, Nginx reverse proxy, automated Let's Encrypt SSL, PM2 process management, and GitOps CI/CD reload.",
            price: 14999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 16,
        },
        {
            name: "FinOps & Cloud Cost Optimization Audit",
            slug: "finops-cost-optimization",
            category: "infrastructure",
            description: "In-depth audit of AWS, OCI, Azure, or Vercel cloud compute, database egress, and LLM API spending to eliminate waste and cut monthly bills by 30%–60%.",
            price: 14999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 17,
        },
        {
            name: "Core Web Vitals, Speed & Technical SEO Overhaul",
            slug: "seo-speed-optimization",
            category: "infrastructure",
            description: "Guaranteed 90+ Google PageSpeed score. Asset compression, Next.js bundle tree-shaking, schema markup, OpenGraph social cards, and strict security headers.",
            price: 12999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 18,
        },
        {
            name: "Emergency Hotfix, Server Recovery & Bug Fix SLA",
            slug: "emergency-hotfix-recovery",
            category: "infrastructure",
            description: "Rapid emergency response for crashed servers, broken deployments, SSL certificate expirations, 502/504 errors, and payment gateway webhook breakdowns.",
            price: 9999,
            currency: "INR",
            pricingModel: "fixed",
            sortOrder: 19,
        },
        {
            name: "Managed IT Infrastructure & Telemetry (NIC 62013)",
            slug: "it-infrastructure-support",
            category: "infrastructure",
            description: "Managed Linux/Windows server clusters, 24/7 uptime monitoring, Prometheus/Zabbix metrics, security patch management, and emergency break-fix response SLA.",
            price: 24999,
            currency: "INR",
            pricingModel: "monthly",
            sortOrder: 20,
        },
    ];

    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: {
                ...service,
                isActive: true,
            },
            create: service,
        });
    }

    // Set all other legacy services to inactive
    const activeSlugs = services.map(s => s.slug);
    await prisma.service.updateMany({
        where: { slug: { notIn: activeSlugs } },
        data: { isActive: false }
    });

    console.log(`Successfully seeded ${services.length} active service offerings!`);
}

main()
    .catch((e: unknown) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
