# Anwar Clinic

Clinic monorepo. Both projects share one dynamic, role-based access control system.

```
admin-panel/    Next.js 16 (App Router) + TypeScript + Tailwind v4   :3100
backend/        Node.js + Express + PostgreSQL + Sequelize            :5050
landing_page/   Next.js 14 public site                                :3200
```

## Getting started

```bash
# 1. Backend — http://localhost:5050
createdb anwar_clinic
cd backend && npm install && cp .env.example .env
npm run db:seed
npm run db:seed:services
npm run dev

# 2. Admin panel — http://localhost:3100
cd ../admin-panel && npm install && cp .env.example .env.local
npm run dev
```

```bash
# 3. Landing page — http://localhost:3200
cd ../landing_page && npm install && cp .env.example .env.local
npm run dev
```

Sign in with **admin@anwarclinic.com** / **Admin@123**.

## What's built

- **Authentication** — login only, JWT in a cookie, one seeded superadmin account
- **Dynamic RBAC** — roles and permissions are database rows, editable at runtime
  from Settings → Roles. Creating a role gives it working URLs, a filtered nav, and
  enforced access with no code change and no redeploy.
- **Service pages** — publish a service in the admin panel and its page appears at
  `landing_page`'s `/services/<slug>`, with all 21 sections. Every section is
  editable per service; anything left blank uses the built-in default. Driven by
  one schema (`backend/src/config/serviceSections.ts`) that the admin forms are
  generated from.
- **Media Library** — upload images in the panel, copy the public URL, paste it
  into a landing page's `<img src>`. Files go to local disk today; switching to S3
  is env vars only (see `backend/README.md`), with no code changes.
- **Module pages** — appointments, patients, doctors, prescriptions, billing,
  inventory, staff, reports are permission-gated placeholders, ready to fill in.

Each project's README explains its half of the RBAC design in detail.
