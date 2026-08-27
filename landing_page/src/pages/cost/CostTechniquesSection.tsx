"use client";

import React from "react";
import { Check } from "lucide-react";

interface CostTechniquesSectionProps {
  onOpenConsultation?: () => void;
}

export default function CostTechniquesSection({
  onOpenConsultation,
}: CostTechniquesSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eff5f1] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#5c685f] block mb-2 tracking-wide">
            Technique-Wise Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1b221d] tracking-tight leading-tight">
            Hair Transplant Cost in India <br />
            by Technique
          </h2>
          <p className="text-xs sm:text-sm text-[#5c685f] mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            Hair transplant cost in India depends on the technique used and the number of grafts required. The primary techniques are FUE, FUT and QHT. The number of grafts is determined based on the extent of baldness, commonly assessed using the Norwood scale.
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
              <h3 className="text-lg sm:text-xl font-bold text-[#1b221d] mb-2">
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
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
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
                QHT Technique
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#1b221d] mb-2">
                Quick Hair Transplant
              </h3>
              <p className="text-xs text-[#5c685f] leading-relaxed font-normal min-h-[60px]">
                QHT Clinic’s patented, proprietary technique – an advanced form of FUE. Simultaneous extraction and implantation reduces graft out-of-body time to under 2 hours for superior survival and density.
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
