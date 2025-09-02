import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Toggle } from "@/components/Toggle/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Dark mode",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled toggle",
    disabled: true,
  },
};

export const WithLongLabel: Story = {
  args: {
    label: "This is a toggle with a longer label for demonstration purposes",
  },
};

const ControlledToggle = (args: React.ComponentProps<typeof Toggle>) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Toggle
      {...args}
      checked={checked}
      onChange={setChecked}
      label="Controlled toggle"
    />
  );
};

export const Controlled: Story = {
  render: (args) => <ControlledToggle {...args} />,
};
