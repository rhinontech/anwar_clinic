"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TbPlus, TbTrash, TbAlertCircle, TbCheck, TbExternalLink, TbPencil } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { apiFetch } from "@/lib/api";
import { usePermissions } from "@/context/PermissionsContext";
import { PageHeader } from "@/components/Layout/PageHeader";
import type { ServiceSummary } from "./types";

const LANDING_URL = process.env.NEXT_PUBLIC_LANDING_URL || "http://localhost:3200";

export function ServicesList({ roleSlug }: { roleSlug: string }) {
  const { has } = usePermissions();
  const canWrite = has("services:write");

  const [services, setServices] = useState<ServiceSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  useEffect(() => {
    apiFetch<ServiceSummary[]>("/services")
      .then((list) => setServices(Array.isArray(list) ? list : []))
      .catch((err) => setMessage({ kind: "error", text: err.message }))
      .finally(() => setLoading(false));
  }, []);

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const svc = await apiFetch<ServiceSummary>("/services", {
        method: "POST",
        body: JSON.stringify({ title: newTitle, slug: newSlug }),
      });
      setServices((prev) => [...prev, svc]);
      setCreating(false);
      setNewTitle("");
      setNewSlug("");
      setMessage({
        kind: "ok",
        text: `"${svc.title}" created as a draft — open it to fill in the sections, then publish.`,
      });
    } catch (err: unknown) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Create failed" });
    } finally {
      setSaving(false);
    }
  };

  const remove = async (svc: ServiceSummary) => {
    if (!confirm(`Delete "${svc.title}"? Its page at /services/${svc.slug} will 404.`)) return;
    try {
      await apiFetch(`/services/${svc.id}`, { method: "DELETE" });
      setServices((prev) => prev.filter((s) => s.id !== svc.id));
      setMessage({ kind: "ok", text: "Service deleted." });
    } catch (err: unknown) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Delete failed" });
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-teal-600 border-t-transparent" />
      </div>
    );
  }

  const published = services.filter((s) => s.status === "published").length;

  return (
    <>
      <PageHeader
        title="Services"
        description={`${services.length} service${services.length === 1 ? "" : "s"} · ${published} live on the site. Each one is its own page.`}
        action={
          canWrite && (
            <button
              onClick={() => setCreating((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
            >
              <TbPlus className="h-4 w-4" /> New service
            </button>
          )
        }
      />

      {creating && canWrite && (
        <form
          onSubmit={create}
          className="mb-5 flex flex-wrap items-end gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex min-w-[200px] flex-1 flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Service name</label>
            <input
              required
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
                setNewSlug(e.target.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
              }}
              placeholder="Scalp Micropigmentation"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950"
            />
          </div>
          <div className="flex min-w-[200px] flex-1 flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-400">URL slug</label>
            <input
              required
              value={newSlug}
              onChange={(e) => setNewSlug(e.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900"
          >
            Create
          </button>
        </form>
      )}

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

      {services.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500 dark:border-slate-700">
          No services yet.
        </p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-left dark:border-slate-800 dark:bg-slate-950">
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-2.5 font-medium">Service</th>
                <th className="hidden px-4 py-2.5 font-medium sm:table-cell">URL</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {services.map((svc) => (
                <tr key={svc.id} className="group">
                  <td className="px-4 py-3">
                    <Link
                      href={`/${roleSlug}/services/${svc.id}`}
                      className="font-medium text-slate-900 hover:text-teal-700 dark:text-slate-100"
                    >
                      {svc.title}
                    </Link>
                    {svc.badge && (
                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {svc.badge}
                      </span>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    <a
                      href={`${LANDING_URL}/services/${svc.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-slate-500 hover:text-teal-600"
                    >
                      /services/{svc.slug} <TbExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-medium",
                        svc.status === "published"
                          ? "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                          : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
                      )}
                    >
                      {svc.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/${roleSlug}/services/${svc.id}`}
                        className="rounded p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
                      >
                        <TbPencil className="h-4 w-4" />
                      </Link>
                      {canWrite && (
                        <button
                          onClick={() => remove(svc)}
                          className="rounded p-1.5 text-slate-400 opacity-0 transition hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"
                          aria-label={`Delete ${svc.title}`}
                        >
                          <TbTrash className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
