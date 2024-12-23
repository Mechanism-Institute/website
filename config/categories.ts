import { MechanismCategory } from "@/types/mechanism-category";

export const CATEGORIES = [
  "fundraising",
  "value-capture",
  "allocation",
  "rewards-&-penalties",
  "exchange",
  "governance",
  "data",
] as const;

export const CATEGORY_LABELS: Record<MechanismCategory, string> = {
  "value-capture": "Value Capture",
  "exchange": "Exchange",
  "allocation": "Allocation",
  "rewards-&-penalties": "Rewards & Penalties",
  fundraising: "Fundraising",
  governance: "Governance",
  data: "Data",
};

export const CATEGORIES_BACKGROUNDS: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  "exchange": "bg-purple",
  "allocation": "bg-yellow",
  "rewards-&-penalties": "bg-teal",
  fundraising: "bg-green",
  governance: "bg-brown",
  data: "bg-pink",
};
