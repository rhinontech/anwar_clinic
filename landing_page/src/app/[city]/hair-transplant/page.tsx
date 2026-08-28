import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

interface PageProps {
  params: {
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = params.city
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `Hair Transplant in ${cityName} | QHT Clinic India`,
    description: `Learn more about Hair Transplant in ${cityName} with QHT Clinic's certified surgeons, US-FDA approved technology, and transparent pricing.`,
  };
}

export default function CityPage({ params }: PageProps) {
  const cityName = params.city
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return <ComingSoonPage title={`Hair Transplant in ${cityName}`} />;
}
