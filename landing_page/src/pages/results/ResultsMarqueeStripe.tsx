"use client";

import React from "react";

interface ResultsMarqueeStripeProps {
  items?: string[];
}

const DEFAULT_MARQUEE_ITEMS = [
  "Personalized Hairline Design",
  "Real Results",
  "Confidence Restored",
  "100% Natural Look",
  "Graft By Graft Procedure",
  "No Visible Scarring",
  "Expert Surgeons",
  "High Density Growth",
];

export default function ResultsMarqueeStripe({
  items = DEFAULT_MARQUEE_ITEMS,
}: ResultsMarqueeStripeProps) {
  // Duplicate array 3 times for completely seamless infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#596d53] text-white py-3.5 sm:py-4 overflow-hidden border-y border-[#4a5c45] select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4 flex-shrink-0"
          >
            <span className="text-xs sm:text-lg font-medium text-white/95 tracking-wide whitespace-nowrap">
              {item}
            </span>
            <span className="text-[9px] text-[#b1fc85] opacity-90 select-none">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
