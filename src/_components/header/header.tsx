"use client"

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation"

import AppNavigation from "./app-navigation";
import Button from "@/components/ui/button";

import LockIcon from "@/components/svgs/lock";
import ArrowRightIcon from "@/components/svgs/arrow-right";

export default function Header() {
  const router = useRouter()
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
          <Button
            text="Login"
            variant={"outline-primary"}
            trailingIcon={<LockIcon />}
            onClick={() => router.push('/login')}
          />
          <Button
            text="Register"
            trailingIcon={<ArrowRightIcon />}
            variant={"primary"}
            onClick={() => router.push('/register')}
          />
        </span>
      </header>
    </>
  );
}
