import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://salvationchurchuganda.vercel.app";
  const now = new Date();

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about/leadership", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/watch", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/ministries", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/events", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/connect", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/visit", priority: 0.95, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
