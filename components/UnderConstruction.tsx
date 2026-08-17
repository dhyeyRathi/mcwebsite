"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

interface UnderConstructionProps {
  pageName?: string;
}

export default function UnderConstruction({
  pageName = "This Page",
}: UnderConstructionProps) {
  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col justify-between bg-white">
      <Header />

      <main className="flex-1 flex items-center justify-center pt-36 pb-24 px-4 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-2xl bg-[#FAFAF9] border border-stone-200 text-[#735B25] flex items-center justify-center mx-auto mb-8 shadow-sm"
          >
            <span className="material-symbols-outlined text-4xl">
              construction
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#0B251B] font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {pageName} is Under Construction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8"
          >
            We are currently updating this section with detailed commodity
            specifications and supply network details. Please explore our
            homepage or contact our trading desk directly.
          </motion.p>

          {/* Quick Desk Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#FAFAF9] border border-stone-200 rounded-xl p-6 mb-8 text-left max-w-lg mx-auto shadow-sm"
          >
            <p className="text-xs text-[#735B25] font-bold uppercase tracking-wider mb-3">
              Direct Sourcing Enquiries
            </p>
            <div className="space-y-2 text-sm text-stone-800">
              <p className="flex justify-between items-center">
                <span className="font-semibold">Jay Maheshwari:</span>
                <a
                  href="tel:+919642174768"
                  className="text-[#0B251B] hover:text-[#735B25] font-medium"
                >
                  +91 96421 74768
                </a>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibold">Alpesh Maheshwari:</span>
                <a
                  href="tel:+919825375833"
                  className="text-[#0B251B] hover:text-[#735B25] font-medium"
                >
                  +91 98253 75833
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B251B] hover:bg-[#173B2C] text-white font-semibold px-8 py-3.5 rounded-md transition-colors shadow-md text-sm sm:text-base"
            >
              Return to Homepage
              <span className="material-symbols-outlined text-sm font-bold">
                arrow_forward
              </span>
            </Link>

            <a
              href="https://wa.me/919642174768"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm sm:text-base"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
