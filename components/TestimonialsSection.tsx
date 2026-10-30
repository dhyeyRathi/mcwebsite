"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { testimonials, Testimonial } from "@/data/testimonials";

export type { Testimonial };
export { testimonials };

const slideVariants = {
  initial: (dir: number) => ({
    opacity: 0,
    x: dir === 1 ? 40 : -40,
    scale: 0.95,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir === 1 ? -40 : 40,
    scale: 0.95,
  }),
};

interface TestimonialsSectionProps {
  items?: Testimonial[];
}

export default function TestimonialsSection({
  items,
}: TestimonialsSectionProps) {
  const displayItems = items || testimonials;
  
  const [carouselItems, setCarouselItems] = useState(() => 
    displayItems.map((item, i) => ({ ...item, uniqueKey: i }))
  );
  const [direction, setDirection] = useState(1);
  const nextKey = useRef(displayItems.length);

  const handleNext = () => {
    setDirection(1);
    setCarouselItems((prev) => {
      const nextArr = [...prev];
      const first = nextArr.shift()!;
      nextArr.push({ ...first, uniqueKey: nextKey.current++ });
      return nextArr;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setCarouselItems((prev) => {
      const nextArr = [...prev];
      const last = nextArr.pop()!;
      nextArr.unshift({ ...last, uniqueKey: nextKey.current++ });
      return nextArr;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  // Sync state if items prop updates
  useEffect(() => {
    if (items && items.length > 0) {
      setCarouselItems(items.map((item, i) => ({ ...item, uniqueKey: i })));
      nextKey.current = items.length;
    }
  }, [items]);

  return (
    <section id="reviews" className="flex flex-col justify-center py-12 sm:py-16 lg:py-16 bg-white border-b border-stone-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full my-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Arrow Buttons (Desktop/Tablet) */}
          <div className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={handlePrev} 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:text-[#0B251B] hover:border-[#0B251B] hover:shadow-md transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_left</span>
            </button>
          </div>
          <div className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={handleNext} 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:text-[#0B251B] hover:border-[#0B251B] hover:shadow-md transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_right</span>
            </button>
          </div>

          <div className="overflow-hidden py-4 -my-4 sm:px-2 sm:-mx-2">
            <motion.div className="flex gap-4 sm:gap-6 w-full relative">
              <AnimatePresence mode="popLayout" custom={direction}>
                {carouselItems.map((item) => (
                  <motion.div
                    layout
                    custom={direction}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    key={item.uniqueKey}
                    className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-[#FAFAF9] border border-stone-200/90 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow-md flex flex-col justify-between transition-shadow duration-300 relative box-border"
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
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Mobile Arrows */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button 
              onClick={handlePrev} 
              className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:text-[#0B251B] hover:border-[#0B251B] shadow-sm"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button 
              onClick={handleNext} 
              className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:text-[#0B251B] hover:border-[#0B251B] shadow-sm"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
