import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | QHT Clinic India",
  description: "Read the official terms and conditions for consultations, bookings, and surgical procedures at QHT Clinic.",
};

export default function Page() {
  return <ComingSoonPage title="Terms & Conditions" />;
}
