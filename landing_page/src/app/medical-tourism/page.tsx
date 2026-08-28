import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Tourism for Hair Transplant in India | QHT Clinic",
  description:
    "Explore our complete international patient care, airport pickup, luxury hotel stays, and world-class hair restoration packages at QHT Clinic India.",
};

export default function Page() {
  return <ComingSoonPage title="Medical Tourism" />;
}
