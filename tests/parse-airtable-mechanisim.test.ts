import { expect, test } from "vitest";
import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { CAPITALIZED_CATEGORIES } from "@/config/categories";
import sinon from "sinon";

test("parseAirtableMechanism", () => {
  const airtableMechanism: AirtableMechanism = {
    id: "1",
    createdTime: "2023-07-09T00:00:00.000Z",
    fields: {
      Name: "Test Mechanism",
      Description: "This is a test mechanism",
      Type: [CAPITALIZED_CATEGORIES["value-allocation"]],
      Approved: true,
      Upvotes: 0,
      Implementations: "",
    },
  };

  const result = parseAirtableMechanism(airtableMechanism);

  // Check if the result is not null
  if (result !== null) {
    // Check if the result has the correct properties
    expect(result.id).toBe("1");
    expect(result.createdTime).toBe("2023-07-09T00:00:00.000Z");
    expect(result.name).toBe("Test Mechanism");
    expect(result.description).toBe("This is a test mechanism");
    expect(result.category).toBe(CAPITALIZED_CATEGORIES["value-allocation"]);
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
      Description: "This is a test mechanism",
      Type: [
        CAPITALIZED_CATEGORIES["value-allocation"],
        CAPITALIZED_CATEGORIES["value-capture"],
        CAPITALIZED_CATEGORIES["fundraising"],
        CAPITALIZED_CATEGORIES["governance"],
      ],
      Approved: true,
      Upvotes: 0,
      Implementations: "",
    },
  };

  const result = parseAirtableMechanism(airtableMechanism);

  // Check if the result is not null
  if (result !== null) {
    // Check if the result has the correct properties
    expect(result.id).toBe("1");
    expect(result.createdTime).toBe("2023-07-09T00:00:00.000Z");
    expect(result.name).toBe("Test Mechanism");
    expect(result.description).toBe("This is a test mechanism");
    expect(result.category).toBe(CAPITALIZED_CATEGORIES["value-allocation"]);
    expect(result.secondaryCategories).toEqual([
      CAPITALIZED_CATEGORIES["value-capture"],
      CAPITALIZED_CATEGORIES["fundraising"],
      CAPITALIZED_CATEGORIES["governance"],
    ]);
  } else {
    throw new Error("mapMechanism returned null");
  }
});

test("parseAirtableMechanism with invalid category", () => {
  const airtableMechanism: AirtableMechanism = {
    id: "1",
    createdTime: "2023-07-09T00:00:00.000Z",
    fields: {
      Name: "Test Mechanism",
      Description: "This is a test mechanism",
      Type: ["Invalid Category"],
      Approved: true,
      Upvotes: 0,
      Implementations: "",
    },
  };

  const consoleSpy = sinon.stub(console, "error");
  const result = parseAirtableMechanism(airtableMechanism);

  expect(result).toBeNull();
  expect(consoleSpy.calledOnce).toBe(true);

  consoleSpy.restore();
});
