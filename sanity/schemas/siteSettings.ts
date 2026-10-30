import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: () => "⚙️",
  groups: [
    {
      name: "company",
      title: "Company Profile",
      default: true,
      icon: () => "🏢",
    },
    {
      name: "contact",
      title: "Contact",
      icon: () => "📞",
    },
    {
      name: "seo",
      title: "Global SEO",
      icon: () => "🌐",
    },
  ],
  fields: [
    // ─── Company Profile Group ─────────────────────────────────
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      group: "company",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "company",
    }),
    defineField({
      name: "officeHours",
      title: "Office Hours",
      type: "string",
      group: "company",
    }),

    // ─── Contact Group ─────────────────────────────────────────
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      group: "contact",
      description: "Official enquiry email address, e.g. manavcanvassers@gmail.com",
      validation: (Rule) => Rule.email().warning("Please enter a valid email address"),
    }),
    defineField({
      name: "whatsappNumber",
      title: "Official WhatsApp Number (Single)",
      type: "string",
      group: "contact",
      description: "The single official WhatsApp number used for all chat links and FAB (e.g. 919642174768)",
      validation: (Rule) =>
        Rule.regex(/^\d{10,15}$/, {
          name: "international-digits",
          invert: false,
        }).warning("Enter country code without + or spaces (e.g. 919642174768)"),
    }),
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      group: "contact",
      description: "List of people with their associated contact numbers for calling",
      of: [
        {
          name: "contactPerson",
          title: "Contact Person",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Person Name",
              type: "string",
              description: "Full name of the contact person (e.g. Jay Maheshwari)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "role",
              title: "Role / Designation",
              type: "string",
              description: "e.g. Sourcing & Brokerage Desk, Logistics Desk",
            }),
            defineField({
              name: "contactNumbers",
              title: "Contact Numbers",
              type: "array",
              description: "Mobile / calling numbers associated with this person to call",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "role",
              contactNumbers: "contactNumbers",
              phones: "phones",
            },
            prepare({ title, subtitle, contactNumbers, phones }) {
              const numbers = contactNumbers || phones || [];
              const numList =
                Array.isArray(numbers) && numbers.length > 0
                  ? numbers.join(", ")
                  : "No numbers";
              return {
                title: title || "Unnamed Contact",
                subtitle: subtitle ? `${subtitle} • ${numList}` : numList,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "address",
      title: "Office Address (APMC Market)",
      type: "text",
      rows: 3,
      group: "contact",
    }),

    // ─── SEO Group ─────────────────────────────────────────────
    defineField({
      name: "defaultSeo",
      title: "Default SEO Settings",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "companyName",
    },
  },
});
