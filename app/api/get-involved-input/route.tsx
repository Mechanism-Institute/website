import { GET_INVOLVED_TABLE_ID } from "@/config/table-names";

type Body = {
  name: string;
  email: string;
  message?: string;  // Make message optional
  x?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    
    // Debug log
    console.log("Received body:", body);
    
    if (!body || !body.name || !body.email) {
      return new Response("Missing required fields", { status: 400 });
    }
    
    // Use empty strings for undefined optional fields
    const requestBody = {
      fields: {
        Name: body.name,
        Email: body.email,
        X: body.x || "",  // Default to empty string if undefined
        Message: body.message || "",  // Default to empty string if undefined
      },
    };
    
    // Debug log
    console.log("Sending to Airtable:", requestBody);
    
    const response = await fetch(
      `https://api.airtable.com/v0/appocudTAOitQmuud/${GET_INVOLVED_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
        },
        body: JSON.stringify(requestBody),
      },
    );
    
    // Handle error response with more detail
    if (!response.ok) {
      const errorData = await response.text();
      console.error("Airtable error:", errorData);
      return new Response(`Server Error: ${errorData}`, { status: 500 });
    }
    
    return new Response("ok");
  } catch (error) {
    // Catch and log any JSON parsing or other errors
    console.error("API route error:", error);
    return new Response(`Error processing request: ${error instanceof Error ? error.message : "Unknown error"}`, { 
      status: 500 
    });
  }
}