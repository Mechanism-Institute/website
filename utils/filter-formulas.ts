import { MechanismCategory } from "@/types/mechanism-category";
import { CAPITALIZED_CATEGORIES } from "@/config/categories";

export function createMechanismsSearchFilterFormula({
  categories,
  searchTerm,
}: {
  categories?: MechanismCategory[];
  searchTerm?: string | null;
}) {
  let searchCategories: string[];

  if (categories && categories.length > 0) {
    searchCategories = categories.map((category) => CAPITALIZED_CATEGORIES[category]);
  } else {
    searchCategories = Object.values(CAPITALIZED_CATEGORIES);
  }

  const categoryFilters = searchCategories.map((type) => `FIND('${type}',{Type})`).join(",");

  if (searchTerm) {
    const upperSearchTerm = searchTerm.toLowerCase();
    const searchFilters = ["Name", "Type", "Description", "AlternativeNames", "Implementations"]
      .map((fieldName) => `FIND('${upperSearchTerm}',LOWER({${fieldName}}))`)
      .join(",");

    return `AND(OR(${categoryFilters}), OR(${searchFilters}))`;
  }

  return `OR(${categoryFilters})`;
}

export function createImplementationsIdsFilterFormula(ids: string[]) {
  return `OR(${ids.map((id) => `RECORD_ID() = '${id}'`).join(", ")})`;
}
