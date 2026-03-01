import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-full border-2 border-bakery-peach-dark/50 bg-white px-5 py-2 text-sm font-body text-bakery-dark placeholder:text-bakery-dark/40 focus:outline-none focus:border-bakery-teal focus:ring-2 focus:ring-bakery-teal/20 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
