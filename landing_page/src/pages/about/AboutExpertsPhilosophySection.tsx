"use client";

import React from "react";
import { COMPANY_NAME } from "@/config/constants";

interface AboutExpertsPhilosophySectionProps {
  onOpenConsultation?: () => void;
}

interface PhilosophyCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function AboutExpertsPhilosophySection({
  onOpenConsultation,
}: AboutExpertsPhilosophySectionProps) {
  const CARDS: PhilosophyCard[] = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Single Hair Follicle */}
          <path d="M12 2C12 7 9 10 9 14C9 16.2091 10.7909 18 13 18C15.2091 18 17 16.2091 17 14C17 10 13 4 12 2Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 18V22" strokeLinecap="round" />
          <path d="M10 21L16 21" strokeLinecap="round" />
        </svg>
      ),
      title: "Our Philosophy: Redefining Hair Restoration Care",
      desc: `At ${COMPANY_NAME} Hair Transplant Clinic, we combine advanced technology and expert precision to deliver personalized, natural, and lasting results—restoring not just hair, but confidence and self-expression.`,
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Sapphire Micro Punch Tool */}
          <path d="M4 20L10 14M9 11L13 15M11 9L15 13M14 6L18 10M17 3L21 7" strokeLinecap="round" />
          <circle cx="6" cy="18" r="2" />
        </svg>
      ),
      title: "Technology Behind the Natural Transformations",
      desc: `At ${COMPANY_NAME} Hair Transplant, we use advanced technology and sapphire punches for precise, minimally invasive procedures—maximizing graft survival, natural density, and lasting comfort.`,
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Quality & Training Doctor */}
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21V19C6 16.2386 8.23858 14 11 14H13C15.7614 14 18 16.2386 18 19V21" strokeLinecap="round" />
          <path d="M12 11V14" />
          <path d="M10.5 12.5H13.5" />
        </svg>
      ),
      title: "Quality & Training of Medical Staff",
      desc: "The highest quality starts with the people delivering the service. Our surgeons, specialists, and support staff undergo continuous global training, staying updated with advances in hair restoration. Committed to precision, safety, and care, they ensure natural results and provide patients with lasting peace of mind.",
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Dual Graft Follicles */}
          <path d="M8 4C8 8 6 10 6 13C6 15 7.5 16.5 9.5 16.5C11.5 16.5 13 15 13 13C13 10 10 6 8 4Z" />
          <path d="M16 4C16 8 14 10 14 13C14 15 15.5 16.5 17.5 16.5C19.5 16.5 21 15 21 13C21 10 18 6 16 4Z" />
          <path d="M9.5 16.5V20" />
          <path d="M17.5 16.5V20" />
        </svg>
      ),
      title: "Our Hair Transplant Process",
      desc: `Our hair transplant process at ${COMPANY_NAME} begins with a personalized consultation and planning. Donor grafts are carefully extracted using FUE and ${COMPANY_NAME} techniques, prepared under magnification, implanted naturally, and followed by recovery support for lasting growth.`,
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Milestones Growth Chart */}
          <path d="M3 20H21" strokeLinecap="round" />
          <path d="M6 16V10M12 16V6M18 16V12" strokeLinecap="round" />
          <path d="M5 9L11 4L17 8L21 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Milestones That Define Us",
      desc: `With over 15,000 successful transplants, 20+ years of combined expertise, 95% graft survival, and patients from 30+ countries, ${COMPANY_NAME} Hair Transplant Clinic delivers trusted global results.`,
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Global Care & Shield */}
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9H20.4M3.6 15H20.4" />
          <path d="M11.5 3C9.5 6 8.5 9 8.5 12C8.5 15 9.5 18 11.5 21" />
          <path d="M12.5 3C14.5 6 15.5 9 15.5 12C15.5 15 14.5 18 12.5 21" />
        </svg>
      ),
      title: "Global Patients & Global Care",
      desc: `${COMPANY_NAME} Hair Transplant Clinic is a name you can trust, and it is known all over the world, with patients coming from all continents - Asia, the Middle East, and Europe. We provide Hair Transplant Treatments with seamless service and world-class personalized procedures and long-term results delivered to international standards.`,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="qht-large-container">
        
        {/* Header: Title on Left, Subtitle on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b221d] tracking-tight leading-[1.12]">
              Meet the Experts at {COMPANY_NAME}
            </h2>
          </div>
          <div className="max-w-md lg:pb-1">
            <p className="text-xs sm:text-sm text-[#5c685f] leading-relaxed font-normal">
              There are many experts behind every successful treatment. At {COMPANY_NAME} Hair Transplant Clinic, our highly skilled doctors and educated professionals have one goal in mind, to empower you with outstanding results.
            </p>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#eff5f1] rounded-2xl sm:rounded-3xl p-7 sm:p-8 flex flex-col justify-start border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl text-[#52664d] flex items-center justify-start mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-[19px] font-bold text-[#1b221d] leading-snug tracking-tight mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13.5px] text-[#5c685f] leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Center Divider Button */}
        <div className="relative mt-16 sm:mt-20 pt-6">
          
          {/* Subtle Horizontal Divider */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 -translate-y-1/2" />

          {/* Centered Schedule Button */}
          <div className="relative flex justify-center z-10">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="bg-[#52664d] hover:bg-[#43543e] text-white font-bold text-xs sm:text-sm px-8 sm:px-10 py-3.5 rounded-full shadow-md transition-all active:scale-95 duration-150 cursor-pointer"
            >
              Schedule An Appointment
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
