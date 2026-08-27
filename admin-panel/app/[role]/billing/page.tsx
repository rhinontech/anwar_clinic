"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { ModulePlaceholder } from "@/components/UI/ModulePlaceholder";

export default function Page() {
  return (
    <RequirePermission permissions={["billing:read"]}>
      <ModulePlaceholder
        title="Billing"
        description="Invoices, payments and outstanding balances."
        writePermission="billing:write"
        writeAction="Create invoice"
      />
    </RequirePermission>
  );
}
