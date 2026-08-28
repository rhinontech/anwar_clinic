"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { COMPANY_NAME } from "@/config/constants";

interface ComparisonRow {
  feature: string;
  ourClinic: string;
  others: string;
}

export default function AboutComparisonTableSection() {
  const COMPARISON_ROWS: ComparisonRow[] = [
    {
      feature: "Technology",
      ourClinic: "Sapphire instruments, high magnification lenses",
      others: "Mixed/outdated instruments",
    },
    {
      feature: "Hygiene/ Safety",
      ourClinic: "Hospital-grade sterilization and safety practices throughout.",
      others: "Varies often inconsistent",
    },
    {
      feature: "Pricing",
      ourClinic: "All costs are clearly outlined in the quote- no hidden charges",
      others: "Additional add-ons not shown in the quote and unclear pricing",
    },
    {
      feature: "Hairline Design",
      ourClinic: "Face-fit, age-appropriate, and natural-looking hairline design",
      others: "All hairlines are uniform and occasionally pluggy",
    },
    {
      feature: "Treatment Planning",
      ourClinic: "Customized plan for each patient",
      others: "Standardized template approach",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="qht-large-container">
        
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b221d] tracking-tight leading-tight mb-3">
            How {COMPANY_NAME} Differs from <br className="hidden sm:inline" />
            Other Clinics?
          </h2>
          <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal">
            Clear Standards. Clear Results.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm font-bold text-[#1b221d] w-[26%]">
                    Features
                  </th>
                  <th className="py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm font-bold text-[#1b221d] bg-[#f0f7f2] w-[42%] border-x border-gray-200/80">
                    {COMPANY_NAME}
                  </th>
                  <th className="py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm font-bold text-[#1b221d] w-[32%]">
                    Others
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    
                    {/* Feature Title */}
                    <td className="py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm font-semibold text-[#1b221d] align-middle">
                      {row.feature}
                    </td>

                    {/* Our Clinic Column (Highlighted Green) */}
                    <td className="py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm font-normal text-[#2d3a2f] bg-[#f0f7f2] border-x border-gray-200/80 align-middle">
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#428834] flex-shrink-0 stroke-[2.5]" />
                        <span>{row.ourClinic}</span>
                      </div>
                    </td>

                    {/* Others Column */}
                    <td className="py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm font-normal text-[#6b7280] align-middle">
                      <div className="flex items-center gap-3">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#d94848] flex-shrink-0 stroke-[2.2]" />
                        <span>{row.others}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
