import { Label } from "@/components/Atoms/Label/Label";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    required: { control: "boolean" },
    className: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "This is a label",
  },
};

export const Required: Story = {
  args: {
    children: "Required Label",
    required: true,
  },
};

export const WithHtmlFor: Story = {
  args: {
    children: "Label for input",
    htmlFor: "inputId",
  },
};
