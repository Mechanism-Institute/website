import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { MECHANISMS_TABLE_ID } from "@/config/table-names";

export async function getMechanism(id: string) {
  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${MECHANISMS_TABLE_ID}/${id}`,
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

export async function getMechanismsBySlug(slug: string) {
  const params = new URLSearchParams({
    filterByFormula: `(LOWER({Slug}) = '${slug.toLowerCase()}')`,
  });

  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${MECHANISMS_TABLE_ID}?${params.toString()}`,
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

  const response = (await request.json()) as {
    records: AirtableMechanism[];
  };

  return response.records.map(parseAirtableMechanism)[0];
}
