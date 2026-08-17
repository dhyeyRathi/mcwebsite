"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6WWteRAp3F8zGir_SWyjkNlyVhKMsql5Sxzg0Cd8RY5a56OuiI_w7TiW39DozF6JTnS0gYiQK534r5k7_CLHxcynSUIjCgHI9UWqs5-BsTWWRqc2tvYmok4KvKcHt7gw0U6WObUxd8to6hWBFfyR1NWRQUjt24m5olqhqYC2Ocmqqya_8vQbtd6T_ILtclx39-eHCDlpL31yj75DzrqxEHT3UGT4zkAsMncSsDinJ_SdQZK5QLCR4')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="text-on-primary font-serif text-4xl md:text-6xl lg:text-7xl max-w-5xl mx-auto leading-tight font-bold mb-6"
        >
          Your Trusted Partner for Premium Cattle Feed Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-on-primary/90 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-4"
        >
          Quality feed. Reliable supply. Better opportunities for your business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-on-primary/75 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Connecting suppliers, traders, dairy businesses, feed manufacturers,
          distributors, and commercial buyers across the cattle-feed supply chain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary text-sm md:text-base font-semibold px-8 py-4 rounded hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-300 shadow-md"
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

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-secondary-fixed/80 text-secondary-fixed text-sm md:text-base font-semibold px-8 py-4 rounded hover:bg-primary-container transition-colors duration-300 backdrop-blur-sm"
            >
              Send an Enquiry
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
