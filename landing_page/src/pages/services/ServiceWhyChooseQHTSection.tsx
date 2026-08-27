"use client";

import React from "react";

interface FeatureCard {
  id: number;
  image: string;
  title: string;
  desc: string;
}

interface ServiceWhyChooseQHTSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
  onOpenConsultation?: () => void;
}

const DEFAULT_FEATURES: FeatureCard[] = [
  {
    id: 1,
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/08/transplant-img-3.webp",
    title: "Celebrity Trusted",
    desc: "QHT Clinic is trusted by celebrities for their Hair Transplant Repair.",
  },
  {
    id: 2,
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/08/transplant-img-4.webp",
    title: "Clinical Expertise",
    desc: "With years of experience in handling Hair Transplant Repair cases, QHT Clinic delivers the best results.",
  },
  {
    id: 3,
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/09/repair-img-2.jpg",
    title: "Natural Results.",
    desc: "Our expert surgeons and methods give natural hairlines and improved density in cases of Hair Transplant Repair.",
  },
  {
    id: 4,
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/08/transplant-img-6.webp",
    title: "Best Facilities",
    desc: "QHT clinic is equipped with the best technology and advanced techniques to yield a seamless experience.",
  },
];

export default function ServiceWhyChooseQHTSection({
  title = "Hair Transplant Repair",
  subtitle = "QHT Hair Transplants and Hair Transplant Repair services provide the right techniques, surgeons, natural results, the least recovery time, and proper aftercare to the patients for long-term success.",
  features = DEFAULT_FEATURES,
  onOpenConsultation,
}: ServiceWhyChooseQHTSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#38493a] text-white overflow-hidden">
      <div className="qht-large-container">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] max-w-xl">
            Why Choose QHT for
            <br />
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-md leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* 3-Column Card Grid (4 Photo Cards + 1 Lime Review CTA Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          
          {/* Photo Cards */}
          {features.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3.8] rounded-3xl overflow-hidden shadow-lg border border-white/10 group bg-black/20"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Gradient Overlay for Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-7">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

          {/* 5th Card: Lime/Sage Review & CTA Box */}
          <div className="aspect-[4/3.8] rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-[#bde876] text-[#1b221d] shadow-lg">
            <div className="space-y-4">
              {/* Overlapping Patient Avatars */}
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-wc-avatars.webp"
                alt="Satisfied Patient Avatars"
                className="h-10 sm:h-11 object-contain"
              />

              {/* Rating Text */}
              <p className="text-base sm:text-lg font-normal text-[#1b221d] leading-snug">
                <span className="font-bold text-[#1b221d]">4,700 satisfied patients</span>{" "}
                achieved lasting results with a 100% success rate.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onOpenConsultation}
                className="bg-[#596d53] hover:bg-[#495b44] text-white font-bold text-xs sm:text-sm py-3 px-8 rounded-full shadow-md transition-all active:scale-95 duration-150"
              >
                Book Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
