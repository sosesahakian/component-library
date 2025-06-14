import * as React from "react";
import { Label as ShadcnLabel } from "../ui/label";

type LabelProps = React.ComponentProps<typeof ShadcnLabel> & {
  required?: boolean;
};

export function Label({
  children,
  required = false,
  className,
  ...props
}: LabelProps) {
  return (
    <ShadcnLabel className={className} {...props}>
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </ShadcnLabel>
  );
}
