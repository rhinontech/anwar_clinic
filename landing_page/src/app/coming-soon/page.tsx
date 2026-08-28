import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | QHT Clinic India",
  description:
    "This page is currently being updated. Discover our verified hair restoration results, transparent cost calculator, or book a free doctor consultation.",
};

export default function Page() {
  return <ComingSoonPage />;
}
