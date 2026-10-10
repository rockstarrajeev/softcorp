// Updated seed script for Softcorp Enterprise & AI Rebranding
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import bcrypt from "bcryptjs";
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Seeding Enterprise & AI database...");

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
     * PRICING — Research-backed INR rates (Oct 2026)
     * ─────────────────────────────────────────────────────────────────────────
     * Benchmarks (Indian market, NIC-classified MSPs & agencies):
     *   NIC 62011 – Custom software:       ₹3L – ₹30L  |  Entry: ₹1,49,999
     *   NIC 62012 – Web platforms:         ₹3L – ₹20L  |  Entry:   ₹89,999
     *   NIC 62013 – IT infra/managed:      ₹15k – ₹80k/mo | Entry: ₹24,999/mo
     *   NIC 62020 – IT consultancy/cloud:  ₹2L – ₹15L  |  Entry:   ₹74,999
     *   NIC 62099 – AI/agentic systems:    ₹2.5L – ₹25L|  Entry: ₹1,24,999
     *   NIC 63119 – ETL/data managed ops:  ₹25k – ₹1L/mo| Entry:  ₹34,999/mo
     *   NIC 63121 – B2B web portals:       ₹3L – ₹20L  |  Entry: ₹1,09,999
     *
     * ⚠ Third-party pass-through costs (domains, cloud infra, SaaS licences,
     *   AI API tokens, SSL, CDN, payment gateway setup) are billed separately
     *   at actuals. These are NOT included in the base service price.
     * ─────────────────────────────────────────────────────────────────────────
     */
    const services = [
        {
            // NIC 62011 – Writing, modifying, testing & supporting software
            name: "Custom Software Engineering (NIC 62011)",
            slug: "custom-software-engineering",
            category: "software-engineering",
            description:
                "Full-cycle custom software: architecture design, REST/gRPC microservices, ERP connectors, backend platforms & QA — MVP to enterprise-grade. " +
                "⚠ Third-party costs (cloud VMs, databases, CI/CD SaaS licences) are billed separately at actuals.",
            price: 149999,
            pricingModel: "fixed",
            sortOrder: 1,
        },
        {
            // NIC 62012 – Publishing, design & development of web platforms
            name: "Web Architecture & Digital Platforms (NIC 62012)",
            slug: "web-architecture-platforms",
            category: "web-platforms",
            description:
                "High-performance Next.js 15+ and React 19 digital platforms, accessible design systems, and enterprise UI/UX engineering. " +
                "⚠ Domain registration, SSL certificates, and hosting (Vercel/VPS) are billed separately as per third-party provider rates.",
            price: 124999,
            pricingModel: "fixed",
            sortOrder: 2,
        },
        {
            // NIC 62013 – IT infrastructure & computer operations support
            name: "IT Infrastructure Support & Telemetry (NIC 62013)",
            slug: "it-infrastructure-support",
            category: "infrastructure",
            description:
                "Managed Linux/Windows server clusters, Keepalived HA failover, 24/7 Zabbix & Prometheus telemetry, and incident response SLA. " +
                "⚠ Cloud VM/bare-metal, CDN, WAF licences & third-party monitoring SaaS are billed separately at actuals.",
            price: 24999,
            pricingModel: "monthly",
            sortOrder: 3,
        },
        {
            // NIC 62020 – IT consultancy, advisory & cloud migration
            name: "Enterprise IT Consultancy & Cloud Migration (NIC 62020)",
            slug: "enterprise-it-consultancy",
            category: "it-consultancy",
            description:
                "Strategic multi-cloud architecture (AWS/Azure/OCI), migration roadmaps, disaster recovery runbooks & FinOps cost optimisation. " +
                "⚠ Cloud provider fees (egress, reserved instances), data transfer costs & compliance audit tool licences are billed at actuals.",
            price: 74999,
            pricingModel: "fixed",
            sortOrder: 4,
        },
        {
            // NIC 62099 – AI/ML, autonomous agents, zero-trust modernisation
            name: "Autonomous AI Workflows & Modern IT (NIC 62099)",
            slug: "autonomous-ai-workflows",
            category: "ai-modernization",
            description:
                "Autonomous multi-agent systems, deterministic enterprise RAG pipelines, zero-trust network access & self-healing automation. " +
                "⚠ LLM/AI API tokens (OpenAI, Gemini, Anthropic), vector DB hosting & GPU compute are metered and billed separately at actuals.",
            price: 299999,
            pricingModel: "fixed",
            sortOrder: 5,
        },
        {
            // NIC 63119 – Data processing, ETL, cloud hosting ops
            name: "Data Processing, ETL & Cloud Hosting (NIC 63119)",
            slug: "data-processing-cloud-hosting",
            category: "cloud-hosting",
            description:
                "Real-time and batch ETL streaming ingestion, PostgreSQL/Redis database clustering & isolated encrypted cloud hosting enclaves. " +
                "⚠ Cloud hosting infra (compute, storage, egress bandwidth) & managed DB instance costs are billed separately at actuals.",
            price: 34999,
            pricingModel: "monthly",
            sortOrder: 6,
        },
        {
            // NIC 63121 – Web portals & B2B search systems
            name: "Enterprise Web Portals & Search Systems (NIC 63121)",
            slug: "web-portals-search-systems",
            category: "web-portals",
            description:
                "Custom B2B client self-service portals, semantic knowledge indices, Elasticsearch/Meilisearch engines & automated multi-currency checkout. " +
                "⚠ Domain, hosting (Vercel Pro/VPS), payment gateway setup (Stripe/PayPal) & Elasticsearch cloud licences are billed separately at provider rates.",
            price: 199999,
            pricingModel: "fixed",
            sortOrder: 7,
        },
        {
            // NIC 62020 (AMC sub-activity) – Computer Facilities Management
            // Distinct from consulting: covers on-site/remote device ops, helpdesk, AMC
            // Market: ₹1,200–₹7,500/device/yr | Server: ₹8k–₹25k/server/mo | Entry: ₹19,999/mo
            name: "IT Annual Maintenance & Facilities Management (NIC 62020-AMC)",
            slug: "it-amc-facilities-management",
            category: "it-amc",
            description:
                "Comprehensive Annual Maintenance Contracts (AMC) covering desktops, laptops, servers & network hardware. Includes scheduled preventive maintenance, break-fix support, remote helpdesk, patch management & 4-hour response SLA. " +
                "⚠ Replacement hardware parts, software licences & on-site travel beyond Lucknow are billed separately at actuals.",
            price: 19999,
            pricingModel: "monthly",
            sortOrder: 8,
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

    // Set all other services to inactive if they exist but aren't in the new list
    const activeSlugs = services.map(s => s.slug);
    await prisma.service.updateMany({
        where: { slug: { notIn: activeSlugs } },
        data: { isActive: false }
    });

    console.log(`${services.length} Enterprise & AI services seeded/updated.`);
    console.log("Seeding complete!");
}

main()
    .catch((e: unknown) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
