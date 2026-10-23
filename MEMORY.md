# Workspace & Global Memory Checkpoint

## Critical Directives & User Rules
- **NEVER LAUNCH OR USE BROWSERS:** The agent is strictly forbidden from opening browsers, launching browser subagents, or attempting any browser-based automation. The user explicitly manages all manual testing in the browser themselves once the site is built or codes are pushed.
- **Verification Protocol:** Verify code strictly via TypeScript type checking (`npx tsc --noEmit`), build commands, and terminal output. No browser subagents.

## Legal & MSME Udyam Registration (India HQ)
- **Legal Entity Name:** SOFTCORP GROUP (wesoftcorp.com)
- **Enterprise Type:** Micro Enterprise (Services Sector)
- **Organization Type:** Proprietary (Sole Proprietorship)
- **Registered Owner:** Rajeev Upadhyay
- **Official Udyam Reg. No:** UDYAM-UP-50-0298723
- **Date of Registration:** 06/09/2026
- **Ministry:** Ministry of Micro, Small and Medium Enterprises (MoMSME), Govt. of India
- **Registered Office:** Plot No 17/18, Gulab Ashiyana, Behind Kohinoor Pearl Apartments, Chinhat, Matiyari, Dewa Road, Lucknow, Uttar Pradesh, Pin - 226028, India
- **MSMED Act Protection:** Protected under Section 15 of MSMED Act (45-day B2B settlement guarantee).
- **Certified NIC Codes:**
  - NIC 62011: Custom Software Engineering
  - NIC 62012: Web Architecture & Design
  - NIC 62013: IT Infrastructure Support
  - NIC 62020: Computer Consultancy & Cloud Migration
  - NIC 62020 (AMC): Computer Facilities Management & IT AMC Operations
  - NIC 62099: Core Information Technology Services
  - NIC 63119: Data Processing & Cloud Hosting
  - NIC 63121: Web Portals & Search Engine Operations

## Project Architecture & Tech Stack
- **Project:** Softcorp Enterprise Web Platform (`softcorp`)
- **Framework:** Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS v4 + Framer Motion
- **Aesthetic Direction:** Cyber-Enterprise Precision (Deep Obsidian & Cyan Aurora)
- **Key Modules Modernized:**
  - `src/components/ui/AmbientBackground.tsx`: Ambient aurora and subtle cybernetic grid background.
  - `src/components/ui/SpotlightCard.tsx`: Cursor-following radial illumination cards.
  - `src/components/ui/CommandCenterHUD.tsx`: Live telemetry command center HUD with interactive tabs, live metrics, and real-time sparkline wave.
  - `src/components/ui/EnterpriseMarquee.tsx`: Infinite credibility ticker for Swissport, Air Liquide, Tata Teleservices, BHU, and enterprise standards.
  - `src/components/ui/ScrollProgress.tsx`: Circular SVG scroll-to-top tracking button.
  - `src/components/sections/ROIQuickEstimator.tsx`: Interactive downtime & workflow savings calculator with live range sliders.
  - `src/components/Navbar.tsx`: Floating pill header with clean transparent logo and spring hover indicators.
  - `src/components/sections/Hero.tsx`: Staggered entrance, two-column layout featuring CommandCenterHUD.
  - `src/components/sections/AISolutions.tsx`: Interactive architecture sandbox tabs and spotlight cards.
  - `src/components/sections/Services.tsx`: Filter tabs and spotlight cards.
  - `src/components/sections/CaseStudies.tsx`: High-impact metric callouts.
  - `src/components/sections/About.tsx`: Verified leadership profile and global availability badge.
  - `src/components/sections/Process.tsx`: Animated energy pulse beam across 4 phases.
  - `src/components/sections/Contact.tsx`: Real-time timezone availability clocks and spotlight form.
  - `src/components/Footer.tsx`: Clean branding and quick links.

## Recent Functional & Navigation Repairs
- **Top-Right "Book Consultation" Button:** Fixed `handleNavClick` in [Navbar.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/Navbar.tsx) to reliably scroll to `#contact` with `scrollIntoView({ behavior: "smooth", block: "start" })`. Handles both `"contact"`, `"#contact"`, and `"/#contact"`.
- **Deep-Link / Cross-Route Hash Scroll:** Added an automated `useEffect` in [Navbar.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/Navbar.tsx) that detects `window.location.hash` after page mount/route change and smoothly navigates to the target section.
- **Logo Scroll-to-Top:** Clicking the logo on the home page now triggers smooth scrolling to `window.scrollTo({ top: 0, behavior: "smooth" })` instead of a static no-op.
- **Footer Navigation & MSME Badge:** Added smooth scroll handling to [Footer.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/Footer.tsx) navigation links and updated certificate link to `/#udyam-verification`.
- **Button Standards & Accessibility:** Added `type="button"` and `cursor-pointer` to all interactive toggles in [FAQ.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/sections/FAQ.tsx), [AISolutions.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/sections/AISolutions.tsx), and [UdyamVerification.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/UdyamVerification.tsx).
- **India HQ & MSME Text Realignment:** Realigned outdated US HQ references in FAQ #5 and Contact direct channels to reflect Govt. of India MSME registration (UDYAM-UP-50-0298723) and Lucknow registered headquarters.

## Udyam Services & Customer Self-Service Payment Portal Integration
- **Core Service Offerings ([Services.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/sections/Services.tsx)):** Redesigned to map 1:1 to all 7 Government of India certified NIC 2008 activities under `UDYAM-UP-50-0298723`:
  1. NIC 62011: Custom Software Engineering & Backend Systems
  2. NIC 62012: Full-Stack Web Architecture & Digital Platforms
  3. NIC 62013: IT Infrastructure Support & 24/7 Cluster Operations
  4. NIC 62020: Enterprise IT Consultancy & Multi-Cloud Migration
  5. NIC 62099: Autonomous AI Workflows & Zero-Trust IT Services
  6. NIC 63119: Data Processing, ETL Pipelines & Dedicated Cloud Hosting
  7. NIC 63121: Enterprise Web Portals & Semantic Search Systems
- **Interactive Brief Detail Sections:** Each service tile includes a collapsible "Brief Detail Section" revealing technical architecture overviews, enterprise use cases, ROI benefits, and SLA metrics.
- **Customer Portal & Login Options:**
  - Added a dedicated **"Client Portal"** login button to the desktop [Navbar.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/Navbar.tsx) alongside "Book Consultation".
  - Integrated an interactive **"Customer Self-Service & Online Checkout Portal"** banner in [Services.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/sections/Services.tsx) leading directly to `/login` and `/register`.
  - Added direct **"Client Portal"** CTAs on each service tile.
  - Updated [ClientDashboardClient.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/dashboard/ClientDashboardClient.tsx) and [CheckoutClient.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/checkout/%5BserviceId%5D/CheckoutClient.tsx) with the 7 official Udyam categories and synced the sqlite database via [seed.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/prisma/seed.ts) with transparent pricing and Stripe/Razorpay/PayPal payment flows.
  - **Home Screen Pricing Privacy:** Removed all public price indicators (`Starting from $X`) from the home screen service cards in [Services.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/components/sections/Services.tsx), keeping pricing and payment gateway checkout exclusive to the authenticated client portal.
  - **8th MSME Certified Service Added:** Added NIC 62020 (AMC) — *IT Annual Maintenance (AMC) & Facilities Management* (₹19,999/mo) across DB seed, `serviceData.ts`, `UdyamVerification.tsx`, `CheckoutClient.tsx`, and `PRICING_RESEARCH.md`.

## Security Hardening & Performance Optimization Audit (Oct 2026)
- **Payment Signature Cryptographic Verification:** Patched critical payment bypass in [razorpay/verify/route.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/api/payments/razorpay/verify/route.ts) with mandatory HMAC-SHA256 signature verification.
- **IDOR Protection Across Payment Gateways:** Added strict order ownership checks (`order.userId === session.user.id`) across Razorpay, Stripe, and PayPal verification/capture endpoints.
- **Stripe Metadata Validation:** Added order ID validation against Stripe session metadata to prevent cross-order spoofing.
- **Public Seed Protection:** Secured [/api/seed/route.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/api/seed/route.ts) to block execution in production without an authorized `x-seed-token`.
- **Input Validation & Sanitization:** Added RFC 5322 email regex verification, password length minimum (>=8 chars), and payload length limits to [register/route.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/api/auth/register/route.ts) and [contact/route.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/api/contact/route.ts).
- **Information Disclosure Remediation:** Sanitized raw database exception logging in [auth.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/src/lib/auth.ts) to prevent path/schema leakage.
- **HTTP Security Headers & HSTS:** Enforced `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`, and disabled `X-Powered-By` in [next.config.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/next.config.ts).
- **Database Index Optimization:** Added composite & foreign-key indexes on `Service`, `Order`, `Payment`, and `ContactMessage` in [schema.prisma](file:///d:/Code/Antigravity/My_Projects/softcorp/prisma/schema.prisma) and synchronized via `prisma db push`.
- **Dynamic Imports & Code-Splitting:** Code-split below-the-fold components on the landing page in [page.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/page.tsx) with `next/dynamic` to minimize initial bundle size and boost FCP.
- **Payment Gateway Transition (Post-Razorpay):** Completely uninstalled `razorpay` package, removed Razorpay API endpoints and frontend scripts. Active payment stack is now **Stripe** (Credit/Debit Cards, UPI & Global Checkout) and **PayPal** (International Clients), with clean hooks ready for future Indian PG integration (Cashfree / PayU).
- **Enterprise Rate Limiting & DoS Protection:** Implemented sliding-window rate limiter in [rate-limit.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/src/lib/rate-limit.ts) protecting registration, contact forms, orders, and payment sessions against brute-force & flood attacks.
- **Git Database Leak Prevention:** Untracked root `dev.db` from git index and updated [.gitignore](file:///d:/Code/Antigravity/My_Projects/softcorp/.gitignore) with global `*.db`, `*.sqlite*` patterns to permanently prevent database credentials from leaking to source control.
- **Content Security Policy (CSP):** Configured strict enterprise CSP in [next.config.ts](file:///d:/Code/Antigravity/My_Projects/softcorp/next.config.ts) restricting script, frame, object, connect, and image execution to trusted domains.
- **Layout-Level Admin RBAC:** Created [admin/layout.tsx](file:///d:/Code/Antigravity/My_Projects/softcorp/src/app/admin/layout.tsx) providing fail-safe server-side authorization enforcement for all current and future `/admin` routes.
## Full App Optimization Audit (October 2026)
- **Turbopack & Production Build Compilation:** Verified clean zero-error, zero-warning production build in 5.2s with `next build`.
- **Barrel Import Optimization:** Configured `experimental.optimizePackageImports` in `next.config.ts` for `react-icons`, `lucide-react`, `framer-motion`, and `recharts`, drastically cutting tree-shaking overhead and client bundle payloads.
- **Next-Gen Image & Compression:** Enabled Gzip/Brotli compression (`compress: true`) and AVIF/WebP next-gen modern formats in `next.config.ts`.
- **Zero-Layout-Shift Font Loading:** Implemented Google Font `display: "swap"` for `Geist` and `Geist_Mono` in `src/app/layout.tsx` to eliminate layout shift (CLS) and FOIT (Flash of Invisible Text).
- **GPU Hardware-Accelerated Animations:** Added `transform-gpu`, `will-change: transform`, and `translate3d(0, 0, 0)` to large blurred aurora blobs in `AmbientBackground.tsx` to offload rendering from CPU to GPU compositor thread.
- **Scroll Event Throttling (rAF & Threshold Caching):**
  - Modernized `ScrollProgress.tsx` to throttle scroll state updates through `window.requestAnimationFrame`.
  - Optimized `Navbar.tsx` scroll listener to execute state dispatches only when crossing the boolean threshold (`isScrolled`), eliminating 120Hz React state churn during scrolling.
- **Background Tab Throttle (Page Visibility API):** Wired Page Visibility API (`document.hidden`) in `CommandCenterHUD.tsx` to pause live telemetry heartbeat when user switches away from the tab, saving device CPU cycles and battery.
- **SEO & Indexing Infrastructure:** Implemented dynamic `robots.ts` and `sitemap.ts` with prioritized routes, change frequencies, GoogleBot indexing instructions, OpenGraph tags, Twitter Cards, and canonical URLs.
- **Database Query Performance:** Composite & foreign-key indexes added on `Service`, `Order`, `Payment`, and `ContactMessage` in `schema.prisma`. All dashboard reads parallelized via `Promise.all`.
- **Payment Verification Bug Fix:** Corrected Stripe verification callback in `src/app/checkout/success/page.tsx` ensuring `setVerified(data.success)` is dispatched reliably.
- **OCI Production Deployment Live:** Automated swap-aware build (`NODE_OPTIONS="--max-old-space-size=2048" npm run build`) in `deploy.sh`. Production live and healthy at `wesoftcorp.com` under PM2.
- **Full Multi-Page Architecture Restructuring (Next.js App Router):**
  - Converted monolithic single-page layout into a professional, first-class multi-page system with dedicated routes: `/` (Home Portal), `/products` (Software), `/ai-solutions` (AI Modernization), `/services` (Certified Services), `/case-studies` (Case Studies), `/about` (Leadership), `/process` (Delivery Protocol), and `/contact` (Contact & HQ).
  - Every page includes standard browser history integration (Back button cleanly navigates to Home).
  - Removed anchor hash jumps (`#services`, `#contact`, etc.) from Navbar, Hero, and Footer.
- **Cupertino iOS Liquid Frosted Glass Theme & Day Mode Text Contrast Engine:**
  - Implemented Apple iOS 18 / macOS Sonoma Liquid Frosted Glass design system with `backdrop-filter: blur(28px) saturate(190%)`, specular hairline borders (`rgba(255, 255, 255, 0.9)`), and multi-tier diffuse shadows.
  - Eliminated text invisibility in Day Mode across all pages using universal wildcard opacity matching (`[class*="text-slate-300"]`, `[class*="text-white"]`, etc.).
  - Enforced solid WCAG AAA contrast hierarchy: Headings `#0f172a`, Body text `#334155`, Subtext `#475569`.
  - Replaced low-contrast light cyan gradient headers with high-contrast jewel sapphire-to-emerald gradient text (`linear-gradient(135deg, #1d4ed8 0%, #0284c7 45%, #0f766e 100%)`).
  - Converted neon cyan/emerald badges and accents into rich day-mode jewel tones (`#0284c7`, `#047857`, `#d97706`).
  - Replaced dark vignettes and input styles with iOS frosted glass controls.
- **Official SoftCorp Logo Favicon Suite:**
  - Extracted and centered the official SoftCorp blue/cyan teardrop emblem (`public/logo-icon.png`).
  - Generated multi-resolution `favicon.ico` (16x16, 32x32, 48x48) in both `src/app/` and `public/`.
- **Day Mode Logo Contrast & Gradient Grey Glass Navbar:**
  - Created `public/logo-dark.png` with solid `#0f172a` midnight slate text for "SoftCorp Group" and "IT AND SOFTWARE COMPANY", preserving the cyan/royal-blue teardrop emblem.
  - Implemented `.dark-logo` and `.light-logo` classes across `Navbar`, `Footer`, `login`, and `register` pages.
  - Upgraded floating navbar pill with Apple macOS/iOS gradient grey glass shade (`linear-gradient(135deg, rgba(238, 242, 247, 0.96) 0%, rgba(220, 228, 237, 0.92) 50%, rgba(234, 240, 246, 0.96) 100%)`), specular top/bottom rim highlights, and ambient drop shadows.
  - Added gradient slate canvas backdrop (`linear-gradient(180deg, #f8fafc 0%, #edf2f7 40%, #f1f5f9 100%)`) and matching gradient grey glass footer.
- **Product Catalog Verification & Tradeboard Addition (October 2026):**
  - **Comprehensive Codebase Audit:** Inspected authentic repositories under `d:\Code\Antigravity\My_Projects\` (`sdm`, `tradeboard`, `spectrum`, `melodrift`) to extract real-world specifications, versions, distribution channels, and architectures.
  - **Softcorp Download Manager (SDM):** 133.10 MB Windows installer (`/downloads/SDM_Setup_v1.0.exe`), 32-socket parallel HTTP range acceleration, in-page universal video grabber (YouTube, Twitter/X, Reddit, TikTok, Facebook, Vimeo), integrated FFmpeg single-file audio+video muxer, Manifest V3 extensions, and Obsidian Cyber-Glass DRM.
  - **Tradeboard Algo Platform Added:** Full-stack algorithmic trading workstation (version: `v2.0.2.7`), unified broker API for 34+ Indian brokers (Zerodha, AngelOne, Dhan, Kotak Neo, Fyers, Upstox, Delta India), Flow drag-and-drop no-code visual strategy builder, Python Strategy Host with IST market scheduling, 12-tool Options Trading Suite (Greeks, Payoff diagrams, IV Smile, Max Pain, GEX), ₹1 Crore sandbox paper trading, ZeroMQ real-time streaming, and LLM/MCP agent server integration. Quickstart & docs linked to `https://docs.algo.wesoftcorp.com`.
  - **Spectrum Studio:** Live verified Microsoft Store release (Store ID: `9P1QW99KRX7N`), ultra-fast Flutter/Dart 3 spatial RAW viewer (Sony ARW, Canon CR2/CR3, Nikon NEF, DNG, Fuji RAF) and 60/120 FPS darkroom handling 5,000+ photos in <800 KB RAM. Marked with **Limited-Time Free Access** (100% Free Pro showcase offer).
  - **Melodrift:** High-fidelity web player live at `https://melodrift.rajeevupadhyay.com/` and creator/station cloud dashboard live at `https://melodash.wesoftcorp.com/`, verified on Microsoft Store (`9NTMFZ12Q80S`) and Google Play (`com.melodrift`), sub-300ms zero-buffering audio streaming, 10-band studio parametric EQ, real-time synchronized karaoke lyrics, and encrypted offline vault. Marked with **Limited-Time Free Access** (100% Free Supporter showcase offer).
  - **Multi-Product Matrix UI:** Upgraded `/products` to a responsive 2x2 grid with contextual badges, platform-specific action buttons (Direct EXE download for SDM, Documentation & Quickstart for Tradeboard, Microsoft Store verified badge for Spectrum, and dual Launch Player + Cloud Dashboard links with Store badges for Melodrift), and 4-column balanced showcase on the home page (`/`).
  - **Automated License System & Free Claim Flow:** Integrated `TRADE-PRO`, `SPEC-PRO`, `MELO-PRO` license generation, PayPal/UPI instant checkout for paid products, and zero-payment direct cryptographic serial claim for showcase products.
  - **Limited-Time Product Showcase Access Banner:** Added an animated promotional banner on `/products` and strikethrough original prices (~$24.99 and ~$14.99) highlighting 100% OFF during the showcase event.
- **Fortune-500 Enterprise Motion & Luxury Micro-Interaction Suite (October 2026):**
  - **CSS Animation Engine (`globals.css`):**
    - `@keyframes gradient-flow`: Continuous, hardware-accelerated animated gradient typography (`.gradient-text-animated`) mirroring Apple, Linear, and Vercel.
    - `@keyframes laser-sweep`: Cyber laser grid scanning beam traversing down the viewport.
    - `@keyframes specular-rotate`: Rotating border beam accents on enterprise cards (`.border-beam-card`).
    - `.shine-sweep`: Diagonal specular light sheen sweep traversing across CTA buttons on hover with high-precision cubic-bezier easing.
    - `.card-lift`: Spring-physics hover elevation (`translateY(-6px)`) paired with dual-tone diffuse glow shadow (`rgba(6, 182, 212, 0.25)` and `rgba(59, 130, 246, 0.15)`).
    - `.glass-card` base transitions upgraded to ultra-smooth `cubic-bezier(0.16, 1, 0.3, 1)`.
  - **Atmospheric Cyber Canvas (`AmbientBackground.tsx`):**
    - Ambient laser grid scanning beam (`.laser-beam`) continuously traversing the background.
    - 5 floating cyber-dust micro-particles with staggered drift trajectories (18s-26s) and linear motion blur.
  - **Direct-DOM Hardware-Accelerated Spotlight (`SpotlightCard.tsx`):**
    - Integrated `.card-lift group` with direct-DOM mouse position tracking for instantaneous zero-render spotlight illumination.
  - **Telemetry Command Center HUD (`CommandCenterHUD.tsx`):**
    - Added spring physics hover elevation (`.card-lift`), specular edge glow, live heartbeat pulse, and active status telemetry.
  - **Staggered Scroll-Triggered Reveals:**
    - Integrated Framer Motion `whileInView` with staggered entrance reveals (`delay: index * 0.1s`, `viewport={{ once: true }}`) across Software Suite cards, Enterprise Capabilities, Case Studies preview, FAQ accordions, and Product Catalog.
  - **Universal Luxury Sheen CTAs:**
    - Added `.shine-sweep card-lift` to primary and secondary CTA buttons across Navbar, Hero, Products Page, Landing Page, AI Solutions, Services, ROI Estimator, and Contact Inquiry form.
- **Production Optimization, Security Hardening & Pre-Deployment Audit (October 2026):**
  - **Dependency Audit & Attack Surface Pruning:**
    - Removed unused phantom dependencies (`nodemailer`, `@types/nodemailer`, `styled-components`, `next-pwa`), pruning 241 unused packages and eliminating 4 critical and 33 high vulnerabilities.
    - Updated Next.js runtime and ESLint plugin to secure `16.4.2` release, resolving Next.js Image Optimization DoS/SSRF and Server Function disclosure advisories.
  - **Payment Verification Cryptographic Hardening:**
    - In `api/products/paypal/capture/route.ts`, enforced strict verification that captured amount matches `product.usdPrice.toFixed(2)` and currency matches `USD`. Prevents payment tampering or amount-spoofing attacks.
    - Applied sliding-window rate limiting (10 req / 10 min) and email regex normalization across `api/products/paypal` and `api/products/paypal/capture`.
  - **Authorization Granularity:**
    - In `api/admin/orders` and `api/admin/messages`, separated 401 Unauthorized (unauthenticated) from 403 Forbidden (authenticated non-admin) for clean RFC-compliant error reporting.
  - **Database Concurrency & Production WAL Mode:**
    - In `src/lib/db.ts`, configured SQLite WAL mode (`PRAGMA journal_mode = WAL;`), `PRAGMA synchronous = NORMAL;`, 64MB memory cache (`cache_size = -64000`), and a 5,000ms `busy_timeout` to eliminate database contention and deadlocks under concurrent multi-user load.
  - **CSP Hardening:**
    - In `next.config.ts`, restricted `'unsafe-eval'` to development mode only; production CSP strictly prohibits dynamic code evaluation.
  - **Deployment Script Refinement:**
    - Streamlined `deploy.sh` for Ubuntu OCI VM with clean sequential step logging, swap-aware compilation (`NODE_OPTIONS="--max-old-space-size=2048"`), automated Prisma generation, schema sync, database seeding, and zero-downtime PM2 reload.


