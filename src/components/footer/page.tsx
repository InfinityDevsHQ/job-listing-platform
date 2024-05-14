'use client';
import Copyright from '@/components/footer/_components/copyrights';
import Navigation from '@/components/footer/_components/navigation';
import Subscribe from '@/components/forms/subscribe-form/subscribe-form';
import Divider from '@/components/ui/divider';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const noFooterRoutes = ['/login', '/register', '/inbox'];

  const companyHeaderRoutes = ['/recruit'];

  if (noFooterRoutes?.includes(pathname)) {
    return <></>;
  }

  return (
    <footer>
      <div className={cn('mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-8 lg:gap-8')}>
        <Link href={'/'}>
          <Image
            src={
              companyHeaderRoutes.includes(pathname)
                ? '/assets/images/common/logo_clickJob_secondary.svg'
                : '/assets/images/common/logo_clickJob_primary.svg'
            }
            alt="Logo"
            className="mx-auto h-7 w-28 lg:mx-0 lg:h-12 lg:w-56"
            width={226}
            height={50}
          />
        </Link>
        <p className="text-center text-sm lg:max-w-3xl lg:text-left lg:text-base">
          Mauris pharetra imperdiet iaculis elementum nulla. Tellus morbi nunc non vitae enim amet.
          Faucibus eleifend sit leo varius suspendisse.
        </p>
        <Navigation />
        <Divider variant="light" mobileVariant="primary" />
        <Subscribe />
        <Divider variant="light" mobileVariant="primary" />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
