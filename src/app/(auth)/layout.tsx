import { dehydrate } from '@tanstack/react-query';
import { usePrefetchUserProfile } from '../utils/rq/hooks/use-auth';
import { getQueryClient } from '../utils/rq/react-query-client';
import { ReactQueryHydrate } from '../utils/rq/react-query-hydrate';
import { RqProvider } from '../utils/rq/rq-provider';
import Header from './header';

export default async function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  await usePrefetchUserProfile();
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <RqProvider>
        <ReactQueryHydrate state={dehydratedState}>
          <Header />
          {children}
        </ReactQueryHydrate>
      </RqProvider>
    </>
  );
}
