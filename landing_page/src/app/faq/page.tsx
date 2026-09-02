import React from "react";
import FAQPage from "@/pages/faq/FAQPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${COMPANY_NAME} Clinic India`,
  description: `Find answers to frequently asked questions about hair transplant procedures, costs, recovery, and results at ${COMPANY_NAME} Clinic.`,
};

export default function Page() {
  return <FAQPage />;
}

