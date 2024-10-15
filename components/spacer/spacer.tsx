"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface SpacerProps {
  size?: number;
  axis?: "horizontal" | "vertical";
  style?: React.CSSProperties;
  className?: string;
}

const Spacer = ({
  size = 8,
  axis = "vertical",
  style = {},
  className,
}: SpacerProps) => {
  const width = axis === "vertical" ? 2 : size;
  const height = axis === "horizontal" ? 2 : size;

  return (
    <span
      className={cn(`block`, className)}
      style={{
        width: `${width}px`,
        minWidth: `${width}px`,
        height: `${height}px`,
        minHeight: `${height}px`,
        ...style,
      }}
    ></span>
  );
};

export default Spacer;
