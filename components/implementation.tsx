import { Implementation } from "@/types/mechanism";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import Globe from "@/components/ui/globe";
import Link from "next/link";
import File from "@/components/ui/file";
import Github from "@/components/ui/github";

const removeProtocol = (url: string) => url.replace(/(^\w+:|^)\/\//, "");

export default function Implementation({ implementation }: { implementation: Implementation }) {
  return (
    <div className="flex p-4 flex-col gap-2 bg-white rounded-2xl">
      <div className="flex gap-2 items-center">
        {implementation.logo && (
          <Image
            src={implementation.logo}
            alt={`${implementation.name} logo`}
            width={40}
            height={40}
          />
        )}
        <Typography className="text-[20px] text-[#6D8089] font-gotham leading-full">
          {implementation.name}
        </Typography>
      </div>
      <Typography className="text-stone text-[20px] leading-[175%]">
        {implementation.description}
      </Typography>
      <div className="flex flex-col gap-2">
        {implementation.app && (
          <div className="text-orange flex gap-2 items-center">
            <Globe />
            <Typography className="text-orange underline" asChild>
              <Link href={implementation.app}>{removeProtocol(implementation.app)}</Link>
            </Typography>
          </div>
        )}
        {implementation.docs && (
          <div className="text-orange flex gap-2 items-center">
            <File />
            <Typography className="text-orange underline capitalize" asChild>
              <Link href={implementation.docs}>{implementation.name} Docs</Link>
            </Typography>
          </div>
        )}
        {implementation.sourcecode && (
          <div className="text-orange flex gap-2 items-center">
            <Github />
            <Typography className="text-orange underline capitalize" asChild>
              <Link href={implementation.sourcecode}>Github</Link>
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
