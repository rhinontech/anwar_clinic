"use client";

import React, { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceResultsSectionProps {
  title?: string;
  subtitle?: string;
  results?: ResultPair[];
  onOpenConsultation?: () => void;
}

interface ResultPair {
  id: number;
  name: string;
  beforeImg: string;
  afterImg: string;
}

const DEFAULT_RESULTS: ResultPair[] = [
  {
    id: 1,
    name: "Irfan",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Post.webp",
  },
  {
    id: 2,
    name: "Kshitij Ahuja",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Post.webp",
  },
  {
    id: 3,
    name: "Pranav Meshram",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Post.webp",
  },
  {
    id: 4,
    name: "Praveen Kumar",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Post.webp",
  },
  {
    id: 5,
    name: "Puneet Chandra",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Post.webp",
  },
  {
    id: 6,
    name: "Rishabh",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Rishabh-Grade-3-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Rishabh-Grade-3-Post.webp",
  },
];

function ServiceComparisonCard({ item }: { item: ResultPair }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative w-full aspect-square sm:aspect-[4/3.8] overflow-hidden select-none bg-[#d4d8d6] cursor-ew-resize touch-none rounded-[28px] sm:rounded-[32px] shadow-md border border-white/10"
    >
      {/* After Image (Full Base - Right Side) */}
      <img
        src={item.afterImg}
        alt={`${item.name} After`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before Image (Clipped with clip-path - Left Side, zero distortion) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={item.beforeImg}
          alt={`${item.name} Before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Before & After Clean Labels */}
      <span className="absolute top-4 left-5 sm:top-5 sm:left-6 text-xs sm:text-sm font-semibold text-gray-800 z-20 pointer-events-none drop-shadow-sm">
        Before
      </span>
      <span className="absolute top-4 right-5 sm:top-5 sm:right-6 text-xs sm:text-sm font-semibold text-gray-800 z-20 pointer-events-none drop-shadow-sm">
        After
      </span>

      {/* Center Black Handle Button */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2 flex items-center justify-center"
        style={{ left: `${position}%` }}
      >
        <div className="relative z-40 w-10 h-10 sm:w-11 sm:h-11 bg-black rounded-xl text-white flex items-center justify-center shadow-2xl transition-transform active:scale-95">
          <ChevronLeft className="w-3.5 h-3.5 -mr-1 text-white" />
          <ChevronRight className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function ServiceResultsSection({
  title = "Hair Transplant Repair",
  subtitle = "Corrective Hair Transplant at QHT Clinic focuses on hairline design, hair density, and no-scar growth, for long-term results in people with failed Hair Transplants.",
  results = DEFAULT_RESULTS,
  onOpenConsultation,
}: ServiceResultsSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#38493a] text-white overflow-hidden">
      <div className="qht-large-container relative z-10">
        
        {/* Top Header Row with Vector Logo Motif */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 lg:mb-16 relative">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
              Result of {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* QHT Circular Vector Motif */}
          <div className="flex-shrink-0 opacity-90">
            <img
              src="https://www.qhtclinic.com/wp-content/themes/qht/assets/img/sd-result-vector.webp"
              alt="QHT Motif"
              className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
            />
          </div>
        </div>

        {/* 3-Column Results Cards Grid using TransformationGallery component architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {results.map((item) => (
            <ServiceComparisonCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        {onOpenConsultation && (
          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="bg-[#596d53] hover:bg-[#495c44] text-white font-semibold text-sm sm:text-base py-3.5 px-9 rounded-full shadow-lg transition-all active:scale-95"
            >
              Book an Appointment
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
