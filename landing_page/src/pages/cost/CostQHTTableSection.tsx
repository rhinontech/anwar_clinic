"use client";

import React from "react";
import { COMPANY_NAME } from "@/config/constants";

const QHT_PRICING_ROWS = [
  {
    stage: "Norwood II–III",
    grafts: "800 – 1,500",
    cost: "₹80,000 – ₹1,50,000",
  },
  {
    stage: "Norwood III (Vertex)",
    grafts: "1,200 – 1,800",
    cost: "₹1,20,000 – ₹1,80,000",
  },
  {
    stage: "Norwood IV",
    grafts: "2,000 – 2,500",
    cost: "₹2,00,000 – ₹2,50,000",
  },
  {
    stage: "Norwood V",
    grafts: "2,500 – 3,500",
    cost: "₹2,50,000 – ₹3,50,000",
  },
  {
    stage: "Norwood VI",
    grafts: "3,500 – 4,500",
    cost: "₹3,50,000 – ₹4,50,000",
  },
  {
    stage: "Norwood VII",
    grafts: "5,000 – 6,000",
    cost: "₹5,00,000 – ₹6,00,000",
  },
];

export default function CostQHTTableSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="qht-large-container">
        
        {/* Header */}
        <div className="max-w-4xl mb-10">
          <span className="text-xs sm:text-sm font-semibold text-[#5c685f] block mb-2 tracking-wide">
            {COMPANY_NAME} Advanced Technique
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] tracking-tight leading-tight mb-4">
            {COMPANY_NAME} Advanced Protocol <br />
            Cost in India
          </h2>
          <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal max-w-3xl">
            The {COMPANY_NAME} Advanced Protocol is our specialized direct micro-implantation technique engineered to minimize graft out-of-body holding time. By combining gentle motorized extraction with precise implanter pens, we achieve exceptional follicle viability and natural density. Pricing starts from ₹100 per graft.
          </p>
        </div>

        {/* Pricing Table Card - Full Width in Center */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white">
          
          {/* Table Header Row */}
          <div className="bg-[#243322] text-white py-4 sm:py-5 px-6 sm:px-10 grid grid-cols-12 font-bold text-xs sm:text-sm">
            <div className="col-span-4 sm:col-span-5">Norwood Stage</div>
            <div className="col-span-4 sm:col-span-4">Grafts Required</div>
            <div className="col-span-4 sm:col-span-3 text-left">{COMPANY_NAME} Protocol Cost</div>
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
          The {COMPANY_NAME} Advanced Technique starts from ₹100/graft, designed for patients seeking maximum follicular viability, soft hairline transitions, and rapid recovery.
        </p>

      </div>
    </section>
  );
}
