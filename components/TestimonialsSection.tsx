"use client";

import { motion, Variants } from "framer-motion";
import { testimonials, Testimonial } from "@/data/testimonials";

export type { Testimonial };
export { testimonials };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

interface TestimonialsSectionProps {
  items?: Testimonial[];
}

export default function TestimonialsSection({
  items,
}: TestimonialsSectionProps) {
  const displayItems = items || testimonials;

  return (
    <section id="reviews" className="flex flex-col justify-center py-12 sm:py-16 lg:py-16 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full my-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-1.5">
            <span className="w-5 h-[2px] bg-[#735B25]" />
            TESTIMONIALS & TRUST
            <span className="w-5 h-[2px] bg-[#735B25]" />
          </div>
          <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-[2.35rem] font-bold tracking-tight mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Here is what dairy businesses, feed mill operators, and procurement
            heads say about partnering with Manav Canvassers.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-[#FAFAF9] border border-stone-200/90 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow-md flex flex-col justify-between transition-all duration-300 relative"
            >
              <div>
                <span
                  className="material-symbols-outlined text-2xl mb-2 block"
                  style={{ color: "#C8A96B", fontVariationSettings: "'FILL' 0" }}
                >
                  format_quote
                </span>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-5 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3.5 border-t border-stone-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0B251B] text-[#C8A96B] font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#0B251B] font-bold text-xs sm:text-sm leading-tight">
                    {item.name}
                  </p>
                  <p className="text-stone-500 text-[11px] sm:text-xs mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
