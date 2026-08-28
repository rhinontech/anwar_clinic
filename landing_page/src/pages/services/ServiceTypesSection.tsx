"use client";

import React from "react";
import { COMPANY_NAME } from "@/config/constants";

interface ServiceTypeItem {
  title: string;
  desc: string;
  image: string;
  points: string[];
}

interface ServiceTypesSectionProps {
  title?: string;
  subtitle?: string;
  types?: ServiceTypeItem[];
}

const DEFAULT_TYPES: ServiceTypeItem[] = [
  {
    title: "FUE Hair Transplant",
    desc: "Hair follicles are implanted directly with the help of a Choi Pen, with a recovery time of about 10 days.",
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/09/FUE.webp",
    points: [
      "Offers precise control over angle, depth, and direction of each hair follicle.",
      "Minimally invasive, reducing trauma to the scalp.",
      "Faster healing and less visible scarring compared to traditional methods.",
    ],
  },
  {
    title: `${COMPANY_NAME} Technique`,
    desc: "Superfine Cole Punches are used for extracting follicles, and use SAVA implanters for the best results and a recovery time of about 5 days.",
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/08/QHT_1.webp",
    points: [
      "Advanced technique combining FUE precision with customized graft handling.",
      "Focuses on high survival rate of grafts with minimal follicle damage.",
      "Personalized treatment plan based on individual hair type and scalp condition.",
      "Suitable for individuals seeking safe, long-lasting, and natural restoration.",
    ],
  },
];

export default function ServiceTypesSection({
  title = "Hair Transplant Repair",
  subtitle = "To choose the best Corrective Hair Transplant technique, it’s important to know the methods available for it. These are:",
  types = DEFAULT_TYPES,
}: ServiceTypesSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eff5f1] overflow-hidden">
      <div className="qht-large-container">
        
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1b221d] tracking-tight leading-[1.18]">
            Types of {title}
          </h2>
          <p className="text-sm sm:text-base text-[#5c685f] mt-3.5 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {types.map((type, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between h-full bg-transparent"
            >
              <div>
                {/* Type Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1b221d] tracking-tight">
                  {type.title}
                </h3>

                {/* Type Description */}
                <p className="text-xs sm:text-sm text-[#5c685f] mt-2.5 leading-relaxed font-normal min-h-[40px]">
                  {type.desc}
                </p>

                {/* Visual Diagram Image */}
                <div className="my-5 rounded-3xl overflow-hidden bg-white p-3 sm:p-4 shadow-sm border border-gray-200/80 aspect-[16/11] flex items-center justify-center">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bullet Points List */}
              <ul className="space-y-2.5 pl-5 list-disc text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal marker:text-[#596d53]">
                {type.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
