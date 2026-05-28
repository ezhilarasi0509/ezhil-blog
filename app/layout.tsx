import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezhilarasi S",
  description:
    "Personal engineering blog by Ezhilarasi S, documenting what I learn as a software engineer.",
  authors: [{ name: "Ezhilarasi S" }],
  keywords: [
    "Ezhilarasi S",
    "software engineering",
    "personal blog",
    "technical writing",
    "learning documentation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}