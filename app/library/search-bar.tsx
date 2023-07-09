"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";

function Bar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("search", value);
      return params.toString();
    },
    [searchParams],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      search: HTMLInputElement;
    };
    const search = formElements.search.value;
    router.push(pathname + "?" + createQueryString(search));
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        className="absolute pointer-events-none top-1/2 -translate-y-1/2 left-6 text-gray-400"
        width={30}
        height={30}
      />
      <Input name="search" type="text" placeholder="Search" className="pl-[62px] py-5" />
    </form>
  );
}

export default function SearchBar() {
  return (
    <Suspense>
      <Bar />
    </Suspense>
  );
}
