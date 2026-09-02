"use client";

import React from "react";
import MedicalTourismHero from "./MedicalTourismHero";
import MedicalWhyIndiaSection from "./MedicalWhyIndiaSection";
import MedicalWhyQHTSection from "./MedicalWhyQHTSection";
import MedicalComparisonSection from "./MedicalComparisonSection";
import MedicalBenefitsTabsSection from "./MedicalBenefitsTabsSection";
import MedicalCostComparisonSection from "./MedicalCostComparisonSection";
import MedicalTestimonialsSection from "./MedicalTestimonialsSection";
import MedicalInfrastructureSection from "./MedicalInfrastructureSection";
import MedicalFAQSection from "./MedicalFAQSection";
import OurServicesSection from "@/components/common/OurServicesSection";
import { useConsultation } from "@/context/ConsultationContext";
import FAQSection from "../homepage/FAQSection";

export default function MedicalTourismPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section matching exact user screenshot */}
      <MedicalTourismHero />

      {/* 2. Why India is the Top Choice for Hair Transplant */}
      <MedicalWhyIndiaSection />

      {/* 3. Why is QHT India's Best Hair Clinic (Dark Green Section with Floating Avatars & Stats) */}
      <MedicalWhyQHTSection />

      {/* 4. FUE vs QHT Detailed Clinical Comparison Table */}
      <MedicalComparisonSection />

      {/* 5. Benefits During Your Visit (Interactive Tabs: Clinical, Travel, Stay, Language) */}
      <MedicalBenefitsTabsSection />

      {/* 6. Global Cost Comparison: USA, India, Turkey, UAE */}
      <MedicalCostComparisonSection />

      {/* 7. International Client Testimonials & Stories */}
      <MedicalTestimonialsSection />

      {/* 8. Hospital & Operating Suite Infrastructure Gallery */}
      <MedicalInfrastructureSection />

      {/* 9. Popular Surgical Services Accordion */}
      <OurServicesSection onOpenConsultation={openConsultation} />

      {/* 10. Medical Tourism FAQ & International Booking Form */}
      <FAQSection />
    </div>
  );
}
