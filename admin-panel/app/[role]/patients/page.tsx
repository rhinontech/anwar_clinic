"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["patients:read"]}>
      <ModulePlaceholder
        title="Patients"
        description="Patient records, history and contact details."
        writePermission="patients:write"
        writeAction="Add patient"
      />
    </RequirePermission>
  );
}
