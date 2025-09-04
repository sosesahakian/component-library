import React from "react";
import { Toggle as UIToggle } from "@/components/ui/toggle";

export type ToggleProps = React.ComponentProps<typeof UIToggle>;

export const Toggle = (props: ToggleProps) => {
  return <UIToggle {...props} />;
};
