import "./globals.css";
import { Metadata } from "next";
import { gotham } from "@/fonts";
import { MechanismCategory } from "@/types/mechanism-category";
import Providers from "@/components/providers";
import { cn } from "@/utils/shadui";
import Navbar from "@/components/navbar";
// this is needed because otherwise the tailwind JIT compiler will not be able to find the dynamic classes
// the type is to ensure every category is covered
const backgroundVariants: Record<MechanismCategory, string> = {
  "fundraising": "bg-green",
  "allocation": "bg-yellow",
  "value-capture": "bg-orange",
  "governance": "bg-brown",
  "rewards-and-penalties": "bg-teal",
  "exchange": "bg-purple",
  "data": "bg-pink",
};
export const metadata: Metadata = {
  title: "Mechanism Institute",
  description:
    "Mechanism Institute is a research hub that advances onchain mechanisms. Our mission is to empower communities worldwide to design and deploy mechanisms that unlock new forms of coordination.",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "any",
    },
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          gotham.variable,
          "font-gotham flex h-[100vh] flex-col px-4 lg:px-20 bg-gray-200",
        )}
      >
        <Providers>
          <Navbar />
          <main className="flex flex-col flex-1 pb-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}