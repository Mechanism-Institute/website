import { MechanismCategory } from "@/types/mechanism-category";

export type Mechanism = {
  id: string;
  slug: string;
  createdTime: string;
  alternativeNames: string[];
  name: string;
  description: string;
  discussion: string;
  implementations: string[];
  resources: string;
  category: MechanismCategory;
  secondaryCategories?: MechanismCategory[];
};

export type AggregatedMechanism = Omit<Mechanism, "implementations" | "resources"> & {
  implementations: Implementation[];
  resources: {
    name: string;
    link: string;
  }[];
};

export type Implementation = {
  id: string;
  name: string;
  description: string;
  sourcecode: string;
  docs: string;
  app: string;
  logo: string;
};
