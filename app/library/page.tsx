import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CATEGORIES } from "@/config/categories";
import CategoryFilter from "@/app/library/category-filter";
import MechanismList from "@/components/mechanism-list";
import { cn } from "@/utils/cn";

function CategoryFilters({ className }: { className?: string }) {
  return (
    <div className={cn(className, "flex gap-2 items-center w-full flex-wrap")}>
      {CATEGORIES.map((category) => (
        <CategoryFilter key={category} category={category} />
      ))}
    </div>
  );
}

export default async function Library() {
  return (
    <div className="flex flex-col gap-8">
      <label className="relative">
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          className="absolute pointer-events-none top-1/2 -translate-y-1/2 left-6 text-gray-400"
          width={30}
          height={30}
        />
        <Input name="search" type="text" placeholder="Search" className="pl-[62px] py-5" />
      </label>
      <CategoryFilters />
      <MechanismList />
    </div>
  );
}
