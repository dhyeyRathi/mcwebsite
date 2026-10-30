import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Image from "next/image";
import {
  getSiteSettingsAction,
  getTeamMembersAction,
  constructPageMetadata,
} from "@/app/actions/sanity";

export async function generateMetadata(): Promise<Metadata> {
  return constructPageMetadata("about", {
    title: "About Us - 30+ Years of Trusted Cattle Feed Brokerage | Manav Canvassers",
    description:
      "Learn more about Manav Canvassers, our heritage in APMC Vadodara grain brokerage, and our reliable pan-India feed supply chain network.",
    path: "/about",
    keywords: [
      "About Manav Canvassers",
      "Cattle Feed Broker Vadodara",
      "APMC Hathi Khana Market",
      "Feed Brokerage Network",
    ],
  });
}

export default async function AboutPage() {
  const [siteSettings, teamMembers] = await Promise.all([
    getSiteSettingsAction(),
    getTeamMembersAction(),
  ]);

  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container bg-background">
      <Header siteSettings={siteSettings} />
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
        <section className="w-full lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 lg:py-6 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-2.5">
                  <span className="w-5 h-[2px] bg-[#735B25]" />
                  WHO WE ARE
                </div>
                <h2 className="text-[#0B251B] font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mb-4">
                  Manav Canvassers is a Vadodara-based cattle-feed broker and sourcing partner.
                </h2>
                <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                  <p>
                    We serve businesses across the agricultural feed market, connecting buyers and suppliers of cattle-feed ingredients and agricultural commodities. We help businesses find suitable products exactly according to their requirements.
                  </p>
                  <p>
                    Our product range includes maize and maize-based ingredients, DDGS, DOC, rice-based feed materials, wheat bran, oilseed-derived feed ingredients, and other cattle-feed commodities.
                  </p>
                  <div className="bg-[#F8F9FA] border-l-4 border-[#735B25] p-3.5 rounded-r-lg mt-4 shadow-sm">
                    <p className="text-[#0B251B] text-xs sm:text-sm font-medium italic">
                      &ldquo;Our role is simple: connect the right product with the right business. Built around market relationships, reliable sourcing, and customer-focused service, we aim to make cattle-feed procurement more convenient, dependable, and efficient.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 -left-4 w-24 h-24 opacity-20 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#735B25 2px, transparent 2px)", backgroundSize: "12px 12px" }} />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 aspect-[4/3] max-h-[340px] w-full">
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
        <section className="w-full lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 lg:py-6 bg-surface-container-low border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-2">
                <span className="w-5 h-[2px] bg-[#735B25]" />
                OUR EXPERTISE
                <span className="w-5 h-[2px] bg-[#735B25]" />
              </div>
              <h2 className="text-[#0B251B] font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                What We Do
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                { icon: "handshake", title: "Cattle Feed Brokerage", desc: "We connect buyers and suppliers across the cattle-feed market and help businesses source products according to their requirements." },
                { icon: "inventory_2", title: "Feed Ingredient Sourcing", desc: "We deal in a wide range of agricultural commodities and feed ingredients used in cattle-feed and livestock applications." },
                { icon: "warehouse", title: "Bulk Commodity Sourcing", desc: "We assist commercial buyers with sourcing requirements for feed ingredients and agricultural commodities." },
                { icon: "hub", title: "Supplier & Buyer Connections", desc: "We bring together suppliers, traders, manufacturers, distributors and commercial buyers through our market network." },
                { icon: "sync", title: "Market Coordination", desc: "We help coordinate sourcing requirements and connect businesses with suitable market opportunities." },
                { icon: "diversity_3", title: "Long-Term Relationships", desc: "Our focus is on building dependable relationships with customers and suppliers for continued business." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow hover:-translate-y-0.5 duration-300">
                  <span className="material-symbols-outlined text-2xl text-[#C8A96B] mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                  <h3 className="text-[#0B251B] font-bold text-sm sm:text-base mb-1.5">{item.title}</h3>
                  <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="w-full lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 lg:py-6 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-stone-200/80">
                <Image
                  src="/assets/company/grains_display.jpg"
                  alt="Quality feed grains"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-2">
                  <span className="w-5 h-[2px] bg-[#735B25]" />
                  PROCESS
                </div>
                <h2 className="text-[#0B251B] font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-5">
                  Simple. Reliable. Connected.
                </h2>
                
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Share Your Requirement", desc: "Tell us the product, quantity and specifications you are looking for." },
                    { step: "02", title: "We Connect", desc: "We use our market relationships to identify suitable sourcing opportunities." },
                    { step: "03", title: "Coordinate", desc: "We help connect the relevant parties and coordinate the requirement." },
                    { step: "04", title: "Build the Relationship", desc: "Our goal is to create dependable, long-term business relationships rather than simply facilitate a one-time transaction." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4 items-start">
                      <div className="flex-shrink-0 w-9 h-9 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-[#0B251B] font-bold text-sm sm:text-base mb-0.5">{item.title}</h3>
                        <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Trade Desk Team */}
        {teamMembers && teamMembers.length > 0 && (
          <section className="w-full lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 lg:py-6 bg-gradient-to-b from-stone-50 via-white to-stone-50 border-b border-stone-200">
            <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <div className="inline-flex items-center gap-2 text-[#735B25] text-[11px] font-bold uppercase tracking-[0.14em] mb-1.5">
                  <span className="w-4 h-[2px] bg-[#735B25]" />
                  LEADERSHIP & TRADE DESK
                  <span className="w-4 h-[2px] bg-[#735B25]" />
                </div>
                <h2 className="text-[#0B251B] font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-1.5">
                  Meet Our Team
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Decades of combined expertise across APMC grain brokerage, feed quality testing, and nationwide dispatch logistics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {teamMembers.map((member) => (
                  <div
                    key={member._id}
                    className="group relative h-[395px] sm:h-[410px] bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* 58% Height Image Container */}
                    <div className="relative h-[58%] w-full bg-stone-100 overflow-hidden shrink-0">
                      {member.imageUrl ? (
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-emerald-900/10 text-[#0B251B] font-serif text-3xl font-bold">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* 42% Height Text Box — Expands to h-full on hover, covering the image */}
                    <div className="absolute inset-x-0 bottom-0 h-[42%] group-hover:h-full bg-white z-20 transition-all duration-500 ease-in-out p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden shadow-[-4px_0_12px_rgba(0,0,0,0.06)] border-t border-stone-100 group-hover:border-t-0">
                      {/* Top content area */}
                      <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex items-start justify-between gap-1 mb-0.5">
                          <h3 className="text-[#0B251B] font-bold text-sm sm:text-base leading-snug group-hover:text-[#735B25] transition-colors">
                            {member.name}
                          </h3>
                          <span className="material-symbols-outlined text-xs text-stone-400 group-hover:rotate-180 transition-transform duration-300 shrink-0 mt-0.5">
                            keyboard_arrow_up
                          </span>
                        </div>

                        <p className="text-[#735B25] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider mb-1.5 leading-tight shrink-0">
                          {member.role}
                        </p>

                        {member.bio && (
                          <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                            {member.bio}
                          </p>
                        )}

                        {/* Specialization tags (revealed on hover) */}
                        {member.specialties && member.specialties.length > 0 && (
                          <div className="hidden group-hover:flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-stone-100 transition-opacity duration-300">
                            {member.specialties.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-block px-1.5 py-0.5 bg-stone-100 text-stone-600 text-[10px] font-medium rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Options at bottom for calling and emailing (takes 0px when unhovered, appears on hover) */}
                      {(member.phone || member.email) && (
                        <div className="hidden group-hover:flex pt-3 mt-2 border-t border-stone-200 items-center gap-2 shrink-0 animate-in fade-in duration-300">
                          {member.phone && (
                            <a
                              href={`tel:${member.phone.replace(/\s+/g, "")}`}
                              className="flex-1 py-1.5 px-2.5 bg-[#0B251B] hover:bg-[#002518] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                              title={`Call ${member.name}`}
                            >
                              <span className="material-symbols-outlined text-xs">call</span>
                              <span>Call</span>
                            </a>
                          )}
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex-1 py-1.5 px-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-stone-200 transition-colors"
                              title={`Email ${member.name}`}
                            >
                              <span className="material-symbols-outlined text-xs text-[#0B251B]">mail</span>
                              <span>Email</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Quality Section */}
        <section className="w-full lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center py-12 lg:py-6 bg-[#002518] text-white text-center">
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
      <Footer siteSettings={siteSettings} />
      <WhatsAppFAB whatsappNumber={siteSettings.whatsappNumber} />
    </div>
  );
}
