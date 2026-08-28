import React from "react";
import AboutPage from "@/pages/about/AboutPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Who We Are - ${COMPANY_NAME} Hair Transplant Clinic India`,
  description:
    `Learn more about ${COMPANY_NAME} Clinic, our expert surgical team, and our mission in redefining hair restoration across India.`,
};

export default function Page() {
  return <AboutPage />;
}
