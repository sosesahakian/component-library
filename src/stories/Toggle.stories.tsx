import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Bold } from "lucide-react";
import { Toggle } from "@/components/Atoms/Toggle/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    "aria-label": "Toggle default",
    children: "Toggle",
    // Do NOT pass pressed or onPressedChange here!
  },
};

export const WithIcon: Story = {
  args: {
    "aria-label": "Toggle bold",
    children: <Bold className="h-4 w-4" />,
  },
};

export const Checked: Story = {
  args: {
    "aria-label": "Toggle checked",
    children: "Checked",
    defaultPressed: true,
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Toggle disabled",
    children: "Disabled",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [pressed, setPressed] = React.useState(false);
    return (
      <Toggle
        {...args}
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Controlled toggle"
      >
        Controlled
      </Toggle>
    );
  },
};
