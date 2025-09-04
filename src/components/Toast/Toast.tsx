import { toast as sonnerToast, ToastOptions } from "sonner";
import { Toaster } from "../ui/sonner";
import React from "react";

type ToastContent = React.ReactNode | string;

interface CustomToastOptions extends ToastOptions {
  closeable?: boolean;
}

export function toast(content: ToastContent, options?: CustomToastOptions) {
  if (options?.closeable) {
    return sonnerToast(
      (t) => (
        <div
          style={{
            display: "flex",
            alignContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{content}</span>
          <button onClick={() => sonnerToast.dismiss(t)} aria-label="Close">
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
