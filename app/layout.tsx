import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { gotham, robotoMono } from "@/fonts";
import { MechanismCategory } from "@/types/mechanism-category";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          robotoMono.variable,
          gotham.variable,
          robotoMono.className,
          "flex h-[100vh] flex-col mx-20 bg-gray-200",
        )}
      >
        <Navbar />
        <main className="flex flex-1 flex-col py-16">{children}</main>
      </body>
    </html>
  );
}
