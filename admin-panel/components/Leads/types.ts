export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "lost";
export type LeadSource = "consultation_modal" | "contact_form" | "manual";

export interface Assignee {
  id: string;
  fullName: string;
  email: string;
}

export interface Lead {
  id: string;
  fullName: string;
  countryCode: string;
  phone: string;
  email: string | null;
  city: string | null;
  branch: string | null;
  message: string | null;
  whatsappOptIn: boolean;
  source: LeadSource;
  pageUrl: string | null;
  status: LeadStatus;
  notes: string | null;
  assignedToId: string | null;
  assignedTo?: Assignee | null;
  createdAt: string;
  updatedAt: string;
}

export interface LeadsResponse {
  leads: Lead[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface LeadStats {
  total: number;
  byStatus: Record<LeadStatus, number>;
}

export const STATUS_ORDER: LeadStatus[] = ["new", "contacted", "qualified", "converted", "lost"];

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  converted: "Converted",
  lost: "Lost",
};

// One class string per stage, so the pill and the filter chip always agree.
export const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300",
  contacted: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  qualified: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  converted: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  lost: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
};

export const SOURCE_LABELS: Record<LeadSource, string> = {
  consultation_modal: "Consultation popup",
  contact_form: "Contact form",
  manual: "Added manually",
};
