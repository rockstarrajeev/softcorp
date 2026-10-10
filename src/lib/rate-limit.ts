// In-memory sliding-window rate limiter for production API hardening
interface RateLimitRecord {
    count: number;
    resetTime: number;
}

const trackers = new Map<string, RateLimitRecord>();

// Cleanup expired buckets every 5 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
    const timer = setInterval(() => {
        const now = Date.now();
        for (const [key, record] of trackers.entries()) {
            if (now > record.resetTime) {
                trackers.delete(key);
            }
        }
    }, 5 * 60 * 1000);
    // Unref timer in Node.js environment so it does not block graceful shutdown
    if (typeof timer.unref === "function") {
        timer.unref();
    }
}

/**
 * Checks rate limit for a given key within a sliding time window.
 * @param identifier Unique key (e.g., IP + route)
 * @param limit Maximum allowed requests
 * @param windowMs Time window in milliseconds (default: 60,000ms = 1 min)
 */
export function checkRateLimit(
    identifier: string,
    limit: number = 10,
    windowMs: number = 60 * 1000
): { success: boolean; remaining: number; resetMs: number } {
    const now = Date.now();
    const record = trackers.get(identifier);

    if (!record || now > record.resetTime) {
        trackers.set(identifier, {
            count: 1,
            resetTime: now + windowMs,
        });
        return { success: true, remaining: limit - 1, resetMs: windowMs };
    }

    if (record.count >= limit) {
        return { success: false, remaining: 0, resetMs: Math.max(0, record.resetTime - now) };
    }

    record.count += 1;
    return { success: true, remaining: limit - record.count, resetMs: Math.max(0, record.resetTime - now) };
}

/**
 * Extracts client IP safely behind proxies (Nginx, Cloudflare, Vercel)
 */
export function getClientIp(request: Request): string {
    const cfConnectingIp = request.headers.get("cf-connecting-ip");
    if (cfConnectingIp) return cfConnectingIp.trim();

    const xRealIp = request.headers.get("x-real-ip");
    if (xRealIp) return xRealIp.trim();

    const xForwardedFor = request.headers.get("x-forwarded-for");
    if (xForwardedFor) {
        const first = xForwardedFor.split(",")[0];
        if (first) return first.trim();
    }

    return "127.0.0.1";
}
