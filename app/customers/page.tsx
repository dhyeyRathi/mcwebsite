import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";
import {
  getTestimonialsAction,
  getSiteSettingsAction,
  constructPageMetadata,
} from "@/app/actions/sanity";

export async function generateMetadata(): Promise<Metadata> {
  return constructPageMetadata("customers", {
    title: "Who We Serve - Dairy Farms, Feed Mills & Agro Traders | Manav Canvassers",
    description:
      "Who we serve across the cattle feed and agricultural supply chain. Supporting dairy businesses, industrial feed manufacturers, and agro traders across India.",
    path: "/customers",
    keywords: [
      "Feed Mills Sourcing",
      "Dairy Farm Cattle Feed",
      "Commercial Agro Traders",
      "Livestock Feed Clients",
    ],
  });
}

export default async function CustomersPage() {
  const [testimonials, siteSettings] = await Promise.all([
    getTestimonialsAction(),
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
              src="/assets/hero/hero2.jpg"
              alt="Dairy and Livestock Feed Operations"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002518] to-transparent pointer-events-none" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              Who We Serve
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-medium">
              Connecting the Cattle-Feed Supply Chain
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 md:px-12 w-full text-center">
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span className="w-5 h-[2px] bg-[#735B25]" />
              OUR NETWORK
              <span className="w-5 h-[2px] bg-[#735B25]" />
            </div>
            <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Strong Market Connections
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              The cattle-feed market depends on strong connections between suppliers, manufacturers, traders, distributors and buyers. Manav Canvassers works as a bridge between these participants, helping businesses find suitable sourcing opportunities and build dependable commercial relationships.
            </p>
          </div>
        </section>

        {/* Customer Segments */}
        <section className="py-16 sm:py-24 bg-surface-container-low border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: "agriculture", title: "Dairy Businesses", desc: "Supporting dairy businesses with access to cattle-feed ingredients and sourcing opportunities." },
                { icon: "factory", title: "Feed Manufacturers", desc: "Connecting manufacturers with agricultural feed ingredients and raw materials." },
                { icon: "handshake", title: "Feed Traders", desc: "Helping traders find suitable sourcing opportunities across the cattle-feed market." },
                { icon: "local_shipping", title: "Distributors & Wholesalers", desc: "Supporting businesses involved in the distribution and supply of cattle-feed products." },
                { icon: "pets", title: "Livestock Businesses", desc: "Helping livestock-related businesses source feed ingredients according to their requirements." },
                { icon: "store", title: "Commercial Buyers", desc: "Connecting bulk and commercial buyers with suitable agricultural feed commodities." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all hover:-translate-y-1 duration-300 group">
                  <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-[#0B251B] font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials from Sanity */}
        <TestimonialsSection items={testimonials} />

      </main>
      <Footer siteSettings={siteSettings} />
      <WhatsAppFAB whatsappNumber={siteSettings.whatsappNumber} />
    </div>
  );
}
