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
    <section id="reviews" className="py-24 md:py-32 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-6 h-[2px] bg-[#735B25]" />
            TESTIMONIALS & TRUST
            <span className="w-6 h-[2px] bg-[#735B25]" />
          </div>
          <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Here is what dairy businesses, feed mill operators, and procurement
            heads say about partnering with Manav Canvassers.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-[#FAFAF9] border border-stone-200 p-8 rounded-xl shadow-sm hover:shadow-md flex flex-col justify-between transition-all duration-300 relative"
            >
              <div>
                <span
                  className="material-symbols-outlined text-3xl mb-4 block"
                  style={{ color: "#C8A96B" }}
                >
                  format_quote
                </span>
                <p className="text-stone-700 text-base leading-relaxed mb-8 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B251B] text-[#C8A96B] font-serif font-bold text-base flex items-center justify-center shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#0B251B] font-bold text-sm leading-tight">
                    {item.name}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
