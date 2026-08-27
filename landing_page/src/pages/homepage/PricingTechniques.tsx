"use client";

import React from "react";
import { PRICING_PACKAGES } from "@/data/qhtData";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PricingTechniquesProps {
  onOpenConsultation: () => void;
}

export default function PricingTechniques({
  onOpenConsultation,
}: PricingTechniquesProps) {
  return (
    <section className="py-20 bg-[#f8faf8]">
      <div className="qht-container">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#162418]">
            Hair Transplant Cost by Technique
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Discover three proven hair transplant techniques at three different price points, each delivering permanent, natural-looking hair restoration.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isFeatured
                  ? "bg-[#1b392b] text-white shadow-xl md:-translate-y-3 border-2 border-[#b1fc85]"
                  : "bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Featured Badge */}
              {pkg.isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#b1fc85] text-[#162418] text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular Globally
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      pkg.isFeatured ? "text-[#b1fc85]" : "text-[#1b392b]"
                    }`}
                  >
                    {pkg.technique}
                  </span>
                  <h3
                    className={`text-xl font-bold mt-1 ${
                      pkg.isFeatured ? "text-white" : "text-[#162418]"
                    }`}
                  >
                    {pkg.fullName}
                  </h3>
                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      pkg.isFeatured ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {pkg.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 my-4 border-y border-gray-100/20 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] block font-semibold opacity-80">
                      Per Graft Onwards
                    </span>
                    <span className="text-xs block opacity-70">
                      Total: {pkg.totalRange}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-lg font-bold">₹</span>
                    <span className="text-4xl font-extrabold font-mono">
                      {pkg.perGraft}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 my-6 text-xs sm:text-sm">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.isFeatured
                            ? "bg-[#b1fc85] text-[#162418]"
                            : "bg-[#1b392b] text-white"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span
                        className={
                          pkg.isFeatured ? "text-gray-200" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenConsultation}
                className={`w-full py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 ${
                  pkg.isFeatured
                    ? "bg-[#b1fc85] text-[#162418] hover:bg-white"
                    : "bg-[#1b392b] text-white hover:bg-[#284c3b]"
                }`}
              >
                <span>Get Exact Graft Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
