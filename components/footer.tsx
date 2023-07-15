import Image from "next/image";
import Link from "next/link";
import Typography from "./ui/typography";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="relative py-6 border-t border-gray-300">
      <div className="flex items-center justify-end">
        {/* <Link href="/" className="transition-opacity duration-300 cursor-pointer hover:opacity-70">
          <Image src="/logo.svg" alt="logo" width={160} height={26} className="opacity-50" />
        </Link> */}
        <div className="flex items-center gap-8">
          <Link href="mailto:hello@mechanism.institute">
            <Typography className="text-xs text-gray-700 underline transition-opacity duration-300 cursor-pointer hover:opacity-70">
              hello@mechanism.institute
            </Typography>
          </Link>
          <Typography className="text-xs text-gray-500">Mechanism Institute © {date}</Typography>
        </div>
      </div>
    </footer>
  );
}
