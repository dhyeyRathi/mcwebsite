import { groq } from "next-sanity";

// ─── Products ────────────────────────────────────────────────
export const allProductsQuery = groq`
  *[_type == "product"] | order(featured desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    image,
    "imageUrl": coalesce(image.asset->url, imageUrl, ""),
    alt,
    tags,
    featured,
    specifications,
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      "ogImageUrl": coalesce(ogImage.asset->url, image.asset->url, imageUrl, ""),
      twitterTitle,
      twitterDescription,
      "twitterImageUrl": coalesce(twitterImage.asset->url, ogImage.asset->url, image.asset->url, imageUrl, ""),
      twitterCard,
      noIndex,
      noFollow
    }
  }
`;

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    image,
    "imageUrl": coalesce(image.asset->url, imageUrl, ""),
    alt,
    tags,
    featured
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    image,
    "imageUrl": coalesce(image.asset->url, imageUrl, ""),
    alt,
    tags,
    featured,
    specifications,
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      "ogImageUrl": coalesce(ogImage.asset->url, image.asset->url, imageUrl, ""),
      twitterTitle,
      twitterDescription,
      "twitterImageUrl": coalesce(twitterImage.asset->url, ogImage.asset->url, image.asset->url, imageUrl, ""),
      twitterCard,
      noIndex,
      noFollow
    }
  }
`;

export const productSlugsQuery = groq`
  *[_type == "product" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`;

// ─── Testimonials ────────────────────────────────────────────
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt asc) {
    _id,
    name,
    role,
    company,
    quote,
    rating,
    avatar,
    "avatarUrl": coalesce(avatar.asset->url, "")
  }
`;

// ─── Site Settings (Singleton) ───────────────────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    companyName,
    tagline,
    email,
    whatsappNumber,
    address,
    officeHours,
    "contacts": coalesce(contacts, brokers, [])[]{
      name,
      role,
      "contactNumbers": coalesce(contactNumbers, phones, []),
      "phones": coalesce(contactNumbers, phones, [])
    },
    defaultSeo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      "ogImageUrl": coalesce(ogImage.asset->url, ""),
      twitterTitle,
      twitterDescription,
      "twitterImageUrl": coalesce(twitterImage.asset->url, ogImage.asset->url, ""),
      twitterCard,
      noIndex,
      noFollow
    }
  }
`;

// ─── Sitemap ─────────────────────────────────────────────────
export const sitemapProductsQuery = groq`
  *[_type == "product" && defined(slug.current) && !(seo.noIndex == true)] {
    "slug": slug.current,
    _updatedAt
  }
`;

// ─── Metadata Document Queries (Individual Page Docs) ─────────
export const pageMetadataBySlugQuery = groq`
  *[_type == "metadata" && slug == $slug][0] {
    _id,
    pageName,
    slug,
    path,
    metaTitle,
    metaDescription,
    keywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    "ogImageUrl": coalesce(ogImage.asset->url, ""),
    twitterTitle,
    twitterDescription,
    "twitterImageUrl": coalesce(twitterImage.asset->url, ogImage.asset->url, ""),
    twitterCard,
    noIndex,
    noFollow
  }
`;

export const allPageMetadataQuery = groq`
  *[_type == "metadata"] | order(path asc) {
    _id,
    pageName,
    slug,
    path,
    metaTitle,
    metaDescription,
    keywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    "ogImageUrl": coalesce(ogImage.asset->url, ""),
    twitterTitle,
    twitterDescription,
    "twitterImageUrl": coalesce(twitterImage.asset->url, ogImage.asset->url, ""),
    twitterCard,
    noIndex,
    noFollow
  }
`;

// ─── Team Members ───────────────────────────────────────────
export const allTeamMembersQuery = groq`
  *[_type == "team"] | order(order asc, _createdAt asc) {
    _id,
    name,
    role,
    bio,
    image,
    "imageUrl": coalesce(image.asset->url, imageUrl, ""),
    specialties,
    phone,
    email,
    linkedin,
    order
  }
`;
