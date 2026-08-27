// API client for service content. The base URL comes from .env so the same code
// works against localhost and production without edits.
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "http://localhost:5050";

/** Seconds before a statically generated service page refetches. */
export const SERVICES_REVALIDATE = Number(process.env.SERVICES_REVALIDATE || 60);

export interface ServiceCard {
  slug: string;
  title: string;
  cardDescription: string;
  cardImage: string | null;
  badge: string | null;
  sortOrder: number;
}

export interface ServiceDetail extends ServiceCard {
  seoTitle: string | null;
  seoDescription: string | null;
  /** Per-section overrides keyed by section key; missing fields use component defaults. */
  sections: Record<string, Record<string, unknown>>;
  hiddenSections: string[];
}

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: SERVICES_REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    // A build must not fail because the API is briefly unreachable — callers
    // fall back to the bundled data instead.
    console.warn(`[services] Could not reach ${API_URL}${path}`);
    return null;
  }
}

export async function fetchServices(): Promise<ServiceCard[] | null> {
  return getJson<ServiceCard[]>("/public/services");
}

export async function fetchService(slug: string): Promise<ServiceDetail | null> {
  return getJson<ServiceDetail>(`/public/services/${encodeURIComponent(slug)}`);
}

/**
 * Reads one section's stored fields. Returns {} when the service has no
 * override, which spreads into a component as "use all your defaults".
 */
export function sectionProps(
  service: ServiceDetail | null,
  key: string
): Record<string, unknown> {
  return service?.sections?.[key] ?? {};
}

export function isSectionHidden(service: ServiceDetail | null, key: string): boolean {
  return service?.hiddenSections?.includes(key) ?? false;
}
