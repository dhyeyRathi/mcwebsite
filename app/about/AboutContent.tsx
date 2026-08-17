"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const whatWeDo = [
  {
    icon: "handshake",
    title: "Cattle Feed Brokerage",
    description:
      "We connect buyers and suppliers across the cattle-feed market and help businesses source products according to their requirements.",
  },
  {
    icon: "inventory_2",
    title: "Feed Ingredient Sourcing",
    description:
      "We deal in a wide range of agricultural commodities and feed ingredients used in cattle-feed and livestock applications.",
  },
  {
    icon: "local_shipping",
    title: "Bulk Commodity Sourcing",
    description:
      "We assist commercial buyers with sourcing requirements for bulk feed ingredients and agricultural commodities.",
  },
  {
    icon: "hub",
    title: "Supplier & Buyer Connections",
    description:
      "We bring together suppliers, traders, manufacturers, distributors, and commercial buyers through our established market network.",
  },
  {
    icon: "insights",
    title: "Market Coordination",
    description:
      "We help coordinate sourcing requirements and connect businesses with suitable, timely market opportunities.",
  },
  {
    icon: "groups",
    title: "Long-Term Business Relationships",
    description:
      "Our focus is on building dependable relationships with customers and suppliers for continued, sustainable business.",
  },
];

const whyChooseUs = [
  {
    icon: "verified",
    title: "Premium Quality",
    description:
      "We focus on connecting customers with quality feed ingredients and agricultural commodities suited to their exact requirements.",
  },
  {
    icon: "local_shipping",
    title: "Reliable Supply",
    description:
      "We understand the importance of consistent feed availability and dependable sourcing in the livestock and dairy sector.",
  },
  {
    icon: "payments",
    title: "Competitive Value",
    description:
      "Our market connections help businesses explore competitive sourcing opportunities and achieve better value.",
  },
  {
    icon: "support_agent",
    title: "Customer Focus",
    description:
      "Every business has different requirements. We focus on understanding your product, quantity, and sourcing needs.",
  },
  {
    icon: "diversity_3",
    title: "Strong Market Connections",
    description:
      "Our business is built around relationships between suppliers, traders, buyers, and businesses across the cattle-feed ecosystem.",
  },
  {
    icon: "trending_up",
    title: "Growing Together",
    description:
      "We believe lasting business relationships are built through trust, consistency, and mutual growth.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Share Your Requirement",
    description:
      "Tell us the product, quantity, and specifications you are looking for.",
  },
  {
    step: "02",
    title: "We Connect",
    description:
      "We use our market relationships to identify suitable sourcing opportunities.",
  },
  {
    step: "03",
    title: "Coordinate",
    description:
      "We help connect the relevant parties and coordinate the requirement seamlessly.",
  },
  {
    step: "04",
    title: "Build the Relationship",
    description:
      "Our goal is to create dependable, long-term business relationships rather than simply facilitate a one-time transaction.",
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

export default function AboutContent() {
  return (
    <>
      {/* Editorial Page Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0B251B] text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
          >
            Connecting Quality Feed With the Right Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-stone-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Vadodara-based cattle-feed broker and sourcing partner serving
            businesses across the agricultural feed market.
          </motion.p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-24 md:py-32 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-4">
                <span className="w-6 h-[2px] bg-[#735B25]" />
                OUR ROLE & HERITAGE
              </div>
              <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl font-bold leading-tight mb-6">
                Our Role is Simple: Connect the Right Product With the Right
                Business.
              </h2>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
                Manav Canvassers is a Vadodara-based cattle-feed broker and
                sourcing partner serving businesses across the agricultural feed
                market. We connect buyers and suppliers of cattle-feed
                ingredients and agricultural commodities, helping businesses
                find suitable products according to their requirements.
              </p>
              <p className="text-stone-700 text-base leading-relaxed mb-8">
                Our product range includes maize and maize-based ingredients,
                DDGS, DOC, rice-based feed materials, wheat bran,
                oilseed-derived feed ingredients, and other cattle-feed
                commodities.
              </p>

              <div className="bg-[#FAFAF9] border border-stone-200 border-l-4 border-l-[#735B25] p-6 rounded-r-lg mb-8">
                <p className="text-[#0B251B] font-medium text-base italic leading-relaxed">
                  &ldquo;Built around market relationships, reliable sourcing,
                  and customer-focused service, we aim to make cattle-feed
                  procurement more convenient, dependable, and efficient.&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="bg-[#0B251B] hover:bg-[#173B2C] text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm shadow-sm"
                >
                  Browse Sourced Commodities
                </Link>
                <Link
                  href="/contact"
                  className="bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-semibold px-6 py-3 rounded-md transition-colors text-sm"
                >
                  Get in Touch With Desk
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#FAFAF9] border border-stone-200 rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#0B251B] mb-4 pb-3 border-b border-stone-200">
                  Headquarters & Desk
                </h3>
                <div className="space-y-4 text-sm text-stone-700">
                  <div>
                    <p className="font-bold text-[#0B251B]">Manav Canvassers</p>
                    <p className="text-stone-600 mt-0.5 leading-relaxed">
                      F-02, Dalal Bhavan, APMC Market,
                      <br />
                      Hathi Khana, Vadodara – 390006, Gujarat
                    </p>
                  </div>
                  <div className="pt-2 border-t border-stone-200/80">
                    <p className="font-bold text-[#0B251B]">Key Personnel</p>
                    <p className="text-stone-600">Jay Maheshwari: +91 96421 74768</p>
                    <p className="text-stone-600">Alpesh Maheshwari: +91 98253 75833</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32 bg-[#FAFAF9] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              CORE SERVICES
              <span className="w-6 h-[2px] bg-[#735B25]" />
            </div>
            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              What We Do
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whatWeDo.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white border border-stone-200/90 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0B251B] text-[#C8A96B] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-[#0B251B] font-serif text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              WORKFLOW & EXECUTION
              <span className="w-6 h-[2px] bg-[#735B25]" />
            </div>
            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              How We Work
            </h2>
            <p className="text-stone-600 text-base">
              Simple. Reliable. Connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#FAFAF9] border border-stone-200 p-8 rounded-xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A96B] block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-[#0B251B] font-serif text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Manav Canvassers */}
      <section className="py-24 md:py-32 bg-[#FAFAF9] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              VALUE PROPOSITIONS
              <span className="w-6 h-[2px] bg-[#735B25]" />
            </div>
            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Why Manav Canvassers
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white border border-stone-200/90 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-stone-100 flex items-center justify-center mb-5 text-[#735B25]">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-[#0B251B] font-serif text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Promise Banner */}
      <section className="py-20 md:py-28 bg-[#0B251B] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center">
          <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.16em] mb-4 block">
            OUR QUALITY PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Quality Feed. Healthy Livestock. Better Tomorrow.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8">
            Quality feed is the foundation of healthy livestock and successful
            dairy operations. At Manav Canvassers, we believe better sourcing
            begins with quality products, dependable supply relationships, and
            a clear understanding of customer requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8A96B] hover:bg-[#E3C282] text-[#121E19] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-colors shadow-md"
          >
            Connect With Our Sourcing Team
            <span className="material-symbols-outlined text-sm font-bold">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
