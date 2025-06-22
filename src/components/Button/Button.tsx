import type { VariantProps } from "class-variance-authority";
import { Button as ShadcnButton } from "../ui/button";
import { cn } from "@/utils/cn";
import React from "react";
type ShadcnSize = VariantProps<typeof ShadcnButton>["size"];

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

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
      textColor,
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
        style={{
          backgroundColor: backgroundColor || undefined,
          color: textColor || undefined,
        }}
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
