export interface ProductItem {
  id: string;
  title: string;
  category: "Maize-Based" | "Rice-Based" | "Other Ingredients" | "Cattle Feed";
  description: string;
  image: string;
  alt: string;
  tags: string[];
  featured?: boolean;
}

export const allProducts: ProductItem[] = [
  // Featured / Maize-based
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
  },
];
