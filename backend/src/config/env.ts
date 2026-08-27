import dotenv from "dotenv";
dotenv.config();

const parseCsv = (value?: string) =>
  value
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) ?? [];

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3100";
const port = parseInt(process.env.PORT || "5050", 10);

export const env = {
  port,
  databaseUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.JWT_SECRET || "anwar-clinic-dev-secret-change-in-production",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  frontendUrl,
  frontendUrls: Array.from(new Set([frontendUrl, ...parseCsv(process.env.FRONTEND_URLS)])),

  // Absolute base URL of THIS API. Uploaded-file URLs are built from it, so it
  // must be the public hostname in production, not localhost.
  publicUrl: process.env.PUBLIC_URL || `http://localhost:${port}`,

  // "local" (disk, the default) or "s3". See services/storage/index.ts.
  storageDriver: (process.env.STORAGE_DRIVER || "local") as "local" | "s3",
  maxUploadBytes: parseInt(process.env.MAX_UPLOAD_BYTES || String(10 * 1024 * 1024), 10),

  s3: {
    bucket: process.env.S3_BUCKET || "",
    region: process.env.S3_REGION || "",
    accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
    // Optional folder inside the bucket, e.g. "clinic/media".
    keyPrefix: process.env.S3_KEY_PREFIX || "",
    // Optional CloudFront/custom domain serving the bucket.
    publicBaseUrl: process.env.S3_PUBLIC_BASE_URL || "",
  },
};
