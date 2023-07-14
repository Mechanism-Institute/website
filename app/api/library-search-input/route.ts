import { SEARCH_INPUTS_TABLE_ID } from "@/config/table-names";

type Body = {
  input: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Body;

  if (!body.input) {
    return new Response("Missing text", { status: 400 });
  }

  const response = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${SEARCH_INPUTS_TABLE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
      body: JSON.stringify({
        fields: {
          Text: body.input,
        },
      }),
    },
  );

  if (!response.ok) {
    return new Response("Server Error", { status: 500 });
  }

  return new Response("ok");
}
