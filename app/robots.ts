import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/website", "/website/"],
      disallow: ["/"],
    },
    sitemap: "https://elshcon.com/sitemap.xml",
  };
}
