import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

/** Where the lead came in from — one per public form on the landing page. */
export type LeadSource = "consultation_modal" | "contact_form" | "manual";

/** Pipeline stage. `new` until someone in the panel touches it. */
export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "lost";

export const LEAD_SOURCES: LeadSource[] = ["consultation_modal", "contact_form", "manual"];
export const LEAD_STATUSES: LeadStatus[] = ["new", "contacted", "qualified", "converted", "lost"];

interface LeadAttributes {
  id: string;
  fullName: string;
  /** Dialing code kept separate from the number so the two forms round-trip cleanly. */
  countryCode: string;
  phone: string;
  email?: string | null;
  city?: string | null;
  /** Preferred clinic branch, from the consultation modal's dropdown. */
  branch?: string | null;
  message?: string | null;
  whatsappOptIn: boolean;
  source: LeadSource;
  /** Landing-page path the form was submitted from — tells us which page converts. */
  pageUrl?: string | null;
  status: LeadStatus;
  /** Internal follow-up notes, only ever written from the admin panel. */
  notes?: string | null;
  assignedToId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LeadCreationAttributes
  extends Optional<
    LeadAttributes,
    | "id" | "email" | "city" | "branch" | "message" | "whatsappOptIn"
    | "pageUrl" | "status" | "notes" | "assignedToId"
  > {}

export class Lead
  extends Model<LeadAttributes, LeadCreationAttributes>
  implements LeadAttributes
{
  declare id: string;
  declare fullName: string;
  declare countryCode: string;
  declare phone: string;
  declare email: string | null;
  declare city: string | null;
  declare branch: string | null;
  declare message: string | null;
  declare whatsappOptIn: boolean;
  declare source: LeadSource;
  declare pageUrl: string | null;
  declare status: LeadStatus;
  declare notes: string | null;
  declare assignedToId: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Lead.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    fullName: { type: DataTypes.STRING, allowNull: false },
    countryCode: { type: DataTypes.STRING(8), allowNull: false, defaultValue: "+91" },
    phone: { type: DataTypes.STRING(20), allowNull: false },
    email: { type: DataTypes.STRING, allowNull: true },
    city: { type: DataTypes.STRING, allowNull: true },
    branch: { type: DataTypes.STRING, allowNull: true },
    message: { type: DataTypes.TEXT, allowNull: true },
    whatsappOptIn: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    source: {
      type: DataTypes.ENUM(...LEAD_SOURCES),
      allowNull: false,
      defaultValue: "consultation_modal",
    },
    pageUrl: { type: DataTypes.TEXT, allowNull: true },
    status: { type: DataTypes.ENUM(...LEAD_STATUSES), allowNull: false, defaultValue: "new" },
    notes: { type: DataTypes.TEXT, allowNull: true },
    assignedToId: { type: DataTypes.UUID, allowNull: true },
  },
  {
    sequelize,
    tableName: "leads",
    timestamps: true,
    indexes: [{ fields: ["status"] }, { fields: ["createdAt"] }, { fields: ["phone"] }],
  }
);
