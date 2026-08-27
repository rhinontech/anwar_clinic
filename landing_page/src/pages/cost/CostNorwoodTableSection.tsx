"use client";

import React from "react";

const NORWOOD_PRICING_ROWS = [
  {
    stage: "Norwood II–III",
    grafts: "800 – 1,500",
    cost: "₹56,000 – ₹1,05,000",
  },
  {
    stage: "Norwood III (Vertex)",
    grafts: "1,200 – 1,800",
    cost: "₹84,000 – ₹1,26,000",
  },
  {
    stage: "Norwood IV",
    grafts: "2,000 – 2,500",
    cost: "₹1,40,000 – ₹1,75,000",
  },
  {
    stage: "Norwood V",
    grafts: "2,500 – 3,500",
    cost: "₹1,75,000 – ₹2,45,000",
  },
  {
    stage: "Norwood VI",
    grafts: "3,500 – 4,500",
    cost: "₹2,45,000 – ₹3,15,000",
  },
  {
    stage: "Norwood VII",
    grafts: "5,000 – 6,000",
    cost: "₹3,50,000 – ₹4,20,000",
  },
];

export default function CostNorwoodTableSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="qht-large-container">
        
        {/* Header */}
        <div className="max-w-4xl mb-10">
          <span className="text-xs sm:text-sm font-semibold text-[#5c685f] block mb-2 tracking-wide">
            FUE Pricing Table
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b221d] tracking-tight leading-tight mb-4">
            FUE Hair Transplant Cost in India <br />
            by Norwood Stage
          </h2>
          <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal max-w-3xl">
            Follicular Unit Extraction is an advanced, minimally invasive technique with no linear scar. The FUE hair transplant cost at QHT Clinic starts from ₹70 per graft. The number of grafts and therefore total cost is determined by your Norwood baldness grade, assessed during a scalp consultation.
          </p>
        </div>

        {/* Pricing Table Card - Full Width in Center */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white">
          
          {/* Table Header Row */}
          <div className="bg-[#243322] text-white py-4 sm:py-5 px-6 sm:px-10 grid grid-cols-12 font-bold text-xs sm:text-sm">
            <div className="col-span-4 sm:col-span-5">Norwood Stage</div>
            <div className="col-span-4 sm:col-span-4">Grafts Required</div>
            <div className="col-span-4 sm:col-span-3 text-left">FUE Cost (QHT Clinic)</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-gray-100 text-xs sm:text-sm">
            {NORWOOD_PRICING_ROWS.map((row, idx) => (
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
          Prices at QHT Clinic – FUE from ₹70/graft. Final cost confirmed only after personalised scalp assessment.
        </p>

      </div>
    </section>
  );
}
