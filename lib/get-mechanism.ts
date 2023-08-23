import { parseAirtableMechanism, slugify } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { MECHANISMS_TABLE_ID } from "@/config/table-names";

export async function getMechanism(slug: string) {
  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/Mechanisms?filterByFormula=REGEX_REPLACE(SUBSTITUTE(LOWER(%7BName%7D)%2C%22%20%22%2C%22-%22)%2C%22${encodeURI("^-+|-+$")}%22%2C%22%22)%20%3D%20'${slug}'`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
    }
  );
  


  if (!request.ok) {
    if (request.status === 404) {
      return null;
    }

    throw new Error(JSON.stringify(await request.json(), null, 2));
  }

  const response = (await request.json()).records[0] as AirtableMechanism;

  return parseAirtableMechanism(response);

}
