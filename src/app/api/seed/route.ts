import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import crypto from "crypto";

function safeCompare(a: string, b: string): boolean {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
}

// GET /api/seed — Secure database seeding endpoint
// Requires header `x-seed-token` matching process.env.ADMIN_SEED_SECRET
export async function GET(request: Request) {
    try {
        const seedSecret = process.env.ADMIN_SEED_SECRET;
        const authHeader = request.headers.get("x-seed-token");

        // Strict authorization check: require secret in production or if ADMIN_SEED_SECRET is configured
        if (process.env.NODE_ENV === "production" || seedSecret) {
            if (!seedSecret || !authHeader || !safeCompare(authHeader, seedSecret)) {
                return NextResponse.json(
                    { error: "Forbidden: Seeding endpoint is disabled without valid authorization token." },
                    { status: 403 }
                );
            }
        }

        const existingAdmin = await prisma.user.findUnique({
            where: { email: "admin@wesoftcorp.com" },
        });

        if (!existingAdmin) {
            // Create Admin User with env-specified password or default dev password
            const rawPassword = process.env.ADMIN_INITIAL_PASSWORD || "Admin@123";
            const adminPassword = await bcrypt.hash(rawPassword, 12);
            await prisma.user.create({
                data: {
                    name: "Softcorp Admin",
                    email: "admin@wesoftcorp.com",
                    password: adminPassword,
                    role: "admin",
                },
            });
        }

        // Official Udyam Registration Services (8 Certified Activities, Research-Backed Oct 2026 INR Rates)
        const services = [
            {
                name: "Custom Software Engineering (NIC 62011)",
                slug: "custom-software-engineering",
                category: "software-engineering",
                description: "Full-cycle custom software, REST/gRPC microservices, ERP connectors, and backend platforms.",
                price: 149999,
                pricingModel: "fixed",
                sortOrder: 1,
            },
            {
                name: "Web Architecture & Digital Platforms (NIC 62012)",
                slug: "web-architecture-platforms",
                category: "web-platforms",
                description: "High-performance Next.js 15+ and React 19 digital platforms, accessible design systems, and enterprise UI/UX engineering.",
                price: 124999,
                pricingModel: "fixed",
                sortOrder: 2,
            },
            {
                name: "IT Infrastructure Support & Telemetry (NIC 62013)",
                slug: "it-infrastructure-support",
                category: "infrastructure",
                description: "High-availability Linux/Windows server clusters, Keepalived failover, and continuous 24/7 Zabbix & Prometheus telemetry.",
                price: 24999,
                pricingModel: "monthly",
                sortOrder: 3,
            },
            {
                name: "Enterprise IT Consultancy & Cloud Migration (NIC 62020)",
                slug: "enterprise-it-consultancy",
                category: "it-consultancy",
                description: "Strategic multi-cloud architecture migration (AWS/Azure/OCI), disaster recovery runbooks, and FinOps cost optimization.",
                price: 74999,
                pricingModel: "fixed",
                sortOrder: 4,
            },
            {
                name: "Autonomous AI Workflows & Modern IT (NIC 62099)",
                slug: "autonomous-ai-workflows",
                category: "ai-modernization",
                description: "Autonomous multi-agent systems, deterministic enterprise RAG pipelines, zero-trust network access, and self-healing automation.",
                price: 299999,
                pricingModel: "fixed",
                sortOrder: 5,
            },
            {
                name: "Data Processing, ETL & Cloud Hosting (NIC 63119)",
                slug: "data-processing-cloud-hosting",
                category: "cloud-hosting",
                description: "Real-time and batch ETL streaming ingestion, PostgreSQL/Redis database clustering, and isolated encrypted cloud hosting enclaves.",
                price: 34999,
                pricingModel: "monthly",
                sortOrder: 6,
            },
            {
                name: "Enterprise Web Portals & Search Systems (NIC 63121)",
                slug: "web-portals-search-systems",
                category: "web-portals",
                description: "Custom B2B client self-service portals, semantic knowledge indices, Elasticsearch/Meilisearch engines, and automated multi-currency checkout.",
                price: 199999,
                pricingModel: "fixed",
                sortOrder: 7,
            },
            {
                name: "IT Annual Maintenance & Facilities Management (NIC 62020-AMC)",
                slug: "it-amc-facilities-management",
                category: "it-amc",
                description: "Comprehensive Annual Maintenance Contracts (AMC) covering desktops, laptops, servers & network hardware with scheduled preventive maintenance.",
                price: 19999,
                pricingModel: "monthly",
                sortOrder: 8,
            },
        ];

        for (const service of services) {
            await prisma.service.upsert({
                where: { slug: service.slug },
                update: { ...service, isActive: true },
                create: service,
            });
        }

        return NextResponse.json({
            success: true,
            message: "Services verified and synchronized.",
            count: services.length,
        });
    } catch (error) {
        console.error("Seed route error:", error);
        return NextResponse.json({ error: "Database initialization failed" }, { status: 500 });
    }
}
