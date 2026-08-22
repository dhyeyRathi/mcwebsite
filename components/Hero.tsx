"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroSlides = [
  {
    src: "/assets/hero/hero2.jpg",
    alt: "Premium Cattle Feed Solutions - Manav Canvassers",
  },
  {
    src: "/assets/hero/hero3.jpg",
    alt: "Quality Feed and Agricultural Commodities Supply Chain",
  },
  {
    src: "/assets/hero/hero4.jpg",
    alt: "Connecting Feed Suppliers and Dairy Businesses",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative min-h-[580px] h-[100dvh] max-h-[1050px] flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <motion.div
              key={slide.src}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.05 : 1,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 5, ease: "linear" },
              }}
              className="absolute inset-0"
              style={{
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dark overlay & gradients for contrast and text legibility */}
      <div className="absolute inset-0 bg-[#002518]/75 mix-blend-multiply z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002518] via-transparent to-[#002518]/50 z-1 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 text-center my-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-on-primary font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight font-bold mb-3.5 drop-shadow-sm"
        >
          Your Trusted Partner for Premium Cattle Feed Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-on-primary/95 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto mb-2.5 drop-shadow-sm"
        >
          Quality feed. Reliable supply. Better opportunities for your business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-on-primary/80 text-xs sm:text-sm max-w-xl mx-auto mb-7 leading-relaxed drop-shadow-sm"
        >
          Connecting suppliers, traders, dairy businesses, feed manufacturers,
          distributors, and commercial buyers across the cattle-feed supply chain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary text-sm md:text-base font-semibold px-6 py-3 rounded hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-300 shadow-lg"
            >
              Explore Products
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                arrow_forward
              </span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-secondary-fixed/80 text-secondary-fixed text-sm md:text-base font-semibold px-6 py-3 rounded hover:bg-primary-container transition-colors duration-300 backdrop-blur-sm shadow-md"
            >
              Send an Enquiry
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Indicators pinned at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 flex items-center justify-center gap-2"
      >
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentSlide
                ? "w-7 bg-secondary-fixed shadow-[0_0_8px_rgba(255,222,160,0.6)]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
}
