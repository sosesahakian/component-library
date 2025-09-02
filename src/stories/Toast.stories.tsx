import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { toast } from "@/components/Toast/Toast";
import { Toaster } from "@/components/ui/sonner";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <>
      <button
        className="px-4 py-2 bg-primary text-white rounded"
        onClick={() => toast("This is a default toast!")}
      >
        Show Toast
      </button>
      <Toaster />
    </>
  ),
};

export const WithDescription: StoryObj = {
  render: () => (
    <>
      <button
        className="px-4 py-2 bg-secondary text-black rounded"
        onClick={() =>
          toast("Toast with description", {
            description: "This is a longer description for the toast.",
          })
        }
      >
        Show Toast with Description
      </button>
      <Toaster />
    </>
  ),
};

export const WithAction: StoryObj = {
  render: () => (
    <>
      <button
        className="px-4 py-2 bg-destructive text-white rounded"
        onClick={() =>
          toast("Toast with action", {
            action: (
              <button
                className="ml-2 underline"
                onClick={() => alert("Action clicked!")}
              >
                Undo
              </button>
            ),
          })
        }
      >
        Show Toast with Action
      </button>
      <Toaster />
    </>
  ),
};
