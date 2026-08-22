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
    <section id="products" className="flex flex-col justify-center py-12 sm:py-16 lg:py-16 bg-[#FAFAF9] border-b border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full my-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-1">
              <span className="w-5 h-[2px] bg-[#735B25]" />
              FEED INGREDIENTS & AGRICULTURAL COMMODITIES
            </div>
            <h2 className="text-[#0B251B] font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Products We Deal In
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md leading-relaxed">
            We deal in a comprehensive portfolio of cattle-feed ingredients and
            agricultural commodities. Sourced through verified producers.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-items-center"
        >
          {displayProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="group w-full max-w-[280px] sm:max-w-[300px] bg-white border border-stone-200/90 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-[350px] sm:h-[370px] lg:h-[390px]"
            >
              {/* Image Container - 60% of card height */}
              <div className="h-[60%] w-full overflow-hidden relative bg-stone-100 shrink-0">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-[#0B251B]/90 text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-sm shadow-xs">
                    {product.category}
                  </span>
                </div>
                {product.featured && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#C8A96B] text-[#121E19] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                      High Demand
                    </span>
                  </div>
                )}
              </div>

              {/* Content Container - 40% of card height */}
              <div className="h-[40%] p-3 sm:p-3.5 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-[#0B251B] font-serif text-sm sm:text-base font-bold leading-snug mb-0.5 group-hover:text-[#735B25] transition-colors truncate">
                    {product.title}
                  </h3>
                  <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Card Footer Action */}
                <div className="pt-1.5 border-t border-stone-100">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.title)}`}
                    className="w-full inline-flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#0B251B] group-hover:text-[#735B25] transition-colors"
                  >
                    <span>Enquire Availability & Pricing</span>
                    <span className="material-symbols-outlined text-xs font-bold group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-4 sm:mt-5 pt-3 border-t border-stone-200"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 bg-[#0B251B] text-white hover:bg-[#173B2C] font-semibold px-5 py-2 rounded-md transition-colors shadow-sm text-xs cursor-pointer"
            >
              View Full Commodity Sourcing Catalog (15+ Items)
              <span className="material-symbols-outlined text-xs font-bold">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
