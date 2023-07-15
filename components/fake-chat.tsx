"use client";

import { FormEvent, HTMLProps, useEffect, useRef, useState } from "react";
import CategoriesTyping from "@/components/categories-typing";
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
import { cn } from "@/utils/shadui";
import CategoryCircle from "@/components/ui/category-circle";
import clsx from "clsx";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import { supporterDialogAtom } from "@/state/supporter-atom";
import { storeChatInput } from "@/lib/store-user-input";

interface DisplayChatProps {
  className?: string;
}

function Organization({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="flex items-center gap-2">
        <Image src="/cow-swap.svg" alt="cow-swap" width={40} height={40} />
        <div className="flex flex-col items-start flex-1">
          <Typography variant="chat-text" className="font-medium leading-6 text-gray-700">
            Cow Swap
          </Typography>
          <Typography className="flex gap-2 underline text-orange" asChild>
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
        <div className="flex items-center justify-between flex-1 gap-2">
          <div className="flex items-center gap-2">
            <Typography variant="chat-text" className="inline font-medium leading-6 text-gray-700">
              Airdrop
            </Typography>
            <Typography className="inline leading-[24px] font-[350] text-gray-400 text-sm">
              (Merkle Drop)
            </Typography>
          </div>
          <CategoryCircle variant="value-allocation" className="mr-4 " />
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-0 border-t-0">
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
        <div className="flex items-center justify-between flex-1 gap-2">
          <Typography variant="chat-text" className="inline font-medium leading-6 text-gray-700">
            Staking Gauges
          </Typography>
          <div className="flex mr-4">
            <CategoryCircle variant="value-allocation" className="z-[1] -mr-2" />
            <CategoryCircle variant="budgeting" className="z-[2]" />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-0 border-t-0">
        <div>
          <Typography className="text-gray-700 font-normal leading-[150%] py-4 border-y border-divider">
            A distribution mechanism where tokens are given away for free to a specific group of
            people or randomly to anyone who meets certain criteria...
          </Typography>
          <div className="flex gap-2 mt-4">
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
        <div className="flex items-center justify-between flex-1 gap-2">
          <Typography variant="chat-text" className="inline font-medium leading-6 text-gray-700">
            All-pay Auction
          </Typography>
          <CategoryCircle variant="fundraising" className="mr-4" />
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-0 border-t-0">
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
    <div
      className={cn(className, "rounded-3xl p-6 bg-gray-600 max-w-[532px] animate-fade-in")}
      {...props}
    >
      <Typography variant="chat-text" className="font-medium text-gray-100">
        {children}
      </Typography>
    </div>
  );
}

function UserAnswerBubble({ className, ...props }: HTMLProps<HTMLDivElement>) {
  const [, setSupportDialogOpen] = useAtom(supporterDialogAtom);
  return (
    <div
      className={cn(
        "flex flex-col p-6 bg-gray-300 max-w-[532px] rounded-3xl gap-2 animate-fade-in",
        className,
      )}
      {...props}
    >
      <Typography variant="chat-text">
        Sorry, I&apos;m not actually real yet, but I will be soon! In the meantime, check out our{" "}
        <Link className="font-bold underline text-orange" href="/library">
          library
        </Link>{" "}
        and learn how you can{" "}
        <span
          onClick={() => setSupportDialogOpen(true)}
          className="font-bold underline cursor-pointer text-orange"
        >
          get involved
        </span>
      </Typography>
    </div>
  );
}

function FirstResponseBubble({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        className,
        "rounded-3xl p-6 bg-gray-300 max-w-[532px] divide-y divide-divider animate-fade-in",
      )}
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
      className={cn(
        "flex flex-col p-6 bg-gray-300 max-w-[532px] rounded-3xl gap-2 animate-fade-in",
        className,
      )}
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

function BubbleLoading() {
  return (
    <div className="flex self-start gap-2 p-4 bg-gray-300 rounded-3xl">
      <span className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" />
      <span className="w-2 h-2 delay-150 bg-gray-700 rounded-full animate-pulse" />
      <span className="w-2 h-2 delay-300 bg-gray-700 rounded-full animate-pulse" />
    </div>
  );
}

function UserInteraction({
  children,
  onQuestionAnimationEnd,
  onAnswerAnimationEnd,
}: {
  children: React.ReactNode;
  onQuestionAnimationEnd: () => void;
  onAnswerAnimationEnd: () => void;
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <QuestionBubble
        className="self-end"
        onAnimationEnd={() => {
          onQuestionAnimationEnd();
          setTimeout(() => {
            setShowAnswer(true);
          }, 2000);
        }}
      >
        {children}
      </QuestionBubble>
      {showAnswer ? (
        <UserAnswerBubble className="self-start" onAnimationEnd={onAnswerAnimationEnd} />
      ) : (
        <BubbleLoading />
      )}
    </>
  );
}

const DEFAULT_MESSAGES_COUNT = 4;

function Chat() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [messagesCount, setMessagesCount] = useState(0);
  const [isIntervalActive, setIntervalActive] = useState(true);
  const chatContainerRef = useRef<null | HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [blockInput, setBlockInput] = useState(false);

  const scrollToBottom = () => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    if (messagesCount < DEFAULT_MESSAGES_COUNT) return;
    if (blockInput) return;
    setBlockInput(true);
    storeChatInput(message);
    setUserMessages((messages) => [...messages, message]);
    setMessage("");
  };

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isIntervalActive && messagesCount < DEFAULT_MESSAGES_COUNT) {
      interval = setInterval(() => {
        setMessagesCount((count) => count + 1);
        if (messagesCount > 2 && inputRef.current) {
          inputRef.current.focus();
        }
      }, 2000);
    } else {
      setIntervalActive(false);
    }

    return () => clearInterval(interval);
  }, [messagesCount, isIntervalActive]);

  return (
    <>
      <div className="flex flex-col gap-4 transition-opacity duration-700 ease-in opacity-100">
        <div
          className="flex flex-col items-end h-[calc(100vh-210px)] gap-4 overflow-y-auto scroll-smooth pt-16"
          ref={chatContainerRef}
        >
          <QuestionBubble className="self-end" onAnimationIteration={() => scrollToBottom()}>
            We want to buy and own real estate around the world together. How do we coordinate and
            finance it?
          </QuestionBubble>
          {messagesCount > 0 && (
            <FirstResponseBubble onAnimationEnd={() => scrollToBottom()} className="self-start" />
          )}
          {messagesCount > 1 && (
            <QuestionBubble className="self-end" onAnimationEnd={() => scrollToBottom()}>
              Are there examples of DAOs that have done this in the past?
            </QuestionBubble>
          )}
          {messagesCount > 2 && (
            <SecondResponseBubble onAnimationEnd={() => scrollToBottom()} className="self-start" />
          )}
          {userMessages.map((message, index) => (
            <UserInteraction
              key={message + index}
              onQuestionAnimationEnd={() => {
                scrollToBottom();
              }}
              onAnswerAnimationEnd={() => {
                scrollToBottom();
                setBlockInput(false);
              }}
            >
              {message}
            </UserInteraction>
          ))}
        </div>
      </div>
      <form className="relative" onSubmit={handleSubmit}>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="search"
          type="text"
          placeholder="Describe your challenge, get solutions."
          className="pr-[62px]"
          autoComplete="off"
          ref={inputRef}
        />
        <AirplaneIcon
          className={clsx("absolute -translate-y-1/2 top-1/2 right-6", message && "bg-gray-900")}
        />
      </form>
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
      className="flex items-center justify-between w-full px-6 py-4 transition duration-300 bg-white cursor-pointer rounded-2xl group hover:shadow-medium"
    >
      <Typography className="leading-full text-[14px] md:text-[16px] text-gray-400">
        <span>Solve</span> <CategoriesTyping /> <span>with mechanism design</span>
      </Typography>
      <AirplaneIcon />
    </div>
  );
}

export default function FakeChat({ className }: DisplayChatProps) {
  const [displayChat, setDisplayChat] = useState(false);

  if (!displayChat) {
    return (
      <>
        <div className="mb-[88px] flex flex-col">
          <div className="flex items-center justify-center ">
            <Image src="/hero.svg" alt="" width={1130} height={270} />
          </div>
        </div>
        <div className={cn("max-w-[700px] w-full flex flex-col gap-4 rounded-3xl", className)}>
          <DynamicPlaceholder onClick={() => setDisplayChat(true)} />
        </div>
      </>
    );
  }

  return (
    <div className={cn("max-w-[700px] w-full flex flex-col gap-4 rounded-3xl", className)}>
      <Chat />
    </div>
  );
}
