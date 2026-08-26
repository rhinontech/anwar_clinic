import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { env } from "../../config/env";
import { StorageDriver, PutFileInput, StoredObject, buildObjectKey } from "./types";

// Real S3 driver. Nothing here needs editing when credentials arrive — set the
// env vars listed in .env.example and STORAGE_DRIVER=s3, and this takes over.
export class S3StorageDriver implements StorageDriver {
  readonly name = "s3" as const;

  private client = new S3Client({
    region: env.s3.region,
    ...(env.s3.accessKeyId && env.s3.secretAccessKey
      ? {
          credentials: {
            accessKeyId: env.s3.accessKeyId,
            secretAccessKey: env.s3.secretAccessKey,
          },
        }
      : {}), // fall back to the ambient AWS credential chain (IAM role, ~/.aws)
  });

  urlFor(key: string) {
    const prefix = env.s3.keyPrefix ? `${env.s3.keyPrefix}/` : "";
    // A CDN/custom domain wins when set; otherwise the bucket's regional URL.
    if (env.s3.publicBaseUrl) {
      return `${env.s3.publicBaseUrl.replace(/\/$/, "")}/${prefix}${key}`;
    }
    return `https://${env.s3.bucket}.s3.${env.s3.region}.amazonaws.com/${prefix}${key}`;
  }

  async put(file: PutFileInput): Promise<StoredObject> {
    const key = buildObjectKey(file.originalName);
    const prefix = env.s3.keyPrefix ? `${env.s3.keyPrefix}/` : "";

    await this.client.send(
      new PutObjectCommand({
        Bucket: env.s3.bucket,
        Key: `${prefix}${key}`,
        Body: file.buffer,
        ContentType: file.mimeType,
        // Long cache: keys are unique per upload, so an object is never mutated.
        CacheControl: "public, max-age=31536000, immutable",
      })
    );

    return {
      key,
      url: this.urlFor(key),
      size: file.buffer.length,
      contentType: file.mimeType,
    };
  }

  async remove(key: string): Promise<void> {
    const prefix = env.s3.keyPrefix ? `${env.s3.keyPrefix}/` : "";
    await this.client.send(
      new DeleteObjectCommand({ Bucket: env.s3.bucket, Key: `${prefix}${key}` })
    );
  }
}
