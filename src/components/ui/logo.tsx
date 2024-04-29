import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Image
        alt="logo"
        src={'/assets/images/common/logo_clickJob_white.svg'}
        width={226}
        height={50}
        className="hidden lg:block"
      />
      <Image
        alt="logo"
        src={'/assets/images/common/logo_clickJob_white.svg'}
        width={150}
        height={50}
        className="block lg:hidden"
      />
    </>
  );
};

export default Logo;
