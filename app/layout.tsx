import "./globals.css";
import { gotham, robotoMono } from "@/fonts";
import { MechanismCategory } from "@/types/mechanism-category";
import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import Providers from "@/components/providers";
import { cn } from "@/utils/cn";

// this is needed because otherwise the tailwind JIT compiler will not be able to find the dynamic classes
// the type is to ensure every category is covered
const backgroundVariants: Record<MechanismCategory, string> = {
  "value-capture": "bg-orange",
  budgeting: "bg-teal",
  liquidity: "bg-blue",
  "economic-design": "bg-purple",
  "value-allocation": "bg-yellow",
  fundraising: "bg-green",
  governance: "bg-brown",
  identity: "bg-pink",
};

function Navbar() {
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
        <Typography variant="nav-link" asChild>
          <Link href="/get-involved">Get Involved</Link>
        </Typography>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          robotoMono.variable,
          gotham.variable,
          robotoMono.className,
          "flex h-[100vh] flex-col px-4 lg:px-20 bg-gray-200",
        )}
      >
        <Providers>
          <Navbar />
          <main className="flex flex-1 flex-col py-8 lg:py-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
