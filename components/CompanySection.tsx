"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CompanySection() {
  return (
    <section id="company" className="py-24 md:py-32 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.16em] mb-4">
              <span className="w-6 h-[2px] bg-[#735B25]" />
              ABOUT MANAV CANVASSERS
            </div>

            <h2 className="text-[#0B251B] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Connecting Quality Feed With the Right Businesses.
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
              Manav Canvassers is a Vadodara-based cattle-feed broker and
              sourcing partner serving businesses across the agricultural feed
              market. We connect buyers and suppliers of cattle-feed ingredients
              and agricultural commodities, helping businesses find suitable
              products according to their requirements.
            </p>

            <div className="bg-[#F8F9FA] border-l-4 border-[#735B25] p-5 rounded-r-md mb-8">
              <p className="text-[#0B251B] font-medium text-sm sm:text-base leading-relaxed">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
                <span className="material-symbols-outlined text-[#735B25] text-2xl mb-2 block">
                  handshake
                </span>
                <p className="text-stone-900 font-bold text-sm">Direct Brokerage</p>
                <p className="text-stone-600 text-xs mt-1">
                  Connecting buyers & suppliers directly
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
                <span className="material-symbols-outlined text-[#735B25] text-2xl mb-2 block">
                  verified
                </span>
                <p className="text-stone-900 font-bold text-sm">Spec Matching</p>
                <p className="text-stone-600 text-xs mt-1">
                  Protein, moisture, and quality aligned
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
                <span className="material-symbols-outlined text-[#735B25] text-2xl mb-2 block">
                  local_shipping
                </span>
                <p className="text-stone-900 font-bold text-sm">Logistics Sync</p>
                <p className="text-stone-600 text-xs mt-1">
                  Coordinated dispatch from verified mills
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0B251B] hover:text-[#735B25] font-semibold text-sm border-b-2 border-[#735B25] pb-1 transition-colors"
            >
              Learn More About Our Process & Network
              <span className="material-symbols-outlined text-sm font-bold">
                arrow_forward
              </span>
            </Link>
          </motion.div>

          {/* Right Column - Facility Photography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
              <div className="h-[420px] sm:h-[480px] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtUUhw9Yae7yZywypbvljecwAL_bqNro6cCXqjIccfHRV4_Ac2gFGscCaVfCarX55EnEf1DDMCnO_N9nQH4Q13xO_pus39yAg7QbRGK3DoTFl-Gskxa73Ruzr1jCJijYyFTa1Li9jSPE41eeBKZv0e_GAkyhzmQAudcDYsbgmy2KTPaCJtE-zH9F8v_6l3E6lolg7HGxT4KNLe34hKTMm0TN_5G7YtrYGsviJFVho3ZGnp22awBvvO"
                  alt="Agricultural Supply Chain - Manav Canvassers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Credential Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-stone-200 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0B251B] flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      location_city
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">
                      Vadodara Central APMC
                    </p>
                    <p className="text-sm font-bold text-stone-900 leading-tight">
                      F-02, Dalal Bhavan, Hathi Khana – 390006
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
