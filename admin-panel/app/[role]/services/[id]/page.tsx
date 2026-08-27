"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import { RequirePermission } from "@/components/UI/Guards";
import { ServiceEditor } from "@/components/Services/ServiceEditor";

export default function ServiceEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const roleSlug = usePathname().split("/")[1] || "";
  return (
    <RequirePermission permissions={["services:read"]}>
      <ServiceEditor serviceId={id} roleSlug={roleSlug} />
    </RequirePermission>
  );
}
