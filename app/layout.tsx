import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biblical Research Library",
  description:
    "Searching God's Word through context, for the church, and for His glory.",
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