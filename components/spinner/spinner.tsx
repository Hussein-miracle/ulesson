import { cn } from "@/lib/utils";
import React from "react";

type SpinnerProps = unknown;

const Spinner = ({
  className,
  ...props
}: SpinnerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        `inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-background border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`,
      )}
      role="status"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
