"use client";

import React from "react";
import AboutHero from "./AboutHero";
import AboutJourneySection from "./AboutJourneySection";
import GoogleReviews from "@/pages/homepage/GoogleReviews";
import FAQSection from "@/pages/homepage/FAQSection";
import BottomBanner from "@/pages/homepage/BottomBanner";
import { useConsultation } from "@/context/ConsultationContext";

export default function AboutPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="bg-white min-h-screen">
      {/* 1. About Us Hero Section */}
      <AboutHero />

      {/* 2. Our Journey - Transforming Hair Restoration in India */}
      <AboutJourneySection />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* FAQs */}
      <FAQSection />

      {/* Bottom Banner */}
      <BottomBanner onOpenConsultation={openConsultation} />
    </div>
  );
}
