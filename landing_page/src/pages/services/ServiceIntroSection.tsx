"use client";

import React from "react";

interface ServiceIntroSectionProps {
  title: string;
  slug?: string;
  onOpenConsultation?: () => void;
}

export default function ServiceIntroSection({
  title,
  slug,
  onOpenConsultation,
}: ServiceIntroSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="qht-large-container space-y-20 lg:space-y-28">
        
        {/* ========================================================================= */}
        {/* BLOCK 1: Text on Left, Image with pointer labels on Right */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1b221d] tracking-tight leading-[1.18]">
              What is {title}?
            </h2>

            <p className="text-base sm:text-lg text-[#202922] font-semibold leading-snug">
              Restore your confidence by getting the right {title} solutions.
            </p>

            <p className="text-sm sm:text-base text-[#556358] leading-relaxed font-normal">
              {title} is a procedure that can be used to correct the results of a hair transplant that has not been successful. It helps restore hairline and density, as well as conceal scars caused by earlier procedures.
            </p>

            <p className="text-sm sm:text-base text-[#556358] leading-relaxed font-normal">
              At QHT Clinic, our experts use advanced techniques and treatment is centered on nurturing natural growth, avoiding complications, and for long-lasting results.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#596d53] hover:bg-[#495b44] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-full shadow-md transition-all active:scale-95 duration-150"
              >
                Book an Appointment
              </button>
            </div>
          </div>

          {/* Right Column: Image with Pointer Annotations */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-[#f4f7f4] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/09/repair-img-1.jpg"
                alt={`What is ${title}`}
                className="w-full h-full object-cover object-center"
              />

              {/* Pointer Annotation 1: Punch Removal */}
              <div className="absolute top-[16%] left-[30%] sm:left-[35%] flex flex-col items-center pointer-events-none">
                <span className="text-xs sm:text-sm font-medium text-black/80 bg-white/60 px-2 py-0.5 rounded backdrop-blur-[2px] border-b border-black/60 shadow-xs mb-1">
                  Punch removal
                </span>
                <div className="w-[1px] h-8 sm:h-12 bg-black/60 rotate-[25deg] origin-top"></div>
                <div className="w-2 h-2 rounded-full bg-black/80 -mt-1 ml-4"></div>
              </div>

              {/* Pointer Annotation 2: Graft Correction */}
              <div className="absolute top-[40%] right-[6%] sm:right-[10%] flex items-center gap-2 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-black/80"></div>
                <div className="w-10 sm:w-16 h-[1.5px] bg-black/60"></div>
                <span className="text-xs sm:text-sm font-medium text-black/80 bg-white/60 px-2 py-0.5 rounded backdrop-blur-[2px] border-b border-black/60 shadow-xs">
                  Graft correction
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 2: Image on Left, Text on Right */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Combing Hair Close-Up Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-[#f4f7f4] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/09/repair-img-2.jpg"
                alt={`${title} in India`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1b221d] tracking-tight leading-[1.18]">
              {title} in India
            </h2>

            <p className="text-sm sm:text-base text-[#556358] leading-relaxed font-normal">
              Failed Hair transplants are prevalent due to unskilled surgeons, leading to unfavourable results. In India, the Failed Hair Transplant Correction is performed by experts using our own Quick Hair Transplant method. Because of such skilled surgeons, like those at QHT Clinic, and affordability, India is a trusted hub globally.
            </p>

            <p className="text-sm sm:text-base text-[#556358] leading-relaxed font-normal">
              Opting for the QHT Clinic ensures long-term success and safe corrections.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#596d53] hover:bg-[#495b44] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-full shadow-md transition-all active:scale-95 duration-150"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
