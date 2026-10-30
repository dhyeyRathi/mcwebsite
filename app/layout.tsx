import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
});

import JsonLd, {
  getOrganizationSchema,
  getLocalBusinessSchema,
} from "@/components/JsonLd";

import { constructPageMetadata, getSiteSettingsAction } from "@/app/actions/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const baseMeta = await constructPageMetadata("home", {
    title: "Manav Canvassers - Your Trusted Partner for Premium Cattle Feed Solutions",
    description:
      "Manav Canvassers is a Vadodara-based cattle-feed brokerage and sourcing partner connecting businesses with quality cattle-feed ingredients and agricultural commodities across India.",
    path: "/",
    keywords: [
      "Cattle Feed Brokerage Vadodara",
      "Maize DDGS Gujarat",
      "Maize DOC Supplier",
      "Rice DDGS India",
      "Wheat Bran Wholesale",
      "Animal Nutrition APMC",
      "Manav Canvassers",
    ],
  });

  return {
    ...baseMeta,
    metadataBase: new URL("https://manavcanvassers.com"),
    title: {
      default:
        (baseMeta.title as string) ||
        "Manav Canvassers - Your Trusted Partner for Premium Cattle Feed Solutions",
      template: "%s | Manav Canvassers",
    },
    authors: [{ name: "Manav Canvassers" }],
    creator: "Manav Canvassers",
    icons: {
      icon: "/assets/logo/favicon-square.png",
      shortcut: "/assets/logo/favicon-square.png",
      apple: "/assets/logo/favicon-square.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettingsAction();
  const orgSchema = getOrganizationSchema(siteSettings);
  const localBizSchema = getLocalBusinessSchema(siteSettings);

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sourceSerif.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/assets/logo/favicon-square.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <JsonLd data={orgSchema} />
        <JsonLd data={localBizSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-background antialiased">
        {children}
      </body>
    </html>
  );
}

