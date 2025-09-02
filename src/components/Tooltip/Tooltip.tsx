import * as React from "react";
import {
  Tooltip as UiTooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export type TooltipProps = React.ComponentProps<typeof UiTooltip>;
export type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger>;
export type TooltipContentProps = React.ComponentProps<typeof TooltipContent>;

export const Tooltip: React.FC<TooltipProps> = (props) => {
  return <UiTooltip {...props} />;
};

export { TooltipProvider, TooltipTrigger, TooltipContent };
