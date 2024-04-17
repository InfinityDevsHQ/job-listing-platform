import Link from "next/link";
import MobileNav from "./mobile-nav";

type Tabs = {
  text: string;
  href: string;
};

const AppNavigation = () => {
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
              <Link href={link.href} className="text-xl font-semibold text-neutral-500">{link.text}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <MobileNav />
    </>
  );
};

export default AppNavigation;
