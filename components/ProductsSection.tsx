"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { allProducts, ProductItem } from "@/data/products";

export type { ProductItem };
export { allProducts };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
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

interface ProductsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function ProductsSection({
  limit,
  showViewAll = false,
}: ProductsSectionProps) {
  const displayProducts = limit ? allProducts.slice(0, limit) : allProducts;

  return (
    <section id="products" className="py-24 md:py-32 bg-[#FAFAF9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              FEED INGREDIENTS & AGRICULTURAL COMMODITIES
            </div>
            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Products We Deal In
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl leading-relaxed">
            We deal in a comprehensive portfolio of cattle-feed ingredients and
            agricultural commodities. Sourced through verified producers and
            coordinated with precision.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group bg-white border border-stone-200/90 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with refined height */}
                <div className="h-72 sm:h-80 overflow-hidden relative bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-[#0B251B]/90 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded backdrop-blur-sm shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  {product.featured && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="bg-[#C8A96B] text-[#121E19] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                        High Demand
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#0B251B] font-serif text-xl sm:text-2xl font-bold mb-2 group-hover:text-[#735B25] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-stone-100 border border-stone-200/80 text-stone-700 px-2.5 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-bold text-[#0B251B] group-hover:text-[#735B25] pt-4 transition-colors"
                >
                  <span>Enquire Availability & Pricing</span>
                  <span className="material-symbols-outlined text-sm font-bold group-hover:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-14 pt-8 border-t border-stone-200"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#0B251B] text-white hover:bg-[#173B2C] font-semibold px-8 py-3.5 rounded-md transition-colors shadow-md text-sm sm:text-base"
            >
              View Full Commodity Sourcing Catalog (15+ Items)
              <span className="material-symbols-outlined text-sm font-bold">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
