import Image from "next/image";
import Typography from "@/components/ui/typography";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mechanism Institute | About",
};

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-[120px] relative mt-8 pb-8 md:pb-16">
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
        <div className="flex flex-col max-w-[720px]">
          <Typography variant="body" className="leading-[175%] mb-8">
            Mechanism Institute is a research hub dedicated to advancing onchain mechanisms. We document, invent, remix, compose, and deploy mechanisms that improve human institutions. Our three pillars are:
          </Typography>

          <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-300">
            <Typography variant="subtitle2" className="text-stone font-gotham">
              The Mechanism Library
            </Typography>
            <Typography variant="body" className="leading-[175%]">
              Our library maps the onchain design space across seven fundamental functions.
            </Typography>
            <div className="pl-6 mt-2">
              <Typography variant="body" className="leading-[175%]">
                - <em>Fundraising</em>: Coordinating the flow of capital into a system.<br />
                - <em>Allocation</em>: Distributing scarce resources among participants.<br />
                - <em>Value Capture</em>: Retaining and monetizing generated value.<br />
                - <em>Rewards & Penalties</em>: Shaping incentives to influence behavior.<br />
                - <em>Exchange</em>: Facilitating the transfer, trade, and pricing of assets.<br />
                - <em>Governance</em>: Structuring permissions and decision-making rules.<br />
                - <em>Data</em>: Managing information flow, integrity, and access.
              </Typography>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-300">
            <Typography variant="subtitle2" className="text-stone font-gotham">
              Research
            </Typography>
            <Typography variant="body" className="leading-[175%]">
              We investigate how mechanisms can solve complex problems across <Link href="https://paragraph.xyz/@mechanism.institute/prediction-markets" className="underline" target="_blank">prediction markets</Link>, <Link href="https://paragraph.xyz/@mechanism.institute/public-goods" className="underline" target="_blank">public goods</Link>, <Link href="https://www.projectliberty.io/wp-content/uploads/2024/06/PL_Toolkit_Report_v7.pdf" className="underline" target="_blank">governance</Link>, <Link href="https://agentcoin.tv/blog/agentcointv-has-arrived-the-future-of-streaming-ai-and-crypto" className="underline" target="_blank">streaming</Link>, <Link href="https://github.com/Mechanism-Institute/slashing-engine" className="underline" target="_blank">sybil prevention</Link>, <Link href="https://x.com/orishim/status/1882064487718777094" className="underline" target="_blank">p2p commerce</Link>, <Link href="https://youtu.be/Lr9-D9lU4cs?si=M10aRnwXTquykExK" className="underline" target="_blank">network sovereignties</Link>, <Link href="https://observablehq.com/@mechanisminstitute/impact-measurement" className="underline" target="_blank">impact measurement</Link>, and <Link href="https://observablehq.com/@mechanisminstitute/5-research-directions-for-blockchain-mechanisms" className="underline" target="_blank">more</Link>
            </Typography>
          </div>
          
          <div className="flex flex-col gap-2">
            <Typography variant="subtitle2" className="text-stone font-gotham">
              Collaborations
            </Typography>
            <Typography variant="body" className="leading-[175%]">
              We partner with researchers and institutions looking to understand and apply onchain mechanisms to new domains. Our work has been financially supported by <Link href="https://www.gitcoin.co/" className="underline" target="_blank">Gitcoin</Link> and <Link href="https://optimism.io/" className="underline" target="_blank">Optimism</Link>, and we actively collaborate with <Link href="https://blockchaingov.eu/" className="underline" target="_blank">BlockchainGov</Link> on research and library maintenance.
            </Typography>
            <Typography variant="body" className="leading-[175%] mt-4">
              If you are interested in working with us, reach out at <Link href="mailto:hello@mechanism.institute" className="underline">hello@mechanism.institute</Link>.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
