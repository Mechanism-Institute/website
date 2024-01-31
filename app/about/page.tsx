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
              Enhancing coordination through mechanism design.
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                  Mechanism Institute is a think tank that advances building blocks for digital-age institutions. We bring together builders and researchers to study, develop, simulate, and deploy new coordination mechanisms.
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                  We believe that traditional institutions are failing to meet the complex demands of the 21st century, and that blockchain-based mechanisms offer a powerful yet under-explored alternative. Our mission is to fundamentally upgrade how our societies function, paving the way for more efficient, resilient, and adaptive institutions that prioritize people and positive-sum outcomes.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Typography variant="body" className="leading-[175%]">
              We achieve this through:
            </Typography>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  Research and Experimentation
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  We orchestrate cross-disciplinary research and targeted experiments that apply new mechanisms to complex coordination problems.
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  Design Space Mapping
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  {`Our growing library of mechanism design patterns allows anyone to explore the wide range of mechanism solutions and relevant case studies.`}
                </Typography>
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="subtitle2" className="text-stone font-gotham">
                  Ecosystem Building
                </Typography>
                <Typography variant="body" className="leading-[175%]">
                  We facilitate knowledge sharing, collaboration, and innovation between partners in academia and industry that are committed to advancing mechanism design.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <Typography variant="body" className="leading-[175%]">
                  In the near term, we are working closely with the crypto ecosystem on better mechanisms for capital formation, value capture, incentivization, decision-making, reputation, and more. In the longer-term, our focus will expand beyond crypto, employing blockchain-based mechanisms to tackle existential risks (Al, climate, nuclear, bio) and enhance human flourishing (human rights, wealth distribution, health, education, supply chain, sovereignty).
                </Typography>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
