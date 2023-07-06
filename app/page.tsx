import Image from "next/image";
import CategoriesTyping from "@/components/categories-typing";
import Typography from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <Image
        className="mx-auto"
        src="/hero.svg"
        alt="hero"
        width={1128}
        height={127}
      />
      <div className="mt-[88px] flex flex-col">
        <Typography as="h1" className="mb-12 mx-auto" variant="hero-title">
          <span>Solve</span> <CategoriesTyping />{" "}
          <span>with mechanism design</span>
        </Typography>
      </div>
    </>
  );
}
