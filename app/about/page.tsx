import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us - Manav Canvassers",
  description:
    "Learn about Manav Canvassers — a B2B cattle feed brokerage firm connecting producers with businesses across India.",
};

export default function AboutPage() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <main>
        <AboutContent />
        <Footer />
      </main>
      <WhatsAppFAB />
    </div>
  );
}
