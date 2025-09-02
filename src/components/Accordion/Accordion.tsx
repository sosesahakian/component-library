import * as React from "react";
import {
  Accordion as UiAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export type AccordionProps = React.ComponentProps<typeof UiAccordion>;

export const Accordion: React.FC<AccordionProps> = (props) => {
  return <UiAccordion {...props} />;
};

export { AccordionItem, AccordionTrigger, AccordionContent };
