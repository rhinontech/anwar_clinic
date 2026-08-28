import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Careers & Opportunities | ${COMPANY_NAME} Clinic India`,
  description:
    `Join our team of certified dermatologists, trichologists, and clinical care specialists at ${COMPANY_NAME} Clinic.`,
};

export default function Page() {
  return <ComingSoonPage title={`Careers at ${COMPANY_NAME} Clinic`} />;
}
