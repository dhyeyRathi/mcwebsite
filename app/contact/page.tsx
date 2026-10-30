import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Image from "next/image";
import { getSiteSettingsAction, constructPageMetadata } from "@/app/actions/sanity";

export async function generateMetadata(): Promise<Metadata> {
  return constructPageMetadata("contact", {
    title: "Contact Sourcing Desk - Live Rates & Enquiries | Manav Canvassers",
    description:
      "Contact Manav Canvassers at APMC Market, Vadodara, Gujarat for real-time cattle feed brokerage quotes, specifications, and supply logistics.",
    path: "/contact",
    keywords: [
      "Contact Manav Canvassers",
      "Feed Brokerage Desk Vadodara",
      "APMC Market Hathi Khana",
      "Jay Maheshwari Phone",
      "Alpesh Maheshwari Phone",
    ],
  });
}

export default async function ContactPage() {
  const siteSettings = await getSiteSettingsAction();

  const whatsappNumber = siteSettings.whatsappNumber.replace(/\D/g, "") || "919642174768";
  const email = siteSettings.email || "manavcanvassers@gmail.com";
  const contacts = siteSettings.contacts?.length ? siteSettings.contacts : [];
  const address =
    siteSettings.address ||
    "F-02, Dalal Bhavan, APMC Market, Hathi Khana, Vadodara – 390006, Gujarat, India";

  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container bg-background flex flex-col min-h-screen">
      <Header siteSettings={siteSettings} />
      
      <main className="pt-20 flex-grow">
        {/* Page Hero */}
        <section className="relative w-full h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-[#002518]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero/hero4.jpg"
              alt="Contact Manav Canvassers"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002518] to-transparent pointer-events-none" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              Contact & Sourcing Desk
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-medium">
              Connecting Feed Producers, Millers, and Buyers Across India
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Left Col - Dynamic Contact Information */}
              <div>
                <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-4">
                  <span className="w-5 h-[2px] bg-[#735B25]" />
                  GET IN TOUCH
                </div>
                <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Looking for cattle-feed ingredients or a reliable sourcing partner?
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-10">
                  Whether you are sourcing Maize DDGS, Maize DOC, Rice DDGS, Wheat Bran, or other feed ingredients, our team is directly available via phone, official WhatsApp, or email.
                </p>

                <div className="space-y-8">
                  {/* Contacts with Associated Names & Multiple Numbers */}
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        contact_phone
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#0B251B] font-bold text-lg mb-1.5">Contacts & Direct Numbers</h3>
                      <p className="text-stone-500 text-xs mb-3">Speak directly with our team members for real-time market rates and lots:</p>
                      
                      <div className="space-y-3">
                        {contacts.map((contact) => {
                          const numbers =
                            contact.contactNumbers?.length
                              ? contact.contactNumbers
                              : contact.phones?.length
                              ? contact.phones
                              : [];
                          return (
                            <div
                              key={contact.name}
                              className="bg-stone-50 p-4 rounded-xl border border-stone-200/90"
                            >
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <h4 className="font-bold text-[#0B251B] text-base">{contact.name}</h4>
                                {contact.role && (
                                  <span className="text-[11px] font-semibold text-[#735B25] bg-[#735B25]/10 px-2.5 py-0.5 rounded">
                                    {contact.role}
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {numbers.map((phone) => (
                                  <a
                                    key={phone}
                                    href={`tel:${phone.replace(/\s+/g, "")}`}
                                    className="inline-flex items-center gap-1.5 bg-white hover:bg-stone-100 border border-stone-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-800 transition-colors shadow-2xs group"
                                  >
                                    <span className="material-symbols-outlined text-xs text-[#735B25] group-hover:scale-110 transition-transform">
                                      phone_in_talk
                                    </span>
                                    <span>{phone}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Single Official WhatsApp Number */}
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#25D366]/15 text-[#25D366] rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.574-1.463A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.25 0-4.336-.661-6.094-1.797l-.437-.262-2.715.868.869-2.715-.262-.437A9.697 9.697 0 012.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12s-4.374 9.75-9.75 9.75z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#0B251B] font-bold text-lg mb-1.5">Official WhatsApp Desk</h3>
                      <p className="text-stone-500 text-xs mb-3">Our single official WhatsApp line for live chats, price sheets, and instant trade quotes:</p>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hello%20Manav%20Canvassers,%20I%20would%20like%20to%20enquire%20about%20cattle%20feed%20ingredients.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fa851] text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm"
                      >
                        <span>Chat on WhatsApp (+{whatsappNumber})</span>
                      </a>
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        mail
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#0B251B] font-bold text-lg mb-1.5">Official Email</h3>
                      <a
                        href={`mailto:${email}`}
                        className="text-stone-700 hover:text-[#735B25] font-medium text-sm sm:text-base transition-colors"
                      >
                        {email}
                      </a>
                      <p className="text-stone-400 text-xs mt-1">Send us trade enquiries, specifications, and RFQs anytime.</p>
                    </div>
                  </div>

                  {/* Registered Office Address */}
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        location_on
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#0B251B] font-bold text-lg mb-1.5">APMC Market Registered Office</h3>
                      <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
                        {address}
                      </p>
                      <p className="text-stone-400 text-xs mt-1">Operating Hours: {siteSettings.officeHours}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Col - Form */}
              <div className="bg-surface-container-low p-6 sm:p-10 rounded-2xl border border-stone-200/80 shadow-lg relative">
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none z-0"
                  style={{
                    backgroundImage: "radial-gradient(#002518 2px, transparent 2px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                
                <h3 className="text-[#0B251B] font-serif text-2xl font-bold mb-2 relative z-10">Send an Enquiry</h3>
                <p className="text-stone-600 text-sm mb-8 relative z-10">
                  Fill out the form below and our sourcing desk will contact you with commodity pricing and logistics terms.
                </p>
                
                <form className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                        Name / Company
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all"
                        placeholder="Your business name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="product" className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      Product Required
                    </label>
                    <select
                      id="product"
                      className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all"
                    >
                      <option value="">Select a product...</option>
                      <option value="Maize DDGS">Maize DDGS</option>
                      <option value="Maize DOC">Maize DOC</option>
                      <option value="Rice DDGS">Rice DDGS</option>
                      <option value="Wheat Bran">Wheat Bran</option>
                      <option value="GN DOC">GN DOC (Groundnut DOC)</option>
                      <option value="Rapeseed DOC">Rapeseed DOC</option>
                      <option value="Maize Fiber">Maize Fiber</option>
                      <option value="Rice Polish">Rice Polish</option>
                      <option value="Commercial Cattle Feed">Commercial Cattle Feed</option>
                      <option value="Other">Other Agricultural Commodity</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quantity" className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      Approximate Quantity (MT)
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all"
                      placeholder="e.g. 50 MT"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      Additional Specifications
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all resize-none"
                      placeholder="Any specific requirements regarding protein, moisture, packaging, or delivery location?"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full bg-[#0B251B] text-white font-bold text-sm px-6 py-3.5 rounded-md hover:bg-[#173B2C] hover:shadow-lg transition-all duration-300 mt-2"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer siteSettings={siteSettings} />
      <WhatsAppFAB whatsappNumber={siteSettings.whatsappNumber} />
    </div>
  );
}
