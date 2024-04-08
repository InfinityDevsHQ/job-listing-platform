import Image from "next/image";
import logo_white from "@/../public/assets/logo_white.png";
import FooterNav from "./footer-nav";
import Subscribe from "./subscribe";
import Copyright from "./copyright";
export default function Footer() {
  return (
    <footer className="p-8 bg-primary w-full hidden lg:grid grid-cols-2">
      <span className="mb-8 col-span-2">
        {/* <Image src={"/assets/logo_white.png"} alt="Logo" /> */}
        <Image src={logo_white} alt="logo" />
      </span>
      <p className="text-white font-medium mb-8">
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
