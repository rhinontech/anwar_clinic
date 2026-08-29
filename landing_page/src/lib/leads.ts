import { API_URL } from "@/config/constants";

export type LeadSource = "consultation_modal" | "contact_form";

export interface LeadSubmission {
  fullName: string;
  countryCode: string;
  phone: string;
  email?: string;
  city?: string;
  /** Preferred clinic branch, where the form asks for one. */
  branch?: string;
  message?: string;
  whatsappOptIn?: boolean;
  source: LeadSource;
}

/**
 * Posts an enquiry to the open lead-capture endpoint; the admin panel's Leads
 * module reads them back. The current path travels with it so we can tell which
 * page a lead converted on.
 */
export async function submitLead(lead: LeadSubmission): Promise<void> {
  const res = await fetch(`${API_URL}/public/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      pageUrl: typeof window !== "undefined" ? window.location.pathname : undefined,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: "" }));
    throw new Error(body.message || "We couldn't submit your request. Please try again.");
  }
}
