import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  icon: () => "👥",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Designation",
      type: "string",
      description: "e.g. Founder & Chief Broker, Head of Logistics & Supply Chain",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 3,
      description: "Brief background, experience, or role focus",
    }),
    defineField({
      name: "image",
      title: "Profile Photo (Sanity Asset)",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "imageUrl",
      title: "Fallback Image URL",
      type: "url",
      description: "Optional direct URL to profile image if not uploading to Sanity",
    }),
    defineField({
      name: "specialties",
      title: "Key Specializations / Badges",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Tags like 'APMC Trading', 'DDGS Sourcing', 'Logistics'",
    }),
    defineField({
      name: "phone",
      title: "Contact Phone / Mobile",
      type: "string",
      description: "Direct calling line (e.g. +91 96421 74768)",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.email().warning("Please enter a valid email address"),
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Profile URL",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Display priority (1 for first, 2 for second, etc.)",
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
      order: "order",
    },
    prepare({ title, subtitle, media, order }) {
      return {
        title: title || "Unnamed Team Member",
        subtitle: `${order ? `#${order} • ` : ""}${subtitle || "No Role"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
