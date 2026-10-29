import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://wesoftcorp.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/products",
          "/ai-solutions",
          "/services",
          "/case-studies",
          "/about",
          "/process",
          "/contact",
          "/login",
          "/register",
        ],
        disallow: ["/admin", "/admin/*", "/api/*", "/dashboard/*", "/checkout/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
