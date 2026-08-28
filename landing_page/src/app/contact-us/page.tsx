import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | QHT Clinic India",
  description:
    "Get in touch with QHT Clinic branches across Delhi, Haridwar, Gurugram, Hyderabad, and Kolkata.",
};

export default function Page() {
  return <ComingSoonPage title="Contact Us" />;
}
