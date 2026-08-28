import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY_NAME} Clinic India`,
  description: `Read the official privacy policy and data protection terms for ${COMPANY_NAME} Clinic.`,
};

export default function Page() {
  return <ComingSoonPage title="Privacy Policy" />;
}
