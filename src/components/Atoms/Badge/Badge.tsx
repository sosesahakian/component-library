import * as React from "react";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  red: "bg-red-500 text-white",
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
  grey: "bg-gray-500 text-white",
  black: "bg-black text-white",
  purple: "bg-purple-500 text-white",
  pink: "bg-pink-500 text-white",
  yellow: "bg-yellow-400 text-black",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
  size?: "small" | "big";
  color?: keyof typeof colorMap;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "small",
  color,
  className,
  ...props
}) => (
  <span
    className={cn(
      // base styles
      "inline-flex items-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      // size
      size === "small" ? "px-2.5 py-0.5 text-[11px]" : "px-4 py-1 text-base",
      // variant styles
      color
        ? colorMap[color]
        : variant === "default"
        ? "bg-gray-200 text-gray-800"
        : variant === "secondary"
        ? "bg-secondary text-secondary-foreground"
        : variant === "destructive"
        ? "bg-red-500 text-white"
        : variant === "outline"
        ? "border border-border text-foreground"
        : "",
      className
    )}
    {...props}
  />
);
