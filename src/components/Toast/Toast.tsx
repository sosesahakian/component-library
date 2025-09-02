import * as React from "react";
import { Toaster as sonnerToast } from "@/components/ui/sonner";

export type ToastOptions = {
  description?: string;
  action?: React.ReactNode;
  duration?: number;
  // Add more options as supported by sonner
};

export function toast(message: string, options?: ToastOptions) {
  sonnerToast(message, options);
}
