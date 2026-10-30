import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: { enabled: false },
});

/**
 * Helper to check if Sanity is configured.
 * Returns false if project ID is empty or missing.
 */
export function isSanityConfigured(): boolean {
  try {
    return Boolean(
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.length > 0
    );
  } catch {
    return false;
  }
}
