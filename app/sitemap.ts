import type { MetadataRoute } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { sitemapProductsQuery, allPageMetadataQuery } from "@/sanity/lib/queries";
import { allProducts } from "@/data/products";

const BASE_URL = "https://manavcanvassers.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static route definitions
  const defaultStaticRoutes: Array<{
    slug: string;
    url: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }> = [
    { slug: "home", url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { slug: "products", url: `${BASE_URL}/products`, changeFrequency: "weekly", priority: 0.9 },
    { slug: "about", url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { slug: "customers", url: `${BASE_URL}/customers`, changeFrequency: "monthly", priority: 0.8 },
    { slug: "contact", url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.85 },
  ];

  let excludedSlugs = new Set<string>();
  let productRoutes: MetadataRoute.Sitemap = [];

  if (isSanityConfigured()) {
    try {
      const [products, pages] = await Promise.all([
        client.fetch<Array<{ slug: string; _updatedAt: string }>>(sitemapProductsQuery),
        client.fetch<Array<{ slug: string; seo?: { noIndex?: boolean } }>>(allPageMetadataQuery),
      ]);

      if (pages && pages.length > 0) {
        for (const p of pages) {
          if ((p as any).noIndex === true || p.seo?.noIndex === true) {
            excludedSlugs.add(p.slug);
          }
        }
      }

      productRoutes = (products || []).map((p) => ({
        url: `${BASE_URL}/products/${p.slug}`,
        lastModified: new Date(p._updatedAt),
        changeFrequency: "weekly" as const,
        priority: 0.85,
      }));
    } catch {
      // Fallback
    }
  }

  const staticRoutes: MetadataRoute.Sitemap = defaultStaticRoutes
    .filter((r) => !excludedSlugs.has(r.slug))
    .map((r) => ({
      url: r.url,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    }));

  // Fallback: use static product data if Sanity is not configured or query failed
  if (productRoutes.length === 0) {
    productRoutes = allProducts.map((p) => ({
      url: `${BASE_URL}/products/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));
  }

  return [...staticRoutes, ...productRoutes];
}
