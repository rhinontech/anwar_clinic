"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingActionBar from "@/components/common/FloatingActionBar";
import ConsultationModal from "@/components/common/ConsultationModal";

import HeroSection from "./HeroSection";
import BaldTruthSection from "./BaldTruthSection";
import PromisesSection from "./PromisesSection";
import DifferenceSection from "./DifferenceSection";
import ExpertsJourney from "./ExpertsJourney";
import PricingTechniques from "./PricingTechniques";
import ImagePoster from "./ImagePoster";
import ServicesAccordion from "./ServicesAccordion";
import TransformationGallery from "./TransformationGallery";
import EbookCatalogueForm from "./EbookCatalogueForm";
import GoogleReviews from "./GoogleReviews";
import FAQSection from "./FAQSection";
import BottomBanner from "./BottomBanner";

export default function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openModal = () => setIsConsultationOpen(true);
  const closeModal = () => setIsConsultationOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Shared Navigation Header */}
      <Header onOpenConsultation={openModal} />

      {/* Main Home Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Live Patient Carousel */}
        <HeroSection onOpenConsultation={openModal} />

        {/* 2. The Bald Truth (Dark Green 6-Card Slider) */}
        <BaldTruthSection />

        {/* 3. Our Promises (Section 1) + OT Gallery */}
        <PromisesSection />

        {/* 4. See the Difference that Matters (QHT vs Others) */}
        <DifferenceSection />

        {/* 5. Team of Experts (4-Stage Stepper: 0% to 100%) */}
        <ExpertsJourney />

        {/* 6. Hair Transplant Cost by Technique (FUT, FUE, QHT) */}
        <PricingTechniques onOpenConsultation={openModal} />

        {/* 7. Full-Width Clinic Banner Poster */}
        <ImagePoster />

        {/* 8. Our Services (Section 2) Accordion */}
        <ServicesAccordion onOpenConsultation={openModal} />

        {/* 9. Transformation Gallery (Section 3) Before/After Sliders */}
        <TransformationGallery onOpenConsultation={openModal} />

        {/* 10. Free E-Book Guide Lead Generation Form */}
        <EbookCatalogueForm />

        {/* 11. Verified Google Reviews Carousel */}
        <GoogleReviews />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Bottom CTA Banner */}
        <BottomBanner onOpenConsultation={openModal} />
      </main>

      {/* Shared Footer */}
      <Footer onOpenConsultation={openModal} />

      {/* Sticky Bottom Actions (Book Appointment + WhatsApp) */}
      <FloatingActionBar onOpenConsultation={openModal} />

      {/* Consultation Popup Lead Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={closeModal}
      />
    </div>
  );
}
