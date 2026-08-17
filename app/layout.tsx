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

export const metadata: Metadata = {
  title: "Manav Canvassers - Your Trusted Partner for Premium Cattle Feed Solutions",
  description:
    "Manav Canvassers is a Vadodara-based cattle-feed brokerage and sourcing partner connecting businesses with quality cattle-feed ingredients and agricultural commodities.",
  icons: {
    icon: "/assets/logo/favicon-square.png",
    shortcut: "/assets/logo/favicon-square.png",
    apple: "/assets/logo/favicon-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-background antialiased">
        {children}
      </body>
    </html>
  );
}

