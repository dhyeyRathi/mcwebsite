"use server";

import type { Metadata } from "next";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import {
  allProductsQuery,
  featuredProductsQuery,
  productBySlugQuery,
  allTestimonialsQuery,
  siteSettingsQuery,
  pageMetadataBySlugQuery,
  allPageMetadataQuery,
  allTeamMembersQuery,
} from "@/sanity/lib/queries";
import { allProducts, ProductItem } from "@/data/products";
import { testimonials as staticTestimonials, Testimonial } from "@/data/testimonials";

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
  specialties?: string[];
  phone?: string;
  email?: string;
  linkedin?: string;
  order?: number;
}

// ─── Types ───────────────────────────────────────────────────
export interface SanityProductItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl?: string;
  alt?: string;
  tags?: string[];
  featured?: boolean;
  specifications?: Array<{ key: string; value: string }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImageUrl?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImageUrl?: string;
    twitterCard?: "summary_large_image" | "summary";
    noIndex?: boolean;
    noFollow?: boolean;
  };
}

export interface PageSeoData {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
  twitterCard?: "summary_large_image" | "summary";
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface PageMetadataDoc {
  _id: string;
  pageName: string;
  slug: string;
  path: string;
  seo?: PageSeoData;
}

export interface ContactPerson {
  name: string;
  role?: string;
  contactNumbers?: string[];
  phones: string[];
}

export interface SiteSettingsData {
  companyName: string;
  tagline: string;
  email: string;
  whatsappNumber: string;
  address: string;
  officeHours: string;
  contacts: ContactPerson[];
  /** Alias for backwards compatibility */
  brokers?: ContactPerson[];
  defaultSeo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

const DEFAULT_SITE_SETTINGS: SiteSettingsData = {
  companyName: "Manav Canvassers",
  tagline: "Your Trusted Partner for Premium Cattle Feed Solutions",
  email: "manavcanvassers@gmail.com",
  whatsappNumber: "919642174768",
  address: "F-02, Dalal Bhavan, APMC Market, Hathi Khana, Vadodara – 390006, Gujarat",
  officeHours: "Monday – Saturday: 9:00 AM – 7:30 PM",
  contacts: [
    {
      name: "Jay Maheshwari",
      role: "Sourcing & Brokerage",
      contactNumbers: ["+91 96421 74768", "+91 94260 03460"],
      phones: ["+91 96421 74768", "+91 94260 03460"],
    },
    {
      name: "Alpesh Maheshwari",
      role: "Logistics & Supply Desk",
      contactNumbers: ["+91 98253 75833", "+91 81417 08456"],
      phones: ["+91 98253 75833", "+91 81417 08456"],
    },
  ],
};

// ─── Server Actions ──────────────────────────────────────────

/**
 * Server Action: Fetches all products from Sanity CMS with static data fallback.
 */
export async function getProductsAction(): Promise<SanityProductItem[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch<SanityProductItem[]>(
        allProductsQuery,
        {},
        { next: { revalidate: 60, tags: ["product"] } }
      );
      if (data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn("Failed fetching products from Sanity action, falling back to static:", err);
    }
  }

  // Fallback to static products
  return allProducts.map((p) => ({
    _id: `static-${p.id}`,
    title: p.title,
    slug: p.id,
    category: p.category,
    description: p.description,
    imageUrl: p.image,
    alt: p.alt,
    tags: p.tags,
    featured: p.featured,
    specifications: p.specifications,
  }));
}

/**
 * Server Action: Fetches featured products from Sanity CMS.
 */
export async function getFeaturedProductsAction(): Promise<SanityProductItem[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch<SanityProductItem[]>(
        featuredProductsQuery,
        {},
        { next: { revalidate: 60, tags: ["product"] } }
      );
      if (data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn("Failed fetching featured products from Sanity action:", err);
    }
  }

  const all = await getProductsAction();
  return all.filter((p) => p.featured);
}

/**
 * Server Action: Fetches a single product by slug from Sanity CMS with static fallback.
 */
export async function getProductBySlugAction(
  slug: string
): Promise<SanityProductItem | null> {
  if (isSanityConfigured()) {
    try {
      const product = await client.fetch<SanityProductItem>(
        productBySlugQuery,
        { slug },
        { next: { revalidate: 60, tags: ["product"] } }
      );
      if (product) return product;
    } catch (err) {
      console.warn(`Failed fetching product "${slug}" from Sanity action:`, err);
    }
  }

  const staticProduct = allProducts.find((p) => p.id === slug);
  if (!staticProduct) return null;

  return {
    _id: `static-${staticProduct.id}`,
    title: staticProduct.title,
    slug: staticProduct.id,
    category: staticProduct.category,
    description: staticProduct.description,
    imageUrl: staticProduct.image,
    alt: staticProduct.alt,
    tags: staticProduct.tags,
    featured: staticProduct.featured,
    specifications: staticProduct.specifications,
  };
}

/**
 * Server Action: Fetches testimonials from Sanity CMS with static fallback.
 */
export async function getTestimonialsAction(): Promise<Testimonial[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch<
        Array<{
          _id: string;
          name: string;
          role: string;
          company?: string;
          quote: string;
          rating?: number;
          avatarUrl?: string;
        }>
      >(
        allTestimonialsQuery,
        {},
        { next: { revalidate: 3600, tags: ["testimonial"] } }
      );

      if (data && data.length > 0) {
        return data.map((t) => ({
          id: t._id,
          name: t.name,
          role: t.company ? `${t.role}, ${t.company}` : t.role,
          quote: t.quote,
        }));
      }
    } catch (err) {
      console.warn("Failed fetching testimonials from Sanity action:", err);
    }
  }

  return staticTestimonials;
}

/**
 * Server Action: Fetches site settings (singleton) from Sanity CMS.
 */
export async function getSiteSettingsAction(): Promise<SiteSettingsData> {
  if (isSanityConfigured()) {
    try {
      const settings = await client.fetch<SiteSettingsData>(
        siteSettingsQuery,
        {},
        { next: { revalidate: 3600, tags: ["settings"] } }
      );
      if (settings && settings.companyName) {
        const rawContacts =
          settings.contacts?.length
            ? settings.contacts
            : (settings as any).brokers?.length
            ? (settings as any).brokers
            : DEFAULT_SITE_SETTINGS.contacts;

        const contactsList: ContactPerson[] = rawContacts.map((c: any) => {
          const numbers =
            Array.isArray(c.contactNumbers) && c.contactNumbers.length > 0
              ? c.contactNumbers
              : Array.isArray(c.phones) && c.phones.length > 0
              ? c.phones
              : [];
          return {
            name: c.name || "Contact",
            role: c.role || "",
            contactNumbers: numbers,
            phones: numbers,
          };
        });

        return {
          companyName: settings.companyName || DEFAULT_SITE_SETTINGS.companyName,
          tagline: settings.tagline || DEFAULT_SITE_SETTINGS.tagline,
          email: settings.email || DEFAULT_SITE_SETTINGS.email,
          whatsappNumber: settings.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber,
          address: settings.address || DEFAULT_SITE_SETTINGS.address,
          officeHours: settings.officeHours || DEFAULT_SITE_SETTINGS.officeHours,
          contacts: contactsList,
          brokers: contactsList,
          defaultSeo: settings.defaultSeo,
        };
      }
    } catch (err) {
      console.warn("Failed fetching site settings from Sanity action:", err);
    }
  }

  return DEFAULT_SITE_SETTINGS;
}

/**
 * Server Action: Fetches all frontend datasets in parallel.
 */
export async function getAllFrontendDataAction() {
  const [products, testimonials, siteSettings] = await Promise.all([
    getProductsAction(),
    getTestimonialsAction(),
    getSiteSettingsAction(),
  ]);

  return { products, testimonials, siteSettings };
}

/**
 * Server Action: Fetches page metadata & SEO document for a specific route slug from Sanity metadata document.
 */
export async function getPageMetadataAction(
  slug: string
): Promise<PageSeoData | null> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch<any>(
        pageMetadataBySlugQuery,
        { slug },
        { next: { revalidate: 60, tags: ["metadata", "pageMetadata", "settings"] } }
      );
      if (data) {
        return data.seo ? data.seo : data;
      }
    } catch (err) {
      console.warn(`Failed fetching page metadata for "${slug}":`, err);
    }
  }
  return null;
}

/**
 * Server Action: Fetches all page metadata from the Sanity metadata document.
 */
export async function getAllPageMetadataAction(): Promise<any[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch<any[]>(
        allPageMetadataQuery,
        {},
        { next: { revalidate: 60, tags: ["metadata", "pageMetadata", "settings"] } }
      );
      if (data) return data;
    } catch (err) {
      console.warn("Failed fetching all page metadata:", err);
    }
  }
  return [];
}

const fallbackTeamMembers: TeamMember[] = [
  {
    _id: "team-jay-maheshwari",
    name: "Jay Maheshwari",
    role: "Founder & Chief Broker",
    bio: "With over 30 years in agricultural commodity markets, Jay spearheads bulk sourcing contracts, APMC mandi connections, and client brokerage for feed millers across India.",
    specialties: ["APMC Trading", "DDGS & DOC Sourcing", "Strategic Procurement"],
    phone: "+91 96421 74768",
    email: "manavcanvassers@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    order: 1,
  },
  {
    _id: "team-alpesh-maheshwari",
    name: "Alpesh Maheshwari",
    role: "Head of Logistics & Supply Chain",
    bio: "Oversees end-to-end dispatch operations, multi-point railway and truck freight logistics, and mill-gate delivery schedules to ensure guaranteed on-time arrivals.",
    specialties: ["Freight Operations", "Supply Chain Management", "Dispatch Scheduling"],
    phone: "+91 98253 75833",
    email: "manavcanvassers@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    order: 2,
  },
  {
    _id: "team-rameshwar-patel",
    name: "Rameshwar Patel",
    role: "Quality Assurance & Mill Relations",
    bio: "Ensures all incoming and dispatched lots of Maize DDGS, Rice DDGS, and oil cakes meet moisture, protein, and aflatoxin standards required by feed mill formulations.",
    specialties: ["Feed Quality Testing", "Laboratory Analysis", "Mill Partnerships"],
    phone: "+91 94260 03460",
    email: "manavcanvassers@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80",
    order: 3,
  },
  {
    _id: "team-pooja-shah",
    name: "Pooja Shah",
    role: "Market Intelligence & Commodity Analyst",
    bio: "Monitors daily mandi price indexes, monsoon crop arrival patterns, and global agro commodity shifts to help buyers lock in the most favorable purchase windows.",
    specialties: ["Price Trend Forecasting", "Commodity Intelligence", "Contract Advisory"],
    phone: "+91 90881 11940",
    email: "manavcanvassers@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    order: 4,
  },
];

/**
 * Server Action: Fetches all team members from Sanity CMS,
 * ordered by display order. Falls back to static team members.
 */
export async function getTeamMembersAction(): Promise<TeamMember[]> {
  if (isSanityConfigured()) {
    try {
      const data = await client.fetch<TeamMember[]>(
        allTeamMembersQuery,
        {},
        {
          next: {
            revalidate: 60,
            tags: ["team"],
          },
        }
      );
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn("Sanity getTeamMembersAction error, falling back:", err);
    }
  }
  return fallbackTeamMembers;
}


/**
 * Helper: Builds 100% dynamic Next.js Metadata fetched from the Sanity metadata document,
 * falling back gracefully to siteSettings.defaultSeo and hardcoded defaults.
 */
export async function constructPageMetadata(
  slug: string,
  fallback: {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    ogImage?: string;
  }
): Promise<Metadata> {
  const [pageSeo, siteSettings] = await Promise.all([
    getPageMetadataAction(slug),
    getSiteSettingsAction(),
  ]);

  const title =
    pageSeo?.metaTitle ||
    siteSettings.defaultSeo?.metaTitle ||
    fallback.title;

  const description =
    pageSeo?.metaDescription ||
    siteSettings.defaultSeo?.metaDescription ||
    fallback.description;

  const keywords =
    pageSeo?.keywords && pageSeo.keywords.length > 0
      ? pageSeo.keywords
      : siteSettings.defaultSeo?.keywords && siteSettings.defaultSeo.keywords.length > 0
      ? siteSettings.defaultSeo.keywords
      : fallback.keywords || [];

  const canonical =
    pageSeo?.canonicalUrl ||
    `https://manavcanvassers.com${fallback.path === "/" ? "" : fallback.path}`;

  const ogTitle = pageSeo?.ogTitle || title;
  const ogDescription = pageSeo?.ogDescription || description;
  const ogImage =
    pageSeo?.ogImageUrl ||
    fallback.ogImage ||
    "/assets/company/grains_display.jpg";

  const twitterTitle = pageSeo?.twitterTitle || ogTitle;
  const twitterDescription = pageSeo?.twitterDescription || ogDescription;
  const twitterImage = pageSeo?.twitterImageUrl || ogImage;
  const twitterCard = pageSeo?.twitterCard || "summary_large_image";

  // Strict check for noIndex and noFollow directly from Sanity
  const shouldIndex = !(pageSeo?.noIndex === true);
  const shouldFollow = !(pageSeo?.noFollow === true);

  return {
    title,
    description,
    keywords,
    robots: {
      index: shouldIndex,
      follow: shouldFollow,
      googleBot: {
        index: shouldIndex,
        follow: shouldFollow,
      },
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: siteSettings.companyName || "Manav Canvassers",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage],
    },
  };
}


