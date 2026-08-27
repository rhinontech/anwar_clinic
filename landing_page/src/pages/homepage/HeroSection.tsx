"use client";

import React from "react";
import { HERO_SLIDES } from "@/data/qhtData";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const duplicatedSlides = [...HERO_SLIDES, ...HERO_SLIDES];

  return (
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 bg-[#f4f7f4] overflow-hidden">
      <div className="qht-container text-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#222222] tracking-tight leading-[1.2] max-w-4xl mx-auto">
          Think the best hair transplant clinic in India,
          <br />
          <span className="text-[#586d52] font-bold inline-block mt-1">
            Think QHT
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#5c645e] max-w-2xl mx-auto font-normal">
          Safe, natural, and trusted — restoring hair, style, and confidence for 15,000+ patients
        </p>

        {/* Primary CTA Button */}
        <div className="mt-6 sm:mt-7 flex justify-center">
          <button
            onClick={onOpenConsultation}
            className="bg-[#596d53] hover:bg-[#495c44] text-white font-medium text-sm sm:text-[15px] py-3 px-8 rounded-full shadow-md transition-all duration-200 active:scale-95"
          >
            Book Your Free Consultation Now
          </button>
        </div>
      </div>

      {/* Infinite Horizontal Showcase Carousel */}
      <div className="mt-10 sm:mt-12 relative w-full overflow-hidden">
        <div className="animate-marquee gap-4 sm:gap-5">
          {duplicatedSlides.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[320px] md:w-[340px] rounded-[24px] overflow-hidden flex-shrink-0 bg-[#858f84] p-2.5 shadow-sm"
            >
              {/* Card Top Label: Name + Location */}
              <div className="px-3 pt-1 pb-2 flex items-baseline gap-1.5 text-white">
                <span className="font-bold text-sm sm:text-base tracking-tight">
                  {slide.name}
                </span>
                {slide.location && (
                  <span className="text-[11px] text-white/80 font-normal">
                    {slide.location.replace(", India", "")}
                  </span>
                )}
              </div>

              {/* Card Image */}
              <div className="relative w-full h-[240px] sm:h-[270px] rounded-[18px] overflow-hidden bg-white">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-full object-cover object-center"
                  loading={idx < 4 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
