import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Image from "next/image";

export const metadata = {
  title: "Contact Us - Manav Canvassers",
  description:
    "Contact Manav Canvassers in Vadodara, Gujarat for cattle feed brokerage enquiries.",
};

export default function ContactPage() {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container bg-background flex flex-col min-h-screen">
      <Header />
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
              Contact & Enquiry
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm font-medium">
              Let's Build a Better Supply Connection
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Left Col - Info */}
              <div>
                <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-4">
                  <span className="w-5 h-[2px] bg-[#735B25]" />
                  GET IN TOUCH
                </div>
                <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Looking for cattle-feed ingredients or a reliable sourcing partner?
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-10">
                  Tell us what you need and our team will get in touch to discuss your requirement. Whether you are looking for Maize DDGS, Maize DOC, Rice DDGS, Wheat Bran, or other cattle-feed ingredients, we are ready to assist.
                </p>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    </div>
                    <div>
                      <h3 className="text-[#0B251B] font-bold text-lg mb-1.5">Registered Office</h3>
                      <p className="text-stone-600 text-sm leading-relaxed max-w-xs">
                        F-02, Dalal Bhavan, APMC Market,<br />
                        Hathi Khana, Vadodara – 390006,<br />
                        Gujarat, India.
                      </p>
                    </div>
                  </div>

                  {/* Contacts */}
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    </div>
                    <div>
                      <h3 className="text-[#0B251B] font-bold text-lg mb-3">Call Our Brokers</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                          <p className="text-[#0B251B] font-bold text-sm mb-1">Jay Maheshwari</p>
                          <a href="tel:+919642174768" className="block text-stone-600 text-sm hover:text-[#735B25] transition-colors">+91 96421 74768</a>
                          <a href="tel:+919088111940" className="block text-stone-600 text-sm hover:text-[#735B25] transition-colors">+91 90881 11940</a>
                        </div>
                        <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                          <p className="text-[#0B251B] font-bold text-sm mb-1">Alpesh Maheshwari</p>
                          <a href="tel:+919825375833" className="block text-stone-600 text-sm hover:text-[#735B25] transition-colors">+91 98253 75833</a>
                          <a href="tel:+918141708456" className="block text-stone-600 text-sm hover:text-[#735B25] transition-colors">+91 81417 08456</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Col - Form */}
              <div className="bg-surface-container-low p-6 sm:p-10 rounded-2xl border border-stone-200/80 shadow-lg relative">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#002518 2px, transparent 2px)", backgroundSize: "16px 16px" }} />
                
                <h3 className="text-[#0B251B] font-serif text-2xl font-bold mb-2 relative z-10">Send an Enquiry</h3>
                <p className="text-stone-600 text-sm mb-8 relative z-10">Fill out the form below and our team will get back to you with sourcing opportunities.</p>
                
                <form className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-stone-700 uppercase tracking-wide">Name / Company</label>
                      <input type="text" id="name" className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all" placeholder="Your business name" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-stone-700 uppercase tracking-wide">Phone Number</label>
                      <input type="tel" id="phone" className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="product" className="text-xs font-bold text-stone-700 uppercase tracking-wide">Product Required</label>
                    <select id="product" className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all">
                      <option value="">Select a product...</option>
                      <option value="Maize DDGS">Maize DDGS</option>
                      <option value="Maize DOC">Maize DOC</option>
                      <option value="Rice DDGS">Rice DDGS</option>
                      <option value="Wheat Bran">Wheat Bran</option>
                      <option value="Other">Other Agricultural Commodity</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quantity" className="text-xs font-bold text-stone-700 uppercase tracking-wide">Approximate Quantity (MT)</label>
                    <input type="text" id="quantity" className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all" placeholder="e.g. 50 MT" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-stone-700 uppercase tracking-wide">Additional Specifications</label>
                    <textarea id="message" rows={4} className="w-full bg-white border border-stone-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent transition-all resize-none" placeholder="Any specific requirements regarding protein, moisture, or logistics?"></textarea>
                  </div>

                  <button type="button" className="w-full bg-[#0B251B] text-white font-bold text-sm px-6 py-3.5 rounded-md hover:bg-[#173B2C] hover:shadow-lg transition-all duration-300 mt-2">
                    Submit Enquiry
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
