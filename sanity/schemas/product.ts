import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: () => "🌾",
  groups: [
    {
      name: "general",
      title: "General Info",
      default: true,
      icon: () => "📝",
    },
    {
      name: "media",
      title: "Media & Images",
      icon: () => "🖼️",
    },
    {
      name: "specs",
      title: "Specifications",
      icon: () => "📊",
    },
    {
      name: "seo",
      title: "SEO & Social",
      icon: () => "🔍",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "general",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "general",
      options: {
        list: [
          { title: "Maize-Based", value: "Maize-Based" },
          { title: "Rice-Based", value: "Rice-Based" },
          { title: "Other Ingredients", value: "Other Ingredients" },
          { title: "Cattle Feed", value: "Cattle Feed" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "general",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags & Highlights",
      type: "array",
      group: "general",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      group: "general",
      description: "Toggle on to highlight this product on the home landing page",
      initialValue: false,
    }),

    // ─── Media Group ───────────────────────────────────────────
    defineField({
      name: "image",
      title: "Product Image (Sanity CDN)",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Describe the image for accessibility and SEO",
        },
      ],
    }),
    defineField({
      name: "imageUrl",
      title: "External Image URL",
      type: "url",
      group: "media",
      description:
        "Alternative: paste an external image URL (used if no Sanity image is uploaded)",
    }),
    defineField({
      name: "alt",
      title: "Image Alt Text (Legacy)",
      type: "string",
      group: "media",
      description: "Alt text for external image URL",
    }),

    // ─── Specifications Group ──────────────────────────────────
    defineField({
      name: "specifications",
      title: "Specifications & Lab Values",
      type: "array",
      group: "specs",
      description: "Nutritional breakdown, e.g. Protein, Moisture, Fiber, Energy",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "key",
              title: "Specification Name (e.g. Protein)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              title: "Specification Value (e.g. 28-30%)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "key", subtitle: "value" },
          },
        },
      ],
    }),

    // ─── SEO Group ─────────────────────────────────────────────
    defineField({
      name: "seo",
      title: "SEO Metadata Overrides",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
