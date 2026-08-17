"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const whoWeServe = [
  {
    icon: "water_drop",
    title: "Dairy Businesses",
    description:
      "Supporting dairy businesses with steady access to high-protein cattle-feed ingredients and reliable sourcing opportunities.",
  },
  {
    icon: "factory",
    title: "Feed Manufacturers",
    description:
      "Connecting commercial compound feed manufacturers with agricultural feed ingredients and consistent raw materials.",
  },
  {
    icon: "storefront",
    title: "Feed Traders",
    description:
      "Helping agricultural and feed traders find competitive sourcing opportunities across the nationwide cattle-feed market.",
  },
  {
    icon: "local_shipping",
    title: "Distributors & Wholesalers",
    description:
      "Supporting businesses involved in the large-scale distribution and regional supply of cattle-feed commodities.",
  },
  {
    icon: "agriculture",
    title: "Livestock Businesses",
    description:
      "Helping livestock farms and commercial animal husbandry operations source quality feed ingredients tailored to their nutritional requirements.",
  },
  {
    icon: "hub",
    title: "Commercial Buyers",
    description:
      "Connecting bulk and institutional commercial buyers with verified agricultural feed commodities and competitive market pricing.",
  },
];

const faqs = [
  {
    question: "What does Manav Canvassers do?",
    answer:
      "Manav Canvassers is a cattle-feed broker and sourcing partner connecting buyers and suppliers across the agricultural feed market.",
  },
  {
    question: "What products do you deal in?",
    answer:
      "We deal in a wide range of cattle-feed ingredients and agricultural commodities, including Maize, Maize DDGS, Maize DOC, Maize Fiber, Maize CSL, Maize Chuni, Corn Grit, Maize Cake, Rice DDGS, Rice Polish, Rice Broken, Wheat Bran, GN DOC, Rapeseed DOC, and other cattle-feed products.",
  },
  {
    question: "Do you manufacture your own cattle feed?",
    answer:
      "Manav Canvassers primarily operates as a cattle-feed broker and sourcing intermediary. We connect businesses with cattle-feed products and feed ingredients available through our extensive market and supplier network.",
  },
  {
    question: "Who can contact Manav Canvassers?",
    answer:
      "Dairy businesses, livestock businesses, cattle-feed manufacturers, traders, distributors, wholesalers, and other commercial buyers can contact us regarding their requirements.",
  },
  {
    question: "Do you handle bulk requirements?",
    answer:
      "Yes, we specialize in B2B and commercial bulk requirements. Contact us with your product, specification, and quantity requirements to discuss available sourcing opportunities.",
  },
  {
    question: "How can I enquire about a product?",
    answer:
      "Simply contact our team via our contact form, phone, or WhatsApp, and share the product, quantity, and any specific requirements. We will discuss the available sourcing options with you.",
  },
  {
    question: "Where is Manav Canvassers based?",
    answer:
      "Manav Canvassers is headquartered in Vadodara, Gujarat (F-02, Dalal Bhavan, APMC Market, Hathi Khana – 390006).",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CustomersContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0B251B] text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
          >
            Connecting the Cattle-Feed Supply Chain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-stone-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We bridge suppliers, manufacturers, traders, distributors, and
            commercial buyers across the agricultural feed market.
          </motion.p>
        </div>
      </section>

      {/* Who We Serve Grid */}
      <section className="py-24 md:py-32 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              INDUSTRY PARTICIPANTS
              <span className="w-6 h-[2px] bg-[#735B25]" />
            </div>
            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Who We Serve
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whoWeServe.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-[#FAFAF9] border border-stone-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0B251B] text-[#C8A96B] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-[#0B251B] font-serif text-xl sm:text-2xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Network & India Presence */}
      <section className="py-24 md:py-32 bg-[#FAFAF9] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-4">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              MARKET BRIDGE
            </div>
            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Connecting the Entire Cattle-Feed Ecosystem
            </h2>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
              The cattle-feed market depends on strong connections between
              suppliers, manufacturers, traders, distributors, and buyers.
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-8">
              Manav Canvassers works as a bridge between these participants,
              helping businesses find suitable sourcing opportunities and build
              dependable commercial relationships. From maize-based ingredients
              and DDGS to rice-based products, DOC, wheat bran, and other feed
              commodities, we help connect requirements with the right market
              opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B251B] hover:bg-[#173B2C] text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-sm shadow-sm"
            >
              Discuss Your Requirements
              <span className="material-symbols-outlined text-sm font-bold">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em]">
                <span className="material-symbols-outlined text-xl">
                  verified
                </span>
                <span>PAN-INDIA REACH</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0B251B] leading-snug">
                Connecting Businesses Across the Agricultural Feed Market
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Based in Vadodara, Gujarat, Manav Canvassers operates within the
                agricultural commodity and cattle-feed ecosystem. Our focus is on
                connecting businesses with suitable feed ingredients and
                reliable sourcing opportunities.
              </p>
              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">
                  Established Base
                </p>
                <p className="text-sm font-bold text-stone-900 mt-0.5">
                  APMC Market, Hathi Khana, Vadodara – 390006
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 md:py-32 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 md:px-16">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              FREQUENTLY ASKED QUESTIONS
              <span className="w-6 h-[2px] bg-[#735B25]" />
            </div>
            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl font-bold">
              Got Questions? We&apos;ve Got Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[#FAFAF9] border border-stone-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-[#0B251B]">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#735B25] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-200/80 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0B251B] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build a Better Supply Connection
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Tell us what you need and our team will get in touch to discuss your
            feed sourcing requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8A96B] hover:bg-[#E3C282] text-[#121E19] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-colors shadow-md"
          >
            Get in Touch with Our Team
            <span className="material-symbols-outlined text-sm font-bold">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
