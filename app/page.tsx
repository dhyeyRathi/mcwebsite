import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanySection from "@/components/CompanySection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <main>
        <Hero />
        <CompanySection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppFAB />
    </div>
  );
}
