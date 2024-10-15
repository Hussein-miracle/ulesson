import { cn } from "@/lib/utils";
import React from "react";
import { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = {
  variant?: "blue" | 'grey';
};

const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & PrimaryButtonProps
>(({ className, children,variant = 'blue', ...otherProps }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "text-base  py-4 px-8 max-h-[2.8125rem] h-fit w-fit rounded-xl flex items-center justify-center gap-1.5",
        variant === 'blue' && "bg-primary-blue-100 text-white  font-semibold ",
        variant === 'grey' && "bg-background  text-text-shade-75  font-normal ",
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
