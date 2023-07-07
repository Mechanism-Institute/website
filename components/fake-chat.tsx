import { cn } from "@/lib/utils";
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

function Organization({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="flex gap-2 items-center">
        <Image src="/cow-swap.svg" alt="cow-swap" width={40} height={40} />
        <div className="flex flex-col items-start flex-1">
          <Typography
            variant="chat-text"
            className="text-gray-700 leading-6 font-medium"
          >
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

function QuestionBubble({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn(className, "rounded-3xl p-6 bg-gray-600 max-w-[532px]")}>
      <Typography variant="chat-text" className="text-gray-100 font-medium">
        {children}
      </Typography>
    </div>
  );
}

function SecondResponseBubble({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 bg-gray-300 max-w-[532px] rounded-3xl gap-2",
        className,
      )}
    >
      <Typography variant="chat-text" className="leading-[175%] text-gray-900">
        Take a look at these organizations who have had used similar mechanisms:
      </Typography>
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        <Organization value="item-1" />
        <Organization value="item-2" />
      </Accordion>
    </div>
  );
}

export default function FakeChat({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "max-w-[700px] w-full flex flex-col gap-6 rounded-3xl",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Image src="/arrow-left.svg" alt="arrow-left" width={16} height={16} />
        <Typography>Back</Typography>
      </div>
      <div className="flex flex-col gap-6 p-6 rounded-3xl bg-white h-[500px] overflow-y-auto fake-chat">
        <QuestionBubble className="self-end">
          Are there examples of DAOs that have done this in the past?
        </QuestionBubble>
        <SecondResponseBubble className="self-start" />
      </div>
    </div>
  );
}
