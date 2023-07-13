"use client";

import FakeChat from "@/components/fake-chat";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [displayChat, setDisplayChat] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-106px)]">
        {!displayChat && (
          <div className="mb-[88px] flex flex-col">
            <div className="flex items-center justify-center ">
              <Image src="/hero.svg" alt="" width={1130} height={270} />
            </div>
          </div>
        )}
        <FakeChat className="mx-auto" displayChat={displayChat} setDisplayChat={setDisplayChat} />
      </div>
    </>
  );
}
