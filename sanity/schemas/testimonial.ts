import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: () => "💬",
  groups: [
    {
      name: "review",
      title: "Review Details",
      default: true,
      icon: () => "💬",
    },
    {
      name: "media",
      title: "Client Avatar",
      icon: () => "👤",
    },
  ],
  fields: [
    // ─── Review Group ──────────────────────────────────────────
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      group: "review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Designation",
      type: "string",
      group: "review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      group: "review",
    }),
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      rows: 4,
      group: "review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      group: "review",
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),

    // ─── Media Group ───────────────────────────────────────────
    defineField({
      name: "avatar",
      title: "Client Photo / Avatar",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "avatar",
    },
  },
});
