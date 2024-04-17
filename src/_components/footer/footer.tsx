import Image from "next/image";
import FooterNav from "./footer-nav";
import Subscribe from "./subscribe";
import Copyright from "./copyright";
export default function Footer() {
  return (
    <footer className="p-high lg:p-8 bg-primary-900 w-full grid grid-cols-2">
      <span className="mb-8 col-span-2">
        <Image
          src={"/assets/logo_white.png"}
          alt="Logo"
          className="hidden lg:block"
          width={208}
          height={50}
        />
        <Image
          src={"/assets/al_fugu_logo.png"}
          alt="Logo"
          className="lg:hidden mx-auto"
          width={208}
          height={50}
        />
      </span>
      <p className="text-white text-xs lg:text-base font-medium mb-8 col-span-2 lg:col-span-1 text-center lg:text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi
        totam tempora inventore laborum nihil deserunt voluptate quia? Itaque
        dolore exercitationem iste sapiente natus delectus hic in amet veritatis
        est!
      </p>
      <FooterNav />
      <Subscribe />
      <Copyright />
    </footer>
  );
}
