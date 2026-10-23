import { NextResponse } from "next/server";
import { SOFTWARE_PRODUCTS, generateProductLicense } from "@/lib/products";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`product_capture_${clientIp}`, 10, 10 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many payment capture attempts. Please wait a few minutes." },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(rateLimit.resetMs / 1000).toString(),
          },
        }
      );
    }

    const { paypalOrderId, productId } = await request.json();

    if (!paypalOrderId || !productId) {
      return NextResponse.json(
        { error: "PayPal order ID and product ID are required." },
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

    // 1. Get OAuth Access Token
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
      return NextResponse.json(
        { error: "PayPal authentication failed." },
        { status: 502 }
      );
    }

    // 2. Capture PayPal Payment
    const captureRes = await fetch(
      `${baseUrl}/v2/checkout/orders/${paypalOrderId}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    const captureData = await captureRes.json();

    if (!captureRes.ok || captureData.status !== "COMPLETED") {
      console.error("PayPal capture error:", captureData);
      return NextResponse.json(
        {
          error:
            captureData.details?.[0]?.description ||
            captureData.message ||
            "PayPal capture was not completed.",
        },
        { status: 400 }
      );
    }

    // Verify captured amount and currency to prevent amount-spoofing attacks
    const capturePayment = captureData.purchase_units?.[0]?.payments?.captures?.[0];
    const capturedAmount = capturePayment?.amount?.value;
    const capturedCurrency = capturePayment?.amount?.currency_code;
    const expectedAmount = product.usdPrice.toFixed(2);

    if (capturedAmount !== expectedAmount || capturedCurrency !== "USD") {
      console.error("PayPal capture amount/currency mismatch:", {
        received: { amount: capturedAmount, currency: capturedCurrency },
        expected: { amount: expectedAmount, currency: "USD" },
      });
      return NextResponse.json(
        { error: "Payment verification failed: captured amount does not match product price." },
        { status: 400 }
      );
    }

    // 3. Generate Official Hardware-Bound Cryptographic Serial
    const licenseKey = generateProductLicense(product.id);
    const payerEmail = captureData.payer?.email_address;
    const payerName = `${captureData.payer?.name?.given_name || ""} ${captureData.payer?.name?.surname || ""}`.trim();

    return NextResponse.json({
      success: true,
      licenseKey,
      product: {
        id: product.id,
        name: product.name,
        installerFileName: product.installerFileName,
        downloadUrl: product.downloadUrl,
      },
      payer: {
        email: payerEmail,
        name: payerName,
      },
      transactionId: captureData.id,
      timestamp: Date.now(),
    });
  } catch (err) {
    console.error("Product PayPal capture error:", err);
    return NextResponse.json(
      { error: "Internal error processing payment capture." },
      { status: 500 }
    );
  }
}
