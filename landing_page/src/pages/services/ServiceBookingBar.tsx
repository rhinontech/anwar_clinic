"use client";

import React from "react";

interface ServiceBookingBarProps {
  title?: string;
  patientCountText?: string;
  onOpenConsultation?: () => void;
}

export default function ServiceBookingBar({
  title = "Trusted Hair Restoration Experts — Schedule Your Evaluation Today",
  patientCountText = "Over 4,500+ successful restorations performed",
  onOpenConsultation,
}: ServiceBookingBarProps) {
  return (
    <section className="py-8 sm:py-10 bg-[#596d53] text-white overflow-hidden">
      <div className="qht-large-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[500] text-white tracking-tight leading-tight text-center lg:text-left max-w-xl">
            {title}
          </h2>

          {/* Center Social Proof (Avatars + Count) */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:block w-px h-10 bg-white/30" />
            
            <div className="flex items-center gap-3">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/09/Avatar-.webp"
                alt="Booked Patients"
                className="h-9 sm:h-10 object-contain"
              />
              <span className="text-xs sm:text-sm font-medium text-white/95 whitespace-nowrap">
                {patientCountText}
              </span>
            </div>

            <div className="hidden lg:block w-px h-10 bg-white/30" />
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenConsultation}
              className="bg-white hover:bg-gray-100 text-[#1b221d] font-bold text-sm sm:text-base py-3 px-8 sm:px-10 rounded-full shadow-md transition-all active:scale-95 duration-150"
            >
              Book Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
