import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

import Footer from '@/components/footer/page';
import Header from '@/components/header/top-bar';
import { Toaster } from '@/components/ui/sonner';

// Get meta data from relevant persons
export const metadata: Metadata = {
  title: 'Click Job AI',
  description: 'Find jobs in many industries and more!!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} mx-auto h-auto max-w-screen-2xl`}>
        <Header />
        <main className="h-full w-full">{children}</main>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
