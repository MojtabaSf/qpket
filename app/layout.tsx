import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registery";

export const metadata: Metadata = {
  title: "Qpket",
  description: "Qpket test panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
