import Image from 'next/image';
import Link from 'next/link';
import Logo from './ui/logo';
type PosterProps = {
  imgUrl: string;
  bgUrl: string;
};
const Poster = ({ imgUrl, bgUrl }: PosterProps) => {
  return (
    <div
      className="relative hidden h-screen items-center justify-center lg:flex"
      style={{
        background: `url('${bgUrl}') 100% 100%`,
      }}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <Link href={'/'} className="flex items-center justify-center">
          <Logo />
        </Link>
        <Image src={imgUrl} alt="poster" width={434} height={335} />
      </div>
    </div>
  );
};

export default Poster;
