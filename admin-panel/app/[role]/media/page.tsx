"use client";

import { RequirePermission } from "@/components/UI/Guards";
import { MediaLibrary } from "@/components/Media/MediaLibrary";

export default function MediaPage() {
  return (
    <RequirePermission permissions={["media:read"]}>
      <MediaLibrary />
    </RequirePermission>
  );
}
