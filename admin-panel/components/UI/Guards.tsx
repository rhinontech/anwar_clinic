"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLock } from "react-icons/tb";
import { usePermissions } from "@/context/PermissionsContext";

/**
 * Renders `children` only if the signed-in user (or the previewed role) holds
 * ANY of the listed permissions. Use for inline bits — action buttons, columns,
 * cards — where a whole-page guard would be too blunt.
 */
export function Can({
  permissions,
  fallback = null,
  children,
}: {
  permissions: string[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
}) {
  const { has, ready } = usePermissions();
  if (!ready) return null;
  return has(...permissions) ? <>{children}</> : <>{fallback}</>;
}

/**
 * Whole-page guard. Shows a spinner until permissions resolve, then either the
 * page or a "no access" panel. The API enforces the same rule server-side —
 * this only keeps the UI honest.
 */
export function RequirePermission({
  permissions,
  children,
}: {
  permissions: string[];
  children: React.ReactNode;
}) {
  const { has, ready } = usePermissions();
  const pathname = usePathname();
  const roleSlug = pathname.split("/")[1] || "";

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-teal-600 border-t-transparent" />
      </div>
    );
  }

  if (!has(...permissions)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="max-w-sm rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10">
            <TbLock className="h-5 w-5" />
          </div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            You don&apos;t have access to this page
          </h2>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            Ask an administrator to grant your role the required permission.
          </p>
          <Link
            href={`/${roleSlug}/dashboard`}
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
