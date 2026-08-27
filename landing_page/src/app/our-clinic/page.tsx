import React from "react";
import ClinicPage from "@/pages/clinic/ClinicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clinic - QHT Hair Transplant Clinic India",
  description:
    "Explore QHT Clinic's world-class hair transplant facilities across India. Advanced surgical infrastructure, sterile OT suites, and internationally certified surgeons.",
};

export default function Page() {
  return <ClinicPage />;
}
