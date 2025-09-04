import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/Molecules/Tabs/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Molecules/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4">Account tab content goes here.</div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4">Password tab content goes here.</div>
      </TabsContent>
    </Tabs>
  ),
};
