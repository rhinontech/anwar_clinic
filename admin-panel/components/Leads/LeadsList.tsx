"use client";

import { useEffect, useState } from "react";
import {
  TbSearch,
  TbTrash,
  TbAlertCircle,
  TbCheck,
  TbPhone,
  TbMail,
  TbBrandWhatsapp,
  TbChevronLeft,
  TbChevronRight,
  TbRefresh,
} from "react-icons/tb";
import { cn } from "@/lib/utils";
import { apiFetch } from "@/lib/api";
import { usePermissions } from "@/context/PermissionsContext";
import { PageHeader } from "@/components/Layout/PageHeader";
import { LeadDetail } from "./LeadDetail";
import {
  type Assignee,
  type Lead,
  type LeadStats,
  type LeadStatus,
  type LeadsResponse,
  SOURCE_LABELS,
  STATUS_LABELS,
  STATUS_ORDER,
  STATUS_STYLES,
} from "./types";

const PAGE_SIZE = 25;

function formatWhen(iso: string) {
  const date = new Date(iso);
  const mins = Math.round((Date.now() - date.getTime()) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  if (mins < 60 * 24) return `${Math.round(mins / 60)}h ago`;
  return date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

export function LeadsList() {
  const { has } = usePermissions();
  const canWrite = has("leads:write");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<LeadStats | null>(null);
  const [assignees, setAssignees] = useState<Assignee[]>([]);
  const [selected, setSelected] = useState<Lead | null>(null);

  const [status, setStatus] = useState<LeadStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  // Typing in the search box shouldn't fire a request per keystroke.
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
      setLoading(true);
    }, 300);
    return () => clearTimeout(t);
  }, [search]);

  // Bumped by the Refresh button to re-run the fetch effect below. The effect
  // owns every load, so nothing calls setState synchronously during render.
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams({ page: String(page), limit: String(PAGE_SIZE) });
    if (status !== "all") params.set("status", status);
    if (debouncedSearch.trim()) params.set("search", debouncedSearch.trim());

    Promise.all([
      apiFetch<LeadsResponse>(`/leads?${params}`),
      apiFetch<LeadStats>("/leads/stats"),
    ])
      .then(([list, counts]) => {
        setLeads(list.leads);
        setPages(list.pages);
        setTotal(list.total);
        setStats(counts);
      })
      .catch((err: unknown) =>
        setMessage({
          kind: "error",
          text: err instanceof Error ? err.message : "Could not load leads",
        })
      )
      .finally(() => setLoading(false));
  }, [page, status, debouncedSearch, reloadKey]);

  const reload = () => {
    setLoading(true);
    setReloadKey((k) => k + 1);
  };

  // Only writers can assign, and only they are allowed to read the staff list.
  useEffect(() => {
    if (!canWrite) return;
    apiFetch<Assignee[]>("/leads/assignees")
      .then(setAssignees)
      .catch(() => setAssignees([]));
  }, [canWrite]);

  // The detail drawer edits in place; reflect the saved row without a refetch,
  // but re-pull the counts since a status change moves it between buckets.
  const applyUpdate = (updated: Lead) => {
    setLeads((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
    setSelected(updated);
    apiFetch<LeadStats>("/leads/stats").then(setStats).catch(() => {});
  };

  const remove = async (lead: Lead) => {
    if (!confirm(`Delete the enquiry from ${lead.fullName}? This cannot be undone.`)) return;
    try {
      await apiFetch(`/leads/${lead.id}`, { method: "DELETE" });
      setLeads((prev) => prev.filter((l) => l.id !== lead.id));
      setTotal((t) => Math.max(0, t - 1));
      if (selected?.id === lead.id) setSelected(null);
      setMessage({ kind: "ok", text: "Lead deleted." });
      apiFetch<LeadStats>("/leads/stats").then(setStats).catch(() => {});
    } catch (err: unknown) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Delete failed" });
    }
  };

  const chips: { key: LeadStatus | "all"; label: string; count?: number }[] = [
    { key: "all", label: "All", count: stats?.total },
    ...STATUS_ORDER.map((s) => ({ key: s, label: STATUS_LABELS[s], count: stats?.byStatus[s] })),
  ];

  return (
    <>
      <PageHeader
        title="Leads"
        description="Consultation requests and contact-form enquiries submitted from the website."
        action={
          <button
            onClick={reload}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <TbRefresh className={cn("h-4 w-4", loading && "animate-spin")} /> Refresh
          </button>
        }
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        {chips.map((chip) => (
          <button
            key={chip.key}
            onClick={() => {
              setStatus(chip.key);
              setPage(1);
              setLoading(true);
            }}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition",
              status === chip.key
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            {chip.label}
            {chip.count !== undefined && (
              <span className={cn("ml-1.5", status === chip.key ? "text-teal-100" : "text-slate-400")}>
                {chip.count}
              </span>
            )}
          </button>
        ))}

        <div className="relative ml-auto min-w-[220px]">
          <TbSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, phone, email, city"
            className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950"
          />
        </div>
      </div>

      {message && (
        <div
          className={cn(
            "mb-4 flex items-start gap-2 rounded-lg border px-3 py-2 text-sm",
            message.kind === "ok"
              ? "border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
          )}
        >
          {message.kind === "ok" ? (
            <TbCheck className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <TbAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {loading && leads.length === 0 ? (
        <div className="flex min-h-[40vh] items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-teal-600 border-t-transparent" />
        </div>
      ) : leads.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500 dark:border-slate-700">
          {debouncedSearch || status !== "all"
            ? "No leads match this filter."
            : "No enquiries yet. Submissions from the website's consultation popup and contact form land here."}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-left dark:border-slate-800 dark:bg-slate-950">
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-2.5 font-medium">Name</th>
                <th className="px-4 py-2.5 font-medium">Contact</th>
                <th className="hidden px-4 py-2.5 font-medium md:table-cell">Interest</th>
                <th className="hidden px-4 py-2.5 font-medium lg:table-cell">Source</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="hidden px-4 py-2.5 font-medium sm:table-cell">Received</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => setSelected(lead)}
                  className="group cursor-pointer transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-4 py-3">
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {lead.fullName}
                    </span>
                    {lead.assignedTo && (
                      <span className="mt-0.5 block text-[11px] text-slate-400">
                        {lead.assignedTo.fullName}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`tel:${lead.countryCode}${lead.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-teal-600 dark:text-slate-300"
                    >
                      <TbPhone className="h-3.5 w-3.5 shrink-0" />
                      {lead.countryCode} {lead.phone}
                    </a>
                    {lead.email && (
                      <a
                        href={`mailto:${lead.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-teal-600"
                      >
                        <TbMail className="h-3 w-3 shrink-0" />
                        <span className="truncate">{lead.email}</span>
                      </a>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell dark:text-slate-300">
                    {lead.branch || lead.city || "—"}
                    {lead.whatsappOptIn && (
                      <TbBrandWhatsapp
                        className="ml-1.5 inline h-3.5 w-3.5 text-emerald-500"
                        title="Opted in to WhatsApp updates"
                      />
                    )}
                  </td>
                  <td className="hidden px-4 py-3 text-xs text-slate-500 lg:table-cell">
                    {SOURCE_LABELS[lead.source]}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-medium",
                        STATUS_STYLES[lead.status]
                      )}
                    >
                      {STATUS_LABELS[lead.status]}
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-3 text-xs text-slate-500 sm:table-cell">
                    {formatWhen(lead.createdAt)}
                  </td>
                  <td className="px-4 py-3">
                    {canWrite && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          remove(lead);
                        }}
                        className="rounded p-1.5 text-slate-400 opacity-0 transition hover:bg-red-50 hover:text-red-600 group-hover:opacity-100 dark:hover:bg-red-500/10"
                        aria-label={`Delete lead from ${lead.fullName}`}
                      >
                        <TbTrash className="h-4 w-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {pages > 1 && (
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>
            Page {page} of {pages} · {total} lead{total === 1 ? "" : "s"}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setPage((p) => Math.max(1, p - 1));
                setLoading(true);
              }}
              disabled={page === 1}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <TbChevronLeft className="h-4 w-4" /> Prev
            </button>
            <button
              onClick={() => {
                setPage((p) => Math.min(pages, p + 1));
                setLoading(true);
              }}
              disabled={page === pages}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Next <TbChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {selected && (
        <LeadDetail
          lead={selected}
          assignees={assignees}
          canWrite={canWrite}
          onClose={() => setSelected(null)}
          onSaved={applyUpdate}
        />
      )}
    </>
  );
}
