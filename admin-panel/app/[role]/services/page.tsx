"use client";

import { usePathname } from "next/navigation";
import { RequirePermission } from "@/components/UI/Guards";
import { ServicesList } from "@/components/Services/ServicesList";

export default function ServicesPage() {
  const roleSlug = usePathname().split("/")[1] || "";
  return (
    <RequirePermission permissions={["services:read"]}>
      <ServicesList roleSlug={roleSlug} />
    </RequirePermission>
  );
}
