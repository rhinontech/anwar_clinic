import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | QHT Clinic India",
  description: "Read the official privacy policy and data protection terms for QHT Clinic.",
};

export default function Page() {
  return <ComingSoonPage title="Privacy Policy" />;
}
