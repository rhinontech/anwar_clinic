import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Coming Soon | QHT Clinic India",
  description:
    "We are currently crafting this page. In the meantime, explore our verified results, cost estimator, or book a free consultation.",
};

export default function NotFound() {
  return <ComingSoonPage title="Coming Soon" />;
}
