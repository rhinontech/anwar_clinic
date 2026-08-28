import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${COMPANY_NAME} Clinic India`,
  description: `Read the official terms and conditions for consultations, bookings, and surgical procedures at ${COMPANY_NAME} Clinic.`,
};

export default function Page() {
  return <ComingSoonPage title="Terms & Conditions" />;
}
