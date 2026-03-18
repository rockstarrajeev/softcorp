import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

// GET /api/seed — Seeds the database with admin user and services
// Only works if no admin exists yet (safety check)
export async function GET() {
    try {
        const existingAdmin = await prisma.user.findUnique({
            where: { email: "admin@wesoftcorp.com" },
        });

        if (existingAdmin) {
            return NextResponse.json({ message: "Database already seeded." });
        }

        // Create Admin User
        const adminPassword = await bcrypt.hash("Admin@123", 12);
        await prisma.user.create({
            data: {
                name: "Softcorp Admin",
                email: "admin@wesoftcorp.com",
                password: adminPassword,
                role: "admin",
            },
        });

        // Seed Services
        const services = [
            { name: "Social Media Strategy", slug: "social-media-strategy", category: "social-media", description: "Custom strategy aligned to your business goals, audience analysis, and competitor benchmarking.", price: 499, pricingModel: "fixed", sortOrder: 1 },
            { name: "Content Creation & Design", slug: "content-creation-design", category: "social-media", description: "High-quality graphics, Reels, Shorts, Stories, carousel posts, and motion design.", price: 299, pricingModel: "monthly", sortOrder: 2 },
            { name: "Social Media Management", slug: "social-media-management", category: "social-media", description: "Daily posting, scheduling, community engagement across all your platforms.", price: 599, pricingModel: "monthly", sortOrder: 3 },
            { name: "Paid Ads Management", slug: "paid-ads-management", category: "social-media", description: "Facebook, Instagram, YouTube, and X Ads — campaign setup, optimization, A/B testing.", price: 399, pricingModel: "monthly", sortOrder: 4 },
            { name: "Influencer Marketing", slug: "influencer-marketing", category: "social-media", description: "Identify, vet, and manage influencer collaborations to build authenticity.", price: 799, pricingModel: "fixed", sortOrder: 5 },
            { name: "Analytics & Reporting", slug: "analytics-reporting", category: "social-media", description: "Monthly performance reports with KPIs, engagement metrics, and ROI tracking.", price: 199, pricingModel: "monthly", sortOrder: 6 },
            { name: "Reputation Management", slug: "reputation-management", category: "social-media", description: "Brand mention monitoring, sentiment analysis, and crisis response.", price: 349, pricingModel: "monthly", sortOrder: 7 },
            { name: "YouTube Channel Management", slug: "youtube-management", category: "platform", description: "Uploads, SEO, thumbnails, end screens, analytics, and growth strategy.", price: 499, pricingModel: "monthly", sortOrder: 8 },
            { name: "Instagram Growth & Engagement", slug: "instagram-growth", category: "platform", description: "Reels, Stories, hashtag strategy, engagement optimization, and follower growth.", price: 399, pricingModel: "monthly", sortOrder: 9 },
            { name: "Facebook Page & Group Management", slug: "facebook-management", category: "platform", description: "Content calendar, community moderation, and lead generation.", price: 349, pricingModel: "monthly", sortOrder: 10 },
            { name: "X (Twitter) Marketing", slug: "x-twitter-marketing", category: "platform", description: "Tweet threads, Spaces hosting, trend-jacking, and engagement strategy.", price: 299, pricingModel: "monthly", sortOrder: 11 },
            { name: "LinkedIn Marketing", slug: "linkedin-marketing", category: "platform", description: "Thought leadership content, company page management, and B2B lead generation.", price: 449, pricingModel: "monthly", sortOrder: 12 },
            { name: "TikTok Marketing", slug: "tiktok-marketing", category: "platform", description: "Trend-based content creation, creator partnerships, and viral growth.", price: 399, pricingModel: "monthly", sortOrder: 13 },
            { name: "Website Design & Development", slug: "website-design-development", category: "web-tech", description: "Custom responsive websites, landing pages, and web applications.", price: 1499, pricingModel: "fixed", sortOrder: 14 },
            { name: "SEO & SEM", slug: "seo-sem", category: "web-tech", description: "On-page SEO, keyword research, Google Ads management, and organic growth.", price: 499, pricingModel: "monthly", sortOrder: 15 },
            { name: "Email Marketing", slug: "email-marketing", category: "web-tech", description: "Campaign design, automation workflows, newsletters, and drip sequences.", price: 249, pricingModel: "monthly", sortOrder: 16 },
            { name: "E-commerce Setup", slug: "ecommerce-setup", category: "web-tech", description: "Shopify, WooCommerce, or custom store setup with payment integration.", price: 1999, pricingModel: "fixed", sortOrder: 17 },
            { name: "Brand Identity Design", slug: "brand-identity-design", category: "creative", description: "Logo, color palette, typography, and comprehensive brand guidelines.", price: 999, pricingModel: "fixed", sortOrder: 18 },
            { name: "Video Production & Editing", slug: "video-production", category: "creative", description: "Promo videos, explainers, testimonials, and professional video editing.", price: 599, pricingModel: "fixed", sortOrder: 19 },
            { name: "Copywriting", slug: "copywriting", category: "creative", description: "Ad copy, blog posts, website content, and persuasive sales copy.", price: 199, pricingModel: "fixed", sortOrder: 20 },
        ];

        for (const service of services) {
            await prisma.service.create({ data: service });
        }

        return NextResponse.json({
            success: true,
            message: `Seeded admin user and ${services.length} services.`,
        });
    } catch (error) {
        console.error("Seed error:", error);
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
