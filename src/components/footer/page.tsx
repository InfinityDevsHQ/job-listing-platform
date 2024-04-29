'use client';
import Copyright from '@/components/footer/_components/copyrights';
import Navigation from '@/components/footer/_components/navigation';
import Subscribe from '@/components/forms/subscribe-form/subscribe-form';
import Divider from '@/components/ui/divider';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const noFooterRoutes = ['/login', '/register'];

  if (noFooterRoutes?.includes(pathname)) {
    return <></>;
  }

  return (
    <footer className="flex w-full flex-col gap-4 bg-primary-900 p-8 lg:gap-8">
      <Link href={'/'}>
        <Image
          src={'/assets/images/common/logo_clickJob_white.svg'}
          alt="Logo"
          className="hidden lg:block"
          width={226}
          height={50}
        />
        <Image
          src={'/assets/images/common/logo_clickJob_white.svg'}
          alt="Logo"
          className="mx-auto lg:hidden"
          width={118}
          height={30}
        />
      </Link>
      <p className="text-center text-sm text-white lg:max-w-3xl lg:text-left lg:text-base">
        Mauris pharetra imperdiet iaculis elementum nulla. Tellus morbi nunc non vitae enim amet.
        Faucibus eleifend sit leo varius suspendisse.
      </p>
      <Navigation />
      <Divider variant="light" />
      <Subscribe />
      <Divider variant="light" />
      <Copyright />
    </footer>
  );
};

export default Footer;
