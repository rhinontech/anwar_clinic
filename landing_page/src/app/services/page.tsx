import type { Metadata } from "next";
import ServicesPage from "@/pages/services/ServicesPage";

export const metadata: Metadata = {
  title: "Hair Transplant Services in India | QHT Clinic",
  description: "Explore advanced hair transplant services at QHT Clinic. FUE, FUT, QHT technique, beard restoration, hairline redesigning & more.",
};

export default function Page() {
  return <ServicesPage />;
}
