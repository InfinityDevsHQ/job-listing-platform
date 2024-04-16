import type { Metadata } from "next";
import "./globals.css";
// Fonts
import { GeistSans } from "geist/font/sans";

// Get meta data from relevant persons
export const metadata: Metadata = {
  title: "Click Job AI",
  description: "Find jobs in many industries and more!!", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable}`}>{children}</body>
    </html>
  );
}
