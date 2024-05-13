import Footer from '@/components/footer/page';
import Header from '@/components/header/top-bar';
import { Toaster } from '@/components/ui/sonner';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';
import { getQueryClient } from './utils/rq/react-query-client';
import { RqProvider } from './utils/rq/rq-provider';

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
  const queryClient = getQueryClient();

  // prefetch data with dehydration
  // queryClient.prefetchQuery({
  //   queryKey: ['KEY'],
  //   queryFn: () => {},
  // })
  // const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className={`${GeistSans.variable} h-auto`}>
        <RqProvider>
          {/* <ReactQueryHydrate state={dehydratedState}> */}
          <Header />
          <main className="mx-auto h-full w-full max-w-screen-2xl">{children}</main>
          <Footer />
          <Toaster richColors />
          {/* </ReactQueryHydrate> */}
        </RqProvider>
      </body>
    </html>
  );
}
