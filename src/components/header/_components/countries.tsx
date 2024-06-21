'use client';
import { useCountries } from '@/app/utils/rq/hooks/use-countries';
import { ALL_JOBS_KEY } from '@/app/utils/rq/hooks/use-jobs';
import { Button } from '@/components/ui/button-new';
import { useCountryStore } from '@/stores/countryStore/countryStore';
import { Country } from '@/types/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useQueryClient } from '@tanstack/react-query';
import { ChevronDownIcon, GlobeIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export const Countries = () => {
  const pathname = usePathname();
  const { data: countries } = useCountries();
  const queryClient = useQueryClient();
  const { selectedCountry, setSelectedCountry } = useCountryStore();

  const handleSelectCountry = async (country: Country) => {
    setSelectedCountry(country);
    await queryClient.invalidateQueries({
      queryKey: [ALL_JOBS_KEY],
    });
  };
  const companyHeaderRoutes = ['/recruit'];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="hidden lg:block">
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
  );
};
