import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";

const BASE = "https://vertex-llc.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,             lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/service`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/recruit`,lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contact`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,   lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE}/area`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${BASE}/area/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...areaPages];
}
