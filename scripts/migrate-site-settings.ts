import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

// Load .env.local manually
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
  console.error("Missing config in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function migrate() {
  console.log("Fetching siteSettings and drafts.siteSettings...");

  const [published, draft] = await Promise.all([
    client.getDocument<any>("siteSettings"),
    client.getDocument<any>("drafts.siteSettings"),
  ]);

  console.log("Published found:", !!published);
  console.log("Draft found:", !!draft);

  // New contacts array incorporating all data from brokers and callNumbers
  const migratedContacts = [
    {
      _key: "jay",
      _type: "contactPerson",
      name: "Jay Maheshwari",
      role: "Sourcing & Brokerage Desk",
      contactNumbers: [
        "+91 96421 74768",
        "+91 94260 03460",
        "+91 90881 11940",
      ],
    },
    {
      _key: "alpesh",
      _type: "contactPerson",
      name: "Alpesh Maheshwari",
      role: "Logistics & Supply Desk",
      contactNumbers: [
        "+91 98253 75833",
        "+91 81417 08456",
      ],
    },
  ];

  // 1. Clean and update published document
  if (published) {
    console.log("Migrating published siteSettings...");
    await client
      .patch("siteSettings")
      .set({
        contacts: migratedContacts,
        email: published.email || "manavcanvassers@gmail.com",
        whatsappNumber: published.whatsappNumber || "919642174768",
      })
      .unset(["brokers", "callNumbers"])
      .commit();
    console.log("✅ Published siteSettings migrated and old fields removed!");
  }

  // 2. Clean and update draft document if present
  if (draft) {
    console.log("Migrating draft drafts.siteSettings...");
    // You can either update the draft with the new contacts and unset old fields,
    // or delete the draft so that the published document is loaded cleanly.
    // Deleting the outdated draft ensures Sanity Studio reloads the pristine published document without conflicts!
    await client.delete("drafts.siteSettings");
    console.log("✅ Outdated drafts.siteSettings deleted to sync with published siteSettings!");
  }

  // Verify final document state
  const updatedDoc = await client.getDocument<any>("siteSettings");
  console.log("\n--- Final siteSettings Keys ---");
  console.log(Object.keys(updatedDoc || {}));
  console.log("Has 'brokers'?:", "brokers" in (updatedDoc || {}));
  console.log("Has 'callNumbers'?:", "callNumbers" in (updatedDoc || {}));
  console.log("Contacts count:", updatedDoc?.contacts?.length);
  console.log("Contacts data:", JSON.stringify(updatedDoc?.contacts, null, 2));

  // Check if any draft remains
  const remainingDraft = await client.getDocument<any>("drafts.siteSettings");
  console.log("Remaining draft?:", !!remainingDraft);
}

migrate().catch(console.error);
