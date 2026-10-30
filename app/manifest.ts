import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manav Canvassers",
    short_name: "Manav Canvassers",
    description: "Premium Cattle Feed Brokerage & Sourcing Desk | APMC Vadodara, Gujarat",
    start_url: "/",
    display: "standalone",
    background_color: "#081E16",
    theme_color: "#0B251B",
    icons: [
      {
        src: "/assets/logo/favicon-square.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/logo/favicon-square.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
