"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { COMPANY_NAME } from "@/config/constants";

interface CostTechniquesSectionProps {
  onOpenConsultation?: () => void;
}

export default function CostTechniquesSection({
  onOpenConsultation,
}: CostTechniquesSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eff5f1] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Row with Number 1 Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-300 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] tracking-tight">
              Hair Transplant Cost by Technique
            </h2>
          </div>
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded border border-gray-400 text-xs font-semibold text-gray-700">
            1
          </div>
        </div>

        {/* Intro Subtitle */}
        <div className="max-w-4xl mb-12">
          <p className="text-sm sm:text-lg text-[#5c685f] leading-relaxed font-normal">
            Hair transplant cost in India depends on the technique used and the number of grafts required. The primary techniques are FUE, FUT and {COMPANY_NAME}. The number of grafts is determined based on the extent of baldness, commonly assessed using the Norwood scale.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">

          {/* 1. FUT Technique (White Card) */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-gray-100/90 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                FUT Technique
              </span>
              <h3 className="text-lg sm:text-xl font-[500] text-[#1b221d] mb-2">
                Follicular Unit Transplantation
              </h3>
              <p className="text-xs text-[#5c685f] leading-relaxed font-normal min-h-[60px]">
                Strip-harvesting technique. Ideal for advanced baldness (Norwood 4–7) requiring a high number of grafts in a single session. Most cost-effective per-graft rate.
              </p>

              {/* Price Row */}
              <div className="pt-4 pb-4 my-4 border-y border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-500 block font-medium">
                    Per graft onwards
                  </span>
                  <span className="text-xs font-semibold text-gray-800">
                    Total: ₹90,000 – ₹2,50,000
                  </span>
                </div>
                <div className="flex items-baseline text-[#1b221d]">
                  <span className="text-lg font-bold mr-0.5">₹</span>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">50</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 my-6 text-xs text-gray-700">
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Best for Norwood Grade 4–7</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Maximum grafts in one session</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Linear donor scar (concealable)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Lower per-graft cost</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Suitable for longer hairstyles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. FUE Technique (Featured Dark Olive Green Card) */}
          <div className="bg-[#52664d] text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#b1fc85] uppercase tracking-wider block mb-1">
                FUE Technique
              </span>
              <h3 className="text-lg sm:text-xl font-[500] text-white mb-2">
                Follicular Unit Extraction
              </h3>
              <p className="text-xs text-white/85 leading-relaxed font-normal min-h-[60px]">
                Minimally invasive, no linear scar. Each follicle is extracted individually. Gold-standard technique for permanent restoration globally, suitable for scalp and facial hair.
              </p>

              {/* Price Row */}
              <div className="pt-4 pb-4 my-4 border-y border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-white/80 block font-medium">
                    Per graft onwards
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Total: ₹56,000 – ₹4,20,000
                  </span>
                </div>
                <div className="flex items-baseline text-[#b1fc85]">
                  <span className="text-lg font-bold mr-0.5">₹</span>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">70</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 my-6 text-xs text-white/90">
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#b1fc85] text-[#1b221d] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Suitable for Norwood Grade 2–7</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#b1fc85] text-[#1b221d] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>No linear scar – short hair compatible</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#b1fc85] text-[#1b221d] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Minimally Invasive procedure</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#b1fc85] text-[#1b221d] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Suitable for scalp + facial hair</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#b1fc85] text-[#1b221d] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Gold standard globally</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. QHT Technique (White Card) */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-gray-100/90 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                {COMPANY_NAME} Technique
              </span>
              <h3 className="text-lg sm:text-xl font-[500] text-[#1b221d] mb-2">
                Quick Hair Transplant
              </h3>
              <p className="text-xs text-[#5c685f] leading-relaxed font-normal min-h-[60px]">
                {COMPANY_NAME} Clinic’s patented, proprietary technique – an advanced form of FUE. Simultaneous extraction and implantation reduces graft out-of-body time to under 2 hours for superior survival and density.
              </p>

              {/* Price Row */}
              <div className="pt-4 pb-4 my-4 border-y border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-500 block font-medium">
                    Per graft onwards
                  </span>
                  <span className="text-xs font-semibold text-gray-800">
                    Total: ₹80,000 – ₹5,00,000
                  </span>
                </div>
                <div className="flex items-baseline text-[#1b221d]">
                  <span className="text-lg font-bold mr-0.5">₹</span>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">100</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 my-6 text-xs text-gray-700">
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Optimised graft survival through reduced out-of-body time</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Simultaneous extraction + implantation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>SAVA implanter pen precision</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Faster procedure duration</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#596d53] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>High-density, natural-looking results</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
