'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import useAuthStore from '@/stores/authStore/store';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import { PagesDropdown } from './pages-dropdown';

const Header = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();
  const { data: user } = useUserProfile();
  const noHeaderRoutes = ['/login', '/register'];

  const companyHeaderRoutes = ['/recruit'];

  const publicNavLinks = [
    { text: 'Home', href: '/' },
    { text: 'For Companies', href: '/recruit' },
  ];

  if (noHeaderRoutes.includes(pathname)) {
    return <></>;
  }

  return (
    <header className="bg-dark-background">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3.5 lg:px-16 lg:py-4">
        <Link href={'/'}>
          <Image
            alt="logo"
            src="/assets/images/common/logo_clickJob_secondary.svg"
            width={160}
            height={40}
            className="h-7 w-28 lg:h-10 lg:w-40"
          />
        </Link>

        <Navbar links={publicNavLinks} />
        <div className="flex gap-4">
          <PagesDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
