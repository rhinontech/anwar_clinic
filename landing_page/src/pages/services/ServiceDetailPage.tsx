"use client";

import React from "react";
import { useConsultation } from "@/context/ConsultationContext";
import ServiceDetailHero from "./ServiceDetailHero";
import ServiceIntroSection from "./ServiceIntroSection";
import ServiceResultsSection from "./ServiceResultsSection";
import ServiceCandidateSection from "./ServiceCandidateSection";
import ServiceTypesSection from "./ServiceTypesSection";
import ServiceBenefitsSection from "./ServiceBenefitsSection";
import ServiceProcedureSection from "./ServiceProcedureSection";
import ServicePreProcedureSection from "./ServicePreProcedureSection";
import ServiceCostSection from "./ServiceCostSection";
import ServiceWhyUsSection from "./ServiceWhyUsSection";
import ServiceJourneySection from "./ServiceJourneySection";
import ServiceCausesSection from "./ServiceCausesSection";
import ServiceWhyChooseQHTSection from "./ServiceWhyChooseQHTSection";
import ServicePostSurgerySupportSection from "./ServicePostSurgerySupportSection";
import ServiceDosDontsSection from "./ServiceDosDontsSection";
import ServiceRecoveryTimelineSection from "./ServiceRecoveryTimelineSection";
import ServiceBookingBar from "./ServiceBookingBar";
import ServiceComparisonSection from "./ServiceComparisonSection";
import ServiceFAQSection from "./ServiceFAQSection";
import GoogleReviews from "@/pages/homepage/GoogleReviews";
import ContactSection from "@/components/common/ContactSection";
import { ALL_SERVICES_LIST } from "@/data/allServicesData";

interface ServiceDetailPageProps {
  slug?: string;
}

// Map slugs to customized info
const SERVICE_META: Record<
  string,
  {
    title: string;
    subtitle: string;
    bannerImage: string;
    pointerLabel: string;
    highlights: string[];
    overview: string[];
    candidates: string[];
  }
> = {
  "failed-hair-transplant-repair": {
    title: "Hair Transplant Repair",
    subtitle: "Hair Transplant Repair solutions tailored by experts at QHT Clinic with affordability and advanced methods.",
    bannerImage: "https://www.qhtclinic.com/wp-content/uploads/2025/08/456.png",
    pointerLabel: "Graft correction",
    highlights: [
      "Repair unnatural pluggy doll-like hairlines",
      "Conceal or revise visible donor linear scars",
      "Correct misdirected angles & poor graft growth",
      "Restore natural density with precision SAVA pen",
    ],
    overview: [
      "Hair transplant repair (revision surgery) is a specialized procedure designed to rectify unsatisfactory or botched results from earlier procedures performed at inexperienced centers.",
      "At QHT Clinic, our senior surgeons utilize advanced single-graft extraction and microscopic placement to redesign harmonious hairlines, soften harsh graft clusters, and restore true self-confidence.",
    ],
    candidates: [
      "Individuals with unnatural or crooked hairline designs",
      "Patients with visible scarring on the donor area",
      "Anyone experiencing low graft survival or patchy results",
      "Those looking for higher density and refined hair angles",
    ],
  },
  "hair-transplant-repair": {
    title: "Hair Transplant Repair",
    subtitle: "Hair Transplant Repair solutions tailored by experts at QHT Clinic with affordability and advanced methods.",
    bannerImage: "https://www.qhtclinic.com/wp-content/uploads/2025/08/456.png",
    pointerLabel: "Graft correction",
    highlights: [
      "Repair unnatural pluggy doll-like hairlines",
      "Conceal or revise visible donor linear scars",
      "Correct misdirected angles & poor graft growth",
      "Restore natural density with precision SAVA pen",
    ],
    overview: [
      "Hair transplant repair (revision surgery) is a specialized procedure designed to rectify unsatisfactory or botched results from earlier procedures performed at inexperienced centers.",
      "At QHT Clinic, our senior surgeons utilize advanced single-graft extraction and microscopic placement to redesign harmonious hairlines, soften harsh graft clusters, and restore true self-confidence.",
    ],
    candidates: [
      "Individuals with unnatural or crooked hairline designs",
      "Patients with visible scarring on the donor area",
      "Anyone experiencing low graft survival or patchy results",
      "Those looking for higher density and refined hair angles",
    ],
  },
  "hair-transplant-for-men": {
    title: "Hair Transplant For Men",
    subtitle: "Affordable and aesthetically natural result-driven male hair transplant solutions in India.",
    bannerImage: "https://www.qhtclinic.com/wp-content/uploads/2025/08/b739906161.jpg",
    pointerLabel: "Hairline design",
    highlights: [
      "100% natural hairline designed for masculine facial profile",
      "Permanent donor follicles resistant to DHT hormones",
      "Minimally invasive with under 2-hour graft out-of-body time",
      "15,000+ happy male hair restoration patients",
    ],
    overview: [
      "Male pattern baldness affects millions of men across temples and vertex crown areas. QHT Clinic delivers permanent, thick, and natural hair restoration tailored to your age and facial structure.",
      "Our surgeons combine patented QHT technology with artistic angle orientation to recreate undetectable hairlines that allow any hairstyle you desire.",
    ],
    candidates: [
      "Men experiencing receding temples (Norwood Grade 2 to 7)",
      "Crown thinning and vertex bald spot coverage",
      "Men seeking lifelong natural hair density with zero stitches",
    ],
  },
};

function formatSlugToTitle(slug?: string): string {
  if (!slug) return "Hair Transplant Repair";
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/In India/gi, "")
    .trim();
}

export default function ServiceDetailPage({ slug = "hair-transplant-repair" }: ServiceDetailPageProps) {
  const { openConsultation } = useConsultation();
  const normalizedSlug = (slug || "hair-transplant-repair").toLowerCase().replace(/\/$/, "");

  const matchedService = ALL_SERVICES_LIST.find(
    (s) => s.id === normalizedSlug || s.link.includes(normalizedSlug)
  );

  const meta = SERVICE_META[normalizedSlug] || {
    title: matchedService ? matchedService.title : formatSlugToTitle(normalizedSlug),
    subtitle: matchedService ? matchedService.desc : `${formatSlugToTitle(normalizedSlug)} solutions tailored by experts at QHT Clinic.`,
    bannerImage: matchedService?.image || "https://www.qhtclinic.com/wp-content/uploads/2025/08/456.png",
    pointerLabel: "Precision treatment",
    highlights: [
      "Performed by senior Board-Certified surgeons only",
      "Patented Quick Hair Transplant (QHT) technique",
      "Maximized graft survival rate (>98%)",
      "Lifetime permanent growth guarantee",
    ],
    overview: [
      matchedService?.desc || `${formatSlugToTitle(normalizedSlug)} is a high-precision procedure at QHT Clinic designed for optimal density and natural growth.`,
      "Using state-of-the-art tools and patented SAVA implanter pens, we ensure minimal graft trauma and swift recovery with zero downtime.",
    ],
    candidates: [
      "Patients looking for permanent density and youthful framing",
      "Individuals seeking natural, undetectable surgical outcomes",
      "Patients who value surgeon expertise and transparent pricing",
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section + Floating Callback Bar */}
      <ServiceDetailHero
        slug={normalizedSlug}
        title={meta.title}
        subtitle={meta.subtitle}
        bannerImage={meta.bannerImage}
        pointerLabel={meta.pointerLabel}
        onOpenConsultation={openConsultation}
      />

      {/* 2. Intro Zig-Zag Section (What is & In India blocks) */}
      <ServiceIntroSection
        title={meta.title}
        slug={normalizedSlug}
        onOpenConsultation={openConsultation}
      />

      {/* 3. Dark Green Results Section (Result of [Service]) */}
      <ServiceResultsSection
        title={meta.title}
        subtitle={`Corrective Hair Transplant at QHT Clinic focuses on hairline design, hair density, and no-scar growth, for long-term results in people with ${meta.title}.`}
        onOpenConsultation={openConsultation}
      />

      {/* 4. Ideal Candidate Section (Who is an Ideal Candidate) */}
      <ServiceCandidateSection
        title={meta.title}
        subtitle={`Customers with poor and unnatural hair density and scars from past surgeries, consider QHT Clinic for a ${meta.title}.`}
        onOpenConsultation={openConsultation}
      />

      {/* 5. Types of Procedure Section */}
      <ServiceTypesSection
        title={meta.title}
        subtitle="To choose the best Corrective Hair Transplant technique, it’s important to know the methods available for it. These are:"
      />

      {/* 6. Dark Green Benefits Section */}
      <ServiceBenefitsSection
        title={meta.title}
        onOpenConsultation={openConsultation}
      />

      {/* 7. Procedure Steps Section */}
      <ServiceProcedureSection
        title={meta.title}
        onOpenConsultation={openConsultation}
      />

      {/* 8. Pre-Procedure Tips Section */}
      <ServicePreProcedureSection
        title={meta.title}
      />

      {/* 9. Cost in India Section */}
      <ServiceCostSection
        title={meta.title}
      />

      {/* 10. Why Us Section */}
      <ServiceWhyUsSection
        title={meta.title}
        onOpenConsultation={openConsultation}
      />

      {/* 11. Video Journey & Transformations */}
      <ServiceJourneySection />

      {/* 12. Causes of Early Loss Section */}
      <ServiceCausesSection
        title={meta.title}
      />

      {/* 13. Why Choose QHT Feature Grid */}
      <ServiceWhyChooseQHTSection
        title={meta.title}
        onOpenConsultation={openConsultation}
      />

      {/* 14. Google Verified Reviews Slider */}
      <GoogleReviews />

      {/* 15. Post-Surgery Support Section */}
      <ServicePostSurgerySupportSection
        title={meta.title}
      />

      {/* 16. Do's and Don'ts Section */}
      <ServiceDosDontsSection
        title={meta.title}
      />

      {/* 17. Recovery Timeline & Aftercare Tabs */}
      <ServiceRecoveryTimelineSection
        title={meta.title}
      />

      {/* 18. Green Booking Bar */}
      <ServiceBookingBar
        onOpenConsultation={openConsultation}
      />

      {/* 19. Comparison of Techniques */}
      <ServiceComparisonSection
        title={meta.title}
      />

      {/* 20. FAQ Section */}
      <ServiceFAQSection
        title={meta.title}
      />

      {/* 21. Contact Us Lead Form with 4 Location Cards */}
      <ContactSection showLocations={true} />
    </div>
  );
}
