import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import { Toaster } from '@/components/ui/toaster';

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
      <body className={`${GeistSans.variable} mx-auto max-w-screen-2xl`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
