import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Medical Tourism for Hair Transplant in India | ${COMPANY_NAME} Clinic`,
  description:
    `Explore our complete international patient care, airport pickup, luxury hotel stays, and world-class hair restoration packages at ${COMPANY_NAME} Clinic India.`,
};

export default function Page() {
  return <ComingSoonPage title="Medical Tourism" />;
}
