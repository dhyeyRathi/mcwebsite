import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Image from "next/image";

export const metadata = {
  title: "About Us - Manav Canvassers",
  description:
    "Learn more about Manav Canvassers, our brokerage services and agricultural supply chain network.",
};

export default function AboutPage() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/company/crop_field.jpg"
              alt="Manav Canvassers Agricultural Field"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#002518]/75 mix-blend-multiply pointer-events-none" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              About Us
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-medium">
              Connecting Quality Feed With the Right Businesses
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-4">
                  <span className="w-5 h-[2px] bg-[#735B25]" />
                  WHO WE ARE
                </div>
                <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Manav Canvassers is a Vadodara-based cattle-feed broker and sourcing partner.
                </h2>
                <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    We serve businesses across the agricultural feed market, connecting buyers and suppliers of cattle-feed ingredients and agricultural commodities. We help businesses find suitable products exactly according to their requirements.
                  </p>
                  <p>
                    Our product range includes maize and maize-based ingredients, DDGS, DOC, rice-based feed materials, wheat bran, oilseed-derived feed ingredients, and other cattle-feed commodities.
                  </p>
                  <div className="bg-[#F8F9FA] border-l-4 border-[#735B25] p-5 rounded-r-lg mt-6 shadow-sm">
                    <p className="text-[#0B251B] font-medium italic">
                      &ldquo;Our role is simple: connect the right product with the right business. Built around market relationships, reliable sourcing, and customer-focused service, we aim to make cattle-feed procurement more convenient, dependable, and efficient.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 -left-4 w-24 h-24 opacity-20 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#735B25 2px, transparent 2px)", backgroundSize: "12px 12px" }} />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 aspect-[4/3]">
                  <Image
                    src="/assets/aboutHomepage/img1.jpg"
                    alt="Manav Canvassers Operations"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 sm:py-24 bg-surface-container-low border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-4">
                <span className="w-5 h-[2px] bg-[#735B25]" />
                OUR EXPERTISE
                <span className="w-5 h-[2px] bg-[#735B25]" />
              </div>
              <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                What We Do
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: "handshake", title: "Cattle Feed Brokerage", desc: "We connect buyers and suppliers across the cattle-feed market and help businesses source products according to their requirements." },
                { icon: "inventory_2", title: "Feed Ingredient Sourcing", desc: "We deal in a wide range of agricultural commodities and feed ingredients used in cattle-feed and livestock applications." },
                { icon: "warehouse", title: "Bulk Commodity Sourcing", desc: "We assist commercial buyers with sourcing requirements for feed ingredients and agricultural commodities." },
                { icon: "hub", title: "Supplier & Buyer Connections", desc: "We bring together suppliers, traders, manufacturers, distributors and commercial buyers through our market network." },
                { icon: "sync", title: "Market Coordination", desc: "We help coordinate sourcing requirements and connect businesses with suitable market opportunities." },
                { icon: "diversity_3", title: "Long-Term Relationships", desc: "Our focus is on building dependable relationships with customers and suppliers for continued business." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#C8A96B] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                  <h3 className="text-[#0B251B] font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-stone-200/80">
                <Image
                  src="/assets/company/grains_display.jpg"
                  alt="Quality feed grains"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-4">
                  <span className="w-5 h-[2px] bg-[#735B25]" />
                  PROCESS
                </div>
                <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8">
                  Simple. Reliable. Connected.
                </h2>
                
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Share Your Requirement", desc: "Tell us the product, quantity and specifications you are looking for." },
                    { step: "02", title: "We Connect", desc: "We use our market relationships to identify suitable sourcing opportunities." },
                    { step: "03", title: "Coordinate", desc: "We help connect the relevant parties and coordinate the requirement." },
                    { step: "04", title: "Build the Relationship", desc: "Our goal is to create dependable, long-term business relationships rather than simply facilitate a one-time transaction." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-[#0B251B] font-bold text-lg mb-1.5">{item.title}</h3>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quality Section */}
        <section className="py-16 sm:py-24 bg-[#002518] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 md:px-12 w-full">
            <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              workspace_premium
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-sm">
              Quality Feed. Healthy Livestock. Better Tomorrow.
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
              Quality feed is the foundation of healthy livestock and successful dairy operations. At Manav Canvassers, we believe better sourcing begins with quality products, dependable supply relationships and a clear understanding of customer requirements.
            </p>
            <p className="text-secondary-fixed font-medium text-sm sm:text-base max-w-2xl mx-auto">
              Our focus is on quality, reliability, value and long-term business relationships. Better sourcing creates better possibilities for businesses and the livestock they serve.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
