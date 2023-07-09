import { Mechanism } from "@/types/mechanism";
import { useSearchParams } from "next/navigation";
import { MechanismCategory } from "@/types/mechanism-category";
import { useQuery } from "react-query";

export default function useMechanismQuery(params?: { initialData?: Mechanism[] }) {
  const urlSearchParams = useSearchParams()!;
  const categories = urlSearchParams.getAll("category") as MechanismCategory[];
  const search = urlSearchParams.get("search");

  return useQuery<Mechanism[], Error>(
    ["mechanisms", categories, search],
    async () => {
      const request = await fetch(`api?${urlSearchParams}`);

      if (!request.ok) {
        throw new Error("Error searching mechanisms");
      }

      return (await request.json()) as Mechanism[];
    },
    { initialData: params?.initialData },
  );
}
