import { Metadata } from "next";
import CostPage from "@/pages/cost/CostPage";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Hair Transplant Cost in India | Transparent Pricing & Packages | ${COMPANY_NAME}`,
  description:
    `Explore transparent hair transplant cost in India starting from ₹50/graft (FUT), ₹70/graft (Motorized FUE), and ₹100/graft with the ${COMPANY_NAME} Advanced Technique. Calculate your estimated cost now.`,
};

export default function Page() {
  return <CostPage />;
}
