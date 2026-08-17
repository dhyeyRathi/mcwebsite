import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Manav Canvassers",
  description:
    "Get in touch with Manav Canvassers in Vadodara, Gujarat for cattle feed brokerage enquiries, quotes, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-primary" />}>
          <ContactContent />
        </Suspense>
        <Footer />
      </main>
      <WhatsAppFAB />
    </div>
  );
}
