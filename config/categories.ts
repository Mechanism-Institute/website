import { MechanismCategory } from "@/types/mechanism-category";

export const CATEGORIES = [
  "value-transfer",
  "fundraising",
  "signalling",
  "governance",
  "market",
  "value-capture",
] as const;

export const CATEGORY_LABELS: Record<MechanismCategory, string> = {
  "value-capture": "Value Capture",
  "market": "Market",
  "value-transfer": "Value Transfer",
  fundraising: "Fundraising",
  governance: "Governance",
  signalling: "Signalling",
};

export const CATEGORIES_BACKGROUNDS: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  "market": "bg-purple",
  "value-transfer": "bg-yellow",
  fundraising: "bg-green",
  governance: "bg-brown",
  signalling: "bg-pink",
};
