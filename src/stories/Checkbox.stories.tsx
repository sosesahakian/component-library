import { Checkbox } from "@/components/Atoms/Checkbox/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;
// Removed StoryFunction type as it's not needed

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled option",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: "I agree",
    error: "You must agree before continuing",
  },
};

const ControlledCheckbox = (args: React.ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = React.useState(!!args.checked);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Controlled: Story = {
  args: {
    label: "Controlled checkbox",
    // checked: false, // Don't set this here
  },
  render: ControlledCheckbox,
};
