"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#081E16] text-white pt-20 pb-10 border-t border-[#173B2C]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
        <div className="md:col-span-2">
          <Link href="#" className="inline-block mb-4">
            <Image
              src="/assets/logo/logo.png"
              alt="Manav Canvassers Logo"
              width={200}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-[#C8A96B] text-sm font-semibold tracking-wide mb-2">
            Your Trusted Partner for Premium Cattle Feed Solutions
          </p>
          <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-6">
            Connecting businesses across the cattle-feed and agricultural
            commodity supply chain.
          </p>
          <div className="text-xs text-stone-400 space-y-1 bg-white/5 p-4 rounded-lg border border-white/10 max-w-sm">
            <p className="font-bold text-white">
              📍 APMC Vadodara Central Market
            </p>
            <p>F-02, Dalal Bhavan, Hathi Khana, Vadodara – 390006, Gujarat</p>
          </div>
        </div>

        <div>
          <h4 className="text-[#C8A96B] font-serif font-bold text-base mb-4 uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-stone-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#company" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">
                Products We Deal In
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact & Sourcing Desk
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C8A96B] font-serif font-bold text-base mb-4 uppercase tracking-wider">
            Key Commodities
          </h4>
          <ul className="space-y-2.5 text-sm text-stone-300">
            <li>
              <a href="#products" className="hover:text-white transition-colors">
                Maize DDGS & Maize DOC
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">
                Rice DDGS & Rice Polish
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">
                Wheat Bran & Rice Broken
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">
                GN DOC & Rapeseed DOC
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">
                Commercial Cattle Feed
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C8A96B] font-serif font-bold text-base mb-4 uppercase tracking-wider">
            Direct Contacts
          </h4>
          <div className="space-y-4 text-xs text-stone-300">
            <div>
              <p className="font-bold text-white text-sm">Jay Maheshwari</p>
              <p className="mt-0.5">
                <a
                  href="tel:+919642174768"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  +91 96421 74768
                </a>{" "}
                •{" "}
                <a
                  href="tel:+919088111940"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  +91 90881 11940
                </a>
              </p>
            </div>

            <div>
              <p className="font-bold text-white text-sm">Alpesh Maheshwari</p>
              <p className="mt-0.5">
                <a
                  href="tel:+919825375833"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  +91 98253 75833
                </a>{" "}
                •{" "}
                <a
                  href="tel:+918141708456"
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  +91 81417 08456
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919642174768"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-3.5 py-2 rounded font-semibold text-xs transition-colors shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
        <p>© 2024 Manav Canvassers. All rights reserved.</p>
        <p className="text-[#C8A96B] font-semibold text-center">
          Quality Feed. Healthy Livestock. Better Tomorrow.
        </p>
      </div>
    </motion.footer>
  );
}
