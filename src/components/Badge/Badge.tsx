import * as React from "react";
import { Badge as UiBadge } from "@/components/ui/badge";

// Nice-to-have props for Badge:
// - children: content inside the badge
// - variant: style variant (e.g. "default", "secondary", "destructive", "outline")
// - className: custom styling
// - asChild: render as a different element (if supported)
// - ...rest: any other native span or HTML attributes

export type BadgeProps = React.ComponentProps<typeof UiBadge>;

export const Badge: React.FC<BadgeProps> = (props) => {
  return <UiBadge {...props} />;
};
