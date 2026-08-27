"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";

interface ResultCardItem {
  id: number;
  name: string;
  beforeImg: string;
  afterImg: string;
}

const COST_RESULTS_CARDS: ResultCardItem[] = [
  {
    id: 1,
    name: "Devendra",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Post.webp",
  },
  {
    id: 2,
    name: "Harsh Sharma",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Post.webp",
  },
  {
    id: 3,
    name: "Probir Das",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Post.webp",
  },
  {
    id: 4,
    name: "Ajay",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Post.webp",
  },
  {
    id: 5,
    name: "Dheerendra",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Post.webp",
  },
  {
    id: 6,
    name: "Amit Kumar",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Sagar-Kumar-Grade-4A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Sagar-Kumar-Grade-4A-Post.webp",
  },
];

function InteractiveComparisonCard({ item }: { item: ResultCardItem }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
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
      className="relative w-full aspect-[4/3.3] overflow-hidden select-none bg-gray-900 cursor-ew-resize touch-none rounded-[28px] sm:rounded-[32px] shadow-lg border border-white/15 group"
    >
      {/* AFTER IMAGE (Right Base Layer) */}
      <img
        src={item.afterImg}
        alt={`${item.name} After`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* BEFORE IMAGE (Left Clipped Layer) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={item.beforeImg}
          alt={`${item.name} Before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-md"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Central Slider Knob */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-md bg-black text-white flex items-center justify-center shadow-lg border border-white/20">
          <span className="text-[10px] font-bold tracking-tight">
            ‹›
          </span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3.5 left-3.5 pointer-events-none text-white/90 text-xs font-semibold drop-shadow-sm">
        Before
      </div>
      <div className="absolute top-3.5 right-3.5 pointer-events-none text-white/90 text-xs font-semibold drop-shadow-sm">
        After
      </div>
    </div>
  );
}

export default function CostResultsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#485942] text-white overflow-hidden">
      <div className="qht-large-container relative z-10">
        
        {/* Header Row with Vector Motif */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15]">
              Results of Hair Transplant
            </h2>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
              See real transformations delivered through QHT’s proprietary technique. Every result reflects precision graft handling, optimal density, and natural-looking outcomes - designed by experienced surgeons with attention to detail.
            </p>
          </div>

          {/* QHT Circular Root Vector Motif */}
          <div className="flex-shrink-0">
            <img
              src="https://www.qhtclinic.com/wp-content/themes/qht/assets/img/sd-result-vector.webp"
              alt="QHT Motif"
              className="w-24 h-24 lg:w-32 lg:h-32 object-contain opacity-90"
            />
          </div>
        </div>

        {/* 6 Cards 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COST_RESULTS_CARDS.map((card) => (
            <InteractiveComparisonCard key={card.id} item={card} />
          ))}
        </div>

        {/* Explore More Results Button centered with horizontal line */}
        <div className="relative mt-14 sm:mt-16 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>
          <div className="relative z-10 bg-[#485942] px-6">
            <Link
              href="/results"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#1b221d] font-bold text-xs sm:text-sm py-3 px-8 rounded-full shadow-lg transition-all active:scale-95 duration-150"
            >
              <span>Explore More Results</span>
              <span className="text-sm font-black">+</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
