import { createImplementationsIdsFilterFormula } from "@/utils/filter-formulas";
import { AirtableImplementation } from "@/types/airtable-implmentation";
import { parseAirtableImplementation } from "@/utils/parse-airtable-implementations";
import { IMPLEMENTATIONS_TABLE_NAME } from "@/config/table-names";

export async function getImplementations(ids: string[]) {
  const formula = createImplementationsIdsFilterFormula(ids);
  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${IMPLEMENTATIONS_TABLE_NAME}?filterByFormula=${formula}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
    },
  );

  if (!request.ok) {
    throw new Error("Failed to fetch implementations");
  }

  const { records } = await request.json();

  return (records as AirtableImplementation[]).map(parseAirtableImplementation);
}
