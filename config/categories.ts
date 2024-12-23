import { MechanismCategory } from "@/types/mechanism-category";

export const CATEGORIES = [
  "fundraising",
  "allocation",
  "value-capture",
  "governance",
  "rewards-and-penalties",
  "exchange",
  "data",
] as const;

export const CATEGORY_LABELS: Record<MechanismCategory, string> = {
  "fundraising": "Fundraising",
  "allocation": "Allocation",
  "value-capture": "Value Capture",
  "governance": "Governance",
  "rewards-and-penalties": "Rewards and Penalties",
  "exchange": "Exchange",
  "data": "Data",
};

export const CATEGORIES_BACKGROUNDS: Record<MechanismCategory, string> = {
  "fundraising": "bg-green",
  "allocation": "bg-yellow",
  "value-capture": "bg-orange",
  "governance": "bg-brown",
  "rewards-and-penalties": "bg-teal",
  "exchange": "bg-purple",
  "data": "bg-pink",
};
