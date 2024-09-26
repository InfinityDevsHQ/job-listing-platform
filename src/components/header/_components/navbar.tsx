'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import MobileNav from './mobile-nav';

type Link = {
  text: string;
  href: string;
};

type NavbarProps = {
  links: Link[];
};

const Navbar = ({ links }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <>
      <nav className="hidden flex-shrink-0 lg:block">
        <ol className="flex gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={cn(
                  `inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-normal lg:text-base ${pathname === link.href ? 'text-dark-greenLight' : 'text-dark-name'}`
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
