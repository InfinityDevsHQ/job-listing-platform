'use client';
import { Notifications } from '@/components/header/_components/notifications';
import { ProfileDropdown } from '@/components/header/_components/profile-dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const companyHeaderRoutes = ['/recruit'];

  return (
    <header className="bg-dark-background">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between overflow-hidden px-4 py-2 lg:px-16 lg:py-4">
        <Link href={'/'}>
          <Image
            alt="logo"
            src="/assets/images/common/logo_clickJob_secondary.svg"
            width={160}
            height={40}
            className="h-7 w-28 lg:h-10 lg:w-40"
          />
        </Link>
        <div className="flex items-center md:gap-4">
          <Link
            href={'/companies'}
            className="hidden h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-dark-name lg:inline-flex"
          >
            Companies
          </Link>
          <Link
            href={'/inbox'}
            className="relative inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-dark-name"
          >
            <span>Inbox</span>
          </Link>

          <Notifications />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
