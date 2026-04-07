import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { teachings } from "@/data/teachings";
import { resources } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/teachings", "/resources", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const teachingPages = teachings.map((teaching) => ({
    url: `${siteConfig.url}/teachings/${teaching.slug}`,
    lastModified: new Date(),
  }));

  const resourcePages = resources.map((resource) => ({
    url: `${siteConfig.url}/resources/${resource.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...teachingPages, ...resourcePages];
}