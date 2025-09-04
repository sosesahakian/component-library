import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/Molecules/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description.</CardDescription>
      </CardHeader>

      <CardContent>
        <p>This is the main content of the card. You can put anything here.</p>
      </CardContent>
      <CardFooter>
        <button className="px-4 py-2 bg-primary text-white rounded">
          Action
        </button>
      </CardFooter>
    </Card>
  ),
};

export const WithOnlyContent: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p>Just some content without header or footer.</p>
      </CardContent>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Header Only</CardTitle>
      </CardHeader>
      <CardFooter>
        <span className="text-xs text-muted-foreground">Footer text</span>
      </CardFooter>
    </Card>
  ),
};
