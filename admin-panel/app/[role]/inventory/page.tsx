"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["inventory:read"]}>
      <ModulePlaceholder
        title="Inventory"
        description="Medicines, consumables and stock levels."
        writePermission="inventory:write"
        writeAction="Add stock"
      />
    </RequirePermission>
  );
}
