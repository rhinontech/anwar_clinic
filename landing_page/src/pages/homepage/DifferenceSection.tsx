"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { DIFFERENCE_ITEMS } from "@/data/qhtData";

export default function DifferenceSection() {
  return (
    <section className="py-20 bg-[#f8faf8]">
      <div className="qht-container">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#162418]">
            See the Difference that Matters
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Real results. Safe methods. Natural transformations. Only at QHT.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {DIFFERENCE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:shadow-md transition-shadow"
            >
              {/* Feature Title */}
              <div className="md:col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1b392b]/5 flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#162418]">
                  {item.title}
                </h3>
              </div>

              {/* Comparison Details */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* QHT Promise */}
                <div className="p-4 rounded-xl bg-[#1b392b]/5 border border-[#1b392b]/15">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1b392b] uppercase tracking-wider mb-1.5">
                    <span>QHT Promise</span>
                    <span className="w-4 h-4 rounded-full bg-[#00d084] text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed font-medium">
                    {item.qhtPromise}
                  </p>
                </div>

                {/* Other Clinics */}
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider mb-1.5">
                    <span>Other Clinics</span>
                    <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center">
                      <X className="w-3 h-3 stroke-[3]" />
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.otherClinics}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
