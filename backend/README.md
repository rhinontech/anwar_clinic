# Anwar Clinic — Backend (`project`)

Node.js + Express + PostgreSQL + Sequelize API with dynamic role-based access control.

## Running it

```bash
createdb anwar_clinic
npm install
cp .env.example .env          # set DATABASE_URL
npm run db:seed               # roles, permission catalog, one admin account
npm run dev                   # http://localhost:5050
```

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `5050` | API port (5000 is taken by AirPlay on macOS) |
| `DATABASE_URL` | — | `postgres://user:pass@host:5432/anwar_clinic` |
| `JWT_SECRET` | dev fallback | **Change in production** |
| `JWT_EXPIRES_IN` | `7d` | Token lifetime |
| `FRONTEND_URL` | `http://localhost:3100` | Allowed CORS origin |
| `PUBLIC_URL` | `http://localhost:5050` | Absolute base URL of this API — uploaded-file URLs are built from it |
| `STORAGE_DRIVER` | `local` | `local` (disk) or `s3` |
| `MAX_UPLOAD_BYTES` | `10485760` | 10MB upload cap |

### Seeded login

```
admin@anwarclinic.com / Admin@123
```

The only account created. Everything else — extra roles, extra staff — is made at
runtime from the admin panel.

## How the RBAC works

Three tables, and grants live entirely in the join table — which is what makes
permissions re-assignable at runtime with no code change:

```
roles ──< role_permissions >── permissions
  │
  └──< users
```

A permission is always `<resource>:<action>` (`patients:read`, `billing:write`).

### Permissions are re-read on every request

`middleware/authenticate.ts` verifies the JWT for *identity only*, then re-derives
role and permissions from the database:

```ts
const account = await User.findByPk(payload.userId, {
  include: [{ model: Role, as: "role", include: [{ model: Permission }] }],
});
```

Tokens live for days, so trusting their frozen `permissions` claim would leave a
revoked user privileged until expiry. Re-reading means **a permission change or a
deactivation takes effect on the very next request** — no re-login, no token
refresh. The claims are still in the token, but only so the frontend proxy can
route `/:role` without a round-trip.

### Guarding a route

```ts
router.post("/", authorize("settings:write"), handler);      // needs ALL listed
router.get("/", authorizeAny("crm:read", "outreach:read"), handler);  // needs ANY
if (hasPermission(req, "billing:write")) { ... }             // imperative check
```

`superadmin` short-circuits all three — its authority is unconditional even if the
catalog drifts or a role is misconfigured.

### The permission catalog

`src/config/permissions.ts` is the single source of truth. `syncPermissionCatalog()`
runs on every boot and is **idempotent and additive**:

- creates catalog entries missing from the DB
- `superadmin` accumulates the full catalog (`addPermissions`, never `set`)
- `DEFAULT_ROLE_GRANTS` apply **only to newly created permissions**

That last rule is the important one: existing permissions are never re-granted, so
revocations made from the Settings UI survive restarts and re-seeds.

To add a permission: add a line to `PERMISSION_CATALOG` and restart.

## API

| Method | Route | Guard |
| --- | --- | --- |
| `POST` | `/auth/login` | public |
| `POST` | `/auth/logout` | public |
| `GET` | `/auth/me` | authenticated — returns live permissions |
| `GET` | `/roles` | authenticated |
| `POST` | `/roles` | `settings:write` |
| `PUT` | `/roles/:id` | `settings:write` |
| `DELETE` | `/roles/:id` | `settings:write` |
| `PUT` | `/roles/:id/permissions` | `settings:write` |
| `GET` | `/permissions` | authenticated |
| `GET` | `/media` | `media:read` |
| `GET` | `/media/config` | `media:read` |
| `POST` | `/media/upload` | `media:write` — multipart, field `file` |
| `PUT` | `/media/:id` | `media:write` — alt text |
| `DELETE` | `/media/:id` | `media:write` — removes row **and** stored object |
| `GET` | `/uploads/:key` | **public** — serves local files, open CORS |
| `GET` | `/health` | public |

Protected rules: the `superadmin` role cannot be renamed, deleted, or have its
permissions edited; a role with members cannot be deleted; role slugs must be
URL-safe (`[a-z0-9-]+`) because they become the panel's first URL segment.

## File storage

Uploads go through one `StorageDriver` (`src/services/storage/`), so the backend
is chosen by env rather than by code:

| Driver | When | Where files land | URL shape |
| --- | --- | --- | --- |
| `local` (default) | no S3 creds yet | `backend/uploads/` (gitignored) | `{PUBLIC_URL}/uploads/{key}` |
| `s3` | creds available | your bucket | `https://{bucket}.s3.{region}.amazonaws.com/{key}`, or `S3_PUBLIC_BASE_URL` if set |

### Switching to S3

No code changes — set these in `.env` and restart:

```bash
STORAGE_DRIVER=s3
S3_BUCKET=your-bucket
S3_REGION=ap-south-1
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
# optional
S3_KEY_PREFIX=clinic/media
S3_PUBLIC_BASE_URL=https://cdn.yourdomain.com
```

Leave the keys unset to use the ambient AWS credential chain (an IAM role in
production, `~/.aws/credentials` locally). The boot log prints the active driver,
and the Media Library page shows it as a badge. If `STORAGE_DRIVER=s3` but the
bucket/region are missing, it falls back to local with a warning rather than
failing every upload.

**Already-uploaded files keep their stored `url`** — each `media_assets` row
records the absolute URL and the driver that made it, so a local→S3 switch never
breaks a URL already pasted into a page. Re-upload anything you want moved to the
bucket.

Object keys are always generated server-side (`buildObjectKey`) — a client
filename like `../../etc/passwd.png` is reduced to a safe slug, so it can't
traverse or collide.

## Layout

```
src/
  config/
    database.ts       Sequelize instance
    env.ts            typed env
    permissions.ts    PERMISSION_CATALOG + boot-time sync
    seed.ts           roles + the one admin account
  models/
    Role.ts  Permission.ts  User.ts  MediaAsset.ts
    index.ts          associations, RolePermission join table, syncDatabase()
  middleware/
    authenticate.ts   authenticate, authorize, authorizeAny, hasPermission
  services/storage/
    types.ts          StorageDriver interface + safe key generation
    local.ts          disk driver (default)
    s3.ts             S3 driver — ready, selected by STORAGE_DRIVER=s3
    index.ts          driver selection
  routes/
    auth.ts  roles.ts  permissions.ts  media.ts
  app.ts              express app, CORS, route mounting
  server.ts           boot: connect, sync models, sync catalog, listen
```

> `syncDatabase()` uses `sequelize.sync({ alter: true })`, which is convenient in
> development but not what you want against production data — swap in real
> migrations before deploying.
