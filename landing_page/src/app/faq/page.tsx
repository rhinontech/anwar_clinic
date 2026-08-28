import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${COMPANY_NAME} Clinic India`,
  description: `Find answers to frequently asked questions about hair transplant procedures, costs, recovery, and results at ${COMPANY_NAME} Clinic.`,
};

export default function Page() {
  return <ComingSoonPage title="Frequently Asked Questions (FAQ)" />;
}
