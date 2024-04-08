import logo from "@/../public/assets/logo.png";
import Image from "next/image";
import Navigation from "./navigation";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full px-12 py-8">
        <span className="flex-center">
          <Image alt="logo" src={logo} />
          {/* <Image alt="logo" src={"/assets/logo.png"} /> */}
        </span>
        <Navigation />
        <span className="hidden lg:flex gap-2">
          <Link className="px-4 py-2 font-medium border" href={"/register"}>
            Sign up
          </Link>
          <Link
            href={"#"}
            className="px-4 py-2 font-medium border bg-primary text-white"
          >
            <span>Continue</span>
          </Link>
        </span>
      </header>
    </>
  );
}
