'use client';
import LocationForm from '@/components/forms/onboarding/location-form';
import { getCountries } from '@/lib/countries';
import getLanguages from '@/lib/languages';
import { Country } from '@/types/types';
import { HydrationBoundary, dehydrate, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';

export default function OnboardingStepOne() {
  // TODO: Make custom hooks for fetching data, and prefetch them
  const { data: countries } = useQuery<Country[], Error>({
    queryKey: ['languages'],
    queryFn: getCountries,
  });
  const { data: languages } = useQuery<string[], Error>({
    queryKey: ['languages'],
    queryFn: getLanguages,
  });
  return (
    <div className="grid w-full grid-cols-2">
      <div className="col-span-2 hidden items-center justify-center lg:col-span-1 lg:flex">
        <Image
          src={'/assets/boarding/location_poster.png'}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="col-span-2 flex w-full flex-col gap-4 lg:col-span-1">
        <BoardingHeader title="1. Location" />
        <HydrationBoundary state={dehydrate}>
          <LocationForm languages={languages} countries={countries} />
        </HydrationBoundary>
      </div>
    </div>
  );
}
