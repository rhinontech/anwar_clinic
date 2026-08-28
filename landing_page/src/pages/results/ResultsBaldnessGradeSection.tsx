"use client";

import React from "react";
import { Clock, FlaskConical, Stethoscope, BadgePercent } from "lucide-react";
import { COMPANY_NAME } from "@/config/constants";

interface ResultsBaldnessGradeSectionProps {
  onOpenConsultation?: () => void;
}

export default function ResultsBaldnessGradeSection({
  onOpenConsultation,
}: ResultsBaldnessGradeSectionProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">

        {/* Dark Olive Rounded Container */}
        <div className="bg-[#52664d] rounded-3xl sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Grade Chart Illustration Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-white/10 border border-white/20 shadow-lg relative group">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
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
              Answer a few questions to see if {COMPANY_NAME} is right for you and we’ll recommend a personalized plan based on your results.
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
