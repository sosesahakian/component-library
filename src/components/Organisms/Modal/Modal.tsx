import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../../ui/dialog";

type ModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
};

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  trigger,
  showCloseButton = true,
  footer,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} className=" bg-white">
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}

      <DialogContent showCloseButton={showCloseButton}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        <div>{children}</div>

        {footer && <DialogFooter>{footer}</DialogFooter>}

        {showCloseButton && <DialogClose />}
      </DialogContent>
    </Dialog>
  );
}
