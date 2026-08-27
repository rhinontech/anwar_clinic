"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/qhtData";
import { ChevronDown, Mail, Phone } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string>("01");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="qht-container max-w-4xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#162418]">
            Frequently Asked Questions
          </h2>
          <div className="mt-3 text-xs sm:text-sm text-gray-500 flex flex-wrap items-center justify-center gap-3">
            <span>Have more questions? Reach us directly at:</span>
            <a
              href="mailto:care@qhtclinic.com"
              className="text-[#1b392b] font-bold underline inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" /> care@qhtclinic.com
            </a>
            <span>or</span>
            <a
              href="tel:+919084726916"
              className="text-[#1b392b] font-bold underline inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> +91-9084726916
            </a>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    isOpen
                      ? "bg-[#1b392b] text-white"
                      : "bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isOpen ? "text-[#b1fc85]" : "text-[#1b392b]"
                      }`}
                    >
                      {faq.id}
                    </span>
                    <span className="text-sm sm:text-base font-bold">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#b1fc85]" : "text-gray-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-[#f8faf8] text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="/faq/"
            className="inline-block px-8 py-3 rounded-full border border-gray-300 text-xs font-bold text-gray-800 hover:border-[#1b392b] hover:bg-[#1b392b] hover:text-white transition-all shadow-sm"
          >
            View More FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
