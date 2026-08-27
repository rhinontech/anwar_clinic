"use client";

import React from "react";
import ResultsHero from "./ResultsHero";
import ResultsMarqueeStripe from "./ResultsMarqueeStripe";
import ResultsBrowseSection from "./ResultsBrowseSection";
import ResultsAboutClinicSection from "./ResultsAboutClinicSection";
import ResultsBaldnessGradeSection from "./ResultsBaldnessGradeSection";
import GoogleReviews from "@/pages/homepage/GoogleReviews";
import ContactSection from "@/components/common/ContactSection";
import FAQSection from "@/pages/homepage/FAQSection";
import BottomBanner from "@/pages/homepage/BottomBanner";
import { useConsultation } from "@/context/ConsultationContext";

export default function ResultsPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <ResultsHero />

      {/* 2. Infinite Right-to-Left Text Marquee Stripe */}
      <ResultsMarqueeStripe />

      {/* 3. Browse Transformation Like Yours (Interactive Filterable Grid) */}
      <ResultsBrowseSection onOpenConsultation={openConsultation} />

      {/* 4. Best Hair Transplant Clinic in India Overview */}
      <ResultsAboutClinicSection />

      {/* 5. What's Your Baldness Grade Assessment CTA */}
      <ResultsBaldnessGradeSection onOpenConsultation={openConsultation} />

      {/* 3. Google Verified Reviews */}
      <GoogleReviews />

      {/* 4. Contact Us Section */}
      {/* <ContactSection showLocations={true} /> */}

      {/* 5. FAQs */}
      {/* <FAQSection /> */}

      {/* 6. Bottom Banner CTA */}
      {/* <BottomBanner onOpenConsultation={openConsultation} /> */}
    </div>
  );
}
