import type { MetadataRoute } from "next";
import { getAllPostSlugs, getAllDailySlugs } from "@/lib/content";

const BASE = "https://rajeshranjan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,               lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/tutorials`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/daily`,    lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const dailyRoutes: MetadataRoute.Sitemap = getAllDailySlugs().map((slug) => ({
    url: `${BASE}/daily/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  return [...staticRoutes, ...blogRoutes, ...dailyRoutes];
}
