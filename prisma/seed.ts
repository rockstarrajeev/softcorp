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

    const services = [
        // --- Core Infrastructure & Engineering ---
        { name: "Cloud Migration & Architecture", slug: "cloud-migration", category: "infrastructure", description: "Seamless migration of legacy systems to AWS/Azure/OCI with 99.9% uptime guarantees.", price: 2499, pricingModel: "fixed", sortOrder: 1 },
        { name: "Enterprise Server Maintenance", slug: "server-maintenance", category: "infrastructure", description: "Proactive patching, security auditing, and performance tuning for high-traffic environments.", price: 899, pricingModel: "monthly", sortOrder: 2 },
        { name: "Global Network Security", slug: "network-security", category: "infrastructure", description: "Implementation of zero-trust architecture and enterprise-grade firewalls.", price: 1499, pricingModel: "fixed", sortOrder: 3 },
        { name: "Custom Software Development", slug: "software-dev", category: "infrastructure", description: "Enterprise-grade web and mobile applications built for scale and reliability.", price: 4999, pricingModel: "fixed", sortOrder: 4 },

        // --- AI Automation & Modernization ---
        { name: "Custom AI Chatbot Ecosystems", slug: "ai-chatbots", category: "ai-modernization", description: "Intelligent automation for customer support and internal process handling.", price: 1999, pricingModel: "fixed", sortOrder: 5 },
        { name: "Workflow Automation (LLM-Driven)", slug: "ai-workflow", category: "ai-modernization", description: "Replacing repetitive manual tasks with high-accuracy AI pipelines.", price: 1299, pricingModel: "monthly", sortOrder: 6 },
        { name: "Legacy System Modernization", slug: "legacy-modernization", category: "ai-modernization", description: "Injecting AI capabilities into decades-old infrastructure without downtime.", price: 3499, pricingModel: "fixed", sortOrder: 7 },

        // --- AI Content & Multi-Platform ---
        { name: "AI Video & Voice Generation", slug: "ai-video-gen", category: "ai-content", description: "High-quality corporate video production at 10x speed using AI synthesis.", price: 799, pricingModel: "fixed", sortOrder: 8 },
        { name: "AI-Enhanced SEO & Copywriting", slug: "ai-seo", category: "ai-content", description: "Dominating search rankings with intelligent content clustering and optimization.", price: 499, pricingModel: "monthly", sortOrder: 9 },
        { name: "Growth Analytics Dashboard", slug: "growth-analytics", category: "ai-content", description: "Real-time ROI tracking and platform performance auditing.", price: 299, pricingModel: "monthly", sortOrder: 10 },

        // --- Creative & Branding ---
        { name: "Corporate Visual Identity", slug: "brand-identity", category: "creative-branding", description: "Logos, style guides, and documentation for global digital authority.", price: 1499, pricingModel: "fixed", sortOrder: 11 },
        { name: "Corporate Storytelling (Video)", slug: "corporate-stories", category: "creative-branding", description: "Documentary-style brand videos to build massive stakeholder trust.", price: 2999, pricingModel: "fixed", sortOrder: 12 },
    ];

    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: service,
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
