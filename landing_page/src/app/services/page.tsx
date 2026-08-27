import type { Metadata } from "next";
import ServicesPage from "@/pages/services/ServicesPage";
import { fetchServices, SERVICES_REVALIDATE } from "@/lib/services";

export const revalidate = SERVICES_REVALIDATE;

export const metadata: Metadata = {
  title: "Hair Transplant Services in India | QHT Clinic",
  description:
    "Explore advanced hair transplant services at QHT Clinic. FUE, FUT, QHT technique, beard restoration, hairline redesigning & more.",
};

export default async function Page() {
  const services = await fetchServices();
  return <ServicesPage services={services} />;
}
