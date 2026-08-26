"use client";

import { PermissionsProvider } from "@/context/PermissionsContext";
import { LayoutProvider } from "@/context/LayoutContext";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";

// Every authenticated page lives under /:role, so the role segment is never
// hardcoded — a role created at runtime in Settings > Roles gets working URLs
// with no new routes and no redeploy.
export default function RoleLayout({ children }: { children: React.ReactNode }) {
  return (
    <PermissionsProvider>
      <LayoutProvider>
        <div className="flex h-svh overflow-hidden bg-slate-50 dark:bg-slate-950">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
          </div>
        </div>
      </LayoutProvider>
    </PermissionsProvider>
  );
}
