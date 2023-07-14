import { GET_INVOLVED_TABLE_ID } from "@/config/table-names";

type Body = {
  name: string;
  email: string;
  involvement: string;
  twitter?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Body;

  if (!body) {
    return new Response("Missing text", { status: 400 });
  }

  const response = await fetch(
    `https://api.airtable.com/v0/appocudTAOitQmuud/${GET_INVOLVED_TABLE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
      },
      body: JSON.stringify({
        fields: {
          Name: body.name,
          Email: body.email,
          Twitter: body.twitter,
          Involvement: body.involvement,
        },
      }),
    },
  );

  if (!response.ok) {
    return new Response("Server Error", { status: 500 });
  }

  return new Response("ok");
}
