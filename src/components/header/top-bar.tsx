'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname, useRouter } from 'next/navigation';

import Navbar from '@/components/header/_components/navbar';
import Button from '@/components/ui/button';

import ArrowRightIcon from '@/components/svgs/arrow-right';
import LockIcon from '@/components/svgs/lock';

import { cn } from '@/lib/utils';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteToken } from '@/lib/auth-token';
import { getCountries } from '@/lib/countries';
import { Country } from '@/types/types';
import { BellIcon, ChevronDown, ChevronsUpDown, MailIcon } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'sonner';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);

  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        toast(error.message || 'Uh oh! Something went wrong');
      });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logout = async () => {
    await deleteToken();
    router.push('/login');
    console.log('deleteToken');
  };

  const handleSelectCountry = async (countryId: number, name: string) => {
    console.log('handleSelectCountry ==> countryId ', countryId); // TODO: handle change country selection
  };

  const noHeaderRoutes = ['/login', '/register'];

  if (noHeaderRoutes?.includes(pathname)) {
    return <></>;
  }

  // TODO: fix/show auth protected header in proper way
  if (!isAuthenticated) {
    return (
      <>
        <header className="flex w-full items-center justify-between bg-white px-4 py-2 lg:px-16 lg:py-8">
          <Link href={'/'}>
            <Image
              alt="logo"
              src={'/assets/images/common/logo_clickJob_primary.svg'}
              width={206}
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
            <Navbar />

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

  return (
    <>
      <header className="flex w-full items-center justify-between bg-white px-4 py-2 lg:px-16 lg:py-4">
        <Link href={'/'}>
          <Image
            alt="logo"
            src={'/assets/images/common/logo_clickJob_primary.svg'}
            width={160}
            height={40}
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
          <Link
            href={'/companies'}
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
          >
            Companies
          </Link>
          <Link
            href={'/inbox'}
            className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
          >
            <span>Inbox</span>
            <span className="absolute right-1 top-1 flex h-3 w-3 ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-900 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-900"></span>
            </span>
          </Link>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="group relative inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
              >
                Notifications
                <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 bg-white pb-0">
              <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
                <span className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <BellIcon className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                  <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
                <span className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <BellIcon className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                  <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
                <span className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <BellIcon className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                  <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
                <span className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <BellIcon className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                  <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
                <span className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <BellIcon className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                  <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
              >
                <span>Country</span>
                <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 bg-white">
              {countries?.map((country, index) => (
                <Fragment key={index}>
                  {index === countries.length - 1 && <DropdownMenuSeparator />}
                  <DropdownMenuItem onSelect={() => handleSelectCountry(country.id, country.name)}>
                    <span className="flex items-center gap-2">
                      <Image
                        src={`http://devel.clickjob.ai/${country.flag_icon}`}
                        alt="test"
                        width={20}
                        height={20}
                      />
                      <span className="-gap-1 flex flex-col">
                        <span className="font-medium capitalize">{country.name}</span>
                      </span>
                    </span>
                  </DropdownMenuItem>
                </Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium">
                <span>Profile</span>
                <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 bg-white">
              <DropdownMenuItem>
                <Link href="/profile" legacyBehavior passHref>
                  <span className="flex items-center gap-2">
                    <Image
                      src={'/assets/candidates/candidate.png'}
                      alt="test"
                      width={40}
                      height={40}
                      className={cn('rounded-full border-2 border-gray-200', {
                        'border-green-500': true, //TODO: add user online state
                      })}
                    />
                    <span className="-gap-1 flex flex-col">
                      <span className="font-medium">Muhammad S.</span>
                      <span className="text-xs">Software Engineer</span>
                    </span>
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href="/my-applications" legacyBehavior passHref>
                <DropdownMenuItem disabled>My Applications</DropdownMenuItem>
              </Link>
              <Link href="/job-offers" legacyBehavior passHref>
                <DropdownMenuItem disabled>Job Offers</DropdownMenuItem>
              </Link>
              <Link href="/jobs-filter" legacyBehavior passHref>
                <DropdownMenuItem disabled>Jobs Filter</DropdownMenuItem>
              </Link>
              <Link href="/settings" legacyBehavior passHref>
                <DropdownMenuItem disabled>Settings</DropdownMenuItem>
              </Link>
              <Link href="/email-notifications" legacyBehavior passHref>
                <DropdownMenuItem disabled>Email Notifications</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-red-50 focus:text-red-900">
                <button onClick={() => logout()}>Log out</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
};

export default Header;
