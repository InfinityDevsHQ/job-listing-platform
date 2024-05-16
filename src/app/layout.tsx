import { usePrefetchCountries } from '@/app/utils/rq/hooks/use-countries';
import Footer from '@/components/footer/page';
import { Toaster } from '@/components/ui/sonner';
import { dehydrate } from '@tanstack/react-query';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';
import { usePrefetchUserProfile } from './utils/rq/hooks/use-auth';
import { getQueryClient } from './utils/rq/react-query-client';
import { ReactQueryHydrate } from './utils/rq/react-query-hydrate';
import { RqProvider } from './utils/rq/rq-provider';

// Get meta data from relevant persons
export const metadata: Metadata = {
  title: 'Click Job AI',
  description: 'Find jobs in many industries and more!!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  await Promise.allSettled([usePrefetchCountries(), usePrefetchUserProfile()]);

  const dehydratedState = dehydrate(queryClient);
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} h-auto`}>
        <main className="mx-auto h-full w-full max-w-screen-2xl">
          <RqProvider>
            <ReactQueryHydrate state={dehydratedState}>
              {children}
              <Footer />
              <Toaster richColors />
            </ReactQueryHydrate>
          </RqProvider>
        </main>
      </body>
    </html>
  );
}
