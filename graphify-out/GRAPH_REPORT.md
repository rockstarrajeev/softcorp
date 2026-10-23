# Graph Report - softcorp  (2026-10-23)

## Corpus Check
- 72 files · ~108,270 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 335 nodes · 362 edges · 34 communities (26 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `40dbdd17`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 63|Community 63]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `checkRateLimit()` - 11 edges
3. `Key Enhancements & Animations Breakdown` - 11 edges
4. `3. Market Rate Benchmarks (Indian Market — Oct 2026)` - 9 edges
5. `Workspace & Global Memory Checkpoint` - 8 edges
6. `SOFTCORP GROUP — IT Services Pricing Research & Market Intelligence` - 8 edges
7. `1. Vulnerability Findings & Security Hardening` - 8 edges
8. `scripts` - 5 edges
9. `getClientIp()` - 5 edges
10. `Softcorp Deployment Guide (Low Memory OCI Server)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `POST()` --calls--> `checkRateLimit()`  [INFERRED]
  src/app/api/orders/route.ts → src/lib/rate-limit.ts
- `POST()` --calls--> `checkRateLimit()`  [EXTRACTED]
  src/app/api/payments/paypal/create/route.ts → src/lib/rate-limit.ts
- `POST()` --calls--> `checkRateLimit()`  [EXTRACTED]
  src/app/api/payments/stripe/route.ts → src/lib/rate-limit.ts
- `POST()` --calls--> `generateProductLicense()`  [INFERRED]
  src/app/api/products/paypal/capture/route.ts → src/lib/products.ts
- `POST()` --calls--> `checkRateLimit()`  [EXTRACTED]
  src/app/api/auth/register/route.ts → src/lib/rate-limit.ts

## Import Cycles
- None detected.

## Communities (34 total, 8 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (26): dependencies, @auth/prisma-adapter, bcryptjs, better-sqlite3, framer-motion, lucide-react, next, next-auth (+18 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (21): devDependencies, dotenv, eslint, eslint-config-next, minimatch, tailwindcss, @tailwindcss/postcss, @types/node (+13 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (9): AdminData, categoryLabels, ClientItem, MessageItem, OrderItem, ServiceItem, statusColors, statusOptions (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (10): categoryColors, categoryLabels, OrderItem, pricingLabels, Props, ServiceItem, statusColors, statusLabels (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (10): geistMono, geistSans, metadata, viewport, quickLinks, socialLinks, navLinks, NICItem (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.14
Nodes (14): 10. Contact & Footer Polishing (`src/components/sections/Contact.tsx`, `src/components/Footer.tsx`), 1. Global Visual System & Atmosphere (`src/app/globals.css`, `src/components/ui/AmbientBackground.tsx`), 2. Navigation Experience (`src/components/Navbar.tsx`), 3. Hero Section Overhaul (`src/components/sections/Hero.tsx`), 4. Next-Gen AI Solutions (`src/components/sections/AISolutions.tsx`), 5. Services Section (`src/components/sections/Services.tsx`), 6. Case Studies (`src/components/sections/CaseStudies.tsx`), 7. About Rajeev Upadhyay (`src/components/sections/About.tsx`) (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.27
Nodes (9): POST(), POST(), checkRateLimit(), getClientIp(), RateLimitRecord, trackers, POST(), POST() (+1 more)

### Community 9 - "Community 9"
Cohesion: 0.25
Nodes (5): categoryLabels, pricingLabels, Props, ServiceDetails, Window

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (5): Softcorp Deployment Guide (Low Memory OCI Server), Step 1: Make your changes and test locally, Step 2: Build the Production Code Locally, Step 3: Push to GitHub, Step 4: Turn it on in the OCI Server

### Community 11 - "Community 11"
Cohesion: 0.40
Nodes (3): adapter, dbPath, prisma

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 26 - "Community 26"
Cohesion: 0.22
Nodes (8): Critical Directives & User Rules, Full App Optimization Audit (October 2026), Legal & MSME Udyam Registration (India HQ), Project Architecture & Tech Stack, Recent Functional & Navigation Repairs, Security Hardening & Performance Optimization Audit (Oct 2026), Udyam Services & Customer Self-Service Payment Portal Integration, Workspace & Global Memory Checkpoint

### Community 28 - "Community 28"
Cohesion: 0.12
Nodes (16): 1. Research Purpose, 2. Research Sources, 3.1 NIC 62011 — Custom Software Engineering, 3.2 NIC 62012 — Web Architecture & Digital Platforms (Next.js / React), 3.3 NIC 62013 — IT Infrastructure Support & Telemetry, 3.4 NIC 62020 — IT Consultancy & Cloud Migration, 3.5 NIC 62099 — Autonomous AI Workflows & Modern IT, 3.6 NIC 63119 — Data Processing, ETL & Cloud Hosting (+8 more)

### Community 29 - "Community 29"
Cohesion: 0.13
Nodes (14): 1. Vulnerability Findings & Security Hardening, 2. Performance & App Optimization, 3. Verification & Safety Gates, Issue 1: Critical Payment Bypass & IDOR in Razorpay (`src/app/api/payments/razorpay/verify/route.ts`), Issue 2: Cross-Tenant Order Tampering in Stripe (`src/app/api/payments/stripe/verify/route.ts`), Issue 3: Insecure Direct Object Reference (IDOR) in PayPal (`src/app/api/payments/paypal/capture/route.ts`), Issue 4: Public Unauthenticated Seed Endpoint (`src/app/api/seed/route.ts`), Issue 5: Missing Input Validation & Rate Limiting (`src/app/api/auth/register/route.ts`, `src/app/api/contact/route.ts`) (+6 more)

### Community 30 - "Community 30"
Cohesion: 0.36
Nodes (4): generateProductLicense(), SOFTWARE_PRODUCTS, SoftwareProduct, POST()

### Community 63 - "Community 63"
Cohesion: 0.07
Nodes (17): aiCategories, Contact, FAQ, ROIQuickEstimator, UdyamVerification, highlights, aiCategories, interactiveWorkflows (+9 more)

## Knowledge Gaps
- **171 isolated node(s):** `deploy.sh script`, `eslintConfig`, `ContentSecurityPolicy`, `nextConfig`, `name` (+166 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 1` to `Community 2`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `deploy.sh script`, `eslintConfig`, `ContentSecurityPolicy` to the rest of the system?**
  _171 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08064516129032258 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._