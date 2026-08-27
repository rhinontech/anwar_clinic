"use client";

import React from "react";
import ResultDetailHero from "./ResultDetailHero";
import GoogleReviews from "@/pages/homepage/GoogleReviews";
import ContactSection from "@/components/common/ContactSection";
import FAQSection from "@/pages/homepage/FAQSection";
import BottomBanner from "@/pages/homepage/BottomBanner";
import { useConsultation } from "@/context/ConsultationContext";
import { PATIENT_RESULTS_LIST, PatientResultDetail } from "@/data/patientResultsData";

interface ResultDetailPageProps {
  slug?: string;
}

export default function ResultDetailPage({
  slug = "pradeep-kumar-joshi",
}: ResultDetailPageProps) {
  const { openConsultation } = useConsultation();
  const normalizedSlug = (slug || "pradeep-kumar-joshi").toLowerCase().replace(/\/$/, "");

  const patient =
    PATIENT_RESULTS_LIST.find((p) => p.slug === normalizedSlug) ||
    PATIENT_RESULTS_LIST[0];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section + Treatment Snapshot */}
      <ResultDetailHero
        patient={patient}
        onOpenConsultation={openConsultation}
      />

      {/* 2. Google Verified Reviews */}
      <GoogleReviews />

      {/* 3. Contact Us Section with Location Cards */}
      <ContactSection showLocations={true} />

      {/* 4. FAQs */}
      <FAQSection />

      {/* 5. Bottom Banner CTA */}
      <BottomBanner onOpenConsultation={openConsultation} />
    </div>
  );
}
