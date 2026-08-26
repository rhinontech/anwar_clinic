import { env } from "../../config/env";
import { StorageDriver } from "./types";
import { LocalStorageDriver } from "./local";
import { S3StorageDriver } from "./s3";

// Every upload path goes through this one object, so switching backends is an
// env change rather than a code change. S3 is only selected when it's actually
// configured — a half-set STORAGE_DRIVER=s3 falls back to local with a warning
// instead of failing every upload at runtime.
function selectDriver(): StorageDriver {
  if (env.storageDriver !== "s3") return new LocalStorageDriver();

  if (!env.s3.bucket || !env.s3.region) {
    console.warn(
      "[Storage] STORAGE_DRIVER=s3 but S3_BUCKET/S3_REGION are unset — using local disk instead."
    );
    return new LocalStorageDriver();
  }
  return new S3StorageDriver();
}

export const storage: StorageDriver = selectDriver();
export * from "./types";
