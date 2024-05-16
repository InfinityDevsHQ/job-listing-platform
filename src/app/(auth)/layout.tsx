import { usePrefetchUserProfile } from '../utils/rq/hooks/use-auth';
import { getQueryClient } from '../utils/rq/react-query-client';
import Header from './header';

export default async function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  await usePrefetchUserProfile();

  return (
    <>
      <Header />
      <main className="mx-auto h-full w-full max-w-screen-2xl">{children}</main>
    </>
  );
}
