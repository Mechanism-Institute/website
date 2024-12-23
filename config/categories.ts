import { MechanismCategory } from "@/types/mechanism-category";

export const CATEGORIES = [
  "fundraising",
  "value-capture",
  "allocation",
  "rewards-and-penalties",
  "exchange",
  "governance",
  "data",
] as const;

export const CATEGORY_LABELS: Record<MechanismCategory, string> = {
  "value-capture": "Value Capture",
  "exchange": "Exchange",
  "allocation": "Allocation",
  "rewards-and-penalties": "Rewards And Penalties",
  fundraising: "Fundraising",
  governance: "Governance",
  data: "Data",
};

export const CATEGORIES_BACKGROUNDS: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  "exchange": "bg-purple",
  "allocation": "bg-yellow",
  "rewards-and-penalties": "bg-teal",
  fundraising: "bg-green",
  governance: "bg-brown",
  data: "bg-pink",
};
