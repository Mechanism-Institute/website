import Image from "next/image";
import Mail from "./ui/mail";
import X from "./ui/x";
import Link from "next/link";
import Typography from "./ui/typography";

export default function Footer() {
  return (
    <footer className="relative py-6 border-t border-gray-300">
      <div className="flex items-center justify-between">
        <Link
          className="flex items-center gap-2 text-gray-500 duration-300 cursor-pointer group hover:text-gray-700"
          href="mailto:hello@mechanism.institute"
        >
          <Mail width={20} height={20} />
          <Typography className="text-xs text-gray-500 underline transition-colors duration-300 group-hover:text-gray-700">
            hello@mechanism.institute
          </Typography>
        </Link>
        <Link
          href="https://x.com/mechanism_inst"
          target="_blank"
          rel="noredirect"
          className="flex items-center gap-2 text-gray-500 duration-300 cursor-pointer group hover:text-gray-700"
        >
          <X width={20} height={20} />
          <Typography className="text-xs text-gray-500 underline transition-colors duration-300 group-hover:text-gray-700">
            mechanism_inst
          </Typography>
        </Link>
      </div>
    </footer>
  );
}
