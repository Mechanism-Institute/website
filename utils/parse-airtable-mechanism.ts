import { MechanismCategory } from "@/types/mechanism-category";
import { CATEGORY_LABELS } from "@/config/categories";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { Mechanism } from "@/types/mechanism";

const flippedCapitalizedCategories = Object.fromEntries(
  Object.entries(CATEGORY_LABELS).map(([key, value]) => [value, key as MechanismCategory]),
);

function parseCategory(category: string): MechanismCategory {
  return flippedCapitalizedCategories[category];
}

function sanitizeCategory(category: string) {
  return category.replace(/[^a-z0-9\s]/gi, "").trim();
}

function isValidCategory(category: string): category is MechanismCategory {
  return Object.values(CATEGORY_LABELS).includes(sanitizeCategory(category));
}

export function parseAirtableMechanism(airtableMechanism: AirtableMechanism): Mechanism | null {
  try {
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

    if (!isValidCategory(category)) {
      throw new Error(`Invalid category: ${category}`);
    }

    return {
      id: airtableMechanism.id,
      createdTime: airtableMechanism.createdTime,
      name: airtableMechanism.fields.Name,
      // TODO: This filter should be removed once the API returns an array
      alternativeNames: [airtableMechanism.fields.AlternativeNames].filter(Boolean),
      description: airtableMechanism.fields.Description,
      category: parseCategory(category),
      secondaryCategories: secondaryCategories?.map(parseCategory),
      discussion: airtableMechanism.fields.Discussion,
      implementations: airtableMechanism.fields.Implementations ?? [],
      resources: airtableMechanism.fields.Resources,
    };
  } catch (error) {
    console.error(
      `Failed to map mechanism: ${JSON.stringify(airtableMechanism, null, 2)} - ${error}`,
    );
    return null;
  }
}
