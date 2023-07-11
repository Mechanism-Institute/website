import Image from "next/image";
import CategoryTag from "@/components/ui/category-tag";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import ArrowLeft from "@/components/ui/arrow-left";
import { AggregatedMechanism } from "@/types/mechanism";
import { getMechanism } from "@/lib/get-mechanism";
import { getImplementations } from "@/lib/get-implementations";
import { parseResourcesString } from "@/utils/parse-resources-string";
import { Separator } from "@/components/ui/separator";
import Implementation from "@/components/implementation";

async function getAggregatedMechanism(id: string) {
  const mechanism = await getMechanism(id);
  if (!mechanism) return null;
  const implementations = await getImplementations(mechanism.implementations);
  return {
    ...mechanism,
    implementations,
    resources: parseResourcesString(mechanism.resources),
  } satisfies AggregatedMechanism;
}

export default async function Page({ params }: { params: { id: string } }) {
  const mechanism = await getAggregatedMechanism(params.id);

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
    <div className="flex flex-col lg:flex-row gap-[120px] relative">
      <Image
        src="/watermark.svg"
        alt="watermakr"
        width={449}
        height={1321}
        className="hidden lg:block fixed right-20 top-[400px] z-0"
      />
      <div className="flex flex-col gap-6 z-10 lg:max-w-[240px]">
        <div className="bg-white w-60 h-60 flex items-center justify-center rounded-lg ">
          <Image
            className="bg-white"
            src="/sample-mechanism-ilustration.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <CategoryTag variant={mechanism.category} className="w-full" />
          {mechanism.secondaryCategories?.map((category) => (
            <CategoryTag key={category} variant={category} className="w-full" />
          ))}
        </div>
        <Separator />
        <div className="flex flex-col gap-6">
          <Typography variant="subtitle2" className="font-gotham">
            Resources
          </Typography>
          <ul className="gap-4 flex flex-col list-disc flex-wrap ml-4">
            {mechanism.resources.map((resource) => (
              <li key={resource.link}>
                <Typography asChild className="underline ">
                  <Link href={resource.link}>{resource.name}</Link>
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-1 z-10">
        <div className="flex flex-col max-w-[720px] gap-12">
          <Link href="/library" className="flex gap-2">
            <ArrowLeft />
            <Typography>Back to Library</Typography>
          </Link>
          <div className="flex flex-col gap-6 font-gotham">
            <Typography variant="title">{mechanism.name}</Typography>
            <Typography className="text-[28px] leading-[175%] font-semilight">
              {mechanism.description}
            </Typography>
          </div>
          <div className="flex flex-col gap-6">
            <Typography>Implementations</Typography>
            {mechanism.implementations.map((implementation) => (
              <Implementation key={implementation.id} implementation={implementation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
