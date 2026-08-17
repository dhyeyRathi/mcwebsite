"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#company" },
  { label: "Products We Deal In", href: "#products" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-300"
    >
      {/* Top micro-bar for quick contact */}
      <div className="bg-[#0B251B] text-stone-300 text-[11px] sm:text-xs py-1.5 px-3 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <p className="hidden md:flex items-center gap-2">
            <span className="text-[#C8A96B] font-semibold">APMC Vadodara:</span>
            <span>F-02, Dalal Bhavan, Hathi Khana, Vadodara – 390006</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-center">
            <span>
              Jay Maheshwari:{" "}
              <a
                href="tel:+919642174768"
                className="text-white hover:text-[#C8A96B] font-medium transition-colors"
              >
                +91 96421 74768
              </a>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>
              Alpesh Maheshwari:{" "}
              <a
                href="tel:+919825375833"
                className="text-white hover:text-[#C8A96B] font-medium transition-colors"
              >
                +91 98253 75833
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-4 md:px-16 py-3.5 max-w-7xl mx-auto">
        <Link href="#" className="flex items-center gap-3.5 group">
          <Image
            src="/assets/logo/logo.png"
            alt="Manav Canvassers Logo"
            width={200}
            height={50}
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="text-[#0B251B] font-serif font-bold text-lg md:text-xl tracking-tight leading-none group-hover:text-[#735B25] transition-colors">
              Manav Canvassers
            </span>
            <span className="text-[#735B25] text-[10px] md:text-xs font-semibold uppercase tracking-wider mt-0.5">
              Cattle Feed Brokerage
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-stone-700 hover:text-[#735B25] transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#0B251B] hover:bg-[#173B2C] text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200 shadow-sm"
          >
            Get Sourcing Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#0B251B] p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 flex flex-col gap-3 shadow-lg overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold py-2 border-b border-stone-100 text-stone-800 hover:text-[#735B25]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center bg-[#0B251B] text-white text-base font-semibold px-6 py-3 rounded-md mt-2"
            >
              Get Sourcing Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
