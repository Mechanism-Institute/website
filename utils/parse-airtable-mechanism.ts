import { MechanismCategory } from "@/types/mechanism-category";
import { CATEGORY_LABELS } from "@/config/categories";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { Mechanism } from "@/types/mechanism";
import { slugify } from "@/utils/slugify";

const flippedCapitalizedCategories = Object.fromEntries(
  Object.entries(CATEGORY_LABELS).map(([key, value]) => [value, key as MechanismCategory]),
);

function parseCategory(category: string): MechanismCategory {
  return flippedCapitalizedCategories[category];
}

function sanitizeCategory(category: string) {
  return category.replace(/[^a-z0-9\s]/gi, "").trim();
}

export function parseAirtableMechanism(airtableMechanism: AirtableMechanism): Mechanism {
  let category: string;
  let secondaryCategories: string[] | undefined;

  if (airtableMechanism.fields.Type.length > 0) {
    category = sanitizeCategory(airtableMechanism.fields.Type[0]);
    if (airtableMechanism.fields.Type.length > 1) {
      secondaryCategories = airtableMechanism.fields.Type.slice(1).map(sanitizeCategory);
    }
  } else {
    category = airtableMechanism.fields.Type[0] as MechanismCategory;
  }

  const slug = slugify(airtableMechanism.fields.Name);

  return {
    id: airtableMechanism.id,
    slug: slug,
    createdTime: airtableMechanism.createdTime,
    name: airtableMechanism.fields.Name,
    alternativeNames: [airtableMechanism.fields.AlternativeNames].filter(Boolean),
    description: airtableMechanism.fields.Description,
    category: parseCategory(category),
    secondaryCategories: secondaryCategories?.map(parseCategory),
    discussion: airtableMechanism.fields.Discussion,
    implementations: airtableMechanism.fields.Implementations ?? [],
    resources: airtableMechanism.fields.Resources,
  };
}
