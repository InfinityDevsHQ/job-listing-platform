import Image from 'next/image';

const MobileNav = () => {
  return (
    <div className="flex items-center gap-3 lg:hidden">
      <button className="relative">
        <Image alt="logo" src={'/assets/icons/envelope.svg'} width={19} height={15} />
        <span className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-primary-800"></span>
      </button>
      <button className="relative ">
        <Image alt="logo" src={'/assets/icons/bell.svg'} width={25} height={26} />
        <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-primary-800"></span>
      </button>
      <button className="relative ">
        <Image alt="logo" src={'/assets/icons/bars.svg'} width={25} height={255} />
      </button>
    </div>
  );
};

export default MobileNav;
