import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { gotham, robotoMono } from "@/fonts";

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
