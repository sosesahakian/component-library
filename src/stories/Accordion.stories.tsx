import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Molecules/Accordion/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion type="single" collapsible {...{ ...args, type: undefined }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is your refund policy?</AccordionTrigger>
        <AccordionContent>
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
        <AccordionContent>
          No, we do not offer technical support for our products.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
