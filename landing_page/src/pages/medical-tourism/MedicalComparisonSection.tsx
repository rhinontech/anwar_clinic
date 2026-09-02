"use client";

import React from "react";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

interface ComparisonRow {
  feature: string;
  fue: string;
  qht: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Graft Storage Time",
    fue: "30–90 mins",
    qht: "<30 mins",
  },
  {
    feature: "Graft Survival Rate",
    fue: "75–85%",
    qht: "95%+",
  },
  {
    feature: "Healing Time",
    fue: "7–10 days",
    qht: "3–5 days",
  },
  {
    feature: "Result Onset",
    fue: "8–12 months",
    qht: "6–9 months",
  },
  {
    feature: "Surgeon Involvement",
    fue: "Moderate",
    qht: "High – expert-led",
  },
];

export default function MedicalComparisonSection() {
  const { openConsultation } = useConsultation();

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ========================================================
            HEADER
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162418] tracking-tight leading-tight">
            FUE vs QHT: Clear Comparisons with Strong Benefits
          </h2>
          <div className="mt-4 text-xs sm:text-sm text-gray-500 leading-relaxed space-y-1">
            <p>At QHT Hair Transplant Clinic, we’ve taken FUE to the next level with QHT – Quick Hair Transplant.</p>
            <p>How QHT is Different from FUE?</p>
          </div>
        </div>

        {/* ========================================================
            3 SEPARATE CARD COLUMNS
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Feature Column */}
          <div className="bg-[#eff5f1] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#e2ece4]">
            {/* Header */}
            <div className="pb-6 border-b border-gray-200/70 min-h-[64px] flex items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#162418]">
                Feature
              </h3>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-200/70 flex-1 flex flex-col justify-around">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="py-5 sm:py-6 text-sm sm:text-base font-semibold text-[#162418] flex items-center"
                >
                  {row.feature}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: FUE Technique Column */}
          <div className="bg-[#eff5f1] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#e2ece4]">
            {/* Header */}
            <div className="pb-6 border-b border-gray-200/70 min-h-[64px] flex items-center gap-3">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/10/fue-techinque-icon.png"
                alt="FUE Icon"
                className="w-7 h-7 object-contain flex-shrink-0"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[#162418]">
                FUE Technique
              </h3>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-200/70 flex-1 flex flex-col justify-around">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="py-5 sm:py-6 text-sm sm:text-base font-medium text-gray-700 flex items-center"
                >
                  {row.fue}
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: QHT Benefits Column */}
          <div className="bg-[#eff5f1] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#e2ece4]">
            {/* Header */}
            <div className="pb-6 border-b border-gray-200/70 min-h-[64px] flex items-center gap-3">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/10/qht-benefits-icon.png"
                alt="QHT Icon"
                className="w-7 h-7 object-contain flex-shrink-0"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[#162418]">
                QHT Benefits
              </h3>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-200/70 flex-1 flex flex-col justify-around">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="py-5 sm:py-6 text-sm sm:text-base font-bold text-[#162418] flex items-center"
                >
                  {row.qht}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================
            BOTTOM CONNECT BANNER
           ======================================================== */}
        <div className="mt-10 bg-[#52664d] rounded-2xl sm:rounded-3xl p-6 sm:py-7 sm:px-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          
          {/* Left: Google Rating Badge */}
          <div className="flex items-center gap-4 lg:pr-8 lg:border-r lg:border-white/30 w-full lg:w-auto justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-2 shadow-xs flex-shrink-0">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/10/g-icon.webp"
                alt="Google"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-white mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                ))}
              </div>
              <p className="text-xs sm:text-[13px] text-white/95 font-medium whitespace-nowrap">
                4.9 rating, 2,091 google reviews
              </p>
            </div>
          </div>

          {/* Center: Headline */}
          <div className="text-center lg:text-left flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Connect with <br className="hidden sm:inline lg:hidden xl:inline" />
              hair transplant expert.
            </h3>
          </div>

          {/* Right: Consult Now Button */}
          <div className="flex-shrink-0">
            <button
              onClick={openConsultation}
              className="px-8 py-3.5 rounded-full bg-white text-[#162418] font-bold text-sm sm:text-base shadow-md hover:bg-[#eff5f1] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Consult Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
