import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/ui/typography";

export default function Navbar() {
  return (
    <nav className="py-8 px-2 border-b border-divider flex justify-between items-center w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={208} height={34} />
      </Link>
      <div className="flex gap-10">
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
