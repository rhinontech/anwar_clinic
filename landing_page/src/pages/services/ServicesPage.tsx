"use client";

import React from "react";
import { useConsultation } from "@/context/ConsultationContext";
import ServicesHero from "./ServicesHero";
import ServicesListing from "./ServicesListing";
import FAQSection from "@/pages/homepage/FAQSection";
import ContactSection from "@/components/common/ContactSection";
import BottomBanner from "@/pages/homepage/BottomBanner";

export default function ServicesPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="bg-white">
      {/* 1. Services Hero Section */}
      <ServicesHero onOpenConsultation={openConsultation} />

      {/* 2. All Hair Transplant Services Listing Grid with Filters */}
      <ServicesListing onOpenConsultation={openConsultation} />

      {/* 3. Common FAQs */}
      <FAQSection />

      {/* 4. Common Contact Us Lead Section */}
      <ContactSection />

      {/* 5. Bottom Booking CTA */}
      <BottomBanner onOpenConsultation={openConsultation} />
    </div>
  );
}
