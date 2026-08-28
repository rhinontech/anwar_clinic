import React from "react";
import ComingSoonPage from "@/pages/common/ComingSoonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Restoration Blogs & Clinical Articles | QHT Clinic",
  description:
    "Read the latest guides, hair care insights, and surgeon research from QHT Hair Transplant Clinic.",
};

export default function Page() {
  return <ComingSoonPage title="Hair Restoration Blogs" />;
}
