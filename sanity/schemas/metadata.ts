import { defineField, defineType } from "sanity";

export default defineType({
  name: "metadata",
  title: "Metadata",
  type: "document",
  icon: () => "🌐",
  groups: [
    {
      name: "general",
      title: "General SEO",
      default: true,
      icon: () => "🌐",
    },
    {
      name: "openGraph",
      title: "Open Graph",
      icon: () => "📱",
    },
    {
      name: "twitter",
      title: "Twitter / X",
      icon: () => "🐦",
    },
    {
      name: "robots",
      title: "Robots & Indexing",
      icon: () => "🤖",
    },
  ],
  fields: [
    // ─── General Group ─────────────────────────────────────────
    defineField({
      name: "pageName",
      title: "Page Name",
      type: "string",
      group: "general",
      description: "Human-readable name of the page (e.g. 'Home Page', 'Contact Us')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page Identifier (Slug)",
      type: "string",
      group: "general",
      description: "Select which page this metadata belongs to",
      options: {
        list: [
          { title: "Home Page (/)", value: "home" },
          { title: "About Us (/about)", value: "about" },
          { title: "Products Catalog (/products)", value: "products" },
          { title: "Who We Serve (/customers)", value: "customers" },
          { title: "Contact Us (/contact)", value: "contact" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "path",
      title: "Page URL Path",
      type: "string",
      group: "general",
      description: "Relative URL path (e.g. '/', '/about', '/products')",
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "general",
      description: "Appears in Google search results & browser tabs (50–60 characters recommended)",
      validation: (Rule) => Rule.max(70).warning("Titles longer than 70 chars may get truncated by Google"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      group: "general",
      description: "Summary shown under the title in search engines (150–160 characters recommended)",
      validation: (Rule) => Rule.max(200).warning("Descriptions longer than 200 chars may get truncated by Google"),
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      group: "general",
      description: "Enter relevant search keywords and press enter",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      group: "general",
      description: "Optional URL override to avoid duplicate content penalties. Defaults to page URL if left empty.",
    }),

    // ─── Open Graph Group ──────────────────────────────────────
    defineField({
      name: "ogTitle",
      title: "Open Graph Title",
      type: "string",
      group: "openGraph",
      description: "Title shown when shared on WhatsApp, Facebook, or LinkedIn. Defaults to Meta Title if blank.",
    }),
    defineField({
      name: "ogDescription",
      title: "Open Graph Description",
      type: "text",
      rows: 2,
      group: "openGraph",
      description: "Description shown on social link previews. Defaults to Meta Description if blank.",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      group: "openGraph",
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

    // ─── Twitter / X Group ─────────────────────────────────────
    defineField({
      name: "twitterCard",
      title: "Twitter Card Type",
      type: "string",
      group: "twitter",
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
      group: "twitter",
      description: "Title on Twitter/X posts. Defaults to Open Graph Title if blank.",
    }),
    defineField({
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
      rows: 2,
      group: "twitter",
      description: "Description on Twitter/X posts. Defaults to Open Graph Description if blank.",
    }),
    defineField({
      name: "twitterImage",
      title: "Twitter Card Image",
      type: "image",
      group: "twitter",
      options: { hotspot: true },
      description: "Image for Twitter card. Defaults to Open Graph Image if blank.",
    }),

    // ─── Robots & Indexing Group ───────────────────────────────
    defineField({
      name: "noIndex",
      title: "No Index (Hide from Search Engines)",
      type: "boolean",
      group: "robots",
      description: "Check this to instruct Google, Bing, and other search engines NOT to index this page.",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "No Follow (Do Not Follow Links)",
      type: "boolean",
      group: "robots",
      description: "Check this to instruct search engines NOT to crawl or follow outbound links on this page.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "pageName",
      path: "path",
      metaTitle: "metaTitle",
      noIndex: "noIndex",
      noFollow: "noFollow",
      media: "ogImage",
    },
    prepare({ title, path, metaTitle, noIndex, noFollow, media }) {
      const flags = [noIndex ? "NOINDEX" : "", noFollow ? "NOFOLLOW" : ""]
        .filter(Boolean)
        .join(", ");
      const flagSuffix = flags ? ` [${flags}]` : "";
      return {
        title: `${title || "Untitled Page"}${flagSuffix}`,
        subtitle: `${path || "/"} • ${metaTitle || "No Meta Title set"}`,
        media,
      };
    },
  },
});
