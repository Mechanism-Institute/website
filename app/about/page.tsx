import Image from "next/image";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import ArrowLeft from "@/components/ui/arrow-left";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanism Institute | About",
};

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-[120px] relative mt-8 md:mt-16 pb-8 md:pb-16">
      <div className="w-[240px] hidden lg:block">
        <Image
          className="absolute top-0"
          src="/colorful-illustration.svg"
          alt="colorful-illustration"
          width={240}
          height={720}
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col max-w-[720px] gap-12">
          <div className="flex flex-col gap-6">
            <Typography variant="title2" className="text-stone font-gotham">
              Enhancing coordination with mechanism design
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                 Mechanism Institute brings together builders and researchers to unlock the positive-sum potential of mechanism design. We provide open resources and applied research that advance cryptoeconomic building blocks for digital-age institutions.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
              <Typography variant="body" className="leading-[175%]">
              Our primary areas of focus are:
              </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  Research and experimentation
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  We conduct cross-disciplinary research, design competitions, and carefully crafted experiments to discover how different mechanisms can be employed to solve particular coordination problems.
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  Pattern library
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                We're compiling a catalogue of mechanism design patterns so that anyone can easily navigate the full solution space and learn from the successes and failures of real case studies.
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  Ecosystem building
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                   We facilitate knowledge sharing, collaboration, and innovation between partners in academia and industry that are committed to advancing mechanism design.
                </Typography>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
