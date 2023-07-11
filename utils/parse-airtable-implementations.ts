import { Implementation } from "@/types/mechanism";
import { AirtableImplementation } from "@/types/airtable-implmentation";

export function parseAirtableImplementation(
  airtableImplementations: AirtableImplementation,
): Implementation {
  return {
    id: airtableImplementations.id,
    name: airtableImplementations.fields.Name,
    description: airtableImplementations.fields.Description,
    sourcecode: airtableImplementations.fields.Sourcecode,
    docs: airtableImplementations.fields.Docs,
    app: airtableImplementations.fields.App,
    logo: airtableImplementations.fields.logo,
  };
}
