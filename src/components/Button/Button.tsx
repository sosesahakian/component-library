import * as React from "react";
import { cn } from "@/utils/cn";
import { Button as ShadcnButton } from "../ui/button";

const colorMap: Record<string, { bg: string; hover: string; text: string }> = {
  blue: { bg: "bg-blue-500", hover: "hover:bg-blue-600", text: "text-white" },
  red: { bg: "bg-red-500", hover: "hover:bg-red-600", text: "text-white" },
  green: {
    bg: "bg-green-500",
    hover: "hover:bg-green-600",
    text: "text-white",
  },
  yellow: {
    bg: "bg-yellow-400",
    hover: "hover:bg-yellow-500",
    text: "text-black",
  },
  gray: { bg: "bg-gray-500", hover: "hover:bg-gray-600", text: "text-white" },
  purple: {
    bg: "bg-purple-500",
    hover: "hover:bg-purple-600",
    text: "text-white",
  },
  pink: { bg: "bg-pink-500", hover: "hover:bg-pink-600", text: "text-white" },
  black: { bg: "bg-black", hover: "hover:bg-gray-900", text: "text-white" },
};

type ButtonSize = "small" | "medium" | "large";

const sizeMap: Record<ButtonSize, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof colorMap;
  size?: ButtonSize;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  primary?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "blue",
      size = "medium",
      label,
      disabled = false,
      onClick,
      primary = false,
      className,
      ...props
    },
    ref
  ) => {
    const { bg, hover, text } = colorMap[color] || colorMap.blue;
    const sizeClass = sizeMap[size];

    // Use shadcn/ui's variant if you want, otherwise just use classes
    const variant = primary ? "default" : "outline";

    return (
      <ShadcnButton
        ref={ref}
        variant={variant}
        className={cn(
          "cursor-pointer transition-colors rounded font-semibold",
          bg,
          hover,
          text,
          sizeClass,
          className
        )}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        {...props}
      >
        {label}
      </ShadcnButton>
    );
  }
);

Button.displayName = "Button";
