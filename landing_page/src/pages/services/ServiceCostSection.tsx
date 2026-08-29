"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { COMPANY_NAME } from "@/config/constants";

interface CostFactor {
  id?: number;
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
  factorsSubtitle = "The cost of hair transplant repairs can be affected by the expertise of surgeons, techniques used, the clinic’s location, and the severity of the damage.",
  factors = DEFAULT_FACTORS,
}: ServiceCostSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#fafcfa] overflow-hidden">
      <div className="qht-large-container">

        {/* 1. TOP PART: Title + Cost Overview Paragraphs + Pricing Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-14 sm:pb-16 border-b border-gray-200/90">
          
          {/* Left Column: Heading + Descriptive Text */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] tracking-tight leading-[1.18]">
              {title} Cost in India
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-[#5c685f] leading-relaxed font-normal">
              {costOverview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            {/* Gray scroll down indicator */}
            <div className="pt-2 hidden sm:block">
              <ArrowDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Column: Comparative Cost Table */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.05)] border border-gray-100/90">
            <div className="divide-y divide-gray-100">
              <div className="py-4 first:pt-0 flex items-center justify-between">
                <span className="font-bold text-[#1b221d] text-base sm:text-lg">{COMPANY_NAME}</span>
                <span className="text-xs sm:text-sm font-semibold text-[#596d53] bg-[#eef4ee] px-3 py-1 rounded-full">
                  Highly Affordable, Mid-Ranged
                </span>
              </div>
              <div className="py-4 flex items-center justify-between text-sm sm:text-base text-gray-600 font-normal">
                <span className="font-medium text-gray-800">FUE</span>
                <span>INR 60,000 – INR 2,00,000</span>
              </div>
              <div className="py-4 flex items-center justify-between text-sm sm:text-base text-gray-600 font-normal">
                <span className="font-medium text-gray-800">FUT</span>
                <span>INR 30,000 - INR 150,000</span>
              </div>
              <div className="py-4 last:pb-0 flex items-center justify-between text-sm sm:text-base text-gray-600 font-normal">
                <span className="font-medium text-gray-800">{COMPANY_NAME}</span>
                <span className="font-bold text-[#1b221d]">INR 1,00,000 – INR 2,00,000 +</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. BOTTOM PART: Factors Affecting Cost */}
        <div className="pt-12 sm:pt-16">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12">
            <h3 className="text-2xl sm:text-3xl font-[500] text-[#1b221d] tracking-tight leading-snug max-w-md">
              Factors affecting the cost of {title}
            </h3>
            <p className="text-sm sm:text-base text-[#5c685f] max-w-xl leading-relaxed font-normal">
              {factorsSubtitle}
            </p>
          </div>

          {/* Dynamic 4-Column Factors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {factors.map((f, idx) => (
              <div
                key={f.id ?? idx}
                className="flex flex-col justify-start group bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl lg:rounded-none border border-gray-100 lg:border-none shadow-sm lg:shadow-none"
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
                <h4 className="text-lg sm:text-xl font-bold text-[#1b221d] mt-5 leading-snug tracking-tight">
                  {f.title}
                </h4>

                {/* Factor Description */}
                <p className="text-xs sm:text-sm text-[#5c685f] mt-2 leading-relaxed font-normal">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
