'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import MobileNav from './mobile-nav';

type Tabs = {
  text: string;
  href: string;
};

const Navbar = () => {
  const pathname = usePathname();

  const tabs: Tabs[] = [{ text: 'For Companies', href: '/companies' }];

  return (
    <>
      <nav className="hidden flex-shrink-0 lg:block">
        <ol className="flex gap-8">
          {tabs.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={cn(
                  'inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium',
                  {
                    'text-primary-900': pathname === link.href,
                  }
                )}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;
