# Anwar Clinic — Landing Page

Next.js 14 (App Router) public site. Service pages are driven by content from the
admin panel.

## Running it

```bash
npm install
cp .env.example .env.local
npm run dev            # http://localhost:3200
```

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:5050` | Backend base URL |
| `SERVICES_REVALIDATE` | `60` | Seconds before a service page refetches |

## How service pages work

`/services/<slug>` is a single template rendered from data, not 21 hand-written
pages. `generateStaticParams()` asks `GET /public/services` for the slug list, so
**publishing a service in the admin panel creates its page** — no code change, no
redeploy.

```
admin panel ──▶ POST /services ──▶ Postgres
                                     │
landing page ◀── GET /public/services┘
   generateStaticParams()  → the slug list
   fetchService(slug)      → that page's content
```

Pages are statically generated and revalidated in the background every
`SERVICES_REVALIDATE` seconds. `dynamicParams = true`, so a slug added after the
last build still renders on first request instead of 404ing.

### Content falls back, never breaks

`ServiceDetailPage` spreads each section's stored fields over that section's
props:

```tsx
<ServiceFAQSection title={title} {...sec("faq")} />
```

The backend never stores empty values, so an unset field simply isn't in the
object — and the component uses its own `DEFAULT_*` constant. That means:

- a new service renders all 21 sections immediately, with sensible copy
  interpolated from its title
- editing one field in the admin panel overrides only that field
- **if the API is unreachable, pages still build** from `src/data/allServicesData.ts`

`hiddenSections` drops a section from one service's page.

### Where content lives now

| | |
| --- | --- |
| Service content | Postgres, edited in the admin panel |
| `src/data/allServicesData.ts` | offline fallback only — kept so a build survives an API outage |
| Section layout & styling | the components in `src/pages/services/` |
| Per-section defaults | each component's `DEFAULT_*` constant |

To change what is *editable*, edit `backend/src/config/serviceSections.ts` — the
admin forms follow automatically.
