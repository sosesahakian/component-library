import { Input } from "@/components/Atoms/Input/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Full Name",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithFloating: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "floating",
  },
};
