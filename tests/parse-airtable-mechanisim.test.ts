import { expect, test } from "vitest";
import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { CATEGORY_LABELS } from "@/config/categories";

test("parseAirtableMechanism", () => {
  const airtableMechanism: AirtableMechanism = {
    id: "1",
    createdTime: "2023-07-09T00:00:00.000Z",
    fields: {
      Name: "Test Mechanism",
      Description: "This is a test mechanisms",
      Type: [CATEGORY_LABELS["value-transfer"]],
      Approved: true,
      Upvotes: 0,
      Implementations: [""],
      AlternativeNames: "",
      Discussion: "Discussion",
      Resources: "",
    },
  };

  const result = parseAirtableMechanism(airtableMechanism);

  // Check if the result is not null
  if (result !== null) {
    // Check if the result has the correct properties
    expect(result.id).toBe("1");
    expect(result.createdTime).toBe("2023-07-09T00:00:00.000Z");
    expect(result.name).toBe("Test Mechanism");
    expect(result.description).toBe("This is a test mechanisms");
    expect(result.category).toBe("value-transfer");
    expect(result.category).toBe("value-transfer");
    expect(result.discussion).toBe("Discussion");
    expect(result.secondaryCategories).toEqual(undefined);
  } else {
    throw new Error("mapMechanism returned null");
  }
});

test("parseAirtableMechanism with secondary categories", () => {
  const airtableMechanism: AirtableMechanism = {
    id: "1",
    createdTime: "2023-07-09T00:00:00.000Z",
    fields: {
      Name: "Test Mechanism",
      Description: "This is a test mechanisms",
      Type: [
        CATEGORY_LABELS["value-transfer"],
        CATEGORY_LABELS["value-capture"],
        CATEGORY_LABELS["fundraising"],
        CATEGORY_LABELS["governance"],
      ],
      Approved: true,
      Upvotes: 0,
      Implementations: [""],
      AlternativeNames: "",
      Discussion: "Discussion",
      Resources: "",
    },
  };

  const result = parseAirtableMechanism(airtableMechanism);

  // Check if the result is not null
  if (result !== null) {
    // Check if the result has the correct properties
    expect(result.id).toBe("1");
    expect(result.createdTime).toBe("2023-07-09T00:00:00.000Z");
    expect(result.name).toBe("Test Mechanism");
    expect(result.description).toBe("This is a test mechanisms");
    expect(result.category).toBe("value-transfer");
    expect(result.secondaryCategories).toEqual(["value-capture", "fundraising", "governance"]);
    expect(result.discussion).toBe("Discussion");
  } else {
    throw new Error("mapMechanism returned null");
  }
});
