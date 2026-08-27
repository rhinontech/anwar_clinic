"use client";

import { useEffect, useState } from "react";
import { TbX, TbPhoto } from "react-icons/tb";
import { apiFetch } from "@/lib/api";

interface MediaAsset {
  id: string;
  url: string;
  originalName: string;
  mimeType: string;
}

// Lets an image field pull a URL straight from the Media Library instead of the
// editor having to copy/paste it from the other tab.
export function MediaPicker({
  open,
  onClose,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  onPick: (url: string) => void;
}) {
  // null = not fetched yet for this opening; the loading flag is derived from
  // it rather than written synchronously inside the effect.
  const [assets, setAssets] = useState<MediaAsset[] | null>(null);
  const loading = open && assets === null;

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    apiFetch<MediaAsset[]>("/media")
      .then((list) => {
        if (!cancelled) setAssets(Array.isArray(list) ? list : []);
      })
      .catch(() => {
        if (!cancelled) setAssets([]);
      });
    return () => {
      cancelled = true;
    };
  }, [open]);

  if (!open) return null;

  const images = (assets ?? []).filter((a) => a.mimeType.startsWith("image/"));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="flex max-h-[80vh] w-full max-w-3xl flex-col rounded-xl bg-white shadow-xl dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Choose from Media Library
          </h3>
          <button onClick={onClose} className="rounded p-1 text-slate-400 hover:text-slate-600">
            <TbX className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <p className="py-10 text-center text-sm text-slate-500">Loading…</p>
          ) : images.length === 0 ? (
            <div className="flex flex-col items-center py-10 text-center">
              <TbPhoto className="mb-2 h-6 w-6 text-slate-400" />
              <p className="text-sm text-slate-500">
                No images yet — upload some in the Media tab.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {images.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    onPick(a.url);
                    onClose();
                  }}
                  className="group overflow-hidden rounded-lg border border-slate-200 transition hover:border-teal-400 dark:border-slate-700"
                >
                  <span className="flex h-24 items-center justify-center bg-slate-50 dark:bg-slate-950">
                    {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary uploaded URLs */}
                    <img src={a.url} alt={a.originalName} className="h-full w-full object-contain" />
                  </span>
                  <span className="block truncate px-2 py-1.5 text-left text-[11px] text-slate-600 dark:text-slate-400">
                    {a.originalName}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
