"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CompanySection() {
  return (
    <section id="company" className="flex flex-col justify-center py-12 sm:py-16 lg:py-16 bg-white border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-2.5">
              <span className="w-5 h-[2px] bg-[#735B25]" />
              ABOUT MANAV CANVASSERS
            </div>

            <h2 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-[2.35rem] font-bold leading-[1.2] mb-3.5">
              Connecting Quality Feed With the Right Businesses.
            </h2>

            <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              Manav Canvassers is a Vadodara-based cattle-feed broker and
              sourcing partner serving businesses across the agricultural feed
              market. We connect buyers and suppliers of cattle-feed ingredients
              and agricultural commodities, helping businesses find suitable
              products according to their requirements.
            </p>

            <div className="bg-[#F8F9FA] border-l-4 border-[#735B25] p-3.5 sm:p-4 rounded-r-md mb-5">
              <p className="text-[#0B251B] font-medium text-xs sm:text-sm leading-relaxed">
                &ldquo;Our role is simple:{" "}
                <strong className="text-[#0B251B] font-bold">
                  connect the right product with the right business.
                </strong>{" "}
                Built around market relationships, reliable sourcing, and
                customer-focused service, we aim to make cattle-feed procurement
                more convenient, dependable, and efficient.&rdquo;
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80">
                <span
                  className="material-symbols-outlined text-[#735B25] text-xl mb-1.5 block"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  handshake
                </span>
                <p className="text-stone-900 font-bold text-xs sm:text-sm">Direct Brokerage</p>
                <p className="text-stone-600 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  Connecting buyers & suppliers directly
                </p>
              </div>

              <div className="p-4 sm:p-3 rounded-lg bg-stone-50 border border-stone-200/80">
                <span
                  className="material-symbols-outlined text-[#735B25] text-xl mb-1.5 block"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  verified
                </span>
                <p className="text-stone-900 font-bold text-xs sm:text-sm">Quality Assurance</p>
                <p className="text-stone-600 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  Protein, moisture, & quality aligned
                </p>
              </div>

              <div className="p-4 sm:p-3 rounded-lg bg-stone-50 border border-stone-200/80">
                <span
                  className="material-symbols-outlined text-[#735B25] text-xl mb-1.5 block"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  local_shipping
                </span>
                <p className="text-stone-900 font-bold text-xs sm:text-sm">Logistics Sync</p>
                <p className="text-stone-600 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  Coordinated dispatch from mills
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0B251B] hover:text-[#735B25] font-semibold text-xs sm:text-sm border-b-2 border-[#735B25] pb-0.5 transition-colors"
            >
              Learn More About Our Process & Network
              <span
                className="material-symbols-outlined text-sm font-bold"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                arrow_forward
              </span>
            </Link>
          </motion.div>

          {/* Right Column - Overlapping Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative w-full max-w-md lg:max-w-none mx-auto pt-2 pb-2">
              {/* Decorative dotted pattern matching brand accent */}
              <div
                className="absolute top-0 right-10 w-24 h-24 opacity-25 pointer-events-none z-0"
                style={{
                  backgroundImage: "radial-gradient(#735B25 2px, transparent 2px)",
                  backgroundSize: "12px 12px",
                }}
              />

              {/* Main background image */}
              <div className="relative z-1 ml-auto w-[86%] rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 aspect-[4/3]">
                <Image
                  src="/assets/aboutHomepage/img1.jpg"
                  alt="Manav Canvassers Cattle Feed Facility and Operations"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>

              {/* Overlapping foreground image */}
              <div className="relative z-10 -mt-20 sm:-mt-28 w-[54%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-[5px] border-white aspect-square">
                <Image
                  src="/assets/aboutHomepage/imag2.png"
                  alt="Cattle Feed Ingredients Quality"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
