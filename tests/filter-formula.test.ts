import { expect, test } from "vitest";
import { createFilterFormula } from "@/utils/filter-formulas";
import { CAPITALIZED_CATEGORIES } from "@/config/categories";
import { MechanismCategory } from "@/types/mechanism-category";

test("createFilterFormula with no params returns a formula with all categories", () => {
  const formula = createFilterFormula({});
  const expectedFormula = `OR(${Object.values(CAPITALIZED_CATEGORIES)
    .map((type) => `FIND('${type}',{Type})`)
    .join(",")})`;
  expect(formula).toBe(expectedFormula);
});

test("createFilterFormula with categories returns a formula with those categories", () => {
  const categories: MechanismCategory[] = ["value-capture", "economic-design"];
  const formula = createFilterFormula({ categories });
  const expectedFormula = `OR(${categories
    .map((category) => `FIND('${CAPITALIZED_CATEGORIES[category]}',{Type})`)
    .join(",")})`;
  expect(formula).toBe(expectedFormula);
});

test("createFilterFormula with searchTerm returns a formula with all categories and search term", () => {
  const searchTerm = "Some Term".toLowerCase();
  const formula = createFilterFormula({ searchTerm });
  const expectedFormula = `AND(OR(${Object.values(CAPITALIZED_CATEGORIES)
    .map((type) => `FIND('${type}',{Type})`)
    .join(
      ",",
    )}), OR(FIND('${searchTerm}',LOWER({Name})),FIND('${searchTerm}',LOWER({Type})),FIND('${searchTerm}',LOWER({Description}))))`;
  expect(formula).toBe(expectedFormula);
});

test("createFilterFormula with categories and searchTerm returns a formula with those categories and search term", () => {
  const categories: MechanismCategory[] = ["value-capture", "economic-design"];
  const searchTerm = "Some Term".toLowerCase();
  const formula = createFilterFormula({ categories, searchTerm });
  const expectedFormula = `AND(OR(${categories
    .map((category) => `FIND('${CAPITALIZED_CATEGORIES[category]}',{Type})`)
    .join(
      ",",
    )}), OR(FIND('${searchTerm}',LOWER({Name})),FIND('${searchTerm}',LOWER({Type})),FIND('${searchTerm}',LOWER({Description}))))`;
  expect(formula).toBe(expectedFormula);
});
