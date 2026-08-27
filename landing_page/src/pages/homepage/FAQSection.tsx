"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const COST_FAQ_ITEMS: FAQItem[] = [
  {
    id: "01",
    question: "What is the average hair transplant cost in India?",
    answer:
      "The hair transplant price in India varies according to the city. Metropolitan cities like Mumbai, Bangalore, and Pune have higher rates as compared to Tier 2 cities. The average range lies between ₹40,000 and ₹5,00,000. Consultation and scalp assessment are necessary to get a personalised estimate for the treatment.",
  },
  {
    id: "02",
    question: "What is the cost per graft in India?",
    answer:
      "In India, the cost per graft typically ranges between ₹50 and ₹120 depending on the surgical technique (FUT, FUE, or QHT) and surgeon expertise. QHT Clinic offers transparent per-graft pricing starting at ₹50 for FUT, ₹70 for FUE, and ₹100 for QHT.",
  },
  {
    id: "03",
    question: "Which hair transplant technique is best for me?",
    answer:
      "The best technique depends on your Norwood baldness grade, donor hair density, lifestyle, and aesthetic expectations. FUE and QHT are ideal for minimal scarring and faster recovery, while FUT is effective for high-volume graft harvesting in advanced stages.",
  },
  {
    id: "04",
    question: "Is a hair transplant a permanent solution?",
    answer:
      "Yes. The transplanted hair follicles are harvested from the DHT-resistant donor area (back and sides of the head). Once rooted in the recipient area, they retain their genetic properties and continue to grow naturally for a lifetime.",
  },
  {
    id: "05",
    question: "Are EMI options available at QHT Clinic?",
    answer:
      "Yes, QHT Clinic offers zero-cost EMI financing plans split across 3 to 24 months through leading banking and NBFC partners, ensuring quality hair restoration is accessible without financial strain.",
  },
];

interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
}

export default function FAQSection({
  items = COST_FAQ_ITEMS,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string>("01");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b221d] tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        {/* Clean Accordion List */}
        <div className="divide-y divide-gray-200">
          {items.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-5 sm:py-6 transition-colors">
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer select-none focus:outline-none"
                >
                  <div className="flex items-baseline gap-5 sm:gap-7 pr-4">
                    {/* Number 01, 02, etc. */}
                    <span className="text-xs sm:text-sm font-semibold text-[#5c685f] tracking-tight flex-shrink-0">
                      {faq.id}
                    </span>

                    {/* Question Text */}
                    <span className="text-sm sm:text-base font-bold text-[#1b221d] group-hover:text-[#596d53] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Smooth Rotating Chevron */}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180 text-[#1b221d]" : "text-gray-400 group-hover:text-gray-700"
                    }`}
                  />
                </button>

                {/* Smooth Animated Answer Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-[13.5px] text-[#5c685f] leading-relaxed pl-8 sm:pl-10 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
