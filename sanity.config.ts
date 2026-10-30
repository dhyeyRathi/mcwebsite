"use client";

import React, { useEffect } from "react";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "sbimjybt";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Client-side guard: If someone lands on /studio on Sanity's standalone domain, redirect to /structure
if (typeof window !== "undefined") {
  const isSanityDomain =
    window.location.hostname.includes("sanity.studio") ||
    window.location.hostname.includes("sanity.io");

  if (isSanityDomain) {
    const path = window.location.pathname;
    if (path === "/studio" || path === "/studio/") {
      window.location.replace("/structure");
    } else if (path.startsWith("/studio/")) {
      window.location.replace(path.replace(/^\/studio/, "") || "/structure");
    }
  }
}

function StudioRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/structure");
    }
  }, []);
  return null;
}

export default defineConfig({
  name: "manav-canvassers-studio",
  title: "Manav Canvassers CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .icon(() => "⚙️")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            // Metadata (Document list where each page is an item)
            S.documentTypeListItem("metadata").title("Metadata").icon(() => "🌐"),
            S.divider(),
            // Products
            S.documentTypeListItem("product").title("Products"),
            // Testimonials
            S.documentTypeListItem("testimonial").title("Testimonials"),
            // Team
            S.documentTypeListItem("team").title("Team").icon(() => "👥"),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],
  tools: (prev) => [
    ...prev,
    {
      name: "studio",
      title: "Studio",
      component: StudioRedirect,
    },
  ],
  schema: {
    types: schemaTypes,
  },
});
