"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { RolesManager } from "@/components/Settings/RolesManager";

export default function SettingsRolesPage() {
  return (
    <RequirePermission permissions={["settings:read"]}>
      <RolesManager />
    </RequirePermission>
  );
}
