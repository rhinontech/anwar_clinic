import React from "react";
import AboutPage from "@/pages/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - QHT Hair Transplant Clinic India",
  description:
    "Learn more about QHT Clinic, our expert surgical team, and our mission in redefining hair restoration across India.",
};

export default function Page() {
  return <AboutPage />;
}
