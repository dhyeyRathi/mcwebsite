import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

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

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function main() {
  const allDocs = await client.fetch<any[]>(`*[_type in ["metadata", "siteSettings", "pageMetadata"]]`);
  console.log("Found docs count:", allDocs.length);
  for (const doc of allDocs) {
    console.log(`\nDoc ID: ${doc._id}, _type: ${doc._type}`);
    console.log("Keys:", Object.keys(doc));
    if (doc._type === "metadata") {
      console.log("home keys:", doc.home ? Object.keys(doc.home) : "none");
      console.log("pages count:", doc.pages ? doc.pages.length : "none");
    }
  }
}

main().catch(console.error);
