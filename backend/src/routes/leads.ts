import { Router, Response } from "express";
import { Op, fn, col } from "sequelize";
import { Lead, User } from "../models";
import { LEAD_STATUSES, LEAD_SOURCES, LeadStatus } from "../models/Lead";
import { authenticate, authorize, AuthRequest } from "../middleware/authenticate";

const router = Router();

router.use(authenticate);

// Owner is joined on every read so the table can show "assigned to" without
// a second round trip per row.
const ASSIGNEE_INCLUDE = [
  { model: User, as: "assignedTo", attributes: ["id", "fullName", "email"] },
];

/** Counts per status, for the filter chips. Cheap enough to serve unpaginated. */
router.get("/stats", authorize("leads:read"), async (_req: AuthRequest, res: Response) => {
  const rows = (await Lead.findAll({
    attributes: ["status", [fn("COUNT", col("id")), "count"]],
    group: ["status"],
    raw: true,
  })) as unknown as { status: LeadStatus; count: string }[];

  const byStatus = Object.fromEntries(LEAD_STATUSES.map((s) => [s, 0])) as Record<LeadStatus, number>;
  for (const row of rows) byStatus[row.status] = Number(row.count);

  res.json({ total: Object.values(byStatus).reduce((a, b) => a + b, 0), byStatus });
});

/** Staff who can own a lead — feeds the "assign to" dropdown. */
router.get("/assignees", authorize("leads:write"), async (_req: AuthRequest, res: Response) => {
  const users = await User.findAll({
    where: { status: "active" },
    attributes: ["id", "fullName", "email"],
    order: [["fullName", "ASC"]],
  });
  res.json(users);
});

router.get("/", authorize("leads:read"), async (req: AuthRequest, res: Response) => {
  const { status, source, search } = req.query as Record<string, string | undefined>;
  const page = Math.max(1, parseInt(String(req.query.page ?? "1"), 10) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit ?? "25"), 10) || 25));

  const where: Record<string, unknown> = {};
  if (status && LEAD_STATUSES.includes(status as LeadStatus)) where.status = status;
  if (source && (LEAD_SOURCES as string[]).includes(source)) where.source = source;
  if (search?.trim()) {
    // iLike is Postgres-only, which is what this project runs on (see config/database.ts).
    const term = `%${search.trim()}%`;
    where[Op.or as unknown as string] = [
      { fullName: { [Op.iLike]: term } },
      { phone: { [Op.iLike]: term } },
      { email: { [Op.iLike]: term } },
      { city: { [Op.iLike]: term } },
    ];
  }

  const { rows, count } = await Lead.findAndCountAll({
    where,
    include: ASSIGNEE_INCLUDE,
    order: [["createdAt", "DESC"]],
    limit,
    offset: (page - 1) * limit,
  });

  res.json({ leads: rows, total: count, page, limit, pages: Math.ceil(count / limit) || 1 });
});

router.get("/:id", authorize("leads:read"), async (req: AuthRequest, res: Response) => {
  const lead = await Lead.findByPk(req.params.id, { include: ASSIGNEE_INCLUDE });
  if (!lead) {
    res.status(404).json({ message: "Lead not found" });
    return;
  }
  res.json(lead);
});

// Manual entry — for a walk-in or a phone enquiry typed in by reception.
router.post("/", authorize("leads:write"), async (req: AuthRequest, res: Response) => {
  const { fullName, phone } = req.body;
  if (!String(fullName ?? "").trim() || !String(phone ?? "").trim()) {
    res.status(400).json({ message: "fullName and phone are required" });
    return;
  }

  const lead = await Lead.create({
    fullName: String(fullName).trim(),
    countryCode: String(req.body.countryCode ?? "+91").trim(),
    phone: String(phone).trim(),
    email: req.body.email?.trim() || null,
    city: req.body.city?.trim() || null,
    branch: req.body.branch?.trim() || null,
    message: req.body.message?.trim() || null,
    whatsappOptIn: Boolean(req.body.whatsappOptIn),
    source: "manual",
    status: LEAD_STATUSES.includes(req.body.status) ? req.body.status : "new",
    notes: req.body.notes?.trim() || null,
  });

  res.status(201).json(lead);
});

router.put("/:id", authorize("leads:write"), async (req: AuthRequest, res: Response) => {
  const lead = await Lead.findByPk(req.params.id);
  if (!lead) {
    res.status(404).json({ message: "Lead not found" });
    return;
  }

  const update: Record<string, unknown> = {};
  // The enquiry itself is what the visitor typed — only the follow-up fields
  // below are editable, so a lead can't be quietly rewritten after the fact.
  for (const key of ["notes", "branch", "city", "email"]) {
    if (req.body[key] !== undefined) update[key] = req.body[key] || null;
  }
  if (req.body.status !== undefined) {
    if (!LEAD_STATUSES.includes(req.body.status)) {
      res.status(400).json({ message: `status must be one of: ${LEAD_STATUSES.join(", ")}` });
      return;
    }
    update.status = req.body.status;
  }
  if (req.body.assignedToId !== undefined) {
    const assignedToId = req.body.assignedToId || null;
    if (assignedToId && !(await User.findByPk(assignedToId))) {
      res.status(400).json({ message: "assignedToId does not match a user" });
      return;
    }
    update.assignedToId = assignedToId;
  }

  await lead.update(update);
  const fresh = await Lead.findByPk(lead.id, { include: ASSIGNEE_INCLUDE });
  res.json(fresh);
});

router.delete("/:id", authorize("leads:write"), async (req: AuthRequest, res: Response) => {
  const lead = await Lead.findByPk(req.params.id);
  if (!lead) {
    res.status(404).json({ message: "Lead not found" });
    return;
  }
  await lead.destroy();
  res.json({ message: "Lead deleted" });
});

export default router;
