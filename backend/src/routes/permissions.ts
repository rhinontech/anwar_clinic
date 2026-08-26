import { Router, Response } from "express";
import { Permission } from "../models";
import { authenticate, AuthRequest } from "../middleware/authenticate";

const router = Router();

router.use(authenticate);

router.get("/", async (_req: AuthRequest, res: Response) => {
  const permissions = await Permission.findAll({ order: [["resource", "ASC"], ["action", "ASC"]] });
  res.json(permissions);
});

export default router;
