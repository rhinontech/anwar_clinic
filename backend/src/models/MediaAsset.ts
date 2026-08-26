import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface MediaAssetAttributes {
  id: string;
  key: string;
  url: string;
  originalName: string;
  mimeType: string;
  size: number;
  /** Which driver stored it — a library can outlive a local→s3 switch. */
  driver: "local" | "s3";
  altText?: string | null;
  uploadedById?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MediaAssetCreationAttributes
  extends Optional<MediaAssetAttributes, "id" | "altText" | "uploadedById"> {}

export class MediaAsset
  extends Model<MediaAssetAttributes, MediaAssetCreationAttributes>
  implements MediaAssetAttributes
{
  declare id: string;
  declare key: string;
  declare url: string;
  declare originalName: string;
  declare mimeType: string;
  declare size: number;
  declare driver: "local" | "s3";
  declare altText: string | null;
  declare uploadedById: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

MediaAsset.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    key: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.TEXT, allowNull: false },
    originalName: { type: DataTypes.STRING, allowNull: false },
    mimeType: { type: DataTypes.STRING, allowNull: false },
    size: { type: DataTypes.INTEGER, allowNull: false },
    driver: { type: DataTypes.ENUM("local", "s3"), allowNull: false, defaultValue: "local" },
    altText: { type: DataTypes.STRING, allowNull: true },
    uploadedById: { type: DataTypes.UUID, allowNull: true },
  },
  { sequelize, tableName: "media_assets", timestamps: true }
);
