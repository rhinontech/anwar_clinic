import { Metadata } from "next";
import ResultsPage from "@/pages/results/ResultsPage";

export const metadata: Metadata = {
  title: "Hair Transplant Results | Before & After Transformations | QHT Clinic",
  description:
    "Explore 15,000+ verified hair transplant before and after results, high-density hairline restorations, and patient transformations at QHT Clinic India.",
};

export default function Page() {
  return <ResultsPage />;
}
