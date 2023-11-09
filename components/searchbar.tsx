"use client";

import { FormEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = searchRef.current?.value as string;
    if (searchValue) {
      router.push(`/library?search=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-106px)]">
        <div className="mb-[88px] flex flex-col">
          <div className="flex items-center justify-center ">
            <Image src="/hero.svg" alt="" width={1130} height={270} />
          </div>
        </div>
        <form className="relative w-full max-w-screen-md" onSubmit={(e) => handleSubmit(e)}>
          <Input
            ref={searchRef}
            name="search"
            type="text"
            placeholder="Describe your challenge, get solutions."
            className="pr-[62px] w-full"
            autoComplete="off"
          />
          <AirplaneIcon className={clsx("absolute -translate-y-1/2 top-1/2 right-6 bg-gray-900")} />
          <button type="submit" aria-label="Search" className="hidden" />
        </form>
      </div>
    </>
  );
}

function AirplaneIcon({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center w-[30px] h-[30px] bg-gray-400 rounded-full group-hover:bg-gray-900 transition-color duration-300",
        className,
      )}
    >
      <Image src="/paper-plane.svg" alt="paper-plane" width={14} height={14} />
    </div>
  );
}
