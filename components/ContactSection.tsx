"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const productOptions = [
  "Maize (Corn)",
  "Maize DDGS",
  "Maize DOC",
  "Maize Fiber",
  "Maize CSL",
  "Maize Chuni",
  "Maize Cake",
  "Corn Grit",
  "Rice DDGS",
  "Rice Polish",
  "Rice Broken",
  "Wheat Bran",
  "GN DOC (Groundnut DOC)",
  "Rapeseed DOC",
  "Commercial Cattle Feed",
  "Other / Custom Sourcing Requirement",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAFAF9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-6 h-[2px] bg-[#735B25]" />
            DIRECT SOURCING DESK
            <span className="w-6 h-[2px] bg-[#735B25]" />
          </div>
          <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get in Touch with Our Team
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Looking for cattle-feed ingredients or a reliable sourcing partner?
            Tell us what you need and our desk in Vadodara will get in touch to
            discuss your requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-stone-200 rounded-2xl p-12 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    check_circle
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B251B] mb-3">
                  Enquiry Received Successfully
                </h3>
                <p className="text-stone-600 text-base leading-relaxed mb-8 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Jay Maheshwari or
                  Alpesh Maheshwari from our desk will review your requirement
                  and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      product: "",
                      quantity: "",
                      message: "",
                    });
                  }}
                  className="inline-flex items-center gap-2 bg-[#0B251B] hover:bg-[#173B2C] text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors"
                >
                  Submit Another Requirement
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6"
              >
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B251B] mb-2">
                    Send a Sourcing Enquiry
                  </h3>
                  <p className="text-stone-500 text-sm">
                    Please specify your product, target quantity, and delivery
                    destination.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-stone-800 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Your Name / Business Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent text-sm transition-all"
                      placeholder="e.g. Ramesh Patel (Patel Feeds)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-stone-800 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent text-sm transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-stone-800 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent text-sm transition-all"
                      placeholder="buyer@feedmill.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="product"
                      className="block text-stone-800 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Feed Commodity of Interest *
                    </label>
                    <select
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent text-sm transition-all"
                    >
                      <option value="">Select a commodity</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-stone-800 text-xs font-bold uppercase tracking-wider mb-2"
                  >
                    Target Quantity / Order Frequency
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent text-sm transition-all"
                    placeholder="e.g. 20 Metric Tons / Weekly"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-stone-800 text-xs font-bold uppercase tracking-wider mb-2"
                  >
                    Additional Specifications & Delivery Location
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#735B25] focus:border-transparent text-sm transition-all resize-none"
                    placeholder="Target moisture/protein requirements, packaging preference (loose/bagged), destination..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B251B] hover:bg-[#173B2C] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                >
                  Submit Sourcing Enquiry
                  <span className="material-symbols-outlined text-sm font-bold">
                    send
                  </span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Details */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Headquarters */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0B251B] mb-6 pb-3 border-b border-stone-200">
                Headquarters & Desk
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-[#735B25] text-2xl mt-0.5">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">
                      Manav Canvassers
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mt-0.5">
                      F-02, Dalal Bhavan, APMC Market,
                      <br />
                      Hathi Khana, Vadodara – 390006,
                      <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                  <span className="material-symbols-outlined text-[#735B25] text-2xl mt-0.5">
                    schedule
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">
                      Trading Desk Hours
                    </p>
                    <p className="text-stone-600 text-sm mt-0.5">
                      Monday – Saturday: 9:00 AM – 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Personnel */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0B251B] mb-6 pb-3 border-b border-stone-200">
                Direct Personnel Contacts
              </h3>

              <div className="space-y-6">
                {/* Jay Maheshwari */}
                <div className="pb-4 border-b border-stone-100">
                  <p className="font-bold text-stone-900 text-base">
                    Jay Maheshwari
                  </p>
                  <p className="text-xs text-[#735B25] font-semibold uppercase tracking-wider mb-2">
                    Brokerage & Partner Sourcing
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <p>
                      <a
                        href="tel:+919642174768"
                        className="text-[#0B251B] hover:text-[#735B25] font-semibold flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-base">
                          call
                        </span>
                        +91 96421 74768
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+919088111940"
                        className="text-[#0B251B] hover:text-[#735B25] font-semibold flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-base">
                          call
                        </span>
                        +91 90881 11940
                      </a>
                    </p>
                  </div>
                </div>

                {/* Alpesh Maheshwari */}
                <div>
                  <p className="font-bold text-stone-900 text-base">
                    Alpesh Maheshwari
                  </p>
                  <p className="text-xs text-[#735B25] font-semibold uppercase tracking-wider mb-2">
                    Trading & Market Coordination
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <p>
                      <a
                        href="tel:+919825375833"
                        className="text-[#0B251B] hover:text-[#735B25] font-semibold flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-base">
                          call
                        </span>
                        +91 98253 75833
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+918141708456"
                        className="text-[#0B251B] hover:text-[#735B25] font-semibold flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-base">
                          call
                        </span>
                        +91 81417 08456
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="bg-[#0B251B] text-white rounded-2xl p-6 shadow-md">
              <h4 className="font-serif font-bold text-lg mb-1.5 text-white">
                Direct WhatsApp Desk
              </h4>
              <p className="text-stone-300 text-xs leading-relaxed mb-4">
                Need real-time lot availability, dispatch dates, or spot quotes?
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/919642174768?text=Hello%20Jay%20Maheshwari,%20I%20would%20like%20to%20enquire%20about%20cattle%20feed%20commodities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-xs shadow-sm"
                >
                  Chat with Jay Maheshwari
                </a>
                <a
                  href="https://wa.me/919825375833?text=Hello%20Alpesh%20Maheshwari,%20I%20would%20like%20to%20enquire%20about%20cattle%20feed%20commodities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-xs border border-white/20"
                >
                  Chat with Alpesh Maheshwari
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
