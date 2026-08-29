"use client";

import { useState } from "react";
import { TbX, TbPhone, TbMail, TbMapPin, TbBrandWhatsapp, TbLink } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { apiFetch } from "@/lib/api";
import {
  type Assignee,
  type Lead,
  type LeadStatus,
  SOURCE_LABELS,
  STATUS_LABELS,
  STATUS_ORDER,
  STATUS_STYLES,
} from "./types";

/**
 * Side drawer for one enquiry. The visitor's own answers are read-only —
 * only the follow-up fields (status, owner, notes) can be edited, which is
 * exactly what the API accepts on PUT /leads/:id.
 */
export function LeadDetail({
  lead,
  assignees,
  canWrite,
  onClose,
  onSaved,
}: {
  lead: Lead;
  assignees: Assignee[];
  canWrite: boolean;
  onClose: () => void;
  onSaved: (lead: Lead) => void;
}) {
  const [status, setStatus] = useState<LeadStatus>(lead.status);
  const [assignedToId, setAssignedToId] = useState(lead.assignedToId ?? "");
  const [notes, setNotes] = useState(lead.notes ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dirty =
    status !== lead.status ||
    assignedToId !== (lead.assignedToId ?? "") ||
    notes !== (lead.notes ?? "");

  const save = async () => {
    setSaving(true);
    setError(null);
    try {
      const updated = await apiFetch<Lead>(`/leads/${lead.id}`, {
        method: "PUT",
        body: JSON.stringify({ status, assignedToId: assignedToId || null, notes }),
      });
      onSaved(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-slate-900/40" onClick={onClose} />
      <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto border-l border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 p-5 dark:border-slate-800">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-slate-900 dark:text-slate-100">
              {lead.fullName}
            </h2>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className={cn("rounded-full px-2 py-0.5 font-medium", STATUS_STYLES[lead.status])}>
                {STATUS_LABELS[lead.status]}
              </span>
              <span>{SOURCE_LABELS[lead.source]}</span>
              <span>· {new Date(lead.createdAt).toLocaleString()}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
            aria-label="Close"
          >
            <TbX className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-5 p-5">
          <div className="space-y-2 rounded-xl border border-slate-200 p-4 text-sm dark:border-slate-800">
            <a
              href={`tel:${lead.countryCode}${lead.phone}`}
              className="flex items-center gap-2 font-medium text-slate-800 hover:text-teal-600 dark:text-slate-100"
            >
              <TbPhone className="h-4 w-4 shrink-0 text-slate-400" />
              {lead.countryCode} {lead.phone}
            </a>
            {lead.email && (
              <a
                href={`mailto:${lead.email}`}
                className="flex items-center gap-2 break-all text-slate-600 hover:text-teal-600 dark:text-slate-300"
              >
                <TbMail className="h-4 w-4 shrink-0 text-slate-400" />
                {lead.email}
              </a>
            )}
            {(lead.branch || lead.city) && (
              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <TbMapPin className="h-4 w-4 shrink-0 text-slate-400" />
                {[lead.branch, lead.city].filter(Boolean).join(" · ")}
              </p>
            )}
            {lead.whatsappOptIn && (
              <p className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <TbBrandWhatsapp className="h-4 w-4 shrink-0" />
                Opted in to WhatsApp updates
              </p>
            )}
            {lead.pageUrl && (
              <p className="flex items-center gap-2 break-all text-xs text-slate-400">
                <TbLink className="h-3.5 w-3.5 shrink-0" />
                {lead.pageUrl}
              </p>
            )}
          </div>

          {lead.message && (
            <div>
              <p className="mb-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">Message</p>
              <p className="whitespace-pre-wrap rounded-xl bg-slate-50 p-3 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                {lead.message}
              </p>
            </div>
          )}

          <div className="space-y-4 border-t border-slate-200 pt-5 dark:border-slate-800">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {STATUS_ORDER.map((s) => (
                  <button
                    key={s}
                    disabled={!canWrite}
                    onClick={() => setStatus(s)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-60",
                      status === s
                        ? "border-teal-600 bg-teal-600 text-white"
                        : "border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    )}
                  >
                    {STATUS_LABELS[s]}
                  </button>
                ))}
              </div>
            </div>

            {canWrite && (
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
                  Assigned to
                </label>
                <select
                  value={assignedToId}
                  onChange={(e) => setAssignedToId(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950"
                >
                  <option value="">Unassigned</option>
                  {assignees.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.fullName}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
                Follow-up notes
              </label>
              <textarea
                value={notes}
                disabled={!canWrite}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Called on 12 Aug — asked to be contacted after 6pm."
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:disabled:bg-slate-900"
              />
            </div>

            {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

            {canWrite && (
              <button
                onClick={save}
                disabled={!dirty || saving}
                className="w-full rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700 disabled:opacity-50"
              >
                {saving ? "Saving…" : "Save changes"}
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
