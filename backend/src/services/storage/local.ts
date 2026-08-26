import fs from "fs/promises";
import path from "path";
import { env } from "../../config/env";
import { StorageDriver, PutFileInput, StoredObject, buildObjectKey } from "./types";

// Disk-backed stand-in for S3. Files land in <backend>/uploads and are served
// publicly at /uploads/<key> by app.ts. URLs are absolute and stable, so they
// can be pasted straight into a landing page's <img src> today and keep working
// until the S3 driver takes over.
const UPLOAD_DIR = path.resolve(process.cwd(), "uploads");

export class LocalStorageDriver implements StorageDriver {
  readonly name = "local" as const;

  urlFor(key: string) {
    return `${env.publicUrl}/uploads/${key}`;
  }

  async put(file: PutFileInput): Promise<StoredObject> {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    const key = buildObjectKey(file.originalName);
    await fs.writeFile(path.join(UPLOAD_DIR, key), file.buffer);
    return {
      key,
      url: this.urlFor(key),
      size: file.buffer.length,
      contentType: file.mimeType,
    };
  }

  async remove(key: string): Promise<void> {
    // Guard against a key escaping the upload dir even though keys are generated.
    const target = path.join(UPLOAD_DIR, path.basename(key));
    await fs.rm(target, { force: true });
  }
}
