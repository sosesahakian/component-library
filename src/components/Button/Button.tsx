import type { VariantProps } from "class-variance-authority"; // if using cva()
import { Button as ShadcnButton } from "../ui/button";
import { cn } from "@/utils/cn";
import React from "react";
// Get the allowed size type directly from ShadcnButton
type ShadcnSize = VariantProps<typeof ShadcnButton>["size"];

// Your props remain the same
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

// Tell TS exactly what the mapping produces:
const sizeMap: Record<
  NonNullable<ButtonProps["size"]>,
  Extract<ShadcnSize, string>
> = {
  small: "sm",
  medium: "default",
  large: "lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      primary = false,
      backgroundColor,
      size = "medium",
      label,
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const variant = primary ? "default" : "outline";

    const shadcnSize = sizeMap[size];

    return (
      <ShadcnButton
        ref={ref}
        variant={variant}
        size={shadcnSize}
        className={cn(backgroundColor ? "" : undefined)}
        style={backgroundColor ? { backgroundColor } : undefined}
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
