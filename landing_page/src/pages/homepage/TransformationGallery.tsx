"use client";

import React, { useState, useRef, useCallback } from "react";
import { TRANSFORMATION_GALLERY } from "@/data/qhtData";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface TransformationGalleryProps {
  onOpenConsultation: () => void;
}

interface ComparisonCardProps {
  item: (typeof TRANSFORMATION_GALLERY)[0];
  onOpenConsultation: () => void;
}

function ComparisonCard({ item, onOpenConsultation }: ComparisonCardProps) {
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
    <div className="flex flex-col bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Before / After Interactive Comparison Box */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative w-full aspect-square sm:aspect-[4/3.8] overflow-hidden select-none bg-[#d4d8d6] cursor-ew-resize touch-none rounded-[28px] sm:rounded-[32px]"
      >
        {/* After Image (Full Base - Right Side) */}
        <img
          src={item.afterImg}
          alt={`${item.patientName} After`}
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
            alt={`${item.patientName} Before`}
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

        {/* Center Black Handle Button (No White Line) */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2 flex items-center justify-center"
          style={{ left: `${position}%` }}
        >
          {/* Black Rounded Handle Button */}
          <div className="relative z-40 w-10 h-10 sm:w-11 sm:h-11 bg-black rounded-xl text-white flex items-center justify-center shadow-2xl transition-transform active:scale-95">
            <ChevronLeft className="w-3.5 h-3.5 -mr-1 text-white" />
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>

      {/* Patient Meta & Quick Action */}
      <div className="p-4 sm:p-5 flex items-center justify-between">
        <div>
          <h4 className="text-base font-bold text-[#162418]">
            {item.patientName}
          </h4>
          <span className="text-xs text-gray-500 font-medium">
            {item.grade}
          </span>
        </div>
        <button
          onClick={onOpenConsultation}
          className="text-xs font-bold text-[#596d53] hover:text-[#384c3c] transition-colors"
        >
          Get Similar Result →
        </button>
      </div>
    </div>
  );
}

export default function TransformationGallery({
  onOpenConsultation,
}: TransformationGalleryProps) {
  return (
    <section className="py-12 sm:py-20 bg-[#f8faf8]">
      <div className="qht-large-container">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#162418]">
            Transformation Gallery
          </h2>
          <a
            href="/results/"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#596d53] hover:text-[#384c3c] transition-colors"
          >
            <span>Explore All 15,000+ Results</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mb-8 sm:mb-10">
          Real patient before and after results. Drag the slider on any card to see the full transformation.
        </p>

        {/* Before / After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRANSFORMATION_GALLERY.map((item) => (
            <ComparisonCard
              key={item.id}
              item={item}
              onOpenConsultation={onOpenConsultation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
