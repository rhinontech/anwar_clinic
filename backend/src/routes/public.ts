import { Router, Request, Response } from "express";
import { Service } from "../models";

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
  const service = await Service.findOne({
    where: { slug: req.params.slug, status: "published" },
    attributes: PUBLIC_ATTRS as unknown as string[],
  });
  if (!service) {
    res.status(404).json({ message: "Service not found" });
    return;
  }
  res.json(service);
});

export default router;
