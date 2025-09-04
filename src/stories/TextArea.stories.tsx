import type { Meta, StoryObj, StoryFn } from "@storybook/react";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Textarea> = {
  title: "Components/Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;
type StoryFunction = StoryFn<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "What's on your mind?",
  },
};

export const WithLabel: StoryFunction = (args) => (
  <div className="flex flex-col space-y-2">
    <Label htmlFor="story-textarea">Your Message </Label>
    <Textarea id="story-textarea" {...args} />
  </div>
);

export const Disabled: Story = {
  args: {
    placeholder: "What's on your mind?",
    disabled: true,
  },
};

export const WithButton: StoryFunction = (args) => (
  <div className="flex flex-col space-y-2">
    <Textarea id="story-textarea" {...args} />
    <Button>Submit</Button>
  </div>
);
