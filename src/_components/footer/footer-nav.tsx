import Link from "next/link";
import React from "react";
type LinkItem = {
  text: string;
  href: string;
};

const FooterNav = () => {
  const links: LinkItem[] = [
    { text: "About Us", href: "#" },
    { text: "Personal Data Policy", href: "#" },
    { text: "Cookies Policy", href: "#" },
    { text: "Terms and conditions", href: "#" },
    { text: "Contact Us", href: "#" },
  ];

  return (
    <>
      <div className="col-start-1 flex items-center justify-between text-white font-semibold text-sm lg:text-base mb-8">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <span className="px-4 py-2">
              <Link href={link.href}>{link.text}</Link>
            </span>
            {index !== links.length - 1 && (
              <span className="w-1 bg-white h-6" />
            )}
          </React.Fragment>
        ))}
      </div>
      <span className="border-b border-neutral-50 col-span-2 mb-8" />
    </>
  );
};

export default FooterNav;
