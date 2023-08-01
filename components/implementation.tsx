import { Implementation } from "@/types/mechanism";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import Globe from "@/components/ui/globe";
import Link from "next/link";
import File from "@/components/ui/file";
import Github from "@/components/ui/github";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";

export default function Implementation({ implementation }: { implementation: Implementation }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {implementation.logo && (
            <Image
              src={implementation.logo}
              alt={`${implementation.name} logo`}
              width={40}
              height={40}
            />
          )}
          <Typography className="text-[20px] text-gray-700 font-medium font-gotham leading-full">
            {implementation.name}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-2">
          {implementation.app && (
            <Link
              className="p-2 text-white transition-opacity duration-300 bg-gray-500 rounded-full cursor-pointer hover:opacity-70"
              href={implementation.app}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center w-5 h-5">
                <Globe />
              </div>
            </Link>
          )}
          {implementation.docs && (
            <Link
              className="p-2 text-white transition-opacity duration-300 bg-gray-500 rounded-full cursor-pointer hover:opacity-70"
              href={implementation.docs}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center w-5 h-5">
                <File />
              </div>
            </Link>
          )}
          {implementation.sourcecode && (
            <Link
              className="p-2 text-white transition-opacity duration-300 bg-gray-500 rounded-full cursor-pointer hover:opacity-70"
              href={implementation.sourcecode}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center w-5 h-5">
                <Github />
              </div>
            </Link>
          )}
        </div>
      </div>
      <Separator />
      {implementation.description && (
        <Typography className="text-stone text-[16px] leading-[175%] font-semilight prose">
          <ReactMarkdown>{implementation.description}</ReactMarkdown>
        </Typography>
      )}
    </div>
  );
}
