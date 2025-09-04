import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/Atoms/Switch/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Molecules/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    "aria-label": "Toggle switch",
  },
};

export const Checked: Story = {
  args: {
    "aria-label": "Checked switch",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Disabled switch",
    disabled: true,
  },
};

const ControlledSwitch: React.FC = (args) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch
      {...args}
      checked={checked}
      onCheckedChange={setChecked}
      aria-label="Controlled switch"
    />
  );
};

export const Controlled: Story = {
  render: (args) => <ControlledSwitch {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
