import { Metadata } from "next";
import ResultDetailPage from "@/pages/results/detail/ResultDetailPage";
import { PATIENT_RESULTS_LIST } from "@/data/patientResultsData";
import { COMPANY_NAME } from "@/config/constants";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const patient = PATIENT_RESULTS_LIST.find((p) => p.slug === params.slug);
  const name = patient?.name || "Patient";

  return {
    title: `${name} Hair Transplant Results & Growth Timeline | ${COMPANY_NAME} Clinic`,
    description: `See ${name}'s verified hair transplant results, before and after growth timeline, and treatment snapshot at ${COMPANY_NAME} Clinic.`,
  };
}

export default function Page({ params }: PageProps) {
  return <ResultDetailPage slug={params.slug} />;
}
