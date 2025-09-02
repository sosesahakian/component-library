import * as React from "react";
import {
  Card as UiCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export type CardProps = React.ComponentProps<typeof UiCard>;

export const Card: React.FC<CardProps> = (props) => {
  return <UiCard {...props} />;
};

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
