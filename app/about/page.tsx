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
              Advancing on-chain mechanisms
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                  Mechanism Institute is a research initiative that shapes building blocks for digital-age institutions. We bring together thinkers and practitioners to study, develop, simulate, and deploy new <strong>on-chain mechanisms</strong>.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                  Blockchain-based mechanisms are a powerful tool for addressing the complex challenges of the 21st century. These mechanisms enable agreements that are:
                </Typography>
                <div className="pl-6">
                  <Typography variant="body" className="leading-[175%]">
                    1. Self-executing: Automatically enforce their own conditions<br />
                    2. Censorship-resistant: Cannot be interfered with by central authorities<br />
                    3. Socially scalable: Coordinate an unbounded number of actors and interactions
                  </Typography>
                </div>
                <Typography variant="body" className="leading-[175%]">
                  With these properties, on-chain mechanisms offer a paradigm shift from legacy institutions. Yet, these mechanisms remain misunderstood and underexplored.
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  Our mission is to deepen understanding of the on-chain design space to pave the way for more resilient and robust institutions that prioritize positive-sum outcomes.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Typography variant="body" className="leading-[175%]">
              We achieve this through:
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography variant="subtitle2" className="text-stone font-gotham">
                Design Space Mapping
              </Typography>
              <Typography variant="body" className="leading-[175%]">
                We curate a public library of on-chain mechanisms that allows anyone to explore the full design space.
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="subtitle2" className="text-stone font-gotham">
                Research
              </Typography>
              <Typography variant="body" className="leading-[175%]">
                We lead cross-disciplinary research to explore how on-chain mechanisms can be applied to a range of coordination problems.
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="subtitle2" className="text-stone font-gotham">
                Interventions
              </Typography>
              <Typography variant="body" className="leading-[175%]">
                We design solutions that apply on-chain mechanisms to specific use-cases across industry and civil society.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
