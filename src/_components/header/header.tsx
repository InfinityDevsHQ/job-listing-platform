import Image from "next/image";
import Link from "next/link";
import AppNavigation from "./app-navigation";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full px-4 py-2 lg:px-16 lg:py-8 bg-white">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/assets/images/common/logo_clickJob_primary.svg"}
            width={226}
            height={50}
            className="hidden lg:block"
          />
          <Image
            alt="logo"
            src={"/assets/images/common/logo_clickJob_primary.svg"}
            width={118}
            height={30}
            className="block lg:hidden"
          />
        </Link>
        <AppNavigation />
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
