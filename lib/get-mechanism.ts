import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { MECHANISMS_TABLE_ID } from "@/config/table-names";
import { deslugify } from "@/utils/slugify";

export async function getMechanism(slug: string) {
  const queryParam = new URLSearchParams({
    filterByFormula: `SEARCH('${deslugify(slug).toLowerCase()}', LOWER({Name}))`,
  });

  console.log(`SEARCH('${deslugify(slug).toLowerCase()}', LOWER({Name}))`);

  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${MECHANISMS_TABLE_ID}?${queryParam.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
    },
  );

  if (!request.ok) {
    if (request.status === 404) {
      return null;
    }

    throw new Error(JSON.stringify(await request.json(), null, 2));
  }

  const response = (await request.json()).records[0] as AirtableMechanism;

  if (!response) {
    return null;
  }

  return parseAirtableMechanism(response);
}
