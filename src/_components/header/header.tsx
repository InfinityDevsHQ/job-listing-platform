import Image from "next/image";
import Navigation from "./navigation";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full px-4 py-2 lg:px-16 lg:py-8">
        <span className="flex-center">
          <Image
            alt="logo"
            src={"/assets/logo.png"}
            width={208}
            height={50}
            className="hidden lg:block"
          />
          <Image
            alt="logo"
            src={"/assets/logo.png"}
            width={30}
            height={30}
            className="lg:hidden"
          />
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
