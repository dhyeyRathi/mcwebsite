import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanySection from "@/components/CompanySection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getAllFrontendDataAction, constructPageMetadata } from "@/app/actions/sanity";

export async function generateMetadata(): Promise<Metadata> {
  return constructPageMetadata("home", {
    title: "Manav Canvassers - Premium Cattle Feed Solutions & Brokerage",
    description:
      "Vadodara-based cattle-feed brokerage and sourcing partner connecting businesses with quality cattle-feed ingredients across India.",
    path: "/",
    keywords: [
      "cattle feed brokerage",
      "Maize DDGS Gujarat",
      "Rice DDGS",
      "Maize DOC",
      "Wheat Bran wholesale",
      "APMC Vadodara feed broker",
    ],
  });
}

export default async function Home() {
  const { products, testimonials, siteSettings } = await getAllFrontendDataAction();

  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header siteSettings={siteSettings} />
      <main>
        <Hero />
        <CompanySection />
        <ProductsSection limit={3} showViewAll products={products} />
        <TestimonialsSection items={testimonials} />
        <Footer siteSettings={siteSettings} />
      </main>
      <WhatsAppFAB whatsappNumber={siteSettings.whatsappNumber} />
    </div>
  );
}
