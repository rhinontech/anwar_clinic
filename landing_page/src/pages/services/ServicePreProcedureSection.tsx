"use client";

import React from "react";
import { COMPANY_NAME } from "@/config/constants";

interface PreProcedureTip {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

interface ServicePreProcedureSectionProps {
  title?: string;
  subtitle?: string;
  tips?: PreProcedureTip[];
}

const DEFAULT_TIPS: PreProcedureTip[] = [
  {
    id: 1,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-pre-procedure-icon-3.webp",
    title: "Avoid Alcohol or Smoking",
    desc: "Blood flow, graft survival, and recovery are improved.",
  },
  {
    id: 2,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-pre-procedure-icon-2.webp",
    title: "Avoid Blood Thinners",
    desc: "To avoid the risk of bleeding.",
  },
  {
    id: 3,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-pre-procedure-icon-1.webp",
    title: "Medical Evaluation",
    desc: `Past transplant details, medications, and overall health of the customer are taken at ${COMPANY_NAME} Clinic.`,
  },
  {
    id: 4,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/transplant-icon-8.png",
    title: "Scalp and Hair Hygiene",
    desc: "Ensure hygiene before surgery for a clean procedure.",
  },
];

export default function ServicePreProcedureSection({
  title = "Hair Transplant Repair",
  subtitle,
  tips = DEFAULT_TIPS,
}: ServicePreProcedureSectionProps) {
  const defaultSubtitle = `For a successful ${title}, some factors should be taken care of.`;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="qht-large-container">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1b221d] tracking-tight leading-[1.18] max-w-lg">
            Pre-Procedure Tips for
            <br />
            {title}
          </h2>
          <p className="text-sm sm:text-base text-[#5c685f] max-w-md leading-relaxed font-normal">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* 4-Column Tips with Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="flex flex-col justify-start lg:px-6 xl:px-8 first:lg:pl-0 last:lg:pr-0 group"
            >
              {/* Minimalist Outline Icon */}
              <div className="w-12 h-12 flex items-center justify-start flex-shrink-0 group-hover:scale-110 transition-transform">
                <img
                  src={tip.icon}
                  alt={tip.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Tip Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1b221d] mt-5 leading-snug tracking-tight">
                {tip.title}
              </h3>

              {/* Tip Description */}
              <p className="text-xs sm:text-sm text-[#5c685f] mt-2 leading-relaxed font-normal">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
