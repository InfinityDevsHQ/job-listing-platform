'use client';
import usePageStore from '@/stores/pageStore/store';
import Image from 'next/image';

const Logo = () => {
  const currentUserRole = usePageStore((state) => state.currentUserRole);
  return (
    <>
      <Image
        alt="logo"
        src={
          currentUserRole === 'candidate'
            ? '/assets/images/common/logo_clickJob_primary_white.svg'
            : '/assets/images/common/logo_clickJob_secondary_white.svg'
        }
        width={226}
        height={50}
        className="hidden lg:block"
      />
      <Image
        alt="logo"
        src={
          currentUserRole === 'candidate'
            ? '/assets/images/common/mobile_logo_clickJob_primary.svg'
            : '/assets/images/common/mobile_logo_clickJob_secondary.svg'
        }
        width={100}
        height={30}
        className="block lg:hidden"
      />
    </>
  );
};

export default Logo;
