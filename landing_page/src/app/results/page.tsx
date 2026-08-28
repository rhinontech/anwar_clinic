import { Metadata } from "next";
import ResultsPage from "@/pages/results/ResultsPage";
import { COMPANY_NAME } from "@/config/constants";

export const metadata: Metadata = {
  title: `Hair Transplant Results | Before & After Transformations | ${COMPANY_NAME} Clinic`,
  description:
    `Explore 15,000+ verified hair transplant before and after results, high-density hairline restorations, and patient transformations at ${COMPANY_NAME} Clinic India.`,
};

export default function Page() {
  return <ResultsPage />;
}
