"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
}

export const DEFAULT_BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: "Complete Hair Regrowth Treatment System",
    description:
      "A comprehensive routine combining gentle cleansing, topical therapy, oral supplementation, and follicle nourishment in a single bundle for the treatment of genetic hair loss.",
  },
  {
    id: 2,
    title: "Supports Hair Growth Through a Multi-Step Approach",
    description:
      "Synergistically targets DHT inhibition, cellular microcirculation, and follicle nutritional uptake to extend the anagen growth phase.",
  },
  {
    id: 3,
    title: "Management of Progressive Male Pattern Hair Loss",
    description:
      "Clinically proven formulations that help arrest receding hairlines, improve vertex crown density, and strengthen fragile miniaturized follicles.",
  },
  {
    id: 4,
    title: "Premium Post-Hair Transplant Hair Care Kit",
    description:
      "Specially balanced pH levels and soothing botanical extracts protect newly implanted follicular units while speeding up donor area scalp recovery.",
  },
];

interface KeyBenefitsSectionProps {
  benefits?: BenefitItem[];
  image?: string;
}

export default function KeyBenefitsSection({
  benefits = DEFAULT_BENEFITS,
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
}: KeyBenefitsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="qht-large-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Clean Accordion */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5c685f] block mb-2">
                EXPLORE OUR
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b221d] tracking-tight leading-tight">
                Key Benefits
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#5c685f] leading-relaxed max-w-lg font-normal">
                Complete scalp activation, follicle nourishment, and nutritional support in a single structured routine designed to support hair growth.
              </p>
            </div>

            {/* Clean Accordion List */}
            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {benefits.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div key={item.id} className="py-4 sm:py-5 transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer select-none focus:outline-none"
                    >
                      <span
                        className={`text-base sm:text-[17px] font-bold leading-snug transition-colors pr-4 ${
                          isOpen ? "text-[#2e7d32]" : "text-[#1b221d] group-hover:text-[#2e7d32]"
                        }`}
                      >
                        {item.title}
                      </span>

                      <div className="text-gray-600 flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#2e7d32]" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-500 group-hover:text-[#1b221d]" />
                        )}
                      </div>
                    </button>

                    {/* Smooth Animated Description */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2.5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-[13px] text-[#5c685f] leading-relaxed font-normal pr-4">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Hero Portrait Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[4/5] shadow-lg border border-gray-100/90 bg-[#eadecc] relative">
              <img
                src={image}
                alt="Man holding hair growth pill capsule"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
