import type { Metadata } from "next";
import ServicesPage from "@/pages/services/ServicesPage";
import { fetchServices, SERVICES_REVALIDATE } from "@/lib/services";
import { COMPANY_NAME } from "@/config/constants";

export const revalidate = SERVICES_REVALIDATE;

export const metadata: Metadata = {
  title: `Hair Transplant Services in India | ${COMPANY_NAME} Clinic`,
  description:
    `Explore advanced hair transplant services at ${COMPANY_NAME} Clinic. FUE, FUT, ${COMPANY_NAME} technique, beard restoration, hairline redesigning & more.`,
};

export default async function Page() {
  const services = await fetchServices();
  return <ServicesPage services={services} />;
}
