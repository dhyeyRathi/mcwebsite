"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { allProducts, ProductItem } from "@/data/products";

const categories = [
  "All Products",
  "Maize-Based",
  "Rice-Based",
  "Other Ingredients",
  "Cattle Feed",
] as const;

export default function ProductsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  const productsList = allProducts || [];

  const filteredProducts =
    selectedCategory === "All Products"
      ? productsList
      : productsList.filter((p) => p.category === selectedCategory);

  const featuredProducts = productsList.filter((p) => p.featured);

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
            Products We Deal In
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-stone-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We deal in a wide range of cattle-feed ingredients and agricultural
            commodities. Sourced through trusted producers and coordinated with
            precision.
          </motion.p>
        </div>
      </section>

      {/* Featured Commodities Spotlight */}
      <section className="py-20 md:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-2">
                <span className="w-6 h-[2px] bg-[#735B25]" />
                PRIMARY TRADE COMMODITIES
              </div>
              <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
                High-Volume Sourced Feed
              </h2>
            </div>
            <p className="text-stone-500 text-sm max-w-md">
              Consistently traded ingredients with verified protein, moisture,
              and energy specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                className="bg-[#FAFAF9] border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-72 sm:h-80 overflow-hidden relative bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0B251B] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#C8A96B] text-[#121E19] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                        High Demand
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-[#0B251B] font-serif text-xl sm:text-2xl font-bold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B251B] hover:bg-[#173B2C] text-white font-semibold py-3 px-4 rounded-md transition-colors text-xs sm:text-sm shadow-sm"
                  >
                    Enquire Sourcing & Lots
                    <span className="material-symbols-outlined text-sm font-bold">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog with Category Filters */}
      <section className="py-24 md:py-32 bg-[#FAFAF9] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
            <div>
              <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-2">
                <span className="w-6 h-[2px] bg-[#735B25]" />
                COMPLETE SOURCING CATALOG
              </div>
              <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl font-bold">
                All Available Commodities
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#0B251B] text-white shadow-sm"
                      : "bg-white text-stone-700 border border-stone-300 hover:border-[#0B251B]"
                  }`}
                >
                  {cat === "All Products" ? `All (${productsList.length})` : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-80 md:h-96 overflow-hidden relative bg-stone-100">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#0B251B]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-[#0B251B] font-serif text-xl sm:text-2xl font-bold mb-2 group-hover:text-[#735B25] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-stone-50 border border-stone-200 text-stone-600 px-2 py-0.5 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.title)}`}
                      className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-bold text-[#0B251B] group-hover:text-[#735B25] pt-4 transition-colors"
                    >
                      <span>Enquire About {product.title}</span>
                      <span className="material-symbols-outlined text-sm font-bold group-hover:translate-x-1.5 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* B2B Sourcing Assistance Banner */}
      <section className="py-20 md:py-28 bg-[#0B251B] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center">
          <span className="text-[#C8A96B] text-xs font-bold uppercase tracking-[0.16em] mb-4 block">
            B2B SOURCING DESK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Looking for the Right Feed Ingredient?
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            Tell us what you need. Whether you are looking for Maize DDGS, Maize
            DOC, Rice DDGS, Wheat Bran, maize products, or other cattle-feed
            ingredients, our desk in Vadodara is ready to coordinate your order.
          </p>
          <p className="text-[#A8CFBA] text-sm mb-8">
            Share your product, specification, and quantity requirements for
            custom mill quotes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C8A96B] hover:bg-[#E3C282] text-[#121E19] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-colors shadow-md"
            >
              Send Your Requirement
              <span className="material-symbols-outlined text-sm font-bold">
                arrow_forward
              </span>
            </Link>
            <a
              href="https://wa.me/919642174768"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-colors"
            >
              Quick WhatsApp Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
