import { MechanismCategory } from "@/types/mechanism-category";

export type Mechanism = {
  id: string;
  createdTime: string;
  name: string;
  description: string;
  category: MechanismCategory;
  secondaryCategories?: MechanismCategory[];
};
