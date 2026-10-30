import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "sbimjybt",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
  studioHost: "manavcanvassers",
  deployment: {
    appId: "b291y94r5tbnkd321xozx2dr",
  },
});
