import type { ComponentType } from "react";
import {
    FiLayout,
    FiCode,
    FiShoppingBag,
    FiGlobe,
    FiLayers,
    FiRefreshCw,
    FiMessageSquare,
    FiCpu,
    FiShare2,
    FiHardDrive,
    FiTerminal,
    FiTrendingUp,
    FiDatabase,
    FiSmartphone,
    FiMonitor,
    FiCloud,
    FiPieChart,
    FiZap,
    FiAlertTriangle,
    FiServer,
} from "react-icons/fi";

export interface UdyamServiceItem {
    id: string;
    nicCode: string;
    domain: "web" | "ai" | "tools" | "infra" | "software";
    filterCategory: "all" | "web" | "ai" | "tools" | "infra";
    title: string;
    subtitle: string;
    officialDescription: string;
    color: string;
    icon: ComponentType<{ className?: string; size?: number }>;
    startingPrice: number; // in INR
    inrPrice: number;
    usdPrice: number;
    pricingModel: "fixed" | "monthly" | "hourly";
    portalSlug: string;
    deliverables: { name: string; desc: string }[];
    techStack: string[];
    slaMetrics: string;
    turnaround: string;
    compliance: string;
    briefDetail: {
        architectureOverview: string;
        enterpriseUseCases: string[];
        keyBenefits: string[];
    };
}

export const udyamServicesList: UdyamServiceItem[] = [
    // ── 1. Landing Page ──
    {
        id: "srv-landing-page",
        nicCode: "NIC 62012",
        domain: "web",
        filterCategory: "web",
        title: "High-Converting Landing Page & Lead Funnel",
        subtitle: "High-velocity Next.js 16 + Tailwind v4 conversion landing pages with lead capture automation.",
        officialDescription: "Publishing, design and rapid delivery of web platform pages for client conversion campaigns.",
        color: "from-cyan-500 to-blue-600",
        icon: FiLayout,
        startingPrice: 14999,
        inrPrice: 14999,
        usdPrice: 199,
        pricingModel: "fixed",
        portalSlug: "landing-page-funnel",
        deliverables: [
            { name: "Responsive Cyber-Aesthetic Layout", desc: "Pixel-perfect mobile & desktop design with smooth Framer Motion micro-interactions." },
            { name: "Automated Lead Capture & Email Alert", desc: "Form validation integrated with Resend / Formspree with instant email alerts." },
            { name: "95+ Core Web Vitals Optimization", desc: "Zero-bloat assets and ultra-fast sub-second loading for maximized conversion rate." },
            { name: "Analytics & Custom Domain Setup", desc: "Google Analytics / Plausible tracking script and automated Vercel/VPS DNS deployment." },
        ],
        techStack: ["Next.js 16", "Tailwind CSS v4", "Framer Motion", "TypeScript", "Resend API"],
        slaMetrics: "Sub-500ms TTFB & 95+ PageSpeed Guarantee",
        turnaround: "48 - 72 Hours",
        compliance: "Mobile-First Accessibility & Core Web Vitals",
        briefDetail: {
            architectureOverview: "Built on Next.js 16 App Router using server components and zero-runtime CSS, resulting in instant loading and superior lead conversion.",
            enterpriseUseCases: [
                "B2B SaaS product launch and early-access waitlist funnels",
                "High-ticket consultancy & agency portfolio landing pages",
                "Google & Meta ad campaign landing pages with high conversion intent",
            ],
            keyBenefits: [
                "Blazing fast delivery in 48-72 hours",
                "High conversion rate design inspired by Linear and Apple",
                "Full source code ownership with zero ongoing platform lock-in",
            ],
        },
    },

    // ── 2. UI/UX Design ──
    {
        id: "srv-website-layout",
        nicCode: "NIC 62012",
        domain: "web",
        filterCategory: "web",
        title: "AI-Driven UI/UX & Website Layout Design",
        subtitle: "Figma design systems translated to high-performance React/Tailwind layouts and components.",
        officialDescription: "Designing of user interfaces, website layouts, and responsive component libraries.",
        color: "from-indigo-500 to-cyan-500",
        icon: FiCode,
        startingPrice: 24999,
        inrPrice: 24999,
        usdPrice: 349,
        pricingModel: "fixed",
        portalSlug: "website-layout-design",
        deliverables: [
            { name: "Full Figma Design System", desc: "Component variants, color palettes, dark obsidian typography, and responsive grids." },
            { name: "React 19 & Tailwind v4 Codebase", desc: "Clean, modular TypeScript components ready to drop into your Next.js application." },
            { name: "Micro-Interactions & Hover Physics", desc: "Spring-physics hover elevation, specular sheen sweeps, and ambient spotlights." },
            { name: "Cross-Device Layout Validation", desc: "Tested across mobile, tablet, 4K desktop, and ultra-wide displays." },
        ],
        techStack: ["Figma", "React 19", "Tailwind CSS v4", "TypeScript", "Lucide Icons"],
        slaMetrics: "Pixel-Perfect Fidelity & 60 FPS Fluidity",
        turnaround: "3 - 5 Days",
        compliance: "WCAG 2.1 AA Accessibility Standards",
        briefDetail: {
            architectureOverview: "Combines modern design systems with hardware-accelerated CSS animations for an elite enterprise aesthetic without layout shifts.",
            enterpriseUseCases: [
                "Redesigning dated SaaS web apps into luxury cyber-enterprise interfaces",
                "Building reusable design systems for multi-product digital ecosystems",
                "Interactive telemetry dashboards and client command center HUDs",
            ],
            keyBenefits: [
                "Direct translation from Figma to production-ready React code",
                "Sub-150 line modular component discipline",
                "Elevates brand perception to Fortune-500 luxury standard",
            ],
        },
    },

    // ── 3. E-Commerce Store ──
    {
        id: "srv-ecommerce",
        nicCode: "NIC 62012",
        domain: "web",
        filterCategory: "web",
        title: "Modern E-Commerce Store & Payment Setup",
        subtitle: "High-converting online storefront with automated Razorpay, Stripe, and multi-currency checkout.",
        officialDescription: "Publishing and software architecture for digital commerce, checkout gateways, and merchant platforms.",
        color: "from-emerald-500 to-teal-500",
        icon: FiShoppingBag,
        startingPrice: 34999,
        inrPrice: 34999,
        usdPrice: 499,
        pricingModel: "fixed",
        portalSlug: "ecommerce-store-setup",
        deliverables: [
            { name: "Automated Multi-Gateway Checkout", desc: "Integrated with Razorpay (UPI/Cards), Stripe, and PayPal with cryptographic webhook verification." },
            { name: "Catalog & Inventory Engine", desc: "Product catalog setup up to 100 SKUs with variants, tags, and automated stock deduction." },
            { name: "Customer Order Tracking & Email Invoices", desc: "Automatic customer receipt dispatch and client order management portal." },
            { name: "SEO & Social OpenGraph Tags", desc: "Structured product schema markup for Google Rich Results and social preview cards." },
        ],
        techStack: ["Next.js Commerce / Shopify", "Razorpay SDK", "Stripe API", "Tailwind CSS", "SQLite/Postgres"],
        slaMetrics: "100% Payment Webhook Reliability & Zero Cart Lag",
        turnaround: "4 - 6 Days",
        compliance: "PCI-DSS Compliant Gateway Integration",
        briefDetail: {
            architectureOverview: "Engineered with secure payment isolation and cryptographic HMAC-SHA256 signature verification so payments never fail or tamper.",
            enterpriseUseCases: [
                "Direct-to-Consumer (D2C) brands selling physical products across India & globally",
                "Digital product & software license sales with instant automated key delivery",
                "Wholesale B2B catalog with minimum order quantities and bulk pricing tiers",
            ],
            keyBenefits: [
                "Supports both domestic UPI (₹) and international Credit Cards ($)",
                "Zero monthly commission fees on custom self-hosted builds",
                "Instant automated license and download fulfillment",
            ],
        },
    },

    // ── 4. Web Architecture & Platform ──
    {
        id: "srv-web-platform",
        nicCode: "NIC 62012",
        domain: "web",
        filterCategory: "web",
        title: "Corporate Web Architecture & Platform (NIC 62012)",
        subtitle: "High-performance enterprise web presence built with Next.js 16, SSR/SSG, and CMS integration.",
        officialDescription: "Publishing of operating systems, applications, and web platforms for enterprise organizations.",
        color: "from-blue-600 to-indigo-600",
        icon: FiGlobe,
        startingPrice: 49999,
        inrPrice: 49999,
        usdPrice: 699,
        pricingModel: "fixed",
        portalSlug: "web-architecture-platforms",
        deliverables: [
            { name: "Multi-Page Next.js 16 App Router", desc: "Corporate platform with dynamic routes, metadata sitemaps, and robots.txt generation." },
            { name: "Dynamic Headless CMS / Database", desc: "Prisma ORM with SQLite / PostgreSQL for dynamic services, case studies, and blogs." },
            { name: "Security & CSP Hardening", desc: "Strict Content Security Policies, X-Frame headers, and rate-limited API endpoints." },
            { name: "Global Edge CDN & Cloud Deployment", desc: "Configured on Oracle Cloud Infrastructure (OCI) or Vercel with automated SSL." },
        ],
        techStack: ["Next.js 16 (Turbopack)", "React 19", "Prisma ORM", "Tailwind CSS v4", "Docker / PM2"],
        slaMetrics: "99.9% Uptime & Sub-100ms Global Edge Latency",
        turnaround: "1 - 2 Weeks",
        compliance: "Ministry of MSME Registered IT Standards",
        briefDetail: {
            architectureOverview: "Combines server-side rendering (SSR) and incremental static regeneration (ISR) for near-instant page loads and high search engine ranking.",
            enterpriseUseCases: [
                "Corporate portals for B2B engineering, logistics, and consulting firms",
                "Investor-ready startup platforms requiring verified compliance and credibility tickers",
                "High-traffic content portals requiring caching and zero database contention",
            ],
            keyBenefits: [
                "Full compliance with enterprise security and MSMED Act standards",
                "Scales effortlessly to hundreds of thousands of monthly visitors",
                "Complete Git repository ownership with automated deployment scripts",
            ],
        },
    },

    // ── 5. Full-Stack SaaS MVP ──
    {
        id: "srv-fullstack-mvp",
        nicCode: "NIC 62011",
        domain: "software",
        filterCategory: "web",
        title: "Rapid Full-Stack Web App / SaaS MVP Builder",
        subtitle: "Complete production-ready MVP: Next.js + DB + Auth + Stripe/Razorpay + Admin Dashboard in 2–3 weeks.",
        officialDescription: "Writing, modifying, testing of computer programs to meet the needs of a particular client.",
        color: "from-purple-600 to-indigo-600",
        icon: FiLayers,
        startingPrice: 79999,
        inrPrice: 79999,
        usdPrice: 1099,
        pricingModel: "fixed",
        portalSlug: "fullstack-mvp-builder",
        deliverables: [
            { name: "End-to-End Authentication Suite", desc: "NextAuth / OAuth (Google, GitHub) + credentials login with bcrypt password hashing." },
            { name: "Relational DB & ORM Architecture", desc: "Prisma schema with migrations, user roles, relational tables, and WAL performance tuning." },
            { name: "Subscription & One-Time Billing", desc: "Integrated payment processing with webhooks, receipts, and user access levels." },
            { name: "Full Admin Management Dashboard", desc: "Telemetry charts, user administration, order status management, and message tracking." },
        ],
        techStack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL / SQLite", "NextAuth", "Stripe / Razorpay"],
        slaMetrics: "Production-Ready Architecture in Under 21 Days",
        turnaround: "2 - 3 Weeks",
        compliance: "Clean Architecture & Security Best Practices",
        briefDetail: {
            architectureOverview: "Built from scratch using industry-proven architecture patterns, decoupled API routes, and type-safe database schemas.",
            enterpriseUseCases: [
                "Founders validating SaaS product ideas before fundraising",
                "Custom internal workflow and resource management tools for mid-market businesses",
                "Client-facing self-service portals with subscription billing tiers",
            ],
            keyBenefits: [
                "Saves months of developer trial and error",
                "Ready to accept live paying customers immediately upon launch",
                "Clean, well-documented codebase built to scale smoothly",
            ],
        },
    },

    // ── 6. Headless Migration ──
    {
        id: "srv-headless-migration",
        nicCode: "NIC 62012",
        domain: "web",
        filterCategory: "web",
        title: "WordPress / Shopify to Headless Next.js Migration",
        subtitle: "Rebuild slow legacy CMS sites on ultra-fast headless Next.js while preserving all existing Google SEO rankings.",
        officialDescription: "Replatforming and performance modernization of legacy websites to headless cloud architectures.",
        color: "from-cyan-600 to-indigo-500",
        icon: FiRefreshCw,
        startingPrice: 39999,
        inrPrice: 39999,
        usdPrice: 549,
        pricingModel: "fixed",
        portalSlug: "headless-migration",
        deliverables: [
            { name: "Zero-Downtime SEO Preservation", desc: "1:1 URL redirects map, canonical tags, schema markup, and metadata preservation." },
            { name: "Content & Blog Migration", desc: "Automated export of legacy posts, images, and author profiles into Next.js markdown or headless CMS." },
            { name: "Instant Sub-Second Page Speeds", desc: "Eliminates bloated PHP plugins and slow database queries with static edge generation." },
            { name: "Server Cost Reduction", desc: "Replaces expensive cPanel / shared hosting with free or ultra-low-cost Vercel / Cloudflare edge." },
        ],
        techStack: ["Next.js 16", "Headless WordPress / Shopify API", "Tailwind CSS", "Cloudflare"],
        slaMetrics: "100% SEO Retention & 3x Speed Improvement",
        turnaround: "5 - 7 Days",
        compliance: "Google Search Central Migration Guidelines",
        briefDetail: {
            architectureOverview: "Decouples the frontend presentation layer from the legacy CMS backend, delivering modern React performance while letting editors keep their familiar publishing interface.",
            enterpriseUseCases: [
                "Migrating sluggish WordPress blogs with 500+ articles to lightning-fast static edge pages",
                "Modernizing Shopify store frontends for 40%+ higher mobile checkout conversion",
                "Eliminating security vulnerabilities and daily plugin update headaches of legacy PHP CMS",
            ],
            keyBenefits: [
                "Guaranteed zero loss of Google search rankings or organic traffic",
                "Dramatically improves Core Web Vitals to 90+ on mobile",
                "Immune to traditional WordPress database injection attacks",
            ],
        },
    },

    // ── 7. AI Support Chatbot ──
    {
        id: "srv-ai-chatbot",
        nicCode: "NIC 62099",
        domain: "ai",
        filterCategory: "ai",
        title: "Custom AI Chatbot & Customer Support Widget",
        subtitle: "Embeddable smart chat widget grounded in your company FAQs, PDFs, and documentation.",
        officialDescription: "Other information technology and computer service activities including AI and automated support systems.",
        color: "from-cyan-500 to-teal-600",
        icon: FiMessageSquare,
        startingPrice: 29999,
        inrPrice: 29999,
        usdPrice: 429,
        pricingModel: "fixed",
        portalSlug: "ai-support-chatbot",
        deliverables: [
            { name: "Embeddable Cyber-Glass Widget", desc: "Custom floating chat bubble matching your brand colors and design aesthetic." },
            { name: "RAG Document & FAQ Grounding", desc: "Trained on your website URLs, PDF brochures, and internal manuals with zero hallucination." },
            { name: "Streaming Token Responses", desc: "Real-time streaming responses with sub-second time-to-first-token response." },
            { name: "Human Support Email Escalation", desc: "Automatic ticket forwarding when customer requests a human representative." },
        ],
        techStack: ["OpenAI / Gemini API", "LangChain / Vercel AI SDK", "Vector DB (Pinecone/Chroma)", "TypeScript"],
        slaMetrics: "Sub-1s Initial Token Latency & 99% Answer Accuracy",
        turnaround: "3 - 5 Days",
        compliance: "Strict Privacy & Zero Data Leakage Guardrails",
        briefDetail: {
            architectureOverview: "Utilizes retrieval-augmented generation (RAG) with semantic similarity vector search, answering questions strictly from your verified facts.",
            enterpriseUseCases: [
                "24/7 automated tier-1 customer support on your website",
                "Internal employee onboarding assistant for company policies and HR documents",
                "Interactive lead qualification bot capturing visitor email and project requirements",
            ],
            keyBenefits: [
                "Reduces customer support tickets by up to 70%",
                "Never gives false or fabricated answers outside your provided docs",
                "Works across all websites with a simple one-line script embed",
            ],
        },
    },

    // ── 8. Autonomous AI Workflows ──
    {
        id: "srv-autonomous-ai",
        nicCode: "NIC 62099",
        domain: "ai",
        filterCategory: "ai",
        title: "Autonomous AI Workflows & Multi-Agent Systems (NIC 62099)",
        subtitle: "Deterministic enterprise RAG pipelines, multi-agent automated task runners, and LLM integrations.",
        officialDescription: "Other information technology and computer service activities including artificial intelligence and machine learning engineering.",
        color: "from-violet-600 to-cyan-500",
        icon: FiCpu,
        startingPrice: 54999,
        inrPrice: 54999,
        usdPrice: 799,
        pricingModel: "fixed",
        portalSlug: "autonomous-ai-workflows",
        deliverables: [
            { name: "Multi-Agent Coordinated Workflows", desc: "Autonomous worker agents with coordinator oversight, automated tasks, and error recovery." },
            { name: "Enterprise Tool Calling & API Triggers", desc: "Agents capable of reading databases, calling internal REST endpoints, and generating files." },
            { name: "State Checkpointing & Resumption", desc: "Memory persistence so background automations survive timeouts without losing context." },
            { name: "Executive Output Reports & Dashboards", desc: "Formatted markdown artifacts, structured tables, and telemetry feeds." },
        ],
        techStack: ["Python / Node.js", "LangGraph / CrewAI", "Gemini 2.5 / Claude 3.7", "Vector DB", "Redis"],
        slaMetrics: "Deterministic Tool Execution & 99.5% Task Reliability",
        turnaround: "5 - 7 Days",
        compliance: "Enterprise Data Privacy & Prompt Injection Protection",
        briefDetail: {
            architectureOverview: "Engineered on directed acyclic graph (DAG) execution loops where specialized subagents execute discrete phases with verification gates.",
            enterpriseUseCases: [
                "Autonomous research, competitive intelligence, and regulatory compliance monitoring",
                "Automated software refactoring, code quality audits, and test generation pipelines",
                "End-to-end customer onboarding, document verification, and CRM data enrichment",
            ],
            keyBenefits: [
                "Automates complex multi-step human cognitive workflows",
                "Operates 24/7 without fatigue or manual oversight",
                "Massive reduction in repetitive operational overhead",
            ],
        },
    },

    // ── 9. API & Webhook Automation ──
    {
        id: "srv-api-automation",
        nicCode: "NIC 62011",
        domain: "ai",
        filterCategory: "ai",
        title: "API Integration & Webhook Workflow Automation",
        subtitle: "Connect CRMs, ERPs, accounting software, and custom webhooks with n8n/Zapier or Node.js microservices.",
        officialDescription: "Writing, modifying, testing of computer programs for data exchange and system connectivity.",
        color: "from-emerald-600 to-cyan-600",
        icon: FiShare2,
        startingPrice: 24999,
        inrPrice: 24999,
        usdPrice: 349,
        pricingModel: "fixed",
        portalSlug: "api-workflow-automation",
        deliverables: [
            { name: "Custom REST & Webhook Microservices", desc: "Reliable middleware connecting disparate services with retry queues and rate limiting." },
            { name: "CRM & Accounting Synchronization", desc: "Automatic syncing between HubSpot / Zoho / Salesforce, Tally / QuickBooks, and payment gateways." },
            { name: "Automated Invoice & Document Generation", desc: "Dynamic PDF receipt generation with automated client email dispatch." },
            { name: "n8n / Self-Hosted Automation Host", desc: "Cost-effective self-hosted workflow automation replacing expensive Zapier fees." },
        ],
        techStack: ["Node.js / Express", "n8n (Self-Hosted)", "PostgreSQL / Redis", "BullMQ", "Docker"],
        slaMetrics: "Zero Message Drop & Guaranteed Idempotent Retries",
        turnaround: "3 - 4 Days",
        compliance: "Encrypted In-Transit & At-Rest Standards",
        briefDetail: {
            architectureOverview: "Built with persistent message queues and idempotent processing so failed external APIs automatically retry without duplicate records.",
            enterpriseUseCases: [
                "Automatic order synchronization between e-commerce and logistics ERPs",
                "Real-time lead alerts to Telegram/WhatsApp/Slack upon website form submission",
                "Automated monthly invoice calculation and billing settlement reconciliation",
            ],
            keyBenefits: [
                "Eliminates thousands of manual data-entry hours",
                "Self-hosted options cut monthly SaaS automation bills by 80%",
                "Error-proof data flow across all company systems",
            ],
        },
    },

    // ── 10. Local AI Host Setup ──
    {
        id: "srv-local-ai",
        nicCode: "NIC 62099",
        domain: "ai",
        filterCategory: "ai",
        title: "Private Local AI Host & Ollama / DeepSeek VPS Setup",
        subtitle: "Deploy private, self-hosted open-source LLMs on private cloud VPS/GPU with secure REST API access.",
        officialDescription: "Deployment and configuration of localized artificial intelligence and machine learning infrastructure.",
        color: "from-cyan-600 to-blue-700",
        icon: FiHardDrive,
        startingPrice: 19999,
        inrPrice: 19999,
        usdPrice: 279,
        pricingModel: "fixed",
        portalSlug: "local-ai-host-setup",
        deliverables: [
            { name: "Private LLM Server Deployment", desc: "Ollama / vLLM runtime hosting DeepSeek R1, Llama 3.3, or Mistral on your private instance." },
            { name: "OpenAI-Compatible REST API Endpoint", desc: "Drop-in API URL and token replacing third-party OpenAI endpoints with 100% data confidentiality." },
            { name: "Hardware & Memory Quantization Tuning", desc: "GGUF 4-bit / 8-bit quantization optimized for your specific CPU / GPU VRAM capacity." },
            { name: "Web UI Dashboard & Access Control", desc: "Open-WebUI client for team chat, document uploads, and API key management." },
        ],
        techStack: ["Ollama / vLLM", "DeepSeek R1 / Llama 3", "Open-WebUI", "Docker", "Linux (Ubuntu)"],
        slaMetrics: "100% Data Airgap Guarantee & Zero Third-Party Logging",
        turnaround: "2 - 3 Days",
        compliance: "GDPR, HIPAA & Enterprise Confidentiality Compliant",
        briefDetail: {
            architectureOverview: "Deploys open-source weights onto your isolated cloud VPS or on-premise hardware, ensuring zero customer prompts or proprietary documents ever leave your servers.",
            enterpriseUseCases: [
                "Law firms and healthcare companies requiring strict compliance with zero external data transmission",
                "Internal financial analysis of sensitive company balance sheets and audits",
                "Unlimited internal developer and team AI usage without recurring per-token SaaS bills",
            ],
            keyBenefits: [
                "Complete legal and data privacy compliance",
                "Zero monthly API bills from OpenAI or Anthropic",
                "Full control over model weights, system prompts, and context retention",
            ],
        },
    },

    // ── 11. Chrome Extension ──
    {
        id: "srv-chrome-extension",
        nicCode: "NIC 62011",
        domain: "tools",
        filterCategory: "tools",
        title: "Chrome & Browser Extension Engineering (Manifest V3)",
        subtitle: "Custom MV3 extensions for Chrome, Edge, and Brave for automation, scraping, and productivity HUDs.",
        officialDescription: "Software development and extension engineering for web browsers and user tools.",
        color: "from-amber-500 to-orange-500",
        icon: FiTerminal,
        startingPrice: 24999,
        inrPrice: 24999,
        usdPrice: 349,
        pricingModel: "fixed",
        portalSlug: "chrome-extension-engineering",
        deliverables: [
            { name: "Manifest V3 Compliant Architecture", desc: "Built to the latest Google Web Store security guidelines with service worker lifecycles." },
            { name: "In-Page Floating HUD & DOM Injection", desc: "Clean overlay controls and real-time DOM scrapers that interact directly with web pages." },
            { name: "Background Sync & Storage Management", desc: "Encrypted local storage sync, background token management, and native messaging." },
            { name: "Chrome Web Store Packaging & Guide", desc: "ZIP package ready for developer dashboard upload with privacy policy and store icons." },
        ],
        techStack: ["TypeScript", "Chrome Extensions API (MV3)", "Tailwind CSS", "Vite / Webpack", "WebSockets"],
        slaMetrics: "100% Manifest V3 Store Compliance & Zero Memory Leaks",
        turnaround: "3 - 5 Days",
        compliance: "Official Chrome Web Store & Edge Addons Standards",
        briefDetail: {
            architectureOverview: "Engineered on modern Manifest V3 standards using decoupled content scripts and ephemeral service workers, ensuring zero browser slowdown.",
            enterpriseUseCases: [
                "Internal workflow automation tools for sales and operations teams",
                "In-page web scrapers, data extractors, and competitor price checkers",
                "Custom media grabbers and accelerator toolbars (like Softcorp SDM)",
            ],
            keyBenefits: [
                "Instant user adoption with zero complex desktop software installation",
                "Runs on Chrome, Microsoft Edge, Brave, Arc, and Opera",
                "Built by developers with certified store releases",
            ],
        },
    },

    // ── 12. Algorithmic Trading ──
    {
        id: "srv-algo-trading",
        nicCode: "NIC 62011",
        domain: "tools",
        filterCategory: "tools",
        title: "Algorithmic Trading Bot & PineScript Automation",
        subtitle: "Convert TradingView PineScript or indicators into low-latency Python execution engines for Indian & crypto brokers.",
        officialDescription: "Writing and modifying financial software algorithms and automated trading systems.",
        color: "from-green-500 to-emerald-600",
        icon: FiTrendingUp,
        startingPrice: 24999,
        inrPrice: 24999,
        usdPrice: 349,
        pricingModel: "fixed",
        portalSlug: "algo-trading-automation",
        deliverables: [
            { name: "PineScript to Python Conversion", desc: "Translate TradingView v5 strategies into low-latency executable Python algorithms." },
            { name: "Multi-Broker API Integration", desc: "Direct order dispatch to Indian brokers (Zerodha, AngelOne, Dhan, Kotak, Delta) and crypto exchanges." },
            { name: "Risk Management & Stop-Loss Guardrails", desc: "Max daily loss limits, automated trailing stop-losses, and order slippage checks." },
            { name: "VectorBT Backtesting & Tearsheet", desc: "Historical simulation including official broker charges, GST, and execution slippage." },
        ],
        techStack: ["Python 3.12", "VectorBT / Pandas-TA", "OpenAlgo API", "WebSockets", "Docker"],
        slaMetrics: "Sub-50ms Order Dispatch Latency & Real-World Cost Accounting",
        turnaround: "3 - 5 Days",
        compliance: "Broker API Guidelines & Statutory Risk Accounting",
        briefDetail: {
            architectureOverview: "Developed by algorithmic trading specialists with architecture borrowed from Tradeboard Algo Platform, ensuring low latency and strict risk gates.",
            enterpriseUseCases: [
                "Automating intraday options straddles, iron condors, and index breakout strategies",
                "Multi-account copy-trading execution for fund managers and family offices",
                "Crypto futures algorithmic trading with automated funding-rate arbitrage",
            ],
            keyBenefits: [
                "Zero emotional execution errors or hesitation",
                "All backtests reflect exact exchange fees, GST, and slippage",
                "Compatible with 34+ Indian brokers with self-hosted privacy",
            ],
        },
    },

    // ── 13. Web Scraping Engine ──
    {
        id: "srv-web-scraping",
        nicCode: "NIC 62011",
        domain: "tools",
        filterCategory: "tools",
        title: "Web Scraping & Automated Data Extraction Engine",
        subtitle: "High-volume headless Puppeteer/Playwright scrapers with proxy rotation, anti-bot mitigation, and clean database export.",
        officialDescription: "Software development for automated information extraction, web scraping, and database collation.",
        color: "from-teal-600 to-cyan-500",
        icon: FiDatabase,
        startingPrice: 19999,
        inrPrice: 19999,
        usdPrice: 279,
        pricingModel: "fixed",
        portalSlug: "web-scraping-engine",
        deliverables: [
            { name: "Headless Browser Automation", desc: "Playwright / Puppeteer scripts navigating dynamic JavaScript-rendered single-page apps." },
            { name: "Anti-Bot & Proxy Rotation Layer", desc: "Residential proxy pools, user-agent randomization, and Cloudflare bypass handling." },
            { name: "Structured Data Validation & Cleaning", desc: "Deduplication, schema normalization, and export to CSV, JSON, PostgreSQL, or Google Sheets." },
            { name: "Automated Cron Scheduling & Webhooks", desc: "Scheduled daily/hourly background runs with failure alerts to email or Telegram." },
        ],
        techStack: ["Playwright / Puppeteer", "Node.js / Python", "Cheerio", "PostgreSQL", "Docker"],
        slaMetrics: "99.8% Scraping Success Rate & Clean Deduplicated Data",
        turnaround: "3 - 4 Days",
        compliance: "Robots.txt & Responsible Crawling Standards",
        briefDetail: {
            architectureOverview: "Engineered with distributed concurrency and automatic retry logic so rate limits and network drops never corrupt or halt the scraping pipeline.",
            enterpriseUseCases: [
                "Competitor price tracking and inventory monitoring for e-commerce brands",
                "B2B lead generation, directory scraping, and business contact collation",
                "Real estate listing aggregation and financial market intelligence",
            ],
            keyBenefits: [
                "Gathers hundreds of thousands of data points on autopilot",
                "Delivers clean, ready-to-use structured tables directly into your database",
                "Runs silently in Docker containers on low-cost cloud instances",
            ],
        },
    },

    // ── 14. Mobile App MVP ──
    {
        id: "srv-mobile-mvp",
        nicCode: "NIC 62011",
        domain: "tools",
        filterCategory: "tools",
        title: "Cross-Platform Mobile App MVP",
        subtitle: "Production mobile application for iOS & Android built with React Native / Expo or Flutter.",
        officialDescription: "Software development and deployment for mobile computing devices and platforms.",
        color: "from-blue-500 to-cyan-500",
        icon: FiSmartphone,
        startingPrice: 89999,
        inrPrice: 89999,
        usdPrice: 1299,
        pricingModel: "fixed",
        portalSlug: "mobile-app-mvp",
        deliverables: [
            { name: "Single Codebase for iOS & Android", desc: "Cross-platform React Native / Expo or Flutter with native performance and look-and-feel." },
            { name: "Offline-First Data Caching", desc: "Local SQLite/MMKV caching allowing full app interaction even without active internet." },
            { name: "Push Notifications & Authentication", desc: "Firebase Cloud Messaging, biometric FaceID/fingerprint, and OAuth social login." },
            { name: "App Store & Play Store Builds", desc: "Production IPA and AAB binaries signed and prepared for official app store submission." },
        ],
        techStack: ["React Native / Expo", "Flutter (Dart 3)", "TypeScript", "Firebase / Supabase", "Tailwind / NativeWind"],
        slaMetrics: "60 FPS Native Performance & Cross-Platform Parity",
        turnaround: "2 - 3 Weeks",
        compliance: "Apple App Store & Google Play Policy Compliance",
        briefDetail: {
            architectureOverview: "Built with modern component composition, reactive state management, and optimized native bridges for sub-millisecond touch response.",
            enterpriseUseCases: [
                "Consumer digital apps, streaming audio players, and community platforms",
                "Internal field inspection, logistics tracking, and mobile CRM applications",
                "On-demand booking, appointment scheduling, and customer loyalty mobile portals",
            ],
            keyBenefits: [
                "Halves development cost by writing once for both iPhone and Android",
                "Native hardware camera, GPS, and biometric sensor integration",
                "Complete app store submission guidance and handover",
            ],
        },
    },

    // ── 15. Desktop App Development ──
    {
        id: "srv-desktop-app",
        nicCode: "NIC 62011",
        domain: "tools",
        filterCategory: "tools",
        title: "Desktop Application Development (Windows & Mac)",
        subtitle: "Custom native desktop utilities, system tray tools, file accelerators, and offline software using Tauri or Electron.",
        officialDescription: "Writing, modifying, testing of native desktop applications for personal computers.",
        color: "from-indigo-600 to-blue-500",
        icon: FiMonitor,
        startingPrice: 49999,
        inrPrice: 49999,
        usdPrice: 699,
        pricingModel: "fixed",
        portalSlug: "desktop-app-development",
        deliverables: [
            { name: "Cross-Platform Windows (.exe/MSIX) & Mac (.dmg)", desc: "Compiled native binary installers with desktop shortcuts, icon branding, and code signing." },
            { name: "System Tray Persistence & Background Daemons", desc: "Silent background operations, tray menus, global hotkeys, and native OS notifications." },
            { name: "Native Filesystem & Hardware Acceleration", desc: "Multi-threaded disk I/O, GPU-accelerated rendering, and low memory footprint (<50MB RAM with Tauri)." },
            { name: "Auto-Update Mechanism", desc: "Seamless background updates checking remote releases without requiring manual re-installation." },
        ],
        techStack: ["Tauri (Rust + React)", "Electron", "TypeScript", "Tailwind CSS", "NSIS / MSIX"],
        slaMetrics: "Sub-50MB RAM Footprint & Instant App Startup",
        turnaround: "1 - 2 Weeks",
        compliance: "Microsoft Store & Apple Notarization Standards",
        briefDetail: {
            architectureOverview: "Leverages the battle-tested desktop runtime architecture developed for Softcorp's flagship products (SDM, Spectrum & Melodrift) for blistering performance.",
            enterpriseUseCases: [
                "Internal business tools requiring local file manipulation, hardware USB dongles, or scanner bridges",
                "High-performance media tools, offline music players, and RAW photo inspectors",
                "Proprietary trading station terminals and algorithmic execution monitors",
            ],
            keyBenefits: [
                "Zero web browser address bar clutter—runs as a true desktop application",
                "Full offline functionality with local SQLite storage",
                "Engineered by architects with live Microsoft Store releases",
            ],
        },
    },

    // ── 16. Cloud DevOps Deployment ──
    {
        id: "srv-cloud-devops",
        nicCode: "NIC 62013",
        domain: "infra",
        filterCategory: "infra",
        title: "Production Cloud Deployment & DevOps Pipeline",
        subtitle: "Docker containerization, OCI / AWS / Vercel cloud setup, Nginx reverse proxy, and zero-downtime CI/CD.",
        officialDescription: "Computer facilities management, cloud deployment, and infrastructure operations.",
        color: "from-blue-600 to-indigo-700",
        icon: FiCloud,
        startingPrice: 14999,
        inrPrice: 14999,
        usdPrice: 199,
        pricingModel: "fixed",
        portalSlug: "cloud-devops-deployment",
        deliverables: [
            { name: "Docker Containerization & Compose", desc: "Multi-stage Dockerfiles optimized for minimal disk footprint and lightning-fast builds." },
            { name: "Production Nginx & Automated SSL", desc: "Reverse proxy configuration, Let's Encrypt auto-renewal, and HTTP/2 / gzip acceleration." },
            { name: "Zero-Downtime PM2 Cluster Setup", desc: "Automated process management with memory leak restarts and log rotation." },
            { name: "Automated Git Deploy Hook", desc: "One-command deploy scripts pulling directly from Git with automated dependency builds." },
        ],
        techStack: ["Docker", "Ubuntu / Debian", "Nginx", "Oracle Cloud (OCI) / AWS", "PM2", "GitHub Actions"],
        slaMetrics: "Zero-Downtime Deployment & 99.99% Server Stability",
        turnaround: "24 - 48 Hours",
        compliance: "CIS Server Benchmark & Linux Hardening Standards",
        briefDetail: {
            architectureOverview: "Configured using immutable deployment techniques with swap-space optimization and automated process supervisor recovery.",
            enterpriseUseCases: [
                "Deploying Next.js, Node.js, and Python backends on budget-friendly Oracle Cloud VMs",
                "Migrating fragile shared cPanel hosting to enterprise cloud instances",
                "Emergency server crash recovery, SSL certificate renewal, and port reconfiguration",
            ],
            keyBenefits: [
                "Cuts hosting bills by up to 80% compared to expensive serverless platforms",
                "Servers never crash or run out of memory under peak traffic spikes",
                "Complete step-by-step handover documentation and maintenance scripts",
            ],
        },
    },

    // ── 17. FinOps & Cloud Cost Optimization ──
    {
        id: "srv-finops",
        nicCode: "NIC 62020",
        domain: "infra",
        filterCategory: "infra",
        title: "FinOps & Cloud Cost Optimization Audit",
        subtitle: "In-depth audit of AWS, OCI, Azure, or Vercel cloud compute, database egress, and LLM API spending to cut waste by 30%–60%.",
        officialDescription: "Computer consultancy, cloud expenditure optimization, and infrastructure financial management.",
        color: "from-emerald-600 to-green-500",
        icon: FiPieChart,
        startingPrice: 14999,
        inrPrice: 14999,
        usdPrice: 199,
        pricingModel: "fixed",
        portalSlug: "finops-cost-optimization",
        deliverables: [
            { name: "Complete Infrastructure Cost Audit", desc: "Itemized breakdown of idle compute instances, unattached EBS volumes, and bandwidth egress traps." },
            { name: "Database & Storage Optimization", desc: "Right-sizing over-provisioned databases and implementing lifecycle cold storage archiving." },
            { name: "LLM API Token Reduction Architecture", desc: "Prompt compression, caching layers, and semantic caching slashing OpenAI/Anthropic bills." },
            { name: "Actionable Implementation Roadmap", desc: "Step-by-step configuration diffs and automated cleanup scripts with estimated monthly savings." },
        ],
        techStack: ["AWS Cost Explorer", "CloudWatch", "Oracle Cloud (OCI)", "Terraform", "Redis Semantic Cache"],
        slaMetrics: "Guaranteed 30%+ Cloud Bill Reduction Recommendations",
        turnaround: "48 - 72 Hours",
        compliance: "FinOps Foundation Best Practices & Principles",
        briefDetail: {
            architectureOverview: "Analyzes telemetry utilization curves, network topologies, and API call matrices to eliminate resource waste without sacrificing uptime or performance.",
            enterpriseUseCases: [
                "Startups facing unexpected $5,000+ monthly AWS/Vercel bills after scaling",
                "Companies with runaway LLM API costs needing intelligent semantic prompt caching",
                "Enterprises preparing for budget audits or seeking high cloud margin improvements",
            ],
            keyBenefits: [
                "ROI is usually recovered within the very first month of cost reduction",
                "Zero degradation in application speed or user experience",
                "Clear, jargon-free executive report with exact monetary savings",
            ],
        },
    },

    // ── 18. SEO & Speed Optimization ──
    {
        id: "srv-seo-speed",
        nicCode: "NIC 62012",
        domain: "infra",
        filterCategory: "infra",
        title: "Core Web Vitals, Speed & Technical SEO Overhaul",
        subtitle: "Guaranteed 90+ PageSpeed score, asset compression, bundle tree-shaking, and technical search indexing.",
        officialDescription: "Website optimization, search engine optimization, and web performance enhancement.",
        color: "from-yellow-500 to-amber-600",
        icon: FiZap,
        startingPrice: 12999,
        inrPrice: 12999,
        usdPrice: 169,
        pricingModel: "fixed",
        portalSlug: "seo-speed-optimization",
        deliverables: [
            { name: "Guaranteed 90+ Mobile PageSpeed", desc: "Eliminating render-blocking resources, layout shifts (CLS), and long main thread tasks." },
            { name: "Modern Image WebP/AVIF Conversion", desc: "Automated responsive image compression reducing total page payload by 60%+." },
            { name: "Structured JSON-LD Schema Markup", desc: "Google Rich Results schema for Organizations, FAQs, Services, and Software products." },
            { name: "Complete Robots.txt & XML Sitemap", desc: "Flawless search crawler indexing configuration and OpenGraph preview cards." },
        ],
        techStack: ["Google Lighthouse", "Next.js Image Optimization", "Schema.org JSON-LD", "WebP/AVIF", "PostCSS"],
        slaMetrics: "Guaranteed 90+ PageSpeed Score on Google Lighthouse",
        turnaround: "24 - 48 Hours",
        compliance: "Google Core Web Vitals & Search Central Standards",
        briefDetail: {
            architectureOverview: "Performs deep AST bundle tree-shaking, font pre-loading, and CSS purging to achieve pristine performance metrics.",
            enterpriseUseCases: [
                "E-commerce websites suffering from low conversion rates due to sluggish 4+ second page loads",
                "Corporate websites ranking poorly on Google due to failed Core Web Vitals",
                "Fixing missing metadata and broken preview links on LinkedIn, X, and WhatsApp",
            ],
            keyBenefits: [
                "Directly boosts organic Google ranking and visibility",
                "Drastically reduces bounce rate and keeps visitors engaged",
                "Verifiable before-and-after Lighthouse performance audit reports",
            ],
        },
    },

    // ── 19. Emergency Hotfix & Recovery ──
    {
        id: "srv-emergency-hotfix",
        nicCode: "NIC 62013",
        domain: "infra",
        filterCategory: "infra",
        title: "Emergency Hotfix, Server Recovery & Bug Fix SLA",
        subtitle: "Rapid 24/7 emergency response for crashed servers, broken deployments, expired SSL certificates, and 502/504 errors.",
        officialDescription: "Emergency computer operations support, crash remediation, and technical problem resolution.",
        color: "from-rose-500 to-red-600",
        icon: FiAlertTriangle,
        startingPrice: 9999,
        inrPrice: 9999,
        usdPrice: 149,
        pricingModel: "fixed",
        portalSlug: "emergency-hotfix-recovery",
        deliverables: [
            { name: "Immediate Root-Cause Investigation", desc: "Rapid diagnostic of memory leaks, crashed processes, disk space exhaustion, and port locks." },
            { name: "Production Service Restoration", desc: "Restoring web traffic, restarting reverse proxies, rebuilding Docker containers, or rolling back broken commits." },
            { name: "SSL & Domain Fixes", desc: "Renewing expired SSL certificates, fixing DNS misconfigurations, and Cloudflare 520 errors." },
            { name: "Post-Incident Mitigation Report", desc: "Detailed summary of failure root cause with preventive measures to prevent recurrence." },
        ],
        techStack: ["Linux Sysadmin", "Nginx / Apache", "PM2 / Systemd", "Docker", "SSL / Certbot", "Git"],
        slaMetrics: "Sub-2 Hour Initial Response & Emergency Remediation",
        turnaround: "12 - 24 Hours",
        compliance: "Emergency Incident Management Best Practices",
        briefDetail: {
            architectureOverview: "Emergency triage team with direct terminal diagnostics, isolating failing processes and bringing critical customer-facing applications back online safely.",
            enterpriseUseCases: [
                "Website displaying 502 Bad Gateway or 500 Internal Server Error in the middle of a marketing campaign",
                "SSL certificate expired causing browsers to show scary 'Security Warning' screens to visitors",
                "Payment gateway webhooks failing to update orders after customer payment",
            ],
            keyBenefits: [
                "Gets your revenue-generating website back online immediately",
                "Zero data loss with careful forensic recovery before rebooting",
                "Peace of mind knowing senior engineers are handling the emergency",
            ],
        },
    },

    // ── 20. Managed IT Infrastructure ──
    {
        id: "srv-managed-infra",
        nicCode: "NIC 62013",
        domain: "infra",
        filterCategory: "infra",
        title: "Managed IT Infrastructure & Telemetry (NIC 62013)",
        subtitle: "Managed server clusters, 24/7 uptime monitoring, Prometheus/Zabbix metrics, and emergency response SLA.",
        officialDescription: "IT infrastructure, computer operations support, and continuous facility management.",
        color: "from-blue-700 to-slate-800",
        icon: FiServer,
        startingPrice: 24999,
        inrPrice: 24999,
        usdPrice: 349,
        pricingModel: "monthly",
        portalSlug: "it-infrastructure-support",
        deliverables: [
            { name: "24/7 Server Health & Telemetry", desc: "Continuous monitoring of CPU, RAM, disk I/O, bandwidth, and application response times." },
            { name: "Automated Failover & Backups", desc: "Daily off-site encrypted database snapshots with instant one-click disaster recovery." },
            { name: "Security Patching & Kernel Updates", desc: "Scheduled zero-downtime security patching preventing malware and zero-day exploits." },
            { name: "Emergency Incident Response SLA", desc: "Dedicated on-call engineer with guaranteed 2-hour emergency turnaround SLA." },
        ],
        techStack: ["Linux (Ubuntu/RHEL)", "Prometheus & Grafana", "Zabbix", "Keepalived", "BorgBackup", "Docker"],
        slaMetrics: "99.95% Server Uptime & 2-Hour Incident Response SLA",
        turnaround: "Monthly Retainer",
        compliance: "Government of India MSME IT Operations Compliance",
        briefDetail: {
            architectureOverview: "Provides enterprise-grade operations monitoring with live telemetry sparklines, automated threshold alarms, and proactive maintenance.",
            enterpriseUseCases: [
                "Companies requiring round-the-clock server reliability without hiring a full-time in-house sysadmin",
                "Mission-critical databases and financial platforms requiring daily automated off-site backups",
                "Regulated businesses needing verified IT maintenance compliance logs",
            ],
            keyBenefits: [
                "Costs a fraction of hiring a full-time in-house DevOps engineer",
                "Peace of mind knowing your digital business is guarded 24/7",
                "Protected under MSMED Act service guarantees",
            ],
        },
    },
];

// Exported for AISolutions and legacy components
export interface ServiceCategory {
    title: string;
    icon: ComponentType<{ className?: string; size?: number }>;
    slug: string;
    color: string;
    description: string;
    services: { name: string; price?: number; slug?: string }[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        title: "Autonomous AI & Cognitive Workflows",
        icon: FiCpu,
        slug: "autonomous-ai-workflows",
        color: "from-cyan-500 to-blue-600",
        description: "Deterministic RAG pipelines, multi-agent automated task runners, and intelligent conversational assistants.",
        services: [
            { name: "Autonomous AI Workflows & Multi-Agent Systems", slug: "autonomous-ai-workflows", price: 54999 },
            { name: "Custom AI Chatbot & Customer Support Widget", slug: "ai-support-chatbot", price: 29999 },
            { name: "API Integration & Webhook Workflow Automation", slug: "api-workflow-automation", price: 24999 },
            { name: "Private Local AI Host & Ollama / DeepSeek VPS Setup", slug: "local-ai-host-setup", price: 19999 },
        ],
    },
    {
        title: "Modern Web Platforms, UI/UX & E-Commerce",
        icon: FiLayout,
        slug: "web-architecture-platforms",
        color: "from-blue-600 to-indigo-600",
        description: "Next.js 16 App Router platforms, high-converting landing pages, e-commerce, and accessible design systems.",
        services: [
            { name: "High-Converting Landing Page & Lead Funnel", slug: "landing-page-funnel", price: 14999 },
            { name: "AI-Driven UI/UX & Website Layout Design", slug: "website-layout-design", price: 24999 },
            { name: "Modern E-Commerce Store & Payment Setup", slug: "ecommerce-store-setup", price: 34999 },
            { name: "Corporate Web Architecture & Platform", slug: "web-architecture-platforms", price: 49999 },
            { name: "Rapid Full-Stack Web App / SaaS MVP Builder", slug: "fullstack-mvp-builder", price: 79999 },
            { name: "WordPress / Shopify to Headless Next.js Migration", slug: "headless-migration", price: 39999 },
        ],
    },
    {
        title: "Specialized Software, Extensions & Algo Bots",
        icon: FiTerminal,
        slug: "algo-trading-automation",
        color: "from-emerald-500 to-teal-600",
        description: "Chrome Manifest V3 extensions, algorithmic trading engines, mobile apps, and native desktop utilities.",
        services: [
            { name: "Chrome & Browser Extension Engineering", slug: "chrome-extension-engineering", price: 24999 },
            { name: "Algorithmic Trading Bot & PineScript Automation", slug: "algo-trading-automation", price: 24999 },
            { name: "Web Scraping & Automated Data Extraction Engine", slug: "web-scraping-engine", price: 19999 },
            { name: "Cross-Platform Mobile App MVP", slug: "mobile-app-mvp", price: 89999 },
            { name: "Desktop Application Development (Windows & Mac)", slug: "desktop-app-development", price: 49999 },
        ],
    },
    {
        title: "Cloud Infrastructure, DevOps, FinOps & Recovery",
        icon: FiCloud,
        slug: "cloud-devops-deployment",
        color: "from-amber-500 to-indigo-600",
        description: "Docker containerization, OCI / AWS cloud deployment, FinOps cost audits, 90+ PageSpeed, and emergency recovery.",
        services: [
            { name: "Production Cloud Deployment & DevOps Pipeline", slug: "cloud-devops-deployment", price: 14999 },
            { name: "FinOps & Cloud Cost Optimization Audit", slug: "finops-cost-optimization", price: 14999 },
            { name: "Core Web Vitals, Speed & Technical SEO Overhaul", slug: "seo-speed-optimization", price: 12999 },
            { name: "Emergency Hotfix, Server Recovery & Bug Fix SLA", slug: "emergency-hotfix-recovery", price: 9999 },
            { name: "Managed IT Infrastructure & Telemetry", slug: "it-infrastructure-support", price: 24999 },
        ],
    },
];
