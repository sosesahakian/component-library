import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/Tooltip/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>This is a tooltip!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline cursor-pointer">Hover for info</span>
        </TooltipTrigger>
        <TooltipContent>
          Here is a longer tooltip with more information and details for the
          user.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
