"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Typography from "./ui/typography";
import CategoriesTyping from "./categories-typing";

export default function SearchBar() {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const [showDynamicPlaceholder, setShowDynamicPlaceholder] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = searchRef.current?.value as string;
    if (searchValue) {
      router.push(`/library?search=${encodeURIComponent(searchValue)}`);
    }
  };

  useEffect(() => {
    if (!showDynamicPlaceholder) {
      searchRef.current?.focus();
    }
  }, [showDynamicPlaceholder]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-106px)]">
        <div className="mb-[88px] flex flex-col">
          <div className="flex items-center justify-center ">
            <Image src="/hero.svg" alt="" width={1130} height={270} />
          </div>
        </div>
        <div className="w-full max-w-screen-md">
          {showDynamicPlaceholder ? (
            <DynamicPlaceholder onClick={() => setShowDynamicPlaceholder(false)} />
          ) : (
            <form className="relative w-full" onSubmit={(e) => handleSubmit(e)}>
              <Input
                ref={searchRef}
                name="search"
                type="text"
                placeholder="Search by mechanism or keyword"
                className="pr-[62px] w-full shadow-lg hover:shadow-medium"
                autoComplete="off"
              />
              <AirplaneIcon
                className={clsx("absolute -translate-y-1/2 top-1/2 right-6 bg-gray-900")}
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
}

function AirplaneIcon({ className }: { className?: string }) {
  return (
    <button
      type="submit"
      className={clsx(
        "flex items-center justify-center w-[30px] h-[30px] bg-gray-400 rounded-full group-hover:bg-gray-900 transition-color duration-300",
        className,
      )}
    >
      <Image src="/paper-plane.svg" alt="paper-plane" width={14} height={14} />
    </button>
  );
}

function DynamicPlaceholder({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between w-full px-6 py-[13px] transition duration-300 bg-white shadow-lg cursor-text rounded-2xl group hover:shadow-medium"
    >
      <Typography className="leading-full text-[14px] md:text-[16px] text-gray-400 space-x-px">
        <span>Solve</span> <CategoriesTyping /> <span>with mechanism design</span>
      </Typography>
      <AirplaneIcon />
    </div>
  );
}
