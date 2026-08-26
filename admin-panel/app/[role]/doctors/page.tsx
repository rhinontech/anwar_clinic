"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["doctors:read"]}>
      <ModulePlaceholder
        title="Doctors"
        description="Consulting doctors and their schedules."
        writePermission="doctors:write"
        writeAction="Add doctor"
      />
    </RequirePermission>
  );
}
