"use client";

import Typography from "@/components/ui/typography";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Globe from "@/components/ui/globe";
import CategoryTag from "@/components/ui/category-tag";
import { HTMLProps, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/shadui";
import CategoryCircle from "@/components/ui/category-circle";

function Organization({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="flex gap-2 items-center">
        <Image src="/cow-swap.svg" alt="cow-swap" width={40} height={40} />
        <div className="flex flex-col items-start flex-1">
          <Typography variant="chat-text" className="text-gray-700 leading-6 font-medium">
            Cow Swap
          </Typography>
          <Typography className="text-orange underline flex gap-2" asChild>
            <Link href="https://cowswap.com">
              <Globe className="inline" /> cowswap.app
            </Link>
          </Typography>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <Typography className="text-gray-700 font-normal leading-[150%]">
          Cow Swap is a decentralized exchange that allows users to swap.
        </Typography>
      </AccordionContent>
    </AccordionItem>
  );
}

function AirdropAction({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="flex gap-2 items-center justify-between flex-1">
          <div className="flex gap-2 items-center">
            <Typography variant="chat-text" className="text-gray-700 leading-6 font-medium inline">
              Airdrop
            </Typography>
            <Typography className="inline leading-[24px] font-[350] text-gray-400 text-sm">
              (Merkle Drop)
            </Typography>
          </div>
          <CategoryCircle variant="value-allocation" className=" mr-4" />
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t-0 pt-0">
        <div>
          <Typography className="text-gray-700 font-normal leading-[150%] py-4 border-y border-divider">
            A distribution mechanism where tokens are given away for free to a specific group of
            people or randomly to anyone who meets certain criteria...
          </Typography>
          <CategoryTag variant="value-allocation" className="mt-4" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function StakingGauge({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="flex gap-2 items-center justify-between flex-1">
          <Typography variant="chat-text" className="text-gray-700 leading-6 font-medium inline">
            Staking Gauges
          </Typography>
          <div className="flex  mr-4">
            <CategoryCircle variant="value-allocation" className="z-[1] -mr-2" />
            <CategoryCircle variant="budgeting" className="z-[2]" />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t-0 pt-0">
        <div>
          <Typography className="text-gray-700 font-normal leading-[150%] py-4 border-y border-divider">
            A distribution mechanism where tokens are given away for free to a specific group of
            people or randomly to anyone who meets certain criteria...
          </Typography>
          <div className="mt-4 flex gap-2">
            <CategoryTag variant="value-allocation" />
            <CategoryTag variant="budgeting" />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function AllPlayAuction({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="flex gap-2 items-center justify-between flex-1">
          <Typography variant="chat-text" className="text-gray-700 leading-6 font-medium inline">
            All-pay Auction
          </Typography>
          <CategoryCircle variant="fundraising" className="mr-4" />
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t-0 pt-0">
        <div>
          <Typography className="text-gray-700 font-normal leading-[150%] py-4 border-y border-divider">
            Auctions in which all bidders must pay their bid.
          </Typography>
          <CategoryTag variant="fundraising" className="mt-4" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function QuestionBubble({ children, className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn(className, "rounded-3xl p-6 bg-gray-600 max-w-[532px]")} {...props}>
      <Typography variant="chat-text" className="text-gray-100 font-medium">
        {children}
      </Typography>
    </div>
  );
}

function FirstResponseBubble({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(className, "rounded-3xl p-6 bg-gray-300 max-w-[532px] divide-y divide-divider")}
      {...props}
    >
      <Typography
        variant="chat-text"
        className="flex items-baseline gap-x-1 gap-y-[3px] self-stretch flex-wrap pb-4"
      >
        Your solution requires <CategoryTag variant="fundraising" />,
        <CategoryTag variant="budgeting" />
        and <CategoryTag variant="value-allocation" />
      </Typography>
      <div className="flex flex-col gap-2">
        <Typography variant="chat-text" className="leading-[175%] mt-4">
          The following mechanisms can be helpful when you’re trying to finance and coordinate
          collective ownership of real estate abroad:
        </Typography>
        <Accordion type="multiple" className="flex flex-col gap-4">
          <AirdropAction value="item-1" />
          <StakingGauge value="item-2" />
          <AllPlayAuction value="item-3" />
        </Accordion>
      </div>
    </div>
  );
}

function SecondResponseBubble({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col p-6 bg-gray-300 max-w-[532px] rounded-3xl gap-2", className)}
      {...props}
    >
      <Typography variant="chat-text" className="leading-[175%] text-gray-900">
        Take a look at these organizations who have had used similar mechanisms:
      </Typography>
      <Accordion type="multiple" className="flex flex-col gap-4">
        <Organization value="item-1" />
        <Organization value="item-2" />
      </Accordion>
    </div>
  );
}

function Chat() {
  const [messagesCount, setMessagesCount] = useState(0);
  const [isIntervalActive, setIntervalActive] = useState(true);
  const chatContainerRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isIntervalActive && messagesCount < 4) {
      interval = setInterval(() => {
        setMessagesCount((count) => count + 1);
      }, 2000);
    } else {
      setIntervalActive(false);
    }

    return () => clearInterval(interval);
  }, [messagesCount, isIntervalActive]);

  return (
    <div className="transition-opacity ease-in duration-700 opacity-100 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Image src="/arrow-left.svg" alt="arrow-left" width={16} height={16} />
        <Typography>Back</Typography>
      </div>
      <div
        className="flex flex-col items-end gap-6 p-6 rounded-3xl bg-white h-[500px] overflow-y-auto scroll-smooth"
        ref={chatContainerRef}
      >
        <QuestionBubble
          className="self-end chat-message"
          onAnimationIteration={() => scrollToBottom()}
        >
          We want to buy and own real estate around the world together. How do we coordinate and
          finance it?
        </QuestionBubble>
        {messagesCount > 0 && (
          <FirstResponseBubble
            onAnimationEnd={() => scrollToBottom()}
            className="self-start chat-message"
          />
        )}
        {messagesCount > 1 && (
          <QuestionBubble className="self-end chat-message" onAnimationEnd={() => scrollToBottom()}>
            Are there examples of DAOs that have done this in the past?
          </QuestionBubble>
        )}
        {messagesCount > 2 && (
          <SecondResponseBubble
            onAnimationEnd={() => scrollToBottom()}
            className="self-start chat-message"
          />
        )}
      </div>
    </div>
  );
}

export default function FakeChat({ className }: { className?: string }) {
  const [displayChat, setDisplayChat] = useState(false);
  return (
    <div className={cn("max-w-[700px] w-full flex flex-col gap-6 rounded-3xl", className)}>
      {displayChat && <Chat />}
      <label className="relative">
        <div className="flex items-center justify-center w-[30px] h-[30px] bg-gray-400 rounded-full absolute pointer-events-none top-1/2 -translate-y-1/2 right-6">
          <Image src="/paper-plane.svg" alt="paper-plane" width={14} height={14} />
        </div>
        <Input
          onClick={() => setDisplayChat(true)}
          name="search"
          type="text"
          placeholder="Is there anything else you’d like to know?"
          className="pr-[62px]"
        />
      </label>
    </div>
  );
}
