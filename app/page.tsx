import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanySection from "@/components/CompanySection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <main>
        <Hero />
        <CompanySection />
        <ProductsSection limit={3} showViewAll />
        <TestimonialsSection />
        <Footer />
      </main>
      <WhatsAppFAB />
    </div>
  );
}
