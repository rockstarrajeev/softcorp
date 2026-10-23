import { NextResponse } from "next/server";
import { SOFTWARE_PRODUCTS } from "@/lib/products";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`product_order_${clientIp}`, 10, 10 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many checkout requests. Please wait a few minutes." },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(rateLimit.resetMs / 1000).toString(),
          },
        }
      );
    }

    const { productId, customerName, customerEmail } = await request.json();

    if (!productId || !customerEmail || typeof customerEmail !== "string") {
      return NextResponse.json(
        { error: "Product ID and a valid customer email are required." },
        { status: 400 }
      );
    }

    const normalizedEmail = customerEmail.trim().toLowerCase();
    if (!EMAIL_REGEX.test(normalizedEmail) || normalizedEmail.length > 254) {
      return NextResponse.json(
        { error: "A valid customer email address is required." },
        { status: 400 }
      );
    }

    const product = SOFTWARE_PRODUCTS.find((p) => p.id === productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: "PayPal credentials not configured on server." },
        { status: 500 }
      );
    }

    const baseUrl =
      process.env.PAYPAL_MODE === "live"
        ? "https://api-m.paypal.com"
        : "https://api-m.sandbox.paypal.com";

    // 1. Get OAuth Access Token from PayPal
    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const tokenRes = await fetch(`${baseUrl}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authHeader}`,
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("PayPal token failure:", tokenData);
      return NextResponse.json(
        { error: "Failed to authenticate with PayPal." },
        { status: 502 }
      );
    }

    // 2. Create PayPal Order
    const orderRes = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: `${product.id}_${Date.now()}`,
            description: `${product.name} - Lifetime License`,
            custom_id: JSON.stringify({
              productId: product.id,
              customerEmail: normalizedEmail,
              customerName: customerName ? String(customerName).slice(0, 100) : "Licensed User",
            }),
            amount: {
              currency_code: "USD",
              value: product.usdPrice.toFixed(2),
            },
          },
        ],
        application_context: {
          brand_name: "Softcorp Group LLC",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: `${process.env.NEXTAUTH_URL || "https://wesoftcorp.com"}/products?payment=success&product=${product.id}`,
          cancel_url: `${process.env.NEXTAUTH_URL || "https://wesoftcorp.com"}/products?payment=cancelled`,
        },
      }),
    });

    const orderData = await orderRes.json();
    if (!orderRes.ok || !orderData.id) {
      console.error("PayPal order creation failure:", orderData);
      return NextResponse.json(
        { error: orderData.message || "Failed to create PayPal order." },
        { status: 502 }
      );
    }

    const approveLink = orderData.links?.find((l: { rel: string; href: string }) => l.rel === "approve")?.href;

    return NextResponse.json({
      success: true,
      paypalOrderId: orderData.id,
      approveUrl: approveLink,
      product: {
        id: product.id,
        name: product.name,
        price: product.usdPrice,
      },
    });
  } catch (err) {
    console.error("Product PayPal API error:", err);
    return NextResponse.json(
      { error: "Internal server error creating PayPal order." },
      { status: 500 }
    );
  }
}
