import type { Metadata } from "next";
import ServiceDetailPage from "@/pages/services/ServiceDetailPage";
import { ALL_SERVICES_LIST } from "@/data/allServicesData";
import { fetchService, fetchServices, SERVICES_REVALIDATE } from "@/lib/services";
import { COMPANY_NAME } from "@/config/constants";

interface PageProps {
  params: { slug: string };
}

// Statically generated at build, refreshed in the background on this interval —
// a service published in the admin panel appears without a redeploy.
export const revalidate = SERVICES_REVALIDATE;
// A slug added after the build still renders on first request, then is cached.
export const dynamicParams = true;

export async function generateStaticParams() {
  const services = await fetchServices();
  if (services && services.length > 0) {
    return services.map((s) => ({ slug: s.slug }));
  }
  // API unreachable at build time — fall back to the bundled list so the build
  // still produces pages instead of failing.
  return ALL_SERVICES_LIST.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await fetchService(params.slug);
  if (service) {
    return {
      title: service.seoTitle || `${service.title} in India | ${COMPANY_NAME} Clinic`,
      description: service.seoDescription || service.cardDescription,
    };
  }

  const formattedTitle = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${formattedTitle} in India | ${COMPANY_NAME} Clinic`,
    description: `Discover best ${formattedTitle} at ${COMPANY_NAME} Clinic with advanced patented ${COMPANY_NAME} techniques, natural hairline design, and affordable pricing.`,
  };
}

export default async function Page({ params }: PageProps) {
  const service = await fetchService(params.slug);
  return <ServiceDetailPage slug={params.slug} service={service} />;
}
