import { MechanismCategory } from "@/types/mechanism-category";

export const CATEGORIES = [
  "value-allocation",
  "fundraising",
  "identity",
  "governance",
  "economic-design",
  "liquidity",
  "budgeting",
  "value-capture",
] as const;

export const CAPITALIZED_CATEGORIES: Record<MechanismCategory, string> = {
  "value-capture": "Value Capture",
  budgeting: "Budgeting",
  liquidity: "Liquidity",
  "economic-design": "Economic Design",
  "value-allocation": "Value Allocation",
  fundraising: "Fundraising",
  governance: "Governance",
  identity: "Identity",
};

export const CATEGORY_LABELS: Record<MechanismCategory, string> = {
  "value-capture": "Value Capture",
  budgeting: "Budgeting",
  liquidity: "Liquidity",
  "economic-design": "Economic Design",
  "value-allocation": "Value Allocation",
  fundraising: "Fundraising",
  governance: "Governance",
  identity: "Identity",
};

export const CATEGORIES_BACKGROUNDS: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  budgeting: "bg-teal",
  liquidity: "bg-blue",
  "economic-design": "bg-purple",
  "value-allocation": "bg-yellow",
  fundraising: "bg-green",
  governance: "bg-brown",
  identity: "bg-pink",
};
