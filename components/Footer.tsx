"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import type { SiteSettingsData } from "@/app/actions/sanity";

interface FooterProps {
  siteSettings?: SiteSettingsData;
}

export default function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const tagline =
    siteSettings?.tagline ||
    "Your Trusted Partner for Premium Cattle Feed Solutions";
  const address =
    siteSettings?.address ||
    "F-02, Dalal Bhavan, Hathi Khana, Vadodara – 390006, Gujarat";
  const contacts = siteSettings?.contacts || siteSettings?.brokers || [
    {
      name: "Jay Maheshwari",
      role: "Sourcing & Brokerage",
      contactNumbers: ["+91 96421 74768", "+91 94260 03460"],
      phones: ["+91 96421 74768", "+91 94260 03460"],
    },
    {
      name: "Alpesh Maheshwari",
      role: "Logistics Desk",
      contactNumbers: ["+91 98253 75833", "+91 81417 08456"],
      phones: ["+91 98253 75833", "+91 81417 08456"],
    },
  ];
  const whatsappNumber = siteSettings?.whatsappNumber || "919642174768";

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
          <Link href="/" className="block mb-6">
            <Image
              src="/assets/logo/logo.png"
              alt="Manav Canvassers Logo"
              width={200}
              height={50}
              className="h-7 sm:h-8 w-auto object-contain origin-left"
            />
          </Link>
          <p className="text-[#C8A96B] text-sm font-semibold tracking-wide mb-2">
            {tagline}
          </p>
          <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-6">
            Connecting businesses across the cattle-feed and agricultural
            commodity supply chain.
          </p>
          <div className="text-xs text-stone-400 space-y-1 bg-white/5 p-4 rounded-lg border border-white/10 max-w-sm">
            <p className="font-bold text-white flex items-center gap-1.5">
              <span
                className="material-symbols-outlined text-sm text-[#C8A96B]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                location_on
              </span>
              APMC Vadodara Central Market
            </p>
            <p>{address}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-[#C8A96B] font-serif font-bold text-base uppercase tracking-wider mb-6">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-stone-300">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products We Deal In
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="hover:text-white transition-colors"
              >
                Who We Serve
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact & Sourcing Desk
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center ">
          <h4 className="text-[#C8A96B] font-serif font-bold text-base uppercase tracking-wider mb-6">
            Key Commodities
          </h4>
          <ul className="space-y-2.5 text-sm text-stone-300">
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Maize DDGS & Maize DOC
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Rice DDGS & Rice Polish
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Wheat Bran & Rice Broken
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                GN DOC & Rapeseed DOC
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Commercial Cattle Feed
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center ">
          <h4 className="text-[#C8A96B] font-serif font-bold text-base uppercase tracking-wider mb-6">
            Direct Contacts
          </h4>
          <div className="space-y-4 text-xs text-stone-300">
            {contacts.map((contact) => {
              const numbers =
                contact.contactNumbers?.length
                  ? contact.contactNumbers
                  : contact.phones?.length
                  ? contact.phones
                  : [];
              return (
                <div key={contact.name}>
                  <p className="font-bold text-white text-sm">{contact.name}</p>
                  {contact.role && (
                    <p className="text-[11px] text-stone-400 mb-0.5">{contact.role}</p>
                  )}
                  <p className="mt-0.5">
                    {numbers.map((phone, pIdx) => (
                      <span key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="hover:text-[#C8A96B] transition-colors"
                        >
                          {phone}
                        </a>
                        {pIdx < numbers.length - 1 && " • "}
                      </span>
                    ))}
                  </p>
                </div>
              );
            })}

            <div className="pt-2">
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
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
        <p>© {currentYear} Manav Canvassers. All rights reserved.</p>
        <p className="text-[#C8A96B] font-semibold text-center">
          Quality Feed. Healthy Livestock. Better Tomorrow.
        </p>
      </div>
    </motion.footer>
  );
}
