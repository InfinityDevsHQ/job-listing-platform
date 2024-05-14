import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navigation = () => {
  const links: { text: string; href: string }[] = [
    { text: 'About Us', href: '#' },
    { text: 'Personal Data Policy', href: '#' },
    { text: 'Cookies Policy', href: '#' },
    { text: 'Terms and conditions', href: '#' },
    { text: 'Contact Us', href: '#' },
  ];

  return (
    <ul className="flex flex-col items-center gap-8 text-base lg:flex-row lg:divide-x">
      {links.map((link, index) => (
        <li key={index} className={cn('lg:pl-8', { 'lg:pl-0': index == 0 })}>
          <Link href={link.href} className=" ">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
