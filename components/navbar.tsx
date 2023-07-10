"use client";

import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import { Transition } from "@headlessui/react";
import SupporterDialog from "@/components/supporter-dialog";
import { useAtom } from "jotai";
import { supporterDialogAtom } from "@/state/supporter-atom";

export default function Navbar() {
  const [, setDialogOpen] = useAtom(supporterDialogAtom);
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-8 px-2 border-b border-divider flex justify-between items-center w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={208} height={34} />
      </Link>

      <div className="hidden gap-10 md:flex">
        <Typography variant="nav-link" asChild>
          <Link href="/about">About</Link>
        </Typography>
        <Typography variant="nav-link" asChild>
          <Link href="/library">Library</Link>
        </Typography>
        <Typography
          className="cursor-pointer"
          variant="nav-link"
          onClick={() => {
            setOpen(false);
            setDialogOpen(true);
          }}
        >
          Get Involved
        </Typography>
      </div>

      <div className="md:hidden">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="button">
            <Menu className="text-gray-600" />
          </Dialog.Trigger>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-40" />
          <Transition
            as={Dialog.Content}
            aria-label="Menu"
            className="fixed right-0 top-0 bg-gray-200 p-6 space-y-4 shadow-xl h-screen z-50 flex flex-col transition-all transform translate-x-full"
            show={open}
            enter="transition-all transform ease-out duration-300"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all transform ease-in duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <Typography variant="nav-link" asChild>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </Typography>
            <Typography variant="nav-link" asChild>
              <Link href="/library" onClick={() => setOpen(false)}>
                Library
              </Link>
            </Typography>
            <Typography
              variant="nav-link"
              onClick={() => {
                setOpen(false);
                setDialogOpen(true);
              }}
            >
              Get Involved
            </Typography>
          </Transition>
        </Dialog.Root>
      </div>
      <SupporterDialog />
    </nav>
  );
}
