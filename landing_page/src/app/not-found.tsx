import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Page Coming Soon | ${COMPANY_NAME} Clinic India`,
  description:
    "We are currently crafting this page. In the meantime, explore our verified results, cost estimator, or book a free consultation.",
};

export default function NotFound() {
  return <ComingSoonPage title="Coming Soon" />;
}
