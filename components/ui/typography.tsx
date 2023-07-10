import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const typographyVariants = cva("", {
  variants: {
    variant: {
      base: "leading-full text-gray-900",
      body: "leading-[175%] font-semilight text-stone text-[18px]",
      "nav-link": "text-gray-600 uppercase",
      "hero-title": "text-[28px] leading-full text-gray-900",
      "chat-text": "text-[20px] leading-[150%] font-normal text-gray-900",
      title: "text-[48px] leading-full font-medium text-gray-900",
      title2: "text-[40px] leading-full font-medium text-gray-900",
      subtitle: "text-[32px] leading-full font-normal text-gray-900",
      subtitle2: "text-[24px] leading-full font-normal text-gray-900",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export interface TypographyProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, asChild = false, as = "p", ...props }, ref) => {
    const Comp = asChild ? Slot : as;
    return <Comp className={cn(typographyVariants({ variant, className }))} ref={ref} {...props} />;
  },
);
Typography.displayName = "Typography";

export default Typography;
