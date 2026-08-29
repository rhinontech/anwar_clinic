"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { COMPANY_NAME } from "@/config/constants";

interface CostFactor {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

interface ServiceCostSectionProps {
  title?: string;
  costOverview?: string[];
  factorsSubtitle?: string;
  factors?: CostFactor[];
}

const DEFAULT_COST_OVERVIEW = [
  `The Hair Transplant Repair in India costs differently for different grades of severity of the problem, the chosen method, the number of grafts that will be required, and the clinical expertise. The average costs at ${COMPANY_NAME} Clinic range between Rs. 60,000 to Rs. 1,20,000 for minor repairs, whereas those for major corrections cost about Rs. 1,50,000 to Rs. 3,00,000.`,
  `The cost of a hair transplant at a clinic depends on several factors, including the clinic’s reputation, the surgeon’s experience, the clinic’s location, and the specific type of procedure performed (such as ${COMPANY_NAME}, FUE or FUT).`,
];

const DEFAULT_FACTORS: CostFactor[] = [
  {
    id: 1,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-7.png",
    title: "Size of the Bald Patch",
    desc: "The larger the bald area, the higher the number of grafts required, which increases the overall cost of the hair transplant.",
  },
  {
    id: 2,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-cost-icon-3.webp",
    title: "Number of Grafts",
    desc: "The total number of grafts needed for full coverage directly impacts the procedure cost. More grafts mean higher expenses.",
  },
  {
    id: 3,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-8.png",
    title: "Treatment Method Chosen",
    desc: `Different techniques like FUE or ${COMPANY_NAME} have varying costs depending on their complexity and precision.`,
  },
  {
    id: 4,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-cost-icon-1.webp",
    title: `Clinical Expertise at ${COMPANY_NAME} Clinic`,
    desc: `${COMPANY_NAME} Clinic’s experienced specialists provide safe, natural-looking results, ensuring that the cost reflects high-quality care and realistic outcomes.`,
  },
  {
    id: 5,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-10.png",
    title: "Multiple Sittings",
    desc: "If the procedure requires multiple sessions to achieve the desired result, the total cost increases accordingly.",
  },
];

export default function ServiceCostSection({
  title = "Hair Transplant Repair",
  costOverview = DEFAULT_COST_OVERVIEW,
  factorsSubtitle = `The Hair Transplant Repair in India and at ${COMPANY_NAME} Clinic offers a more affordable approach when compared to Western countries, making it a hub for Corrective Hair Surgery due to its affordable yet trustworthy expertise. The focus must be on getting the right expertise to avoid repeated failures.`,
  factors = DEFAULT_FACTORS,
}: ServiceCostSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eff5f1] overflow-hidden">
      <div className="qht-large-container">
        
        {/* Top Header Row with Number 5 Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-300">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] tracking-tight">
            {title} Cost in India
          </h2>
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded border border-gray-400 text-xs font-semibold text-gray-700">
            5
          </div>
        </div>

        {/* Upper Cost Description & Down Arrow */}
        <div className="mt-8 max-w-3xl space-y-4">
          {costOverview.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-base text-[#5c685f] leading-relaxed font-normal">
              {para}
            </p>
          ))}

          {/* Down Arrow Circle */}
          <div className="pt-4 pb-12">
            <div className="w-12 h-12 rounded-full border border-gray-400/80 flex items-center justify-center text-gray-600 hover:border-gray-800 transition-colors">
              <ArrowDown className="w-5 h-5 stroke-[1.5]" />
            </div>
          </div>
        </div>

        {/* Middle Subheading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1b221d] tracking-tight leading-snug">
              The factors affecting the {title} cost include:
            </h3>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal">
              {factorsSubtitle}
            </p>
          </div>
        </div>

        {/* Factors Grid (4 on top row with dividing lines + 1 on bottom row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200/90 items-start">
          {factors.slice(0, 4).map((f) => (
            <div
              key={f.id}
              className="flex flex-col justify-start lg:px-6 xl:px-8 first:lg:pl-0 last:lg:pr-0 group"
            >
              {/* Factor Icon */}
              <div className="w-12 h-12 flex items-center justify-start flex-shrink-0 group-hover:scale-110 transition-transform">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Factor Title */}
              <h4 className="text-lg sm:text-xl font-bold text-[#1b221d] mt-5 leading-snug tracking-tight min-h-[48px]">
                {f.title}
              </h4>

              {/* Factor Description */}
              <p className="text-xs sm:text-sm text-[#5c685f] mt-2 leading-relaxed font-normal">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 5th Factor: Multiple Sittings (Bottom Row) */}
        {factors[4] && (
          <div className="mt-12 max-w-sm">
            <div className="w-12 h-12 flex items-center justify-start flex-shrink-0 group-hover:scale-110 transition-transform">
              <img
                src={factors[4].icon}
                alt={factors[4].title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#1b221d] mt-5 leading-snug tracking-tight">
              {factors[4].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#5c685f] mt-2 leading-relaxed font-normal">
              {factors[4].desc}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
