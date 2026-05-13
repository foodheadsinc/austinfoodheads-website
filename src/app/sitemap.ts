import type { MetadataRoute } from "next";
import { newsletters, reviews } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.austinfoodheads.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const newsletterPages: MetadataRoute.Sitemap = newsletters.map((nl) => ({
    url: `${baseUrl}/news/${nl.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const reviewPages: MetadataRoute.Sitemap = reviews.map((r) => ({
    url: `${baseUrl}/news/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...newsletterPages, ...reviewPages];
}
