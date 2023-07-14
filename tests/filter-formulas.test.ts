import { expect, test } from "vitest";
import {
  createImplementationsIdsFilterFormula,
  createMechanismsSearchFilterFormula,
} from "@/utils/filter-formulas";
import { CAPITALIZED_CATEGORIES } from "@/config/categories";
import { MechanismCategory } from "@/types/mechanism-category";

test("createFilterFormula with no params returns a formula with all categories", () => {
  const formula = createMechanismsSearchFilterFormula({});
  const expectedFormula = `OR(${Object.values(CAPITALIZED_CATEGORIES)
    .map((type) => `FIND('${type}',{Type})`)
    .join(",")})`;
  expect(formula).toBe(expectedFormula);
});

test("createFilterFormula with categories returns a formula with those categories", () => {
  const categories: MechanismCategory[] = ["value-capture", "economic-design"];
  const formula = createMechanismsSearchFilterFormula({ categories });
  const expectedFormula = `OR(${categories
    .map((category) => `FIND('${CAPITALIZED_CATEGORIES[category]}',{Type})`)
    .join(",")})`;
  expect(formula).toBe(expectedFormula);
});

test("createFilterFormula with searchTerm returns a formula with all categories and search term", () => {
  const searchTerm = "Some Term".toLowerCase();
  const formula = createMechanismsSearchFilterFormula({ searchTerm });
  const expectedFormula = `AND(OR(${Object.values(CAPITALIZED_CATEGORIES)
    .map((type) => `FIND('${type}',{Type})`)
    .join(
      ",",
    )}), OR(FIND('${searchTerm}',LOWER({Name})),FIND('${searchTerm}',LOWER({Type})),FIND('${searchTerm}',LOWER({Description})),FIND('${searchTerm}',LOWER({AlternativeNames})),FIND('${searchTerm}',LOWER({Implementations}))))`;
  expect(formula).toBe(expectedFormula);
});

test("createFilterFormula with categories and searchTerm returns a formula with those categories and search term", () => {
  const categories: MechanismCategory[] = ["value-capture", "economic-design"];
  const searchTerm = "Some Term".toLowerCase();
  const formula = createMechanismsSearchFilterFormula({ categories, searchTerm });
  const expectedFormula = `AND(OR(${categories
    .map((category) => `FIND('${CAPITALIZED_CATEGORIES[category]}',{Type})`)
    .join(
      ",",
    )}), OR(FIND('${searchTerm}',LOWER({Name})),FIND('${searchTerm}',LOWER({Type})),FIND('${searchTerm}',LOWER({Description})),FIND('${searchTerm}',LOWER({AlternativeNames})),FIND('${searchTerm}',LOWER({Implementations}))))`;
  expect(formula).toBe(expectedFormula);
});

test("createImplementationsIdsFilterFormula", () => {
  const formula = createImplementationsIdsFilterFormula([
    "recYdVveVSnDz0feC",
    "rec9NTEf19z9AeooF",
    "rec91tojRgkYfdkHc",
    "recA41ekDaRV3QV4Z",
    "recAVqylztaXlQQiB",
  ]);
  const expectedFormula = `OR(RECORD_ID() = 'recYdVveVSnDz0feC', RECORD_ID() = 'rec9NTEf19z9AeooF', RECORD_ID() = 'rec91tojRgkYfdkHc', RECORD_ID() = 'recA41ekDaRV3QV4Z', RECORD_ID() = 'recAVqylztaXlQQiB')`;
  expect(formula).toBe(expectedFormula);
});
