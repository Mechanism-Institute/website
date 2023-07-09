import { MechanismCategory } from "@/types/mechanism-category";
import { CAPITALIZED_CATEGORIES } from "@/config/categories";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { Mechanism } from "@/types/mechanism";

const flippedCapitalizedCategories = Object.fromEntries(
  Object.entries(CAPITALIZED_CATEGORIES).map(([key, value]) => [value, key as MechanismCategory]),
);

function parseCategory(category: string): MechanismCategory {
  return flippedCapitalizedCategories[category];
}

function sanitizeCategory(category: string) {
  return category.replace(/[^a-z0-9\s]/gi, "").trim();
}

function isValidCategory(category: string): category is MechanismCategory {
  return Object.values(CAPITALIZED_CATEGORIES).includes(sanitizeCategory(category));
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
      description: airtableMechanism.fields.Description,
      category: parseCategory(category),
      secondaryCategories: secondaryCategories?.map(parseCategory),
    };
  } catch (error) {
    console.error(
      `Failed to map mechanism: ${JSON.stringify(airtableMechanism, null, 2)} - ${error}`,
    );
    return null;
  }
}
