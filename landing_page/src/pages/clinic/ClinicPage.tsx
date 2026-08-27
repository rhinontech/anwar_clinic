"use client";

import React from "react";
import ClinicHero from "./ClinicHero";
import ClinicShowcaseSection from "./ClinicShowcaseSection";
import ClinicTechnologySection from "./ClinicTechnologySection";
import OurServicesSection from "@/components/common/OurServicesSection";
import ClinicReviewsMapSection from "./ClinicReviewsMapSection";
import GoogleReviews from "@/pages/homepage/GoogleReviews";
import FAQSection from "@/pages/homepage/FAQSection";
import BottomBanner from "@/pages/homepage/BottomBanner";
import { useConsultation } from "@/context/ConsultationContext";

export default function ClinicPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Our Clinic Hero Section */}
      <ClinicHero />

      {/* 2. State of the Art Clinics Showcase with 10s Slideshow */}
      <ClinicShowcaseSection onOpenConsultation={openConsultation} />

      {/* 3. Cutting-Edge Technology & Skilled Professionals */}
      <ClinicTechnologySection />

      {/* 4. Our Services Accordion Section */}
      <OurServicesSection onOpenConsultation={openConsultation} />

      {/* 5. Reviews & Testimonials Across India Map */}
      <ClinicReviewsMapSection onOpenConsultation={openConsultation} />

      {/* Google Reviews */}
      {/* <GoogleReviews /> */}

      {/* FAQs */}
      {/* <FAQSection /> */}

      {/* Bottom Banner */}
      {/* <BottomBanner onOpenConsultation={openConsultation} /> */}
    </div>
  );
}
