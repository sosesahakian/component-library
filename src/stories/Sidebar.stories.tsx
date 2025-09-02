import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "@/components/Sidebar.tsx/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import the provider

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: (args) => (
    <SidebarProvider>
      <Sidebar {...args}>
        <nav className="flex flex-col gap-4 p-4">
          <a href="#" className="text-primary font-semibold">
            Dashboard
          </a>
          <a href="#" className="text-muted-foreground">
            Profile
          </a>
          <a href="#" className="text-muted-foreground">
            Settings
          </a>
          <a href="#" className="text-muted-foreground">
            Logout
          </a>
        </nav>
      </Sidebar>
    </SidebarProvider>
  ),
};

export const WithHeader: Story = {
  render: (args) => (
    <SidebarProvider>
      <Sidebar {...args}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b font-bold">My App</div>
          <nav className="flex-1 flex flex-col gap-4 p-4">
            <a href="#" className="text-primary font-semibold">
              Home
            </a>
            <a href="#" className="text-muted-foreground">
              Projects
            </a>
            <a href="#" className="text-muted-foreground">
              Team
            </a>
          </nav>
          <div className="p-4 border-t text-xs text-muted-foreground">
            v1.0.0
          </div>
        </div>
      </Sidebar>
    </SidebarProvider>
  ),
};
