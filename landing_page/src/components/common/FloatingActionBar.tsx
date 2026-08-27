"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

interface FloatingActionBarProps {
  onOpenConsultation?: () => void;
}

export default function FloatingActionBar({
  onOpenConsultation,
}: FloatingActionBarProps) {
  const { openConsultation } = useConsultation();
  const handleOpenConsultation = onOpenConsultation || openConsultation;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* WhatsApp Quick Chat */}
      <a
        href="https://api.whatsapp.com/send?phone=9084726916&text=Hi%20there%20%F0%9F%91%8B%2C%20Can%20I%20have%20a%20quote%2C%20please"
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 p-3.5 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://www.qhtclinic.com/wp-content/themes/qht/assets/img/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-6 h-6 object-contain"
        />
      </a>

      {/* Book Appointment CTA Button */}
      <button
        onClick={handleOpenConsultation}
        className="flex items-center gap-2 bg-[#1b392b] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl hover:bg-[#284c3b] hover:scale-105 transition-all duration-300 border border-[#b1fc85]/30"
      >
        <Calendar className="w-4 h-4 text-[#b1fc85]" />
        <span>Book Appointment</span>
      </button>
    </div>
  );
}
