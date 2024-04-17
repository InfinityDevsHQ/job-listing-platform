"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

import MobileNav from "./mobile-nav";

type Tabs = {
  text: string;
  href: string;
};

const AppNavigation = () => {
  const pathname  = usePathname();

  const tabs: Tabs[] = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact Us", href: "/contact" },
    { text: "For Companies", href: "/companies" },
  ];

  return (
    <>
      <nav className="hidden lg:block">
        <ol className="flex gap-8">
          {tabs.map((link, index) => (
            <li key={index}>
              <Link 
                href={link.href}
                className={`text-xl font-semibold ${pathname === link.href ? 'text-primary-900' : 'text-neutral-500'}`}
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
