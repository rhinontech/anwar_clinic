"use client";

import React from "react";
import Link from "next/link";

interface ClinicReviewsMapSectionProps {
  onOpenConsultation?: () => void;
}

export default function ClinicReviewsMapSection({
  onOpenConsultation,
}: ClinicReviewsMapSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eff5f1] overflow-hidden border-t border-gray-200/50">
      <div className="qht-large-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] tracking-tight leading-[1.14]">
              Reviews & Testimonials <br />
              by our clients.
            </h2>

            <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal max-w-md">
              Read genuine reviews and testimonials from our satisfied clients who experienced successful hair restoration results.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Explore Reviews CTA */}
              <Link
                href="/results/"
                className="bg-[#52664d] hover:bg-[#43543e] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-all active:scale-95 duration-150 inline-block text-center"
              >
                Explore Reviews
              </Link>

              {/* Contact Us CTA */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="border border-[#52664d]/60 hover:bg-[#52664d] hover:text-white text-[#2c3d2a] font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer text-center"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column: India Map with Patient Reviews */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px]">
              <img
                src="/images/Map.webp"
                alt="Reviews and Testimonials across India"
                className="w-full h-auto object-contain select-none drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/Map.webp";
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
