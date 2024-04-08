import Link from "next/link";
import MobileNav from "./mobile-nav";

type Tabs = {
  text: string;
  href: string;
};

const Navigation = () => {
  const tabs: Tabs[] = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "For Companies", href: "#" },
  ];

  return (
    <>
      <nav className="hidden lg:block">
        <ol className="flex gap-4">
          {tabs.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <MobileNav />
    </>
  );
};

export default Navigation;
