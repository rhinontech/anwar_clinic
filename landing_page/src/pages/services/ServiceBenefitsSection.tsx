"use client";

import React from "react";
import { COMPANY_NAME } from "@/config/constants";

interface BenefitItem {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

interface ServiceBenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: BenefitItem[];
  onOpenConsultation?: () => void;
}

const DEFAULT_BENEFITS: BenefitItem[] = [
  {
    id: 1,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-benefit-icon-1.webp",
    title: "Hairline Restoration",
    desc: "The unnatural hairlines are corrected, and a natural look is implemented.",
  },
  {
    id: 2,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-2.png",
    title: "Permanent Results",
    desc: `The Corrective Hair Transplant procedures at ${COMPANY_NAME} Clinic ensure natural and long-lasting results.`,
  },
  {
    id: 3,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-3.png",
    title: "Using Advanced techniques",
    desc: `The repair methods used by experts at ${COMPANY_NAME} Clinic are safe and leave negligible scars.`,
  },
  {
    id: 4,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-4.png",
    title: "Quick Healing Process",
    desc: "New methods of Hair Transplant Repair are less invasive with less recovery time.",
  },
  {
    id: 5,
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/08/repair-icon-5.png",
    title: "Customised Repair",
    desc: `${COMPANY_NAME} Clinic makes sure that the repair plan is tailored to the needs and satisfaction of the patient.`,
  },
];

export default function ServiceBenefitsSection({
  title = "Hair Transplant Repair",
  subtitle,
  benefits = DEFAULT_BENEFITS,
  onOpenConsultation,
}: ServiceBenefitsSectionProps) {
  const defaultSubtitle = `The ${title} fixes transplant mistakes and gives a natural look.\nWe at ${COMPANY_NAME} Clinic benefits patients in the following ways:`;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#38493a] text-white overflow-hidden">
      <div className="qht-large-container">
        
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
            Benefits of {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-3.5 leading-relaxed font-normal whitespace-pre-line">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* Benefits List with Dividers */}
        <div className="border-t border-white/20">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="py-7 sm:py-9 border-b border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 group"
            >
              {/* Left & Middle: Circular Outline Icon + Title */}
              <div className="flex items-center gap-5 sm:gap-7 md:w-1/2">
                {/* Circular Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#8ea987]/60 bg-white/5 flex items-center justify-center p-3 flex-shrink-0 group-hover:border-white/80 group-hover:bg-white/10 transition-all duration-300">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Benefit Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Right: Description */}
              <div className="md:w-1/2 md:pl-6">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA */}
        {onOpenConsultation && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={onOpenConsultation}
              className="bg-[#596d53] hover:bg-[#495c44] text-white font-semibold text-sm sm:text-base py-3.5 px-9 rounded-full shadow-lg transition-all active:scale-95 duration-150"
            >
              Book an Appointment
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
