/**
 * Seed script for Sanity CMS
 * Migrates all 15 products from data/products.ts and 5 testimonials from data/testimonials.ts
 * into the Sanity dataset, plus creates the singleton site settings document.
 *
 * Usage:
 *   npx tsx scripts/seed-sanity.ts
 *
 * Requires SANITY_API_WRITE_TOKEN, NEXT_PUBLIC_SANITY_PROJECT_ID, and
 * NEXT_PUBLIC_SANITY_DATASET in .env.local
 */

import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

// Load .env.local manually without external dotenv dependency
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Products ────────────────────────────────────────────────
const products = [
  {
    id: "maize-ddgs",
    title: "Maize DDGS",
    category: "Maize-Based",
    description:
      "Dried Distillers Grains with Solubles, a valuable feed ingredient used in livestock and cattle-feed formulations. Protein. Energy. Performance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKrV7uB4LHzAzqrXF2RpU6y_tG6v9z7jXChpEbNyoHSvbY1B83xeBL95bwwNRglzfI5f86MjjaWBTi7lBGNRwPN-212dLMr8AYLQIdfbjvYGD2Z0xrGndcDhfr5wqCnxTQ5xiFOFAwWoO1tFj-w0xZL9N9s-5Hl9pTMIBQYTZB7R5_vloKK7tA004MLYHdTtIpS3LCHd2b58vf1jsr_sStftk3eVED1-6DDLtJ6Pke-yq5lkrJA7GS",
    alt: "Maize DDGS Cattle Feed Ingredient",
    tags: ["High Protein", "Energy Rich", "Featured"],
    featured: true,
    specifications: [
      { key: "Protein", value: "28-30%" },
      { key: "Moisture", value: "<12%" },
      { key: "Fiber", value: "8-10%" },
      { key: "Energy", value: "High" },
    ],
  },
  {
    id: "maize-doc",
    title: "Maize DOC",
    category: "Maize-Based",
    description:
      "A maize-derived feed ingredient used across cattle-feed and livestock applications. Reliable sourcing for your feed requirements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIwHQSMZB-O0IeHW_8b4_Y4b6sT7EP_qR4s3uxPSvYNJjGGcQDTRi5iXerEjJCndf795eEnm8nZN6cBfWHXSFmwY8_aTDLP0b7_lWENsobIfA5Gmu9ZMGT-dBFqo93Ea6Dodh8mBHmujcvgsZc08Uoc_rCZkod4MWlVHkG7PcKOoMK9MDxArE38fMC2a85VeDTfATEGKXJTf3hfhLyHRlnXqSTxuRdCoG7ZU7Qkc7mwA9zSAadP_EW",
    alt: "Maize DOC feed ingredient",
    tags: ["De-Oiled Cake", "Cattle Feed", "Featured"],
    featured: true,
    specifications: [
      { key: "Protein", value: "18-20%" },
      { key: "Moisture", value: "<12%" },
      { key: "Fat", value: "<2%" },
    ],
  },
  {
    id: "rice-ddgs",
    title: "Rice DDGS",
    category: "Rice-Based",
    description:
      "A rice-derived feed ingredient used in livestock nutrition and commercial feed formulations. Quality ingredients for dependable feed sourcing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0_QSRt4EDPsnDslQS5IUUBmNDqGY5IYIAW908BKFiJIMq-0hGvyaWeFr0aqib5S3MyaXjPXTMZ-OhXGiHhchKbJwsCm3hc23_7xk_WZWEBAxBhkE8VuiK7gwIE_iwWk0bUre50rP5IMZ6ve6Kxg6c0uDyiS19_HTl8ov8tWchGS1jPHniFLAJnUVO6MMBMCT8i_Rm74Ike9-tT3Kd_Dx4akcWZeNBwUfigQqBWWKQXV5_9gC5kBah",
    alt: "Rice DDGS livestock nutrition ingredient",
    tags: ["Livestock Nutrition", "Commercial Feed", "Featured"],
    featured: true,
    specifications: [
      { key: "Protein", value: "22-25%" },
      { key: "Moisture", value: "<12%" },
      { key: "Fiber", value: "10-12%" },
    ],
  },
  {
    id: "maize",
    title: "Maize (Corn)",
    category: "Maize-Based",
    description:
      "An essential agricultural commodity widely used across livestock-feed applications and cattle nutrition.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKrV7uB4LHzAzqrXF2RpU6y_tG6v9z7jXChpEbNyoHSvbY1B83xeBL95bwwNRglzfI5f86MjjaWBTi7lBGNRwPN-212dLMr8AYLQIdfbjvYGD2Z0xrGndcDhfr5wqCnxTQ5xiFOFAwWoO1tFj-w0xZL9N9s-5Hl9pTMIBQYTZB7R5_vloKK7tA004MLYHdTtIpS3LCHd2b58vf1jsr_sStftk3eVED1-6DDLtJ6Pke-yq5lkrJA7GS",
    alt: "Yellow Maize grains",
    tags: ["Raw Grain", "Bulk Sourcing"],
    featured: false,
    specifications: [
      { key: "Energy", value: "High" },
      { key: "Starch", value: "65-70%" },
      { key: "Moisture", value: "<14%" },
    ],
  },
  {
    id: "wheat-bran",
    title: "Wheat Bran",
    category: "Other Ingredients",
    description:
      "A wheat-processing by-product commonly used as a highly digestible feed ingredient for livestock and dairy cattle.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBF2b99Zhx7mDP7fcRxYBgij_UhATNB9Hh3UlGZpKSJcnBwb3ifL6SrS9ExY94NWTiOYo42RAWb1FLNlpPObRrB5m-9SgXJx8EZkxO3CgeY6vpPYeSs2sGBmqGpvXilfJzhx7Ggkq8N6fkqrxXYbLwQx9bPISVOoL_yUT4NLTaCa_dcJjstZenu8r6OZA93CHIEzNl9uDuS3mC8k2lld9UjPhWAIR8-7eCI0VYDgOnQRzwFfBsvm4mz",
    alt: "Wheat bran livestock feed",
    tags: ["Fiber Rich", "Dairy Essential"],
    featured: false,
    specifications: [
      { key: "Protein", value: "14-16%" },
      { key: "Fiber", value: "10-12%" },
      { key: "Moisture", value: "<12%" },
    ],
  },
  {
    id: "gn-doc",
    title: "GN DOC (Groundnut DOC)",
    category: "Other Ingredients",
    description:
      "An oilseed-derived protein meal with superior amino acid profile, widely utilized in animal-feed applications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVe7WxM5A7UaifcelxvvdVK7z4dyLxAeG1Yir-aP_y7T1glTMyPSTJs63lMQXtkdmrfIC6eAwdmg088yAZgK9-BmFeiZxm-Riui2PEr7sh9WVj0M2Vu-4AI3q9s7-K1sYTuwo1Z-uQsE_f2nrXiWSgvOM4nljERwkiyUIXU5wY5qFf7DNg_GnIpCYHoFdEQ0exc1F7HiavjodmTD1Ns4Shlf_8acV7HUwm3i3KHUAzogMb_6VCqC0L",
    alt: "Groundnut DOC cattle feed",
    tags: ["Oilseed Derived", "High Protein"],
    featured: false,
    specifications: [
      { key: "Protein", value: "40-45%" },
      { key: "Moisture", value: "<10%" },
      { key: "Fat", value: "<1.5%" },
    ],
  },
  {
    id: "rapeseed-doc",
    title: "Rapeseed DOC",
    category: "Other Ingredients",
    description:
      "A valuable oilseed-derived protein meal ingredient used in balanced livestock-feed and cattle formulations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVe7WxM5A7UaifcelxvvdVK7z4dyLxAeG1Yir-aP_y7T1glTMyPSTJs63lMQXtkdmrfIC6eAwdmg088yAZgK9-BmFeiZxm-Riui2PEr7sh9WVj0M2Vu-4AI3q9s7-K1sYTuwo1Z-uQsE_f2nrXiWSgvOM4nljERwkiyUIXU5wY5qFf7DNg_GnIpCYHoFdEQ0exc1F7HiavjodmTD1Ns4Shlf_8acV7HUwm3i3KHUAzogMb_6VCqC0L",
    alt: "Rapeseed DOC cattle feed",
    tags: ["Oilseed Derived", "Formulation"],
    featured: false,
    specifications: [
      { key: "Protein", value: "35-38%" },
      { key: "Moisture", value: "<12%" },
      { key: "Fat", value: "<2%" },
    ],
  },
  {
    id: "maize-fiber",
    title: "Maize Fiber",
    category: "Maize-Based",
    description:
      "A maize-derived feed material with high digestible fiber used extensively in animal-feed applications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKrV7uB4LHzAzqrXF2RpU6y_tG6v9z7jXChpEbNyoHSvbY1B83xeBL95bwwNRglzfI5f86MjjaWBTi7lBGNRwPN-212dLMr8AYLQIdfbjvYGD2Z0xrGndcDhfr5wqCnxTQ5xiFOFAwWoO1tFj-w0xZL9N9s-5Hl9pTMIBQYTZB7R5_vloKK7tA004MLYHdTtIpS3LCHd2b58vf1jsr_sStftk3eVED1-6DDLtJ6Pke-yq5lkrJA7GS",
    alt: "Maize Fiber for livestock",
    tags: ["Maize Derived", "Animal Feed"],
    featured: false,
    specifications: [
      { key: "Fiber", value: "18-22%" },
      { key: "Moisture", value: "<12%" },
      { key: "Protein", value: "8-10%" },
    ],
  },
  {
    id: "maize-csl",
    title: "Maize CSL (Corn Steep Liquor)",
    category: "Maize-Based",
    description:
      "A protein and nutrient-rich maize-processing-derived liquid ingredient used across feed applications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKq8XAKrK2vfae_TDRnRQsoSZ_3-kG6QiQXJIoOPcord2RoX9KSiFT2K7z2zwm_F1w5wNbucHjKRCOVv47RL3Sid5uUjPgwIUDVxrSHTxN79iLArjiswysSVYKpiMPgzS9e1OmR7H_uRu_xkIhQxaiyrwnBFpjNslNRfDsmoLdXjtyEZlr_17jbTk8PoaMgNB3UyKXI4AOu-2S1xDPfBQJFnpixAAdegDjucSoSY2uSdVjaIzmchLv",
    alt: "Maize CSL feed ingredient",
    tags: ["Nutrient Rich", "Processing Byproduct"],
    featured: false,
    specifications: [
      { key: "Protein", value: "20-25%" },
      { key: "Lactic Acid", value: "15-20%" },
      { key: "Form", value: "Liquid" },
    ],
  },
  {
    id: "maize-chuni",
    title: "Maize Chuni",
    category: "Maize-Based",
    description:
      "A traditional maize-based feed material commonly used in high-efficiency livestock-feed formulations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIwHQSMZB-O0IeHW_8b4_Y4b6sT7EP_qR4s3uxPSvYNJjGGcQDTRi5iXerEjJCndf795eEnm8nZN6cBfWHXSFmwY8_aTDLP0b7_lWENsobIfA5Gmu9ZMGT-dBFqo93Ea6Dodh8mBHmujcvgsZc08Uoc_rCZkod4MWlVHkG7PcKOoMK9MDxArE38fMC2a85VeDTfATEGKXJTf3hfhLyHRlnXqSTxuRdCoG7ZU7Qkc7mwA9zSAadP_EW",
    alt: "Maize Chuni feed material",
    tags: ["Maize Based", "Livestock Feed"],
    featured: false,
    specifications: [
      { key: "Protein", value: "10-12%" },
      { key: "Moisture", value: "<12%" },
      { key: "Fiber", value: "6-8%" },
    ],
  },
  {
    id: "maize-cake",
    title: "Maize Cake",
    category: "Maize-Based",
    description:
      "A nutrient-dense maize-derived cake feed ingredient used across commercial cattle-feed applications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKrV7uB4LHzAzqrXF2RpU6y_tG6v9z7jXChpEbNyoHSvbY1B83xeBL95bwwNRglzfI5f86MjjaWBTi7lBGNRwPN-212dLMr8AYLQIdfbjvYGD2Z0xrGndcDhfr5wqCnxTQ5xiFOFAwWoO1tFj-w0xZL9N9s-5Hl9pTMIBQYTZB7R5_vloKK7tA004MLYHdTtIpS3LCHd2b58vf1jsr_sStftk3eVED1-6DDLtJ6Pke-yq5lkrJA7GS",
    alt: "Maize Cake feed ingredient",
    tags: ["Cattle Feed", "Maize Derived"],
    featured: false,
    specifications: [
      { key: "Protein", value: "8-10%" },
      { key: "Oil", value: "6-8%" },
      { key: "Moisture", value: "<12%" },
    ],
  },
  {
    id: "corn-grit",
    title: "Corn Grit",
    category: "Maize-Based",
    description:
      "Evenly processed coarse maize grist used as an essential ingredient in various feed formulations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKrV7uB4LHzAzqrXF2RpU6y_tG6v9z7jXChpEbNyoHSvbY1B83xeBL95bwwNRglzfI5f86MjjaWBTi7lBGNRwPN-212dLMr8AYLQIdfbjvYGD2Z0xrGndcDhfr5wqCnxTQ5xiFOFAwWoO1tFj-w0xZL9N9s-5Hl9pTMIBQYTZB7R5_vloKK7tA004MLYHdTtIpS3LCHd2b58vf1jsr_sStftk3eVED1-6DDLtJ6Pke-yq5lkrJA7GS",
    alt: "Corn Grit for animal feed",
    tags: ["Processed Maize", "Feed Grist"],
    featured: false,
    specifications: [
      { key: "Starch", value: "65-70%" },
      { key: "Moisture", value: "<14%" },
      { key: "Protein", value: "7-9%" },
    ],
  },
  {
    id: "rice-polish",
    title: "Rice Polish",
    category: "Rice-Based",
    description:
      "A fine rice-processing by-product with high energy value, commonly used as an ingredient in animal and cattle feed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0_QSRt4EDPsnDslQS5IUUBmNDqGY5IYIAW908BKFiJIMq-0hGvyaWeFr0aqib5S3MyaXjPXTMZ-OhXGiHhchKbJwsCm3hc23_7xk_WZWEBAxBhkE8VuiK7gwIE_iwWk0bUre50rP5IMZ6ve6Kxg6c0uDyiS19_HTl8ov8tWchGS1jPHniFLAJnUVO6MMBMCT8i_Rm74Ike9-tT3Kd_Dx4akcWZeNBwUfigQqBWWKQXV5_9gC5kBah",
    alt: "Rice Polish feed material",
    tags: ["Rice Byproduct", "Energy Rich"],
    featured: false,
    specifications: [
      { key: "Fat/Oil", value: "12-18%" },
      { key: "Protein", value: "10-12%" },
      { key: "Moisture", value: "<12%" },
    ],
  },
  {
    id: "rice-broken",
    title: "Rice Broken",
    category: "Rice-Based",
    description:
      "A rice-based agricultural commodity used across different animal and cattle feed applications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0_QSRt4EDPsnDslQS5IUUBmNDqGY5IYIAW908BKFiJIMq-0hGvyaWeFr0aqib5S3MyaXjPXTMZ-OhXGiHhchKbJwsCm3hc23_7xk_WZWEBAxBhkE8VuiK7gwIE_iwWk0bUre50rP5IMZ6ve6Kxg6c0uDyiS19_HTl8ov8tWchGS1jPHniFLAJnUVO6MMBMCT8i_Rm74Ike9-tT3Kd_Dx4akcWZeNBwUfigQqBWWKQXV5_9gC5kBah",
    alt: "Rice Broken commodity",
    tags: ["Agricultural Commodity", "Carbohydrate Source"],
    featured: false,
    specifications: [
      { key: "Starch", value: "75-80%" },
      { key: "Protein", value: "6-8%" },
      { key: "Moisture", value: "<14%" },
    ],
  },
  {
    id: "cattle-feed-custom",
    title: "Commercial Cattle Feed",
    category: "Cattle Feed",
    description:
      "We deal in various types of commercial and custom cattle-feed products according to your specific farm or business requirements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKq8XAKrK2vfae_TDRnRQsoSZ_3-kG6QiQXJIoOPcord2RoX9KSiFT2K7z2zwm_F1w5wNbucHjKRCOVv47RL3Sid5uUjPgwIUDVxrSHTxN79iLArjiswysSVYKpiMPgzS9e1OmR7H_uRu_xkIhQxaiyrwnBFpjNslNRfDsmoLdXjtyEZlr_17jbTk8PoaMgNB3UyKXI4AOu-2S1xDPfBQJFnpixAAdegDjucSoSY2uSdVjaIzmchLv",
    alt: "Custom commercial cattle feed",
    tags: ["Finished Feed", "Custom Requirements"],
    featured: false,
    specifications: [
      { key: "Type", value: "Custom Formulation" },
      { key: "Application", value: "Dairy & Livestock" },
    ],
  },
];

// ─── Testimonials ────────────────────────────────────────────
const testimonials = [
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    role: "Director, Mehta Agro Exports",
    company: "Mehta Agro Exports",
    quote:
      "Manav Canvassers made sourcing cattle feed ingredients effortless. Their brokerage network is unmatched — we get the best prices without the hassle of dealing with multiple suppliers.",
    rating: 5,
  },
  {
    id: "ankit-shah",
    name: "Ankit Shah",
    role: "Operations Head, Global Feed Solutions",
    company: "Global Feed Solutions",
    quote:
      "As a feed mill operator, finding reliable raw material suppliers was our biggest challenge. Manav Canvassers bridges that gap perfectly — consistent quality, transparent pricing.",
    rating: 5,
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Procurement Manager, Patel Organics",
    company: "Patel Organics",
    quote:
      "Their deep understanding of the cattle feed market and their ability to negotiate competitive deals has saved us both time and money. A truly dependable B2B partner.",
    rating: 5,
  },
  {
    id: "sanjay-verma",
    name: "Sanjay Verma",
    role: "Founder, Verma Dairy Feeds",
    company: "Verma Dairy Feeds",
    quote:
      "We have been working with Manav Canvassers for over five years. Their prompt communication and vast network of trusted suppliers give us immense confidence in our supply chain.",
    rating: 5,
  },
  {
    id: "neha-singh",
    name: "Neha Singh",
    role: "Head of Sourcing, Singh & Sons Agro",
    company: "Singh & Sons Agro",
    quote:
      "Professional, efficient, and always looking out for their clients' best interests. Their market insights on grain pricing have been invaluable for our seasonal purchasing strategy.",
    rating: 5,
  },
];

// ─── Team Members ────────────────────────────────────────────
const teamMembers = [
  {
    _id: "team-jay-maheshwari",
    _type: "team",
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
    _type: "team",
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
    _type: "team",
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
    _type: "team",
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

// ─── Site Settings ───────────────────────────────────────────
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  companyName: "Manav Canvassers",
  tagline: "Your Trusted Partner for Premium Cattle Feed Solutions",
  email: "manavcanvassers@gmail.com",
  whatsappNumber: "919642174768",
  address:
    "F-02, Dalal Bhavan, APMC Market, Hathi Khana, Vadodara – 390006, Gujarat, India",
  officeHours: "Mon-Sat: 9:00 AM - 7:00 PM",
  contacts: [
    {
      _key: "jay",
      _type: "contactPerson",
      name: "Jay Maheshwari",
      role: "Sourcing & Brokerage Desk",
      contactNumbers: ["+91 96421 74768", "+91 94260 03460", "+91 90881 11940"],
    },
    {
      _key: "alpesh",
      _type: "contactPerson",
      name: "Alpesh Maheshwari",
      role: "Logistics & Supply Desk",
      contactNumbers: ["+91 98253 75833", "+91 81417 08456"],
    },
  ],
  defaultSeo: {
    metaTitle:
      "Manav Canvassers - Premium Cattle Feed Brokerage & Sourcing | Vadodara, Gujarat",
    metaDescription:
      "Manav Canvassers is a Vadodara-based cattle-feed brokerage and sourcing partner connecting businesses with quality cattle-feed ingredients and agricultural commodities.",
    keywords: [
      "cattle feed",
      "Maize DDGS",
      "Rice DDGS",
      "feed brokerage",
      "Vadodara",
      "Gujarat",
      "agricultural commodities",
      "livestock feed",
    ],
  },
};

// ─── Metadata Documents (One document per page, exactly as in screenshot) ───
const metadataPageDocs = [
  {
    _id: "metadata-home",
    _type: "metadata",
    pageName: "Home Page",
    slug: "home",
    path: "/",
    metaTitle:
      "Manav Canvassers - Premium Cattle Feed Brokerage & Sourcing Desk | Vadodara",
    metaDescription:
      "Trusted cattle-feed brokerage and sourcing partner connecting feed millers, dairy plants, and agricultural commodity buyers across India from APMC Vadodara.",
    keywords: [
      "cattle feed brokerage",
      "Maize DDGS Gujarat",
      "Rice DDGS",
      "Maize DOC",
      "Wheat Bran wholesale",
      "APMC Vadodara feed broker",
      "dairy cattle nutrition",
    ],
    canonicalUrl: "https://manavcanvassers.com",
    ogTitle:
      "Manav Canvassers - Premium Cattle Feed Brokerage & Sourcing Desk",
    ogDescription:
      "Connecting mills, processors, and farmers with verified quality feed commodities at transparent APMC rates.",
    twitterTitle:
      "Manav Canvassers - Premium Cattle Feed Brokerage & Sourcing",
    twitterDescription:
      "Connecting mills, processors, and farmers with verified quality feed commodities at transparent APMC rates.",
    twitterCard: "summary_large_image",
    noIndex: false,
    noFollow: false,
  },
  {
    _id: "metadata-about",
    _type: "metadata",
    pageName: "About Us",
    slug: "about",
    path: "/about",
    metaTitle:
      "About Us - 30+ Years of Trusted Cattle Feed Brokerage | Manav Canvassers",
    metaDescription:
      "Discover Manav Canvassers' legacy in agricultural commodities, cattle-feed sourcing, transparent APMC trading, and reliable supply chain networks across India.",
    keywords: [
      "about Manav Canvassers",
      "cattle feed broker Vadodara",
      "APMC grain market Hathi Khana",
      "feed commodity sourcing Gujarat",
      "agro brokerage history",
    ],
    canonicalUrl: "https://manavcanvassers.com/about",
    ogTitle: "About Manav Canvassers - 30+ Years of Sourcing Excellence",
    ogDescription:
      "Bridging processors, feed millers, and livestock farmers with trusted commodity brokerage.",
    twitterTitle: "About Manav Canvassers - 30+ Years of Sourcing Excellence",
    twitterDescription:
      "Bridging processors, feed millers, and livestock farmers with trusted commodity brokerage.",
    twitterCard: "summary_large_image",
    noIndex: false,
    noFollow: false,
  },
  {
    _id: "metadata-products",
    _type: "metadata",
    pageName: "Products Catalog",
    slug: "products",
    path: "/products",
    metaTitle:
      "Products We Deal In - Maize DDGS, Rice DDGS, DOC & Cattle Feed Ingredients",
    metaDescription:
      "Explore our complete catalog of certified cattle-feed ingredients: Maize DDGS, Maize DOC, Rice DDGS, Wheat Bran, GN DOC, Rapeseed DOC, and custom feed formulations.",
    keywords: [
      "cattle feed ingredients",
      "buy Maize DDGS",
      "buy Rice DDGS",
      "Maize DOC price",
      "Wheat bran bulk",
      "Groundnut DOC cattle feed",
      "commercial cattle feed APMC",
    ],
    canonicalUrl: "https://manavcanvassers.com/products",
    ogTitle:
      "Cattle Feed Ingredients & Agricultural Commodities - Manav Canvassers",
    ogDescription:
      "Wholesale sourcing for Maize DDGS, DOC, Rice DDGS, and balanced cattle nutrition ingredients.",
    twitterTitle:
      "Cattle Feed Ingredients & Agricultural Commodities - Manav Canvassers",
    twitterDescription:
      "Wholesale sourcing for Maize DDGS, DOC, Rice DDGS, and balanced cattle nutrition ingredients.",
    twitterCard: "summary_large_image",
    noIndex: false,
    noFollow: false,
  },
  {
    _id: "metadata-customers",
    _type: "metadata",
    pageName: "Who We Serve",
    slug: "customers",
    path: "/customers",
    metaTitle:
      "Who We Serve - Dairy Farms, Feed Mills & Agro Traders | Manav Canvassers",
    metaDescription:
      "Supplying verified cattle feed ingredients to commercial dairy farms, industrial feed mills, cattle cooperatives, and commodity traders across India.",
    keywords: [
      "feed mill raw material supply",
      "dairy farm cattle feed bulk",
      "livestock nutrition procurement",
      "feed manufacturing partners Gujarat",
    ],
    canonicalUrl: "https://manavcanvassers.com/customers",
    ogTitle:
      "Who We Serve - Powering India's Feed Mills & Dairy Cooperatives",
    ogDescription:
      "Reliable supply contracts, spot pricing, and logistics for dairy and feed mill operations.",
    twitterTitle:
      "Who We Serve - Powering India's Feed Mills & Dairy Cooperatives",
    twitterDescription:
      "Reliable supply contracts, spot pricing, and logistics for dairy and feed mill operations.",
    twitterCard: "summary_large_image",
    noIndex: false,
    noFollow: false,
  },
  {
    _id: "metadata-contact",
    _type: "metadata",
    pageName: "Contact Us",
    slug: "contact",
    path: "/contact",
    metaTitle:
      "Contact Sourcing Desk - Get Live Rates & Trade Quotes | Manav Canvassers",
    metaDescription:
      "Contact Jay Maheshwari & Alpesh Maheshwari at APMC Vadodara for live feed ingredient quotes, lot availability, WhatsApp trade desk, and dispatch terms.",
    keywords: [
      "contact Manav Canvassers",
      "Jay Maheshwari cattle feed",
      "Alpesh Maheshwari broker",
      "APMC Vadodara phone numbers",
      "cattle feed WhatsApp quote",
    ],
    canonicalUrl: "https://manavcanvassers.com/contact",
    ogTitle:
      "Contact Manav Canvassers - Live Trade Quotes & Sourcing Desk",
    ogDescription:
      "Direct mobile lines, official WhatsApp desk, and APMC Vadodara office details.",
    twitterTitle:
      "Contact Manav Canvassers - Live Trade Quotes & Sourcing Desk",
    twitterDescription:
      "Direct mobile lines, official WhatsApp desk, and APMC Vadodara office details.",
    twitterCard: "summary_large_image",
    noIndex: false,
    noFollow: false,
  },
];

// ─── Seeding Logic ───────────────────────────────────────────
async function seed() {
  console.log("🌱 Starting Sanity data migration...\n");

  // Seed site settings
  console.log("⚙️  Seeding site settings...");
  await client.createOrReplace(siteSettings);
  console.log("   ✅ Site settings created\n");

  // Clean up old single metadata doc if present
  try {
    const singleMeta = await client.getDocument<any>("metadata");
    if (singleMeta && (singleMeta.pages || singleMeta.home)) {
      await client.delete("metadata");
      console.log("   🧹 Cleaned up old single metadata document\n");
    }
  } catch (err) {}

  // Clean up any old standalone pageMetadata docs
  try {
    const oldDocs = await client.fetch<string[]>(`*[_type == "pageMetadata"]._id`);
    if (oldDocs && oldDocs.length > 0) {
      for (const id of oldDocs) {
        await client.delete(id);
      }
      console.log(`   🧹 Cleaned up ${oldDocs.length} old standalone pageMetadata docs\n`);
    }
  } catch (err) {}

  // Seed metadata documents (each page as an individual document like in the screenshot!)
  console.log("🌐 Seeding metadata documents (each page in the metadata collection)...");
  for (const pageMeta of metadataPageDocs) {
    await client.createOrReplace(pageMeta);
    console.log(`   ✅ [Metadata] ${pageMeta.pageName} (${pageMeta.path})`);
  }
  console.log(`   🌐 ${metadataPageDocs.length} metadata page documents seeded\n`);

  // Clean up any old standalone pageMetadata docs
  try {
    const oldDocs = await client.fetch<string[]>(`*[_type == "pageMetadata"]._id`);
    if (oldDocs && oldDocs.length > 0) {
      for (const id of oldDocs) {
        await client.delete(id);
      }
      console.log(`   🧹 Cleaned up ${oldDocs.length} old standalone pageMetadata docs\n`);
    }
  } catch (err) {
    // Ignore if not present
  }

  // Seed products
  console.log("📦 Seeding products...");
  for (const product of products) {
    const doc = {
      _id: `product-${product.id}`,
      _type: "product",
      title: product.title,
      slug: { _type: "slug", current: product.id },
      category: product.category,
      description: product.description,
      imageUrl: product.image,
      alt: product.alt,
      tags: product.tags,
      featured: product.featured,
      specifications: product.specifications.map((spec, i) => ({
        _key: `spec-${i}`,
        key: spec.key,
        value: spec.value,
      })),
    };
    await client.createOrReplace(doc);
    console.log(`   ✅ ${product.title}`);
  }
  console.log(`   📦 ${products.length} products seeded\n`);

  // Seed testimonials
  console.log("💬 Seeding testimonials...");
  for (const testimonial of testimonials) {
    const doc = {
      _id: `testimonial-${testimonial.id}`,
      _type: "testimonial",
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company,
      quote: testimonial.quote,
      rating: testimonial.rating,
    };
    await client.createOrReplace(doc);
    console.log(`   ✅ ${testimonial.name}`);
  }
  console.log(`   💬 ${testimonials.length} testimonials seeded\n`);

  // Seed team members
  console.log("👥 Seeding team members...");
  for (const member of teamMembers) {
    await client.createOrReplace(member);
    console.log(`   ✅ ${member.name} (${member.role})`);
  }
  console.log(`   👥 ${teamMembers.length} team members seeded\n`);

  console.log("🎉 Migration complete! All data seeded successfully.");
}

seed().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
