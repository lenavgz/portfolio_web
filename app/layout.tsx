// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";


import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import MyAppShell from "./AppShell";
import { Interface } from "readline";
import { ReactNode } from "react";
import { createTheme, MantineColorsTuple } from "@mantine/core";
import "./globals.css";

export const metadata = {
  title: "portfolio lena",
  description: "my portfolio",
};

interface Props {
  children: ReactNode;
}

const primary: MantineColorsTuple = [
  "#e8efff",
  "#cedaff",
  "#9bb1ff",
  "#6486ff",
  "#3861fe",
  "#1c4afe",
  "#093eff",
  "#0031e4",
  "#002bcc",
  "#0024b4",
];

const text: MantineColorsTuple = [
  "#e8efff",
  "#cedaff",
  "#9bb1ff",
  "#6486ff",
  "#3861fe",
  "#1c4afe",
  "#093eff",
  "#0031e4",
  "#002bcc",
  "#0024b4",
];

const theme = createTheme({
  primaryColor: "primary",
  colors: {
    primary,
    text,
  },
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MyAppShell>{children}</MyAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
