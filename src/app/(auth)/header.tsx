'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Countries } from './_components/countries';
import { Notifications } from './_components/notifications';
import { ProfileDropdown } from './_components/profile-dropdown';

const Header = () => {
  const pathname = usePathname();

  const companyHeaderRoutes = ['/recruit'];

  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between overflow-hidden px-4 py-2 lg:px-16 lg:py-4">
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
          <Link
            href={'/companies'}
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
          >
            Companies
          </Link>
          <Link
            href={'/inbox'}
            className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
          >
            <span>Inbox</span>
          </Link>
          <Notifications />
          <Countries />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
