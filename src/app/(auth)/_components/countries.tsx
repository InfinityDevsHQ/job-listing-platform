import { useCountries } from '@/app/utils/rq/hooks/use-countries';
import { ALL_JOBS_KEY } from '@/app/utils/rq/hooks/use-jobs';
import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { useCountryStore } from '@/stores/countryStore/countryStore';
import { Country } from '@/types/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';

export const Countries = () => {
  const queryClient = getQueryClient();

  const { data: countries } = useCountries();

  const { selectedCountry, setSelectedCountry } = useCountryStore();

  const handleSelectCountry = async (country: Country) => {
    setSelectedCountry(country);
    queryClient.invalidateQueries({
      queryKey: [ALL_JOBS_KEY],
    });
  };
  return (
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
