"use client";

import React, { useState } from "react";
import { SERVICES_ACCORDION } from "@/data/qhtData";
import { ChevronDown, ArrowRight } from "lucide-react";

interface ServicesAccordionProps {
  onOpenConsultation: () => void;
}

export default function ServicesAccordion({
  onOpenConsultation,
}: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-white">
      <div className="qht-container">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#162418]">
            Our Services
          </h2>
          <span className="w-10 h-10 rounded-full bg-[#1b392b] text-white font-bold flex items-center justify-center text-base">
            2
          </span>
        </div>

        {/* Intro Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-10">
          <h3 className="md:col-span-6 text-xl sm:text-2xl font-bold text-[#162418] leading-snug">
            From Balding to Believing, because Hair restoration is about more than hair.
          </h3>
          <p className="md:col-span-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
            At QHT Clinic, our services are planned to help you regain confidence, identity, and the look you always wished for with proven clinical excellence.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {SERVICES_ACCORDION.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={service.id}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Accordion Head */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    isOpen ? "bg-[#1b392b] text-white" : "bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                        isOpen
                          ? "bg-[#b1fc85] text-[#162418]"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      0{service.id}
                    </span>
                    <span className="text-base sm:text-lg font-bold">
                      {service.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#b1fc85]" : "text-gray-500"
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="p-6 sm:p-8 bg-[#f8faf8] animate-in fade-in duration-200 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-7 space-y-3">
                        <h4 className="text-sm sm:text-base font-bold text-[#162418]">
                          {service.subtitle}
                        </h4>
                        {service.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                        <div className="pt-3">
                          <button
                            onClick={onOpenConsultation}
                            className="qht-btn-outline-green text-xs py-2 px-5 rounded-full inline-flex items-center gap-1.5 font-bold"
                          >
                            <span>Book Consultation For This Service</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-[4/3]">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
