# Security Audit & Performance Optimization Implementation Plan
**Project:** Softcorp Enterprise Web Platform (`softcorp`)  
**Auditor / Architect:** Senior Full-Stack Security & DevOps Engineer  
**Status:** In Progress — Remediation Phase  

---

## 1. Vulnerability Findings & Security Hardening

### Issue 1: Critical Payment Bypass & IDOR in Razorpay (`src/app/api/payments/razorpay/verify/route.ts`)
- **Severity:** 🔴 CRITICAL (CWE-353, CWE-639)
- **Vulnerability:** The endpoint accepts `{ orderId, razorpayPaymentId }` from clients and updates the order/payment status to `succeeded` and `confirmed` without verifying the Razorpay cryptographic signature (`razorpay_signature`) via HMAC-SHA256 (`crypto.createHmac('sha256', secret).update(order_id + "|" + payment_id).digest('hex')`). Furthermore, any authenticated user can submit an orderId belonging to another user.
- **Remediation:**
  1. Require `razorpaySignature` alongside `razorpayOrderId` and `razorpayPaymentId`.
  2. Compute and verify HMAC SHA-256 signature using `process.env.RAZORPAY_KEY_SECRET`. Reject with 400 if signature fails.
  3. Verify `order.userId === session.user.id` (prevent IDOR).

### Issue 2: Cross-Tenant Order Tampering in Stripe (`src/app/api/payments/stripe/verify/route.ts`)
- **Severity:** 🟠 HIGH (CWE-639)
- **Vulnerability:** When verifying a Stripe session, the endpoint does not verify whether `checkoutSession.metadata?.orderId === orderId` or whether `order.userId === session.user.id`.
- **Remediation:**
  1. Validate that the retrieved Stripe checkout session metadata contains matching `orderId`.
  2. Validate that `order.userId === session.user.id`.

### Issue 3: Insecure Direct Object Reference (IDOR) in PayPal (`src/app/api/payments/paypal/capture/route.ts`)
- **Severity:** 🟠 HIGH (CWE-639)
- **Vulnerability:** After capturing the payment from PayPal, the code updates the DB order without ensuring `order.userId === session.user.id`.
- **Remediation:**
  1. Check `order.userId === session.user.id` before updating status.

### Issue 4: Public Unauthenticated Seed Endpoint (`src/app/api/seed/route.ts`)
- **Severity:** 🟠 HIGH (CWE-200, CWE-306)
- **Vulnerability:** Unauthenticated GET route exposes admin existence, contains outdated hardcoded passwords, and allows database seeding triggers.
- **Remediation:**
  1. Disable completely in `production` unless an `ADMIN_SEED_SECRET` bearer token header is provided.
  2. Sync seed services with current 8 official MSME services and accurate pricing.

### Issue 5: Missing Input Validation & Rate Limiting (`src/app/api/auth/register/route.ts`, `src/app/api/contact/route.ts`)
- **Severity:** 🟡 MEDIUM (CWE-20, CWE-400)
- **Vulnerability:**
  - Register: Missing minimum password length (allows 1-char passwords), unnormalized email casing.
  - Contact: Unbounded string length payloads (denial of service, DB bloat).
- **Remediation:**
  1. Enforce password minimum 8 chars, email normalization (`trim().toLowerCase()`) and RFC 5322 regex validation.
  2. Enforce length constraints on contact inputs (`name <= 100`, `email <= 120`, `subject <= 200`, `message <= 3000`).

### Issue 6: Information Disclosure in Auth Sign-In (`src/lib/auth.ts`)
- **Severity:** 🟡 MEDIUM (CWE-209)
- **Vulnerability:** Raw `error.message` passed directly in URL query parameters during database connection exceptions.
- **Remediation:**
  1. Return generic `DatabaseError` parameter without echoing raw exception internals.

### Issue 7: Missing HTTP Security Headers (`next.config.ts`)
- **Severity:** 🟡 MEDIUM (CWE-693)
- **Vulnerability:** Missing modern security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `HSTS`).
- **Remediation:**
  1. Add `headers()` async configuration in `next.config.ts` enforcing strict security headers.

---

## 2. Performance & App Optimization

### Optimization 1: Next.js Image Optimization & Remote Domains (`next.config.ts`)
- Add `images.remotePatterns` for `lh3.googleusercontent.com` (Google SSO avatars) and configure webp/avif formats.

### Optimization 2: Database Indexes for Query Scaling (`prisma/schema.prisma`)
- Add composite and foreign key indexes:
  - `Order`: `@@index([userId])`, `@@index([status])`, `@@index([serviceId])`
  - `Payment`: `@@index([userId])`, `@@index([status])`
  - `ContactMessage`: `@@index([createdAt])`, `@@index([isRead])`
- Regenerate Prisma client (`npx prisma generate`).

### Optimization 3: Code Splitting & Dynamic Imports for Below-the-Fold Landing Page (`src/app/page.tsx`)
- Lazy load below-the-fold components (`UdyamVerification`, `FAQ`, `ROIQuickEstimator`, `Contact`) using `next/dynamic` to dramatically reduce Initial Bundle Size and FCP (First Contentful Paint).

---

## 3. Verification & Safety Gates
1. Run `npx prisma generate` to synchronize client with indexed schema.
2. Run `npx tsc --noEmit` to verify 100% type safety.
3. Test seed script and endpoints.
4. Run `graphify update .` to keep knowledge graph up to date.
