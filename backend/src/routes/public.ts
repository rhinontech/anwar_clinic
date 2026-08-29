import { Router, Request, Response } from "express";
import { Service } from "../models";
import { SEED_SECTIONS_BY_SLUG } from "../config/serviceSeedData";

// Open, credential-less API consumed by the landing page at build/revalidate
// time. Draft services are never exposed here, so an unfinished page can't leak.
const router = Router();

const PUBLIC_ATTRS = [
  "slug", "title", "cardDescription", "cardImage", "badge",
  "sortOrder", "seoTitle", "seoDescription", "sections", "hiddenSections",
] as const;

router.get("/services", async (_req: Request, res: Response) => {
  const services = await Service.findAll({
    where: { status: "published" },
    order: [["sortOrder", "ASC"], ["createdAt", "ASC"]],
    // Card data only — keeps the listing payload small.
    attributes: ["slug", "title", "cardDescription", "cardImage", "badge", "sortOrder"],
  });
  res.json(services);
});

router.get("/services/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const service = await Service.findOne({
    where: { slug, status: "published" },
    attributes: PUBLIC_ATTRS as unknown as string[],
  });
  if (!service) {
    res.status(404).json({ message: "Service not found" });
    return;
  }

  // If seed data has richer sections than DB, update DB automatically
  if (SEED_SECTIONS_BY_SLUG[slug]) {
    const seedSections = SEED_SECTIONS_BY_SLUG[slug];
    const currentSections = (service.sections as Record<string, any>) || {};
    const needsUpdate = Object.keys(seedSections).some(
      (k) => !currentSections[k] || Object.keys(currentSections[k] || {}).length === 0
    );
    if (needsUpdate) {
      await Service.update(
        {
          sections: {
            ...currentSections,
            ...seedSections,
          },
        },
        { where: { slug } }
      );
      const updated = await Service.findOne({
        where: { slug, status: "published" },
        attributes: PUBLIC_ATTRS as unknown as string[],
      });
      res.json(updated);
      return;
    }
  }

  res.json(service);
});

export default router;

