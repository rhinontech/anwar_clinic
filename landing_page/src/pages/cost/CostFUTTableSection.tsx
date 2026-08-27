"use client";

import React from "react";

const FUT_PRICING_ROWS = [
  {
    stage: "Norwood 4",
    grafts: "1,800 – 2,500",
    cost: "₹90,000 – ₹1,25,000",
  },
  {
    stage: "Norwood 5",
    grafts: "2,500 – 3,200",
    cost: "₹1,25,000 – ₹1,60,000",
  },
  {
    stage: "Norwood 6",
    grafts: "3,200 – 4,000",
    cost: "₹1,60,000 – ₹2,00,000",
  },
  {
    stage: "Norwood 7",
    grafts: "4,000 – 5,000+",
    cost: "₹2,00,000 – ₹2,50,000",
  },
];

export default function CostFUTTableSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eff5f1] overflow-hidden">
      <div className="qht-large-container">
        
        {/* Header */}
        <div className="max-w-4xl mb-10">
          <span className="text-xs sm:text-sm font-semibold text-[#5c685f] block mb-2 tracking-wide">
            FUT Pricing Table
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b221d] tracking-tight leading-tight mb-4">
            FUT Hair Transplant Cost in India <br />
            by Norwood Stage
          </h2>
          <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal max-w-3xl">
            FUT costs less than FUE and QHT and is a cost-effective method for hair restoration in India. It is ideal for patients with longer hair who do not wish to shave the donor area, and for patients with advanced baldness (Norwood 6–7) requiring a higher number of grafts in one session. At QHT Clinic, FUT starts from ₹50 per graft.
          </p>
        </div>

        {/* Pricing Table Card - Full Width in Center */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white">
          
          {/* Table Header Row */}
          <div className="bg-[#243322] text-white py-4 sm:py-5 px-6 sm:px-10 grid grid-cols-12 font-bold text-xs sm:text-sm">
            <div className="col-span-4 sm:col-span-5">Norwood Stage</div>
            <div className="col-span-4 sm:col-span-4">Grafts Required</div>
            <div className="col-span-4 sm:col-span-3 text-left">FUT Cost</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-gray-100 text-xs sm:text-sm">
            {FUT_PRICING_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 px-6 sm:px-10 grid grid-cols-12 items-center hover:bg-gray-50/80 transition-colors"
              >
                <div className="col-span-4 sm:col-span-5 font-bold text-gray-900">
                  {row.stage}
                </div>
                <div className="col-span-4 sm:col-span-4 text-gray-500 font-medium">
                  {row.grafts}
                </div>
                <div className="col-span-4 sm:col-span-3 font-bold text-gray-900">
                  {row.cost}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 font-normal mt-6">
          FUT from ₹50/graft at QHT Clinic. Ideal for longer hair styles and high-grade baldness.
        </p>

      </div>
    </section>
  );
}
