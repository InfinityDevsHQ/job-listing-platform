'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MobileNav from './mobile-nav';

type Tabs = {
  text: string;
  href: string;
};

const AppNavigation = () => {
  const pathname = usePathname();

  const tabs: Tabs[] = [
    // { text: 'Home', href: '/' },
    // { text: 'About', href: '/about' },
    // { text: 'Contact Us', href: '/contact' },
    { text: 'For Companies', href: '/companies' },
  ];

  return (
    <>
      <nav className="hidden flex-shrink-0 lg:block">
        <ol className="flex gap-8">
          {tabs.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`text-xl ${pathname === link.href ? 'text-primary-900' : 'text-neutral-500'}`}
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

export default AppNavigation;
