import Footer from '@/components/footer/page';
import Header from '@/components/header/top-bar';
import { Toaster } from '@/components/ui/sonner';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
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
      <body className={`${GeistSans.variable} h-auto`}>
        <Header />
        <main className="mx-auto h-full w-full max-w-screen-2xl">
          <Providers>{children}</Providers>
        </main>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
