"use client";

import Typography from "@/components/ui/typography";
import ArrowLeft from "@/components/ui/arrow-left";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAtom } from "jotai";
import { supporterDialogAtom } from "@/state/supporter-atom";

export default function SupporterDialog() {
  const [open, setOpen] = useAtom(supporterDialogAtom);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white p-10 flex flex-col gap-10 rounded-3xl">
        <Typography className="text-stone font-gotham leading-full text-[32px]">
          Become a Supporter
        </Typography>
        <Typography className="font-light leading-[150%]">
          There many ways to get involved today like following mechanisms can be helpful when you’re
          trying to disperse profits from a collaborative NFT collection.
        </Typography>
        <div className="flex gap-4 flex-wrap">
          <button className="p-6 font-gotham font-normal text-white bg-teal text-[24px] leading-full flex gap-4 items-center rounded-3xl">
            $60/quarter
            <ArrowLeft className="rotate-180" width={24} height={24} />
          </button>
          <button className="p-6 font-gotham text-white bg-orange text-[24px] leading-full flex gap-4 items-center rounded-3xl">
            $200/quarter
            <ArrowLeft className="rotate-180" width={24} height={24} />
          </button>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 font-gotham">
          <div className="flex gap-4 flex-col md:flex-row">
            <Typography className="w-[96px] shrink-0">Students:</Typography>
            <Typography>
              <Link className="text-orange hover:underline" href="#">
                Email us
              </Link>{" "}
              with a copy of your ID and you&#39;ll get 50% off
            </Typography>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <Typography className="w-[96px] shrink-0">Gifts:</Typography>
            <Typography>
              You can gift{" "}
              <Link className="text-orange hover:underline" href="#">
                monthly
              </Link>
              ,{" "}
              <Link className="text-orange hover:underline" href="#">
                quarterly
              </Link>
              , and{" "}
              <Link className="text-orange hover:underline" href="#">
                annual
              </Link>{" "}
              plans to others.
            </Typography>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <Typography className="w-[96px] shrink-0">Teams:</Typography>
            <Typography>
              (10+ seats):{" "}
              <Link className="text-orange hover:underline" href="#">
                Contact us
              </Link>
              .
            </Typography>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <Typography className="w-[96px] shrink-0">Crypto:</Typography>
            <Typography>Mint an annual membership .</Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
