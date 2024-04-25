import Image from 'next/image';
import Link from 'next/link';
type PosterProps = {
  imgUrl: string;
  heading?: string;
  text?: string;
};
const Poster = ({ imgUrl, heading, text }: PosterProps) => {
  return (
    <div
      className="relative hidden h-screen items-center justify-center lg:flex"
      style={{
        background: "url('/assets/images/auth/auth_background.png') 100% 100%",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <Link href={'/'} className="flex items-center justify-center">
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
            width={118}
            height={30}
            className="block lg:hidden"
          />
        </Link>
        <Image src={imgUrl} alt="poster" width={434} height={335} />
      </div>
    </div>
  );
};

export default Poster;
