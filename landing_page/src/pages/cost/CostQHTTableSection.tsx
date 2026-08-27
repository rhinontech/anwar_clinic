"use client";

import React from "react";

const QHT_PRICING_ROWS = [
  {
    stage: "Norwood 2",
    grafts: "800 – 1,200",
    cost: "₹80,000 – ₹1,20,000",
  },
  {
    stage: "Norwood 3",
    grafts: "1,200 – 1,800",
    cost: "₹1,20,000 – ₹1,80,000",
  },
  {
    stage: "Norwood 4",
    grafts: "1,800 – 2,500",
    cost: "₹1,80,000 – ₹2,50,000",
  },
  {
    stage: "Norwood 5",
    grafts: "2,500 – 3,200",
    cost: "₹2,50,000 – ₹3,20,000",
  },
  {
    stage: "Norwood 6",
    grafts: "3,200 – 4,000",
    cost: "₹3,20,000 – ₹4,00,000",
  },
  {
    stage: "Norwood 7",
    grafts: "4,000 – 5,000",
    cost: "₹4,00,000 – ₹5,00,000",
  },
];

export default function CostQHTTableSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="qht-large-container">
        
        {/* Header */}
        <div className="max-w-4xl mb-10">
          <span className="text-xs sm:text-sm font-semibold text-[#5c685f] block mb-2 tracking-wide">
            QHT Proprietary Technique
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b221d] tracking-tight leading-tight mb-4">
            QHT (Quick Hair Transplant) <br />
            Cost in India
          </h2>
          <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal max-w-3xl">
            QHT is QHT Clinic’s patented, proprietary technique - an advanced form of FUE that reduces graft out-of-body time to under 2 hours through simultaneous extraction and implantation, delivering industry-leading graft survival and density. At QHT Clinic, QHT starts from ₹100 per graft.
          </p>
        </div>

        {/* Pricing Table Card - Full Width in Center */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white">
          
          {/* Table Header Row */}
          <div className="bg-[#243322] text-white py-4 sm:py-5 px-6 sm:px-10 grid grid-cols-12 font-bold text-xs sm:text-sm">
            <div className="col-span-4 sm:col-span-5">Norwood Stage</div>
            <div className="col-span-4 sm:col-span-4">Grafts Required</div>
            <div className="col-span-4 sm:col-span-3 text-left">QHT Cost</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-gray-100 text-xs sm:text-sm">
            {QHT_PRICING_ROWS.map((row, idx) => (
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
          QHT from ₹100/graft. Proprietary technique exclusive to QHT Clinic. Fastest procedure with highest graft survival.
        </p>

      </div>
    </section>
  );
}
