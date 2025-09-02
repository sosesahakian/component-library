import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CustomRadioGroup } from "@/components/RadioGroup/RadioGroup";

const options = [
  { label: "Option One", value: "one" },
  { label: "Option Two", value: "two" },
  { label: "Option Three", value: "three" },
];

const meta: Meta<typeof CustomRadioGroup> = {
  title: "Components/RadioGroup",
  component: CustomRadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CustomRadioGroup>;

export const Default: Story = {
  args: {
    options,
    name: "default-radio",
  },
};

export const WithDefaultValue: Story = {
  args: {
    options,
    defaultValue: "two",
    name: "default-value-radio",
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    name: "disabled-radio",
  },
};

export const RowDirection: Story = {
  args: {
    options,
    direction: "row",
    name: "row-radio",
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: "Enabled", value: "enabled" },
      { label: "Disabled", value: "disabled", disabled: true },
      { label: "Also Enabled", value: "also-enabled" },
    ],
    name: "disabled-option-radio",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const ControlledRadioGroup = () => {
      const [value, setValue] = React.useState("one");
      return (
        <CustomRadioGroup
          {...args}
          value={value}
          onChange={setValue}
          name="controlled-radio"
        />
      );
    };
    return <ControlledRadioGroup />;
  },
  args: {
    options,
    name: "controlled-radio-group",
  },
};
