import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | QHT Clinic India",
  description:
    "Got questions about hair restoration, graft costs, surgery timeline, or recovery? Read our comprehensive FAQ knowledge base.",
};

export default function Page() {
  return <ComingSoonPage title="Frequently Asked Questions (FAQ)" />;
}
