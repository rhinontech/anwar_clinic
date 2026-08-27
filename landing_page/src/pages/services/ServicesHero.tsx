"use client";

import React from "react";

interface ServicesHeroProps {
  onOpenConsultation?: () => void;
}

export default function ServicesHero({ onOpenConsultation }: ServicesHeroProps) {
  return (
    <section className="relative w-full bg-[#f4f7f4] bg-cover bg-right md:bg-center overflow-hidden min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] flex items-center"
      style={{
        backgroundImage: "url('https://www.qhtclinic.com/wp-content/themes/qht/assets/img/service-banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 35% center",
      }}
    >
      {/* Soft gradient overlay on mobile for optimal text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f4f7f4] via-[#f4f7f4]/85 to-transparent md:hidden pointer-events-none" />

      <div className="qht-large-container relative z-10 w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl">
          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#1f2721] tracking-tight leading-[1.12]">
            Best{" "}
            <span className="text-[#596d53] font-bold">
              Hair transplant
            </span>
            <br />
            Clinic In India.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-[19px] text-[#556358] font-normal leading-relaxed max-w-xl">
            Affordable and effective hair transplant solutions{" "}
            <br className="hidden sm:inline" />
            for men across India with expert care.
          </p>
        </div>
      </div>
    </section>
  );
}
