import Typography from "@/components/ui/typography";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="mx-auto mt-20 flex justify-center items-center ">
      <Image
        src="/watermark.svg"
        alt="watermakr"
        width={449}
        height={1321}
        className="hidden lg:block fixed right-20 top-[400px] z-0"
      />
      <Typography variant="hero-title">Loading...</Typography>
    </div>
  );
}
