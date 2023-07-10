import Image from "next/image";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import ArrowLeft from "@/components/ui/arrow-left";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-[120px] relative">
      <div className="w-[240px] hidden lg:block">
        <Image
          className="absolute top-0"
          src="/colorful-illustration.svg"
          alt="colorful-illustration"
          width={240}
          height={720}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col max-w-[720px] gap-12">
          <div className="flex flex-col gap-6">
            <Typography variant="title2" className="text-stone font-gotham">
              What?
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  Enhancing coordination with mechanism design
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  We are an independent think tank, membership organization and publisher advancing
                  the industry through open resources, applied research and solution design for
                  digital-age institutions solving real-world problems.
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  The Mechanism Library
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  Generate custom mechanisms using our AI chat bot and crowdsourced intelligence of
                  leading primitives to find solutions for your project or protocol.
                </Typography>
              </div>
            </div>
            <Typography
              asChild
              className="text-orange flex gap-2 text-[20px] font-medium leading-[175%] items-center"
            >
              <Link href={"/library"}>
                Go to library <ArrowLeft className="rotate-180" width={18} height={35} />
              </Link>
            </Typography>
          </div>
          <div className="flex flex-col gap-6">
            <Typography variant="title2" className="text-stone font-gotham">
              Who?
            </Typography>
            <Typography variant="body" className="leading-[175%]">
              Members are global leaders in the their field focused on implementing solutions to
              societal challenges
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  The Mechanism Lab
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  Where our researchers expand the frontier of mechanism design. We host mechanism
                  design competitions, applied research sprints, design tools and frameworks.
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  The Mechanism Alliance
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  Fosters collaboration, knowledge sharing, and innovation across organizations
                  committed to advancing mechanism design. It provides a forum for member
                  organizations to contribute to the development and application of cryptoeconomics,
                  shaping the future of digital-age institutions.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
