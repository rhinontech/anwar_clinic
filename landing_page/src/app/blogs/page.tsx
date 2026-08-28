import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Hair Restoration Blogs & Clinical Articles | ${COMPANY_NAME} Clinic`,
  description:
    `Read the latest guides, hair care insights, and surgeon research from ${COMPANY_NAME} Hair Transplant Clinic.`,
};

export default function Page() {
  return <ComingSoonPage title="Hair Restoration Blogs" />;
}
