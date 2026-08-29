"use client";

import React from "react";
import { COMPANY_NAME } from "@/config/constants";

interface CauseItem {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

interface ServiceCausesSectionProps {
  title?: string;
  subtitle?: string;
  causes?: CauseItem[];
}

const DEFAULT_CAUSES: CauseItem[] = [
  {
    id: 1,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-11.png",
    title: "Poor Hairline",
    desc: "An irregular hairline may need proper correction for the desired look.",
  },
  {
    id: 2,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/transplant-icon-14.png",
    title: "Graft Survival",
    desc: `Failed grafts make Hair Transplant Repair at ${COMPANY_NAME} Clinic essential.`,
  },
  {
    id: 3,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/transplant-icon-15.png",
    title: "Visible Scars",
    desc: "The scars caused due to improper methods may need repair.",
  },
  {
    id: 4,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-14.png",
    title: "Poor Density",
    desc: "Patchy hair growth may lead to patients opting for full coverage.",
  },
  {
    id: 5,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-15.png",
    title: "Patient Personal Factors",
    desc: "Before a Hair Transplant Repair, if the patient consumes alcohol or smokes, then the healing is affected.",
  },
];

export default function ServiceCausesSection({
  title = "Hair Transplant Repair",
  subtitle = `People need early Hair Transplant Repair for proper treatment, and ${COMPANY_NAME} Clinic offers expert care for lasting results.`,
  causes = DEFAULT_CAUSES,
}: ServiceCausesSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="qht-large-container">
        
        {/* 3-Column Grid: First Cell is Section Heading, other 5 are Cause Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Cell 1: Section Heading & Subtitle */}
          <div className="flex flex-col justify-center space-y-4 pr-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] tracking-tight leading-[1.18]">
              Cause of Early
              <br />
              {title}
              <br />
              Loss
            </h2>
            <p className="text-sm sm:text-base text-[#5c685f] leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Cells 2 to 6: Pale Mint Rounded Cards */}
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="bg-[#eff5f1] rounded-3xl p-7 sm:p-8 flex flex-col justify-start hover:shadow-md transition-shadow duration-200 group"
            >
              {/* Minimalist Outline Icon */}
              <div className="w-12 h-12 flex items-center justify-start flex-shrink-0 group-hover:scale-110 transition-transform">
                <img
                  src={cause.icon}
                  alt={cause.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1b221d] mt-5 leading-snug tracking-tight">
                {cause.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-sm text-[#5c685f] mt-2.5 leading-relaxed font-normal">
                {cause.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
