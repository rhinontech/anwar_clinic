export type FieldType = "text" | "textarea" | "image" | "stringList" | "objectList";

export interface ItemField {
  name: string;
  label: string;
  type: "text" | "textarea" | "image" | "stringList";
}

export interface SchemaField {
  name: string;
  label: string;
  type: FieldType;
  help?: string;
  placeholder?: string;
  itemFields?: ItemField[];
}

export interface SectionSchema {
  key: string;
  label: string;
  component: string;
  description: string;
  fields: SchemaField[];
}

export type SectionData = Record<string, Record<string, unknown>>;

export interface ServiceSummary {
  id: string;
  slug: string;
  title: string;
  cardDescription: string;
  cardImage: string | null;
  badge: string | null;
  sortOrder: number;
  status: "draft" | "published";
  seoTitle: string | null;
  seoDescription: string | null;
  hiddenSections: string[];
}

export interface ServiceDetail extends ServiceSummary {
  sections: SectionData;
}
