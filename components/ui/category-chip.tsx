import { cva, VariantProps } from "class-variance-authority";
import { MechanismCategory } from "@/types/mechanism-category";
import * as React from "react";
import { CATEGORIES_BACKGROUNDS, CATEGORY_LABELS } from "@/config/categories";

const categoryVariants = cva(
  [
    "font-gotham rounded-3xl border-2 border-white text-white",
    "px-3 py-2 inline-flex gap-1 items-center",
  ],
  {
    variants: {
      variant: CATEGORIES_BACKGROUNDS,
    },
  },
);

type CategoryVariantProps = VariantProps<typeof categoryVariants>;

export interface CategoryProps extends React.HTMLAttributes<HTMLSpanElement>, CategoryVariantProps {
  variant: MechanismCategory;
}

const CategoryChip = React.forwardRef<HTMLSpanElement, CategoryProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span className={categoryVariants({ variant, className })} ref={ref} {...props}>
        {CATEGORY_LABELS[variant]}
        {children}
      </span>
    );
  },
);
CategoryChip.displayName = "CategoryChip";

export default CategoryChip;
