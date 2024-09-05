'use client';

import Copyright from '@/components/footer/_components/copyrights';
import Subscribe from '@/components/forms/subscribe-form/subscribe-form';
import Divider from '@/components/ui/divider';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const noFooterRoutes = ['/login', '/register', '/inbox', '/onboarding'];

  const companyHeaderRoutes = ['/recruit'];

  if (noFooterRoutes.includes(pathname)) {
    return null;
  }

  const isSecondaryFooter = companyHeaderRoutes.includes(pathname);

  type FooterLink = {
    title: string;
    link: string;
  };

  const FooterLink = [
    { title: 'About Us', link: '/' },
    { title: 'Personal Data Policy', link: '/' },
    { title: 'Cookies Policy', link: '/' },
    { title: 'Terms and Conditions', link: '/' },
    { title: 'Contact Us', link: '/' },
  ];

  return (
    <footer className={cn('text-white', isSecondaryFooter ? 'bg-secondary' : 'bg-primary')}>
      <div className={cn('mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-8 lg:gap-8')}>
        <Link href={'/'}>
          <Image
            src={
              isSecondaryFooter
                ? '/assets/images/common/logo_clickjob_secondary_white.png'
                : '/assets/logo_white.png'
            }
            alt="Logo"
            className="mx-auto h-7 w-28 lg:mx-0 lg:h-11 lg:w-52"
            width={226}
            height={50}
            quality={100}
          />
        </Link>
        <p className="text-center text-sm lg:max-w-3xl lg:text-left lg:text-base">
          Mauris pharetra imperdiet iaculis elementum nulla. Tellus morbi nunc non vitae enim amet.
          Faucibus eleifend sit leo varius suspendisse.
        </p>
        <div className="flex flex-col flex-wrap items-center lg:flex-row">
          {FooterLink.map(({ title, link }) => (
            <>
              <Link
                key={title}
                href={link}
                className="px-2 py-2 first:ml-0 last:mr-0 hover:text-white/90 lg:mx-4 lg:px-4"
              >
                {title}
              </Link>
              <span className="hidden h-4 w-6 rotate-90 last:hidden lg:block">
                <Divider variant="light" mobileVariant="primary" />
              </span>
            </>
          ))}
        </div>

        <Divider variant="light" mobileVariant="primary" />
        <Subscribe />
        <Divider variant="light" mobileVariant="primary" />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
