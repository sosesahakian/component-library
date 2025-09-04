import { toast as sonnerToast } from "sonner";
import { Toaster } from "../../ui/sonner";
import React from "react";

type ToastContent = React.ReactNode | string;

interface CustomToastOptions {
  duration?: number;
  closeable?: boolean;
  [key: string]: unknown;
}

export function toast(content: ToastContent, options?: CustomToastOptions) {
  if (options?.closeable) {
    return sonnerToast(
      () => (
        <div
          style={{
            display: "flex",
            alignContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{content}</span>
          <button onClick={() => sonnerToast.dismiss()} aria-label="Close">
            ×
          </button>
        </div>
      ),
      options
    );
  }
  return sonnerToast(content, options);
}

export { Toaster };

export default {
  title: "Components/Toast",
  component: Toaster,
};

export const Default = () => <Toaster />;
