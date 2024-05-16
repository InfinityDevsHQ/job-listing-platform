import Header from '@/components/header/top-bar';

export default async function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mx-auto h-full w-full max-w-screen-2xl">{children}</main>
    </>
  );
}
