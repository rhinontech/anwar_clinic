import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

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
    title: `Hair Transplant in ${cityName} | ${COMPANY_NAME} Clinic India`,
    description: `Learn more about Hair Transplant in ${cityName} with ${COMPANY_NAME} Clinic's certified surgeons, US-FDA approved technology, and transparent pricing.`,
  };
}

export default function CityPage({ params }: PageProps) {
  const cityName = params.city
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return <ComingSoonPage title={`Hair Transplant in ${cityName}`} />;
}
