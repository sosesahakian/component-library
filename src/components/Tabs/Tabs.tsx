import * as React from "react";
import {
  Tabs as UiTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

export type TabsProps = React.ComponentProps<typeof UiTabs>;

export const Tabs: React.FC<TabsProps> = (props) => {
  return <UiTabs {...props} />;
};

export { TabsList, TabsTrigger, TabsContent };
