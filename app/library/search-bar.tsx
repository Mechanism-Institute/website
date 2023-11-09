"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { storeLibrarySearch } from "@/lib/store-user-input";
import Typography from "@/components/ui/typography";

function Bar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [terms, setSearchTerms] = useState<string[]>([]);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setSearchTerms([searchQuery]);
    }
  }, [searchParams]);

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      console.log(terms, searchParams);
      params.set("search", value);
      return params.toString();
    },
    [searchParams, terms],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      search: HTMLInputElement;
    };

    const search = formElements.search.value;

    if (search) {
      storeLibrarySearch(search);
    }
    setSearchTerms([search]);

    router.push(pathname + "?" + createQueryString(search));
  };

  return (
    <>
      <form className="relative" onSubmit={handleSubmit}>
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          className="absolute text-gray-400 -translate-y-1/2 pointer-events-none top-1/2 left-6"
          width={30}
          height={30}
        />
        <Input
          name="search"
          type="text"
          placeholder="Search by mechanism, project, or keyword"
          className="pl-[62px] py-5"
        />
      </form>
      {terms && (
        <>
          {terms?.map((term: string, i) => (
            <div key={i}>
              <Typography variant="subtitle" className="inline-block">
                Search results for:
              </Typography>
              <Typography variant="subtitle" className="inline-block ml-2 font-bold">
                {term}
              </Typography>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default function SearchBar() {
  return (
    <Suspense>
      <Bar />
    </Suspense>
  );
}
