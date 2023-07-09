import { Mechanism } from "@/types/mechanism";
import { MechanismCategory } from "@/types/mechanism-category";
import { createFilterFormula } from "@/utils/filter-formulas";
import { AirtableMechanism } from "@/types/airtable-mechanism";
import { parseAirtableMechanism } from "@/utils/parse-airtable-mechanism";

type Response = {
  records: AirtableMechanism[];
};

export async function searchMechanisms(params?: {
  categories?: MechanismCategory[];
  searchTerm?: string | null;
}) {
  const filterFormula = createFilterFormula({
    searchTerm: params?.searchTerm,
    categories: params?.categories,
  });

  const request = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/mechanisms?view=Approved&filterByFormula=${encodeURIComponent(
      filterFormula,
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
    },
  );

  if (!request.ok) {
    throw new Error(JSON.stringify(await request.json(), null, 2));
  }

  const { records } = (await request.json()) as Response;

  return records.map(parseAirtableMechanism).filter(Boolean) as Mechanism[];
}
