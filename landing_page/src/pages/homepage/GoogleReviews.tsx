"use client";

import React, { useRef, useState, useEffect } from "react";
import { GOOGLE_REVIEWS } from "@/data/qhtData";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface GoogleReviewsProps {
  className?: string;
}

export default function GoogleReviews({ className = "" }: GoogleReviewsProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-[#f8faf8] overflow-hidden ${className}`}>
      <div className="qht-large-container">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-800 shadow-xs mb-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.27v3.15C3.25 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.27c-.82 1.63-1.27 3.48-1.27 5.39s.45 3.76 1.27 5.39l4.01-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.61l4.01 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                />
              </svg>
              <span>Verified Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-[#1b221d] tracking-tight">
              Reviews on Google
            </h2>
          </div>

          {/* Right: Aggregate Score + Prev/Next Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-gray-200 shadow-xs">
              <span className="text-3xl font-extrabold text-[#1b221d] font-mono">
                4.8
              </span>
              <div>
                <div className="flex text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-gray-500 font-medium">
                  3,184+ Verified Patient Reviews
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 hover:bg-[#596d53] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 hover:bg-[#596d53] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Horizontal Slider Track */}
        <div
          ref={sliderRef}
          className="flex gap-6 sm:gap-7 overflow-x-auto no-scrollbar pt-8 pb-8 snap-x snap-mandatory"
        >
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="flex-shrink-0 w-[280px] sm:w-[310px] md:w-[320px] bg-white rounded-3xl p-6 sm:p-7 pt-10 border border-[#e4eae4] shadow-xs flex flex-col justify-between relative snap-start hover:shadow-md transition-shadow"
            >
              {/* Floating Top Center Avatar with circular border */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#1b392b] p-0.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Top Right Decorative Quotes */}
              <span className="absolute top-4 right-5 text-3xl font-serif text-gray-200 select-none pointer-events-none">
                “
              </span>

              {/* Author Name + Stars + Verified Badge */}
              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                  {rev.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5 mt-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1877f2] text-white flex items-center justify-center text-[8px] font-bold">
                    ✓
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed text-center font-normal line-clamp-4">
                {rev.review}
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                <span>Verified Patient</span>
                <span>Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Scroll Progress Track with Left/Right Arrows */}
        <div className="mt-4 flex items-center gap-3 max-w-4xl mx-auto px-4">
          <button
            onClick={() => scroll("left")}
            className="text-gray-400 hover:text-gray-700 text-xs"
          >
            ◀
          </button>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-500 rounded-full transition-all duration-150"
              style={{
                width: "25%",
                transform: `translateX(${scrollProgress * 3}%)`,
              }}
            />
          </div>
          <button
            onClick={() => scroll("right")}
            className="text-gray-400 hover:text-gray-700 text-xs"
          >
            ▶
          </button>
        </div>

      </div>
    </section>
  );
}
