import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/Atoms/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Big: Story = {
  args: {
    children: "Big Badge",
    size: "big",
  },
};
