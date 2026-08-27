import type { Metadata } from "next";
import ServiceDetailPage from "@/pages/services/ServiceDetailPage";
import { ALL_SERVICES_LIST } from "@/data/allServicesData";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ALL_SERVICES_LIST.map((service) => ({
    slug: service.id,
  })).concat([
    { slug: "hair-transplant-repair" },
    { slug: "failed-hair-transplant-repair" },
    { slug: "hair-transplant-for-men" },
  ]);
}

export function generateMetadata({ params }: PageProps): Metadata {
  const formattedTitle = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${formattedTitle} in India | QHT Clinic`,
    description: `Discover best ${formattedTitle} at QHT Clinic with advanced patented QHT techniques, natural hairline design, and affordable pricing.`,
  };
}

export default function Page({ params }: PageProps) {
  return <ServiceDetailPage slug={params.slug} />;
}
