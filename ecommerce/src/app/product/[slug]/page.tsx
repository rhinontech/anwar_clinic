import React from "react";
import Header from "@/components/Header";
import ProductDetailHero from "@/components/ProductDetailHero";
import WhatsInsideKitSection from "@/components/WhatsInsideKitSection";
import KeyBenefitsSection from "@/components/KeyBenefitsSection";
import HowToUseSection from "@/components/HowToUseSection";
import RealResultsVideoSection from "@/components/RealResultsVideoSection";
import ClinicalStudiesSection from "@/components/ClinicalStudiesSection";
import BackedByExpertsSection from "@/components/BackedByExpertsSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import ProductFAQSection from "@/components/ProductFAQSection";
import StickyProductBottomBar from "@/components/StickyProductBottomBar";
import { PRODUCTS_DATA } from "@/data/productsData";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug) || PRODUCTS_DATA[0];
  return {
    title: `${product.name} | URoots by QHT Clinic`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug) || PRODUCTS_DATA[0];

  return (
    <div className="min-h-screen bg-[#eff5f1] flex flex-col antialiased">
      <Header />
      <main className="flex-1">
        <ProductDetailHero product={product} />
        <WhatsInsideKitSection />
        <KeyBenefitsSection />
        <HowToUseSection />
        <RealResultsVideoSection />
        <ClinicalStudiesSection />
        <BackedByExpertsSection />
        <CustomerReviewsSection />
        <ProductFAQSection />
      </main>

      {/* Sticky Bottom Bar on Scroll */}
      <StickyProductBottomBar product={product} />
    </div>
  );
}
