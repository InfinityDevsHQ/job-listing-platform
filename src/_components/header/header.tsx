'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

import Button from '@/components/ui/button';
import AppNavigation from './app-navigation';

import ArrowRightIcon from '@/components/svgs/arrow-right';
import LockIcon from '@/components/svgs/lock';
import { ChevronsUpDown } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="flex w-full items-center justify-between bg-white px-4 py-2 lg:px-16 lg:py-8">
        <Link href={'/'}>
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
        <div className="flex items-center gap-4">
          <AppNavigation />

          <div className="hidden gap-4 lg:flex">
            <Button
              variant="outline-primary"
              text="Country"
              trailingIcon={<ChevronsUpDown className="h-4 w-4" />}
            />
            <Button
              text="Login"
              variant={'primary'}
              trailingIcon={<LockIcon />}
              onClick={() => router.push('/login')}
            />
            <Button
              text="Register"
              trailingIcon={<ArrowRightIcon />}
              variant={'primary'}
              onClick={() => router.push('/register')}
            />
          </div>
        </div>
      </header>
    </>
  );
}
