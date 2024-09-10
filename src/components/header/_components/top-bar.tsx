'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { Button } from '@/components/ui/button-new';
import useAuthStore from '@/stores/authStore/store';
import { ArrowRight, LockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Countries } from './countries';
import Navbar from './navbar';
import { Notifications } from './notifications';
import { PagesDropdown } from './pages-dropdown';
import { ProfileDropdown } from './profile-dropdown';

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
    <header className="bg-dark-backgroundDark">
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
          {!isAuthenticated ? (
            <>
              <Button
                variant={companyHeaderRoutes.includes(pathname) ? 'secondary' : 'outline'}
                asChild
              >
                <Link href={'/register'} className="hidden lg:flex">
                  Register
                  <ArrowRight className="ml-2 h-4 w-4" size={16} />
                </Link>
              </Button>
              <Button
                variant={companyHeaderRoutes.includes(pathname) ? 'secondary' : 'primary'}
                asChild
              >
                <Link href={'/login'}>
                  Login
                  <LockIcon className="ml-2 h-4 w-4" size={16} />
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Notifications />
              <ProfileDropdown />
            </>
          )}
          <PagesDropdown />
          <Countries />
        </div>
      </div>
    </header>
  );
};

export default Header;
