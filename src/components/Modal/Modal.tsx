import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import FocusTrap from "focus-trap-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ✅ KEEP overlay as-is
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out",
        className
      )}
      {...props}
    />
  );
}

// ✅ NEW: combine your framer-motion + FocusTrap inside Content
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <AnimatePresence>
        <DialogPrimitive.Content asChild forceMount>
          <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
            <motion.div
              className={cn(
                "fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-xl",
                className
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              {...props}
            >
              {children}

              {showCloseButton && (
                <DialogPrimitive.Close className="absolute top-4 right-4 opacity-70 hover:opacity-100">
                  <XIcon />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              )}
            </motion.div>
          </FocusTrap>
        </DialogPrimitive.Content>
      </AnimatePresence>
    </DialogPrimitive.Portal>
  );
}
