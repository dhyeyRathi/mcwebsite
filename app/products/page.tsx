import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ProductsSection from "@/components/ProductsSection";
import Image from "next/image";
import {
  getProductsAction,
  getSiteSettingsAction,
  constructPageMetadata,
} from "@/app/actions/sanity";

export async function generateMetadata(): Promise<Metadata> {
  return constructPageMetadata("products", {
    title: "Products We Deal In - Maize DDGS, Rice DDGS, DOC & Feed Ingredients | Manav Canvassers",
    description:
      "Explore our wide range of cattle-feed ingredients and agricultural commodities including Maize DDGS, Maize DOC, Rice DDGS, Wheat Bran, and custom livestock feed.",
    path: "/products",
    keywords: [
      "Cattle Feed Products",
      "Maize DDGS",
      "Rice DDGS",
      "Maize DOC",
      "Wheat Bran",
      "Cattle Nutrition Sourcing",
    ],
  });
}

export default async function ProductsPage() {
  const [products, siteSettings] = await Promise.all([
    getProductsAction(),
    getSiteSettingsAction(),
  ]);

  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container bg-background">
      <Header siteSettings={siteSettings} />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#002518]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/company/grains_display.jpg"
              alt="Agricultural Feed Ingredients"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002518] to-transparent pointer-events-none" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              Our Products
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-medium">
              Quality feed ingredients and agricultural commodities for your business.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white border-b border-stone-200 text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-12 w-full">
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              We deal in a wide range of cattle-feed ingredients and agricultural commodities. Whether you are looking for Maize DDGS, Maize DOC, Rice DDGS, Wheat Bran, or other cattle-feed ingredients, our team is ready to discuss your requirements.
            </p>
          </div>
        </section>

        {/* Full Products Section */}
        <ProductsSection products={products} />
      </main>
      <Footer siteSettings={siteSettings} />
      <WhatsAppFAB whatsappNumber={siteSettings.whatsappNumber} />
    </div>
  );
}
