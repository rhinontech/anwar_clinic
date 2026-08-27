"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["prescriptions:read"]}>
      <ModulePlaceholder
        title="Prescriptions"
        description="Issued prescriptions and medication history."
        writePermission="prescriptions:write"
        writeAction="New prescription"
      />
    </RequirePermission>
  );
}
