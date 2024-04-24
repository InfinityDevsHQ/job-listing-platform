import Image from 'next/image';
import Copyright from './copyright';
import FooterNav from './footer-nav';
import Subscribe from './subscribe';
export default function Footer() {
  return (
    <footer className="grid w-full grid-cols-2 bg-primary-900 p-8">
      <span className="col-span-2 mb-8">
        <Image
          src={'/assets/logo_white.png'}
          alt="Logo"
          className="hidden lg:block"
          width={208}
          height={50}
        />
        <Image
          src={'/assets/al_fugu_logo.png'}
          alt="Logo"
          className="mx-auto lg:hidden"
          width={208}
          height={50}
        />
      </span>
      <p className="col-span-2 mb-8 text-center text-xs font-medium text-white lg:col-span-1 lg:text-left lg:text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi totam tempora inventore
        laborum nihil deserunt voluptate quia? Itaque dolore exercitationem iste sapiente natus
        delectus hic in amet veritatis est!
      </p>
      <FooterNav />
      <Subscribe />
      <Copyright />
    </footer>
  );
}
