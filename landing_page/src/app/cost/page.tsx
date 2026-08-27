import { Metadata } from "next";
import CostPage from "@/pages/cost/CostPage";

export const metadata: Metadata = {
  title: "Hair Transplant Cost in India | Transparent Pricing & Packages | QHT Clinic",
  description:
    "Check transparent hair transplant cost in India starting from ₹50/graft (FUT), ₹70/graft (FUE), and ₹100/graft with patented QHT technique. Calculate your estimated cost now.",
};

export default function Page() {
  return <CostPage />;
}
