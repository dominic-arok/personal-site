import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dominic Arokiaraj",
  description: "3rd Year Computer Science Student at UC Santa Cruz with experience in full-stack software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
