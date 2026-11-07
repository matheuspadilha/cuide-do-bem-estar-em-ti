import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/contato`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
