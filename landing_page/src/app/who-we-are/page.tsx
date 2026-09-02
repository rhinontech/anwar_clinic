import React from "react";
import AboutPage from "@/pages/about/AboutPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Who We Are — ${COMPANY_NAME} Hair Restoration India`,
  description:
    `Learn about ${COMPANY_NAME}, our board-certified surgical team, sterile hospital suites, and our commitment to natural, permanent hair restoration across India.`,
};

export default function Page() {
  return <AboutPage />;
}
