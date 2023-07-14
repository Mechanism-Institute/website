import Typography from "@/components/ui/typography";
import { Mechanism } from "@/types/mechanism";
import CategoryTag from "@/components/ui/category-tag";
import Link from "next/link";

export default function MechanismCard({ mechanism }: { mechanism: Mechanism }) {
  return (
    <Link href={`/mechanism/${mechanism.id}`}>
      <div className="flex flex-col h-full gap-6 p-6 transition duration-300 cursor-pointer bg-gray-50 hover:bg-white rounded-2xl hover:shadow-medium">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col flex-1 gap-4">
            <div className="flex flex-wrap items-center gap-1">
              <Typography className="text-xl font-medium leading-6 font-gotham">
                {mechanism.name}
              </Typography>
            </div>
            <Typography className="leading-[150%] text-sm line-clamp-6 text-gray-700 font-light">
              {mechanism.description}
            </Typography>
          </div>
          <div className="flex flex-wrap gap-1 pt-4 overflow-y-auto border-t border-divider">
            <CategoryTag variant={mechanism.category} className="w-fit" />
            {mechanism.secondaryCategories?.map((category) => (
              <CategoryTag key={category} variant={category} className="w-fit" />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
