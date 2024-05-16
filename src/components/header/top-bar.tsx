'use client';
import { ALL_JOBS_KEY } from '@/app/utils/rq/hooks/use-jobs';
import Navbar from '@/components/header/_components/navbar';
import { Button } from '@/components/ui/button-new';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getCountries } from '@/lib/countries';
import { useCountryStore } from '@/stores/countryStore/countryStore';
import { Country } from '@/types/types';
import { useQueryClient } from '@tanstack/react-query';
import { ArrowRight, ChevronDownIcon, GlobeIcon, LockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'sonner';

const Header = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const pathname = usePathname();
  const { selectedCountry, setSelectedCountry } = useCountryStore();

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        toast(error.message || 'Uh oh! Something went wrong');
      });
  }, []);
  const queryClient = useQueryClient();

  const handleSelectCountry = async (country: Country) => {
    setSelectedCountry(country);
    queryClient.invalidateQueries({
      queryKey: [ALL_JOBS_KEY],
    });
  };

  const noHeaderRoutes = ['/login', '/register'];

  const companyHeaderRoutes = ['/recruit'];

  const publicNavLinks = [{ text: 'For Companies', href: '/recruit' }];

  if (noHeaderRoutes.includes(pathname)) {
    return <></>;
  }

  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3.5 lg:px-16 lg:py-8">
        <Link href={'/'}>
          <Image
            alt="logo"
            src={
              companyHeaderRoutes.includes(pathname)
                ? '/assets/images/common/logo_clickJob_secondary.svg'
                : '/assets/images/common/logo_clickJob_primary.svg'
            }
            width={160}
            height={40}
            className="h-7 w-28 lg:h-10 lg:w-40"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden gap-4 lg:flex">
            <Navbar
              links={publicNavLinks}
              activeLinkClassName={
                companyHeaderRoutes.includes(pathname) ? 'text-secondary' : 'text-neutral-950'
              }
            />
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant={companyHeaderRoutes.includes(pathname) ? 'outline' : 'outline'}>
                  {selectedCountry?.flag_icon ? (
                    <>
                      <Image
                        src={selectedCountry?.flag_icon}
                        alt="test"
                        width={16}
                        height={16}
                        className="mr-2 h-4 w-4"
                      />
                    </>
                  ) : (
                    <GlobeIcon className="mr-2 h-4 w-4" />
                  )}
                  {selectedCountry?.name ? selectedCountry?.name : 'Country'}
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 bg-white">
                {countries?.map((country, index) => (
                  <Fragment key={index}>
                    {index === countries.length - 1 && <DropdownMenuSeparator />}
                    <DropdownMenuItem onSelect={() => handleSelectCountry(country)}>
                      <span className="flex items-center gap-2">
                        <Image src={country.flag_icon} alt="test" width={20} height={20} />
                        <span className="-gap-1 flex flex-col">
                          <span className="font-medium capitalize">{country.name}</span>
                        </span>
                      </span>
                    </DropdownMenuItem>
                  </Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href={'/login'}>
              <Button variant={companyHeaderRoutes.includes(pathname) ? 'secondary' : 'default'}>
                Login
                <LockIcon className="ml-2 h-4 w-4" size={16} />
              </Button>
            </Link>
            <Link href={'/register'}>
              <Button variant={companyHeaderRoutes.includes(pathname) ? 'secondary' : 'default'}>
                Register
                <ArrowRight className="ml-2 h-4 w-4" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
