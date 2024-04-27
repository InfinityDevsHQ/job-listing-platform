import Image from 'next/image';
import Link from 'next/link';
export default function FormsHeader() {
  return (
    <Link href={'/'} className="flex items-center justify-center">
      <Image
        alt="logo"
        src={'/assets/images/common/logo_clickJob_primary.svg'}
        width={226}
        height={50}
        className="hidden lg:block"
      />
      <Image
        alt="logo"
        src={'/assets/images/common/logo_clickJob_primary.svg'}
        width={118}
        height={30}
        className="block lg:hidden"
      />
    </Link>
  );
}
