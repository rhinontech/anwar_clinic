"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["appointments:read"]}>
      <ModulePlaceholder
        title="Appointments"
        description="Schedule and track patient visits."
        writePermission="appointments:write"
        writeAction="New appointment"
      />
    </RequirePermission>
  );
}
