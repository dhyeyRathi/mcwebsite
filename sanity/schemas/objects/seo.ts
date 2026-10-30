import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO & Social Sharing",
  type: "object",
  fieldsets: [
    {
      name: "meta",
      title: "Search Engine Meta Tags",
      options: { collapsible: false },
    },
    {
      name: "openGraph",
      title: "Open Graph (WhatsApp, LinkedIn, Facebook)",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "twitter",
      title: "Twitter / X Card",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "robots",
      title: "Robots & Indexing Directives",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    // ─── Search Engine Meta Tags ───────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      fieldset: "meta",
      description: "Appears in Google search results & browser tabs (50–60 characters recommended)",
      validation: (Rule) => Rule.max(70).warning("Titles longer than 70 chars may get truncated by Google"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      fieldset: "meta",
      rows: 3,
      description: "Summary shown under the title in search engines (150–160 characters recommended)",
      validation: (Rule) => Rule.max(200).warning("Descriptions longer than 200 chars may get truncated by Google"),
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      fieldset: "meta",
      description: "Enter relevant search keywords and press enter (e.g. 'cattle feed vadodara', 'maize ddgs')",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      fieldset: "meta",
      description: "Optional URL override to avoid duplicate content penalties. Defaults to page URL if left empty.",
    }),

    // ─── Open Graph (Facebook, WhatsApp, LinkedIn) ────────────
    defineField({
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
      fieldset: "openGraph",
      description: "Title shown when shared on WhatsApp, Facebook, or LinkedIn. Defaults to Meta Title if blank.",
    }),
    defineField({
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      fieldset: "openGraph",
      rows: 2,
      description: "Description shown on social link previews. Defaults to Meta Description if blank.",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      fieldset: "openGraph",
      options: { hotspot: true },
      description: "Featured social preview thumbnail (recommended dimensions: 1200 × 630 px).",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Accessibility description for the social share image",
        },
      ],
    }),

    // ─── Twitter / X Card ──────────────────────────────────────
    defineField({
      name: "twitterCard",
      title: "Twitter Card Type",
      type: "string",
      fieldset: "twitter",
      options: {
        list: [
          { title: "Summary with Large Image (1200×630)", value: "summary_large_image" },
          { title: "Standard Summary (Square)", value: "summary" },
        ],
        layout: "radio",
      },
      initialValue: "summary_large_image",
    }),
    defineField({
      name: "twitterTitle",
      title: "Twitter Title",
      type: "string",
      fieldset: "twitter",
      description: "Title on Twitter/X posts. Defaults to Open Graph Title if blank.",
    }),
    defineField({
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
      fieldset: "twitter",
      rows: 2,
      description: "Description on Twitter/X posts. Defaults to Open Graph Description if blank.",
    }),
    defineField({
      name: "twitterImage",
      title: "Twitter Card Image",
      type: "image",
      fieldset: "twitter",
      options: { hotspot: true },
      description: "Image for Twitter card. Defaults to Open Graph Image if blank.",
    }),

    // ─── Robots & Indexing ─────────────────────────────────────
    defineField({
      name: "noIndex",
      title: "No Index (Hide from Search Engines)",
      type: "boolean",
      fieldset: "robots",
      description: "Check this to instruct Google, Bing, and other search engines NOT to index this page.",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "No Follow (Do Not Follow Links)",
      type: "boolean",
      fieldset: "robots",
      description: "Check this to instruct search engines NOT to crawl or follow outbound links on this page.",
      initialValue: false,
    }),
  ],
});
