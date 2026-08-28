import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Opportunities | QHT Clinic India",
  description:
    "Join our team of certified dermatologists, trichologists, and clinical care specialists at QHT Clinic.",
};

export default function Page() {
  return <ComingSoonPage title="Careers at QHT Clinic" />;
}
