import { getMechanism } from "@/lib/get-mechanism";
import Image from "next/image";
import CategoryTag from "@/components/ui/category-tag";
import Link from "next/link";
import Typography from "@/components/ui/typography";

export default async function Page({ params }: { params: { id: string } }) {
  const mechanism = await getMechanism(params.id);

  if (!mechanism)
    return (
      <div className="mx-auto mt-20 flex justify-center items-center ">
        <Image
          src="/watermark.svg"
          alt="watermakr"
          width={449}
          height={1321}
          className="hidden lg:block fixed right-20 top-[400px] z-0"
        />
        <Typography variant="hero-title">Not Found</Typography>
      </div>
    );

  return (
    <div className="flex gap-[120px] relative">
      <Image
        src="/watermark.svg"
        alt="watermakr"
        width={449}
        height={1321}
        className="hidden lg:block fixed right-20 top-[400px] z-0"
      />
      <div className="flex flex-col divide-y divide-divider gap-6 z-10">
        <div className="bg-white w-60 h-60 flex items-center justify-center rounded-lg ">
          <Image
            className="bg-white"
            src="/sample-mechanism-ilustration.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <CategoryTag variant={mechanism.category} className="w-full" />
          {mechanism.secondaryCategories?.map((category) => (
            <CategoryTag key={category} variant={category} className="w-full" />
          ))}
        </div>
      </div>
      <div className="flex flex-1 z-10">
        <div className="flex flex-col max-w-[720px] gap-12">
          <Link href="/library" className="flex gap-2">
            <Image src="/arrow-left.svg" alt="arrow left" width={16} height={16} />
            <Typography>Back to Library</Typography>
          </Link>
          <div className="flex flex-col gap-6 font-gotham">
            <Typography variant="title">{mechanism.name}</Typography>
            <Typography className="text-[28px] leading-[175%] font-semilight">
              {mechanism.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
