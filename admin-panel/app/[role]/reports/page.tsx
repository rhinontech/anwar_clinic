"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["reports:read"]}>
      <ModulePlaceholder
        title="Reports"
        description="Clinic performance, revenue and visit analytics."
      />
    </RequirePermission>
  );
}
