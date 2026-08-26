"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["staff:read"]}>
      <ModulePlaceholder
        title="Staff"
        description="Clinic staff directory and role assignment."
        writePermission="staff:write"
        writeAction="Add staff"
      />
    </RequirePermission>
  );
}
