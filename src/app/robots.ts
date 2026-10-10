import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://wesoftcorp.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/ai-solutions", "/login", "/register"],
        disallow: ["/admin", "/admin/*", "/api/*", "/dashboard/*", "/checkout/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
