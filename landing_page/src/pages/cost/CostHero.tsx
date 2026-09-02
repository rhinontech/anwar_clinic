"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { COMPANY_NAME } from "@/config/constants";


interface CostHeroProps {
  onOpenConsultation?: () => void;
}

export default function CostHero({ onOpenConsultation }: CostHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#596d53] text-white overflow-hidden">
      <div className="qht-large-container">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-white/70 font-normal mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-white/50" />
          <span className="text-white/95 font-medium">
            Hair Transplant Cost in India
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 space-y-6">

            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1 rounded-full text-xs font-semibold text-white">
              <span>Transparent Per-Graft Pricing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[500] text-white tracking-tight leading-[1.12]">
              Hair Transplant Cost <br className="hidden sm:block" />
              <span className="text-[#b1fc85]">in India</span> | Transparent <br className="hidden sm:block" />
              Pricing, Natural Results.
            </h1>

            {/* Overview Paragraph */}
            <p className="text-xs sm:text-lg text-white/85 leading-relaxed font-normal max-w-xl">
              Hair transplant pricing in India is determined by the stage of hair loss and the surgical technique selected. At {COMPANY_NAME}, procedures start from ₹50/graft (FUT), ₹70/graft (Motorized FUE), and ₹100/graft with our {COMPANY_NAME} Advanced Technique — all led by senior restoration surgeons with transparent, itemized billing.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="bg-white hover:bg-gray-100 text-[#1b221d] font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-lg transition-all active:scale-95 duration-150 cursor-pointer"
              >
                Book Free Consultation
              </button>

              <a
                href="tel:+919084726916"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/80 font-semibold text-sm sm:text-base py-3.5 px-8 rounded-full transition-all active:scale-95 duration-150"
              >
                <span>Call Us Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: "At a glance - QHT Clinic" Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[430px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 text-gray-800">

              {/* Card Dark Header */}
              <div className="bg-[#243322] py-4 px-6 text-center">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  At a glance — {COMPANY_NAME}
                </h3>
              </div>

              {/* Card Body Rows */}
              <div className="p-6 sm:p-7 divide-y divide-gray-100 text-xs sm:text-[13px]">

                {/* Row 1 */}
                <div className="pb-3.5 flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Procedures Completed</span>
                  <span className="font-bold text-gray-900">15,000+</span>
                </div>

                {/* Row 2 */}
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Years of Experience</span>
                  <span className="font-bold text-gray-900">10+ Years</span>
                </div>

                {/* Row 3 */}
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-gray-500 font-medium">FUT Cost / Graft</span>
                  <span className="font-bold text-gray-900">From ₹50</span>
                </div>

                {/* Row 4 */}
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-gray-500 font-medium">FUE Cost / Graft</span>
                  <span className="font-bold text-gray-900">From ₹70</span>
                </div>

                {/* Row 5 */}
                <div className="py-3.5 flex items-center justify-between bg-[#f4f7f4] -mx-6 sm:-mx-7 px-6 sm:px-7">
                  <span className="text-[#1b392b] font-bold">{COMPANY_NAME} Advanced Technique</span>
                  <span className="font-extrabold text-[#1b392b] text-sm">From ₹100</span>
                </div>

                {/* Row 6 */}
                <div className="pt-3.5 flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Clinic Locations</span>
                  <span className="font-bold text-gray-900">4 Cities</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
