import { MechanismCategory } from "@/types/mechanism-category";
import { searchMechanisms } from "@/lib/search-mechanisms";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categories = searchParams.getAll("category") as MechanismCategory[];
  const search = searchParams.get("search");
  const mechanisms = await searchMechanisms({ categories, searchTerm: search });
  return NextResponse.json(mechanisms);
}
