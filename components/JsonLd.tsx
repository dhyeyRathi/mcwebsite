interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import type { SiteSettingsData } from "@/app/actions/sanity";

// ─── Schema.org Generators ───────────────────────────────────

export function getOrganizationSchema(siteSettings?: SiteSettingsData) {
  const name = siteSettings?.companyName || "Manav Canvassers";
  const address = siteSettings?.address || "F-02, Dalal Bhavan, APMC Market, Hathi Khana, Vadodara – 390006, Gujarat";
  const whatsapp = siteSettings?.whatsappNumber || "919642174768";
  
  const phones: string[] = [];
  if (siteSettings?.contacts) {
    for (const c of siteSettings.contacts) {
      if (c.contactNumbers?.length) phones.push(...c.contactNumbers);
      else if (c.phones?.length) phones.push(...c.phones);
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: "https://manavcanvassers.com",
    logo: "https://manavcanvassers.com/assets/logo/favicon-square.png",
    description:
      siteSettings?.tagline ||
      "Vadodara-based cattle-feed brokerage and sourcing partner connecting businesses with quality cattle-feed ingredients and agricultural commodities.",
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390006",
      addressCountry: "IN",
    },
    telephone: phones.length > 0 ? phones : ["+91-96421-74768", "+91-98253-75833"],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [`https://wa.me/${whatsapp.replace(/\D/g, "")}`],
  };
}

export function getLocalBusinessSchema(siteSettings?: SiteSettingsData) {
  const name = siteSettings?.companyName || "Manav Canvassers";
  const address = siteSettings?.address || "F-02, Dalal Bhavan, APMC Market, Hathi Khana, Vadodara – 390006, Gujarat";
  const primaryPhone =
    siteSettings?.contacts?.[0]?.contactNumbers?.[0] ||
    siteSettings?.contacts?.[0]?.phones?.[0] ||
    "+91-96421-74768";

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    image: "https://manavcanvassers.com/assets/logo/favicon-square.png",
    url: "https://manavcanvassers.com",
    telephone: primaryPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390006",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3072,
      longitude: 73.1812,
    },
    priceRange: "$$",
    description:
      siteSettings?.tagline ||
      "Premium cattle-feed brokerage and agricultural commodity sourcing from APMC Vadodara Market.",
  };
}

export function getProductSchema(product: {
  title: string;
  slug: string;
  description: string;
  category: string;
  image?: string;
  specifications?: Array<{ key: string; value: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: `https://manavcanvassers.com/products/${product.slug}`,
    image: product.image || "https://manavcanvassers.com/assets/logo/favicon-square.png",
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Manav Canvassers",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Manav Canvassers",
    },
    ...(product.specifications && product.specifications.length > 0
      ? {
          additionalProperty: product.specifications.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.key,
            value: spec.value,
          })),
        }
      : {}),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
