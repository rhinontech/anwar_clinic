import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

export type ServiceStatus = "draft" | "published";

/** Per-section content overrides, keyed by SERVICE_SECTIONS[].key. */
export type ServiceSections = Record<string, Record<string, unknown>>;

interface ServiceAttributes {
  id: string;
  slug: string;
  title: string;
  cardDescription: string;
  cardImage?: string | null;
  badge?: string | null;
  sortOrder: number;
  status: ServiceStatus;
  seoTitle?: string | null;
  seoDescription?: string | null;
  /** Only the fields actually filled in; everything else falls back on render. */
  sections: ServiceSections;
  /** Section keys the editor has switched off for this service. */
  hiddenSections: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface ServiceCreationAttributes
  extends Optional<
    ServiceAttributes,
    | "id" | "cardImage" | "badge" | "sortOrder" | "status"
    | "seoTitle" | "seoDescription" | "sections" | "hiddenSections"
  > {}

export class Service
  extends Model<ServiceAttributes, ServiceCreationAttributes>
  implements ServiceAttributes
{
  declare id: string;
  declare slug: string;
  declare title: string;
  declare cardDescription: string;
  declare cardImage: string | null;
  declare badge: string | null;
  declare sortOrder: number;
  declare status: ServiceStatus;
  declare seoTitle: string | null;
  declare seoDescription: string | null;
  declare sections: ServiceSections;
  declare hiddenSections: string[];
  declare createdAt: Date;
  declare updatedAt: Date;
}

Service.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    // The slug IS the landing-page URL segment (/services/<slug>).
    slug: { type: DataTypes.STRING, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    cardDescription: { type: DataTypes.TEXT, allowNull: false, defaultValue: "" },
    cardImage: { type: DataTypes.TEXT, allowNull: true },
    badge: { type: DataTypes.STRING, allowNull: true },
    sortOrder: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    status: {
      type: DataTypes.ENUM("draft", "published"),
      allowNull: false,
      defaultValue: "draft",
    },
    seoTitle: { type: DataTypes.STRING, allowNull: true },
    seoDescription: { type: DataTypes.TEXT, allowNull: true },
    // JSONB so adding a section/field in serviceSections.ts needs no migration.
    sections: { type: DataTypes.JSONB, allowNull: false, defaultValue: {} },
    hiddenSections: { type: DataTypes.JSONB, allowNull: false, defaultValue: [] },
  },
  { sequelize, tableName: "services", timestamps: true }
);
