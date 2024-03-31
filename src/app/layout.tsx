import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
