"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { LeadsList } from "@/components/Leads/LeadsList";

export default function LeadsPage() {
  return (
    <RequirePermission permissions={["leads:read"]}>
      <LeadsList />
    </RequirePermission>
  );
}
