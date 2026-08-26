"use client";

import { useEffect, useRef, useState } from "react";
import {
  TbUpload,
  TbTrash,
  TbCopy,
  TbCheck,
  TbAlertCircle,
  TbPhoto,
  TbFileTypePdf,
  TbCloud,
  TbServer,
} from "react-icons/tb";
import { cn } from "@/lib/utils";
import { apiFetch, apiUpload } from "@/lib/api";
import { usePermissions } from "@/context/PermissionsContext";
import { PageHeader } from "@/components/Layout/PageHeader";

interface MediaAsset {
  id: string;
  key: string;
  url: string;
  originalName: string;
  mimeType: string;
  size: number;
  driver: "local" | "s3";
  altText: string | null;
  createdAt: string;
  uploadedBy?: { id: string; fullName: string } | null;
}

interface MediaConfig {
  driver: "local" | "s3";
  maxUploadBytes: number;
  allowedMimeTypes: string[];
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

const isImage = (mime: string) => mime.startsWith("image/");

export function MediaLibrary() {
  const { has } = usePermissions();
  const canWrite = has("media:write");

  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [config, setConfig] = useState<MediaConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    Promise.all([apiFetch<MediaAsset[]>("/media"), apiFetch<MediaConfig>("/media/config")])
      .then(([list, cfg]) => {
        setAssets(Array.isArray(list) ? list : []);
        setConfig(cfg);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const uploadFiles = async (files: FileList | File[]) => {
    if (!canWrite || files.length === 0) return;
    setUploading(true);
    setError("");
    const uploaded: MediaAsset[] = [];
    const failures: string[] = [];

    // Sequential rather than parallel: one oversized file shouldn't take the
    // whole batch down, and each failure names the file that caused it.
    for (const file of Array.from(files)) {
      try {
        uploaded.push(await apiUpload<MediaAsset>("/media/upload", file));
      } catch (err: unknown) {
        failures.push(`${file.name}: ${err instanceof Error ? err.message : "failed"}`);
      }
    }

    if (uploaded.length) setAssets((prev) => [...uploaded, ...prev]);
    if (failures.length) setError(failures.join(" · "));
    setUploading(false);
  };

  const copyUrl = async (asset: MediaAsset) => {
    try {
      await navigator.clipboard.writeText(asset.url);
    } catch {
      setError("Clipboard blocked by the browser — select the URL and copy it manually.");
      return;
    }
    setCopiedId(asset.id);
    window.setTimeout(() => setCopiedId((id) => (id === asset.id ? null : id)), 1600);
  };

  const remove = async (asset: MediaAsset) => {
    if (!confirm(`Delete "${asset.originalName}"? Any page using its URL will break.`)) return;
    try {
      await apiFetch(`/media/${asset.id}`, { method: "DELETE" });
      setAssets((prev) => prev.filter((a) => a.id !== asset.id));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-teal-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Media Library"
        description="Upload an image, copy its URL, and paste it into your landing page."
        action={
          config && (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium",
                config.driver === "s3"
                  ? "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                  : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
              )}
              title={
                config.driver === "s3"
                  ? "Files are stored in your S3 bucket."
                  : "Files are stored on the API server's disk. Set STORAGE_DRIVER=s3 to switch."
              }
            >
              {config.driver === "s3" ? (
                <TbCloud className="h-3.5 w-3.5" />
              ) : (
                <TbServer className="h-3.5 w-3.5" />
              )}
              {config.driver === "s3" ? "S3 storage" : "Local storage"}
            </span>
          )
        }
      />

      {canWrite && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            uploadFiles(e.dataTransfer.files);
          }}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "mb-5 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition",
            dragging
              ? "border-teal-400 bg-teal-50/60 dark:border-teal-600 dark:bg-teal-500/10"
              : "border-slate-300 bg-white hover:border-teal-300 dark:border-slate-700 dark:bg-slate-900"
          )}
        >
          <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800">
            <TbUpload className="h-5 w-5" />
          </span>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {uploading ? "Uploading…" : "Drop files here, or click to browse"}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            PNG, JPG, WebP, GIF, SVG, AVIF or PDF
            {config ? ` · up to ${formatBytes(config.maxUploadBytes)} each` : ""}
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={config?.allowedMimeTypes.join(",")}
            className="hidden"
            onChange={(e) => {
              if (e.target.files) uploadFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </div>
      )}

      {error && (
        <div className="mb-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
          <TbAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span className="min-w-0 break-words">{error}</span>
        </div>
      )}

      {assets.length === 0 ? (
        <div className="flex min-h-[30vh] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 text-center dark:border-slate-700">
          <TbPhoto className="mb-2 h-6 w-6 text-slate-400" />
          <p className="text-sm text-slate-500 dark:text-slate-400">Nothing uploaded yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-36 items-center justify-center bg-slate-50 dark:bg-slate-950">
                {isImage(asset.mimeType) ? (
                  // eslint-disable-next-line @next/next/no-img-element -- arbitrary user-uploaded URLs; next/image would need a remotePatterns entry per bucket/CDN
                  <img
                    src={asset.url}
                    alt={asset.altText || asset.originalName}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <TbFileTypePdf className="h-9 w-9 text-slate-400" />
                )}
              </div>

              <div className="flex flex-1 flex-col gap-2 p-3">
                <div className="min-w-0">
                  <p
                    className="truncate text-sm font-medium text-slate-900 dark:text-slate-100"
                    title={asset.originalName}
                  >
                    {asset.originalName}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {formatBytes(asset.size)} · {asset.mimeType.split("/")[1]?.toUpperCase()}
                  </p>
                </div>

                {/* Read-only and selectable, so the URL can still be grabbed by
                    hand if the clipboard API is unavailable. */}
                <input
                  readOnly
                  value={asset.url}
                  onFocus={(e) => e.target.select()}
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 font-mono text-[11px] text-slate-600 outline-none focus:border-teal-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
                />

                <div className="mt-auto flex items-center gap-2">
                  <button
                    onClick={() => copyUrl(asset)}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition",
                      copiedId === asset.id
                        ? "bg-teal-600 text-white"
                        : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                    )}
                  >
                    {copiedId === asset.id ? (
                      <>
                        <TbCheck className="h-3.5 w-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <TbCopy className="h-3.5 w-3.5" /> Copy URL
                      </>
                    )}
                  </button>
                  {canWrite && (
                    <button
                      onClick={() => remove(asset)}
                      className="rounded-lg border border-slate-200 p-2 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-slate-700"
                      aria-label={`Delete ${asset.originalName}`}
                    >
                      <TbTrash className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
