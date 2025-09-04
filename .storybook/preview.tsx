import { ThemeProvider } from "next-themes";
import React from "react";

export const decorators = [
  (Story) => (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Story />
    </ThemeProvider>
  ),
];
