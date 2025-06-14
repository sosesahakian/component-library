import React from "react";
import { cn } from "../../utils/cn";
import { Button as ShadcnButton } from "../ui/button";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const sizeMap = {
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

    const shadcnSize = sizeMap[size] || "default";

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
