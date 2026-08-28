import React from "react";
import ClinicPage from "@/pages/clinic/ClinicPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Our Clinic - ${COMPANY_NAME} Hair Transplant Clinic India`,
  description:
    `Explore ${COMPANY_NAME} Clinic's world-class hair transplant facilities across India. Advanced surgical infrastructure, sterile OT suites, and internationally certified surgeons.`,
};

export default function Page() {
  return <ClinicPage />;
}
