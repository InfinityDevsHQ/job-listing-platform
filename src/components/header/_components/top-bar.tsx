'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { Button } from '@/components/ui/button-new';
import { ArrowRight, LockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Countries } from './countries';
import Navbar from './navbar';
import { Notifications } from './notifications';
import { ProfileDropdown } from './profile-dropdown';

const Header = () => {
  const pathname = usePathname();
  const { data: user } = useUserProfile();
  const noHeaderRoutes = ['/login', '/register'];

  const companyHeaderRoutes = ['/recruit'];

  const publicNavLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact Us', href: '/contact' },
    { text: 'For Companies', href: '/recruit' },
  ];

  if (noHeaderRoutes.includes(pathname)) {
    return <></>;
  }

  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3.5 lg:px-16 lg:py-8">
        <Link href={'/'}>
          <Image
            alt="logo"
            src={
              companyHeaderRoutes.includes(pathname)
                ? '/assets/images/common/logo_clickJob_secondary.svg'
                : '/assets/images/common/logo_clickJob_primary.svg'
            }
            width={160}
            height={40}
            className="h-7 w-28 lg:h-10 lg:w-40"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden gap-4 lg:flex">
            <Navbar
              links={publicNavLinks}
              activeLinkClassName={
                companyHeaderRoutes.includes(pathname) ? 'text-secondary' : 'text-neutral-950'
              }
            />

            {!user?.user_data ? (
              <>
                <Link href={'/register'}>
                  <Button
                    variant={companyHeaderRoutes.includes(pathname) ? 'secondary' : 'outline'}
                  >
                    Register
                    <ArrowRight className="ml-2 h-4 w-4" size={16} />
                  </Button>
                </Link>
                <Link href={'/login'}>
                  <Button
                    variant={companyHeaderRoutes.includes(pathname) ? 'secondary' : 'primary'}
                  >
                    Login
                    <LockIcon className="ml-2 h-4 w-4" size={16} />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Notifications />
                <ProfileDropdown />
              </>
            )}
            <Countries />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
