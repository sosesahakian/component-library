import * as React from "react";
import { Sidebar as UiSidebar } from "@/components/ui/sidebar";

export type SidebarProps = React.ComponentProps<typeof UiSidebar>;

export const Sidebar: React.FC<SidebarProps> = (props) => {
  return <UiSidebar {...props} />;
};
