import type { MetadataRoute } from "next";
import { SITE_PAGES } from "@/lib/website-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = "https://elshcon.com";
  const updated = new Date("2026-11-17T00:00:00.000Z");

  return [
    {
      url: root + "/website",
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...Object.keys(SITE_PAGES).map((slug) => ({
      url: root + "/website/" + slug,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: slug === "services" || slug === "about" || slug === "contact" ? 0.8 : 0.6,
    })),
  ];
}
