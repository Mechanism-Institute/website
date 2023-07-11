import { AirtableImplementation } from "@/types/airtable-implmentation";
import { Implementation } from "@/types/mechanism";
import { parseAirtableImplementation } from "@/utils/parse-airtable-implementations";
import { expect, test } from "vitest";

test("parseAirtableImplementation returns correct implementation object", () => {
  const airtableImplementation: AirtableImplementation = {
    id: "test_id",
    fields: {
      Name: "test_name",
      Description: "test_description",
      Sourcecode: "test_sourcecode",
      Docs: "test_docs",
      App: "test_app",
      logo: "test_logo",
    },
  };

  const expectedImplementation: Implementation = {
    id: "test_id",
    name: "test_name",
    description: "test_description",
    sourcecode: "test_sourcecode",
    docs: "test_docs",
    app: "test_app",
    logo: "test_logo",
  };

  const result = parseAirtableImplementation(airtableImplementation);

  expect(result).toEqual(expectedImplementation);
});
