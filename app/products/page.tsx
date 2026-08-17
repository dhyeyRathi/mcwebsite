import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Products We Deal In - Manav Canvassers",
  description:
    "Explore the cattle feed ingredients we broker — corn, soybean meal, wheat bran, rice bran, cottonseed meal, and specialty blends.",
};

export default function ProductsPage() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <main>
        <ProductsContent />
        <Footer />
      </main>
      <WhatsAppFAB />
    </div>
  );
}
