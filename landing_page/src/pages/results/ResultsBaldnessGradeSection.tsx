"use client";

import React from "react";
import { Clock, FlaskConical, Stethoscope, BadgePercent } from "lucide-react";

interface ResultsBaldnessGradeSectionProps {
  onOpenConsultation?: () => void;
}

export default function ResultsBaldnessGradeSection({
  onOpenConsultation,
}: ResultsBaldnessGradeSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#596d53] text-white overflow-hidden">
      <div className="qht-large-container">
        
        {/* Top Header + Number Badge [2] */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            What’s Your Baldness Grade
          </h2>
          <div className="w-8 h-8 rounded-lg border border-white/35 flex items-center justify-center text-xs font-semibold text-white/90 shadow-2xs">
            2
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Baldness Grade Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 group">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/08/sd-why-us-thumb.webp"
                alt="Baldness Grade Assessment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Assessment Details & Features */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight tracking-tight">
              Finally, get the right treatment <br className="hidden sm:block" />
              for your hair loss.
            </h3>

            {/* Time Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/85 font-medium">
              <Clock className="w-4 h-4 text-white/75" />
              <span>Takes approximately 1 min</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal max-w-lg">
              Answer a few questions to see if QHT is right for you and we’ll recommend a personalized plan based on your results.
            </p>

            {/* 3 Key Features List */}
            <div className="pt-2 space-y-3.5">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white/80">
                  <FlaskConical className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span>Clinically proven formula & high graft survival</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white/80">
                  <Stethoscope className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span>Guidance from hair loss experts & surgeons</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white/80">
                  <BadgePercent className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span>Affordable treatment options with transparent pricing</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="bg-white hover:bg-gray-100 text-[#1b221d] font-bold text-sm sm:text-base py-3.5 px-10 rounded-full shadow-lg transition-all active:scale-95 duration-150"
              >
                Get Started
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
