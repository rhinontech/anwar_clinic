"use client";

import { TbTool } from "react-icons/tb";
import { Can } from "@/components/UI/Guards";
import { PageHeader } from "@/components/Layout/PageHeader";

/**
 * Stand-in body for modules that aren't built yet. It still demonstrates the
 * two levels of gating: the page itself is behind `<RequirePermission>` for the
 * :read permission, and the write-only action below is behind `<Can>`.
 */
export function ModulePlaceholder({
  title,
  description,
  writePermission,
  writeAction,
}: {
  title: string;
  description: string;
  writePermission?: string;
  writeAction?: string;
}) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        action={
          writePermission && writeAction ? (
            <Can permissions={[writePermission]}>
              <button className="rounded-lg bg-teal-600 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-teal-700">
                {writeAction}
              </button>
            </Can>
          ) : undefined
        }
      />
      <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white/50 p-10 text-center dark:border-slate-700 dark:bg-slate-900/50">
        <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800">
          <TbTool className="h-5 w-5" />
        </span>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {title} module coming soon
        </p>
        <p className="mt-1 max-w-sm text-xs text-slate-500 dark:text-slate-400">
          Access control is already wired up — only roles granted the right permission can open this
          page.
        </p>
      </div>
    </>
  );
}
