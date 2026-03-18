// Simple seed script using Prisma's client with inline config
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import bcrypt from "bcryptjs";

import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Seeding database...");

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
    console.log("Admin user:", admin.email);

    const services = [
        { name: "Social Media Strategy", slug: "social-media-strategy", category: "social-media", description: "Custom strategy aligned to your business goals.", price: 499, pricingModel: "fixed", sortOrder: 1 },
        { name: "Content Creation & Design", slug: "content-creation-design", category: "social-media", description: "High-quality graphics, Reels, Shorts, Stories.", price: 299, pricingModel: "monthly", sortOrder: 2 },
        { name: "Social Media Management", slug: "social-media-management", category: "social-media", description: "Daily posting, scheduling, community engagement.", price: 599, pricingModel: "monthly", sortOrder: 3 },
        { name: "Paid Ads Management", slug: "paid-ads-management", category: "social-media", description: "Campaign setup, optimization, A/B testing.", price: 399, pricingModel: "monthly", sortOrder: 4 },
        { name: "Influencer Marketing", slug: "influencer-marketing", category: "social-media", description: "Influencer collaborations to build authenticity.", price: 799, pricingModel: "fixed", sortOrder: 5 },
        { name: "Analytics & Reporting", slug: "analytics-reporting", category: "social-media", description: "Monthly performance reports with KPIs and ROI tracking.", price: 199, pricingModel: "monthly", sortOrder: 6 },
        { name: "Reputation Management", slug: "reputation-management", category: "social-media", description: "Brand mention monitoring and crisis response.", price: 349, pricingModel: "monthly", sortOrder: 7 },
        { name: "YouTube Channel Management", slug: "youtube-management", category: "platform", description: "Uploads, SEO, thumbnails, and growth strategy.", price: 499, pricingModel: "monthly", sortOrder: 8 },
        { name: "Instagram Growth", slug: "instagram-growth", category: "platform", description: "Reels, Stories, hashtag strategy, follower growth.", price: 399, pricingModel: "monthly", sortOrder: 9 },
        { name: "Facebook Marketing", slug: "facebook-management", category: "platform", description: "Content calendar, community moderation, lead gen.", price: 349, pricingModel: "monthly", sortOrder: 10 },
        { name: "X (Twitter) Marketing", slug: "x-twitter-marketing", category: "platform", description: "Tweet threads, Spaces, trend-jacking.", price: 299, pricingModel: "monthly", sortOrder: 11 },
        { name: "LinkedIn Marketing", slug: "linkedin-marketing", category: "platform", description: "Thought leadership and B2B lead generation.", price: 449, pricingModel: "monthly", sortOrder: 12 },
        { name: "TikTok Marketing", slug: "tiktok-marketing", category: "platform", description: "Trend-based content and viral growth.", price: 399, pricingModel: "monthly", sortOrder: 13 },
        { name: "Website Design & Dev", slug: "website-design-development", category: "web-tech", description: "Custom responsive websites and web apps.", price: 1499, pricingModel: "fixed", sortOrder: 14 },
        { name: "SEO & SEM", slug: "seo-sem", category: "web-tech", description: "On-page SEO, keyword research, Google Ads.", price: 499, pricingModel: "monthly", sortOrder: 15 },
        { name: "Email Marketing", slug: "email-marketing", category: "web-tech", description: "Campaign design, automation, newsletters.", price: 249, pricingModel: "monthly", sortOrder: 16 },
        { name: "E-commerce Setup", slug: "ecommerce-setup", category: "web-tech", description: "Shopify, WooCommerce, or custom store setup.", price: 1999, pricingModel: "fixed", sortOrder: 17 },
        { name: "Brand Identity Design", slug: "brand-identity-design", category: "creative", description: "Logo, color palette, typography, brand guidelines.", price: 999, pricingModel: "fixed", sortOrder: 18 },
        { name: "Video Production", slug: "video-production", category: "creative", description: "Promo videos, explainers, professional editing.", price: 599, pricingModel: "fixed", sortOrder: 19 },
        { name: "Copywriting", slug: "copywriting", category: "creative", description: "Ad copy, blog posts, website content.", price: 199, pricingModel: "fixed", sortOrder: 20 },
    ];

    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: {},
            create: service,
        });
    }
    console.log(services.length + " services seeded");
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
