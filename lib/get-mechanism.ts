import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { MECHANISMS_TABLE_NAME } from "@/config/table-names";

export async function getMechanism(id: string) {
  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${MECHANISMS_TABLE_NAME}/${id}`,
    {
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

  const response = (await request.json()) as AirtableMechanism;

  return parseAirtableMechanism(response);
}
