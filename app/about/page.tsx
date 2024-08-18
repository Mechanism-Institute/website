import Image from "next/image";
import Typography from "@/components/ui/typography";
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
              Decentralizing coordination, one mechanism at a time
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                  Mechanism Institute is a research hub that advances onchain mechanisms. Our mission is to empower communities worldwide to design and deploy mechanisms that unlock new forms of coordination.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                  Blockchain-based mechanisms represent a paradigm shift from legacy institutions, enabling agreements that are:
                </Typography>
                <div className="pl-6">
                  <Typography variant="body" className="leading-[175%]">
                    1. Self-executing: Automatically enforce their own conditions<br />
                    2. Censorship-resistant: Cannot be interfered with by central authorities<br />
                    3. Socially scalable: Coordinate an unbounded number of actors and interactions
                  </Typography>
                </div>
                <Typography variant="body" className="leading-[175%]">
                  Yet, these mechanisms remain underexplored and poorly understood.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Typography variant="body" className="leading-[175%]">
              Our Theory of Change centers on:
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography variant="subtitle2" className="text-stone font-gotham">
                The Library
              </Typography>
              <Typography variant="body" className="leading-[175%]">
                Mapping the mechanism design space to illuminate the range of onchain experiments conducted to date.
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="subtitle2" className="text-stone font-gotham">
                Research Reports
              </Typography>
              <Typography variant="body" className="leading-[175%]">
                Deep-diving into how existing mechanisms can be composed to solve complex problems in specific domains.
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="subtitle2" className="text-stone font-gotham">
                Inventions & Interventions
              </Typography>
              <Typography variant="body" className="leading-[175%]">
                Designing new mechanisms and orchestrating real-world interventions that accelerate the shift to intermediary-less institutions.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
