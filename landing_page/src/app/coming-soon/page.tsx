import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Coming Soon | ${COMPANY_NAME} Clinic India`,
  description:
    "This page is currently being updated. Discover our verified hair restoration results, transparent cost calculator, or book a free doctor consultation.",
};

export default function Page() {
  return <ComingSoonPage />;
}
