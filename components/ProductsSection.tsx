"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { allProducts, ProductItem } from "@/data/products";
import type { SanityProductItem } from "@/app/actions/sanity";

export type { ProductItem, SanityProductItem };
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
  /** Products fetched from Sanity via Server Actions. Falls back to static data if not provided. */
  products?: SanityProductItem[];
}

export default function ProductsSection({
  limit,
  showViewAll = false,
  products,
}: ProductsSectionProps) {
  // Normalise Sanity products to a common shape, guaranteeing a non-empty image source
  const normalised = products
    ? products.map((p) => {
        const imageSrc =
          p.imageUrl && p.imageUrl.trim().length > 0
            ? p.imageUrl
            : "/assets/company/grains_display.jpg";

        return {
          id: p.slug,
          title: p.title,
          category: p.category as ProductItem["category"],
          description: p.description,
          image: imageSrc,
          alt: p.alt || p.title,
          tags: p.tags || [],
          featured: p.featured,
        };
      })
    : allProducts;

  const displayProducts = limit ? normalised.slice(0, limit) : normalised;

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
              <Link href={`/products/${product.id}`} className="h-[60%] w-full overflow-hidden relative bg-stone-100 shrink-0 block">
                {product.image && product.image.trim().length > 0 ? (
                  <img
                    src={product.image}
                    alt={product.alt || product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400">
                    <span className="material-symbols-outlined text-3xl">image</span>
                  </div>
                )}
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
              </Link>

              {/* Content Container - 40% of card height */}
              <div className="h-[40%] p-3 sm:p-3.5 flex flex-col justify-between bg-white">
                <div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-[#0B251B] font-serif text-sm sm:text-base font-bold leading-snug mb-0.5 group-hover:text-[#735B25] transition-colors truncate">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-stone-500 text-[11px] sm:text-xs line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {product.tags && product.tags.slice(0, 1).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#0B251B] hover:text-[#735B25] transition-colors"
                  >
                    View Details
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showViewAll && (
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#0B251B] text-white hover:bg-[#133E2E] text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>Explore All Products</span>
              <span
                className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                arrow_forward
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
