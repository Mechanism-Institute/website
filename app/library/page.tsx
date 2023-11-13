import { CATEGORIES } from "@/config/categories";
import CategoryFilter from "@/app/library/category-filter";
import MechanismsList from "@/components/mechanisms-list";
import { cn } from "@/utils/shadui";
import SearchBar from "@/app/library/search-bar";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Mechanism Institute | Mechanism Library",
};

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
    <div className="flex flex-col gap-8 py-8 md:py-16">
      <Suspense fallback={null}>
        <SearchBar />
        <CategoryFilters />
        <MechanismsList />
      </Suspense>
    </div>
  );
}
