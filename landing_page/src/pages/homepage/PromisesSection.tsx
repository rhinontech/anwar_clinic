"use client";

import React, { useRef } from "react";
import { PROMISES_LIST, PROMISE_GALLERY_IMAGES } from "@/data/qhtData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PromisesSection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 360;
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="qht-container">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#162418]">
            Our Promises
          </h2>
          <span className="w-10 h-10 rounded-full bg-[#1b392b] text-white font-bold flex items-center justify-center text-base">
            1
          </span>
        </div>

        {/* 2 Column Layout: Hero Visual & 5 Promises */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Promise Statement & Image */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <img
                src="https://www.qhtclinic.com/wp-content/uploads/2025/11/Our-Promise.webp"
                alt="Our Promise"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#162418] leading-snug">
              Natural. Safe. Permanent Results You’ll Wear with Confidence for Life.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every procedure is conducted under strict clinical protocols by QHT-certified specialists in world-class operating theaters.
            </p>
          </div>

          {/* Right Column: 5 Numbered Promises */}
          <div className="lg:col-span-7 space-y-4">
            {PROMISES_LIST.map((promise) => (
              <div
                key={promise.id}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#f8faf8] border border-gray-100 hover:border-[#1b392b]/30 hover:bg-[#f1f5f2] transition-all duration-200"
              >
                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-[#1b392b] text-white font-bold flex items-center justify-center text-xs">
                  {promise.id}
                </span>
                <div>
                  <h4 className="text-base font-bold text-[#162418]">
                    {promise.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {promise.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OT & Surgical Gallery Slider */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b392b]">
                World-Class Clinical Infrastructure
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#162418]">
                Operating Suites & Precision Hairline Design
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:bg-[#1b392b] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:bg-[#1b392b] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={galleryRef}
            className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory"
          >
            {PROMISE_GALLERY_IMAGES.map((imgUrl, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 sm:w-80 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-100 snap-start group"
              >
                <img
                  src={imgUrl}
                  alt={`Surgical Facility ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
