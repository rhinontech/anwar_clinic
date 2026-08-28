"use client";

import React from "react";
import { COMPANY_NAME } from "@/config/constants";

interface ResultsAboutClinicSectionProps {
  title?: string;
}

export default function ResultsAboutClinicSection({
  title = "Best Hair Transplant Clinic in India",
}: ResultsAboutClinicSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="qht-large-container">
        
        <div className="max-w-4xl space-y-6">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1b221d] tracking-tight leading-tight">
            {title}
          </h2>

          {/* Paragraph 1 */}
          <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal">
            When it comes to choosing the best hair transplant clinic in India, {COMPANY_NAME} Clinic consistently ranks at the top. Renowned for its advanced techniques, highly experienced surgeons, and exceptional patient outcomes, {COMPANY_NAME} Clinic has become a trusted name in the field of hair restoration.
          </p>

          {/* Paragraph 2 */}
          <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal">
            At {COMPANY_NAME} Clinic, patients benefit from the latest innovations such as FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation), combined with personalized care and state-of-the-art facilities. Whether you’re dealing with male pattern baldness, thinning hair, or seeking beard and eyebrow transplants, {COMPANY_NAME} Clinic offers customized solutions designed to deliver natural, permanent results.
          </p>

          {/* Subheading & Bullet Points */}
          <div className="pt-3 space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-[#1b221d]">
              Why {COMPANY_NAME} Clinic is the Best
            </h3>

            <ul className="space-y-2 text-xs sm:text-sm text-[#5c685f] list-disc list-inside">
              <li>
                <span className="font-normal">Board-certified hair transplant specialists</span>
              </li>
              <li>
                <span className="font-normal">High graft survival rate and natural hairline design</span>
              </li>
              <li>
                <span className="font-normal">Thousands of satisfied clients from India and abroad</span>
              </li>
              <li>
                <span className="font-normal">Hygienic, fully equipped operating suites</span>
              </li>
              <li>
                <span className="font-normal">Transparent pricing with no hidden charges</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
