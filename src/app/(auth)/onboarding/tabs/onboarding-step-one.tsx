import { getQueryClient } from '@/app/utils/rq/react-query-client';
import LocationForm from '@/components/forms/onboarding/location-form';
import { GET_COUNTRIES_KEY } from '@/hooks/useCountries';
import { GET_LANGUAGES_KEY } from '@/hooks/useLnaguages';
import { getCountries } from '@/lib/countries';
import getLanguages from '@/lib/languages';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';

export default async function OnboardingStepOne() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_LANGUAGES_KEY],
    queryFn: getLanguages,
  });
  await queryClient.prefetchQuery({
    queryKey: [GET_COUNTRIES_KEY],
    queryFn: getCountries,
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
        <HydrationBoundary state={dehydrate(queryClient)}>
          <LocationForm />
        </HydrationBoundary>
      </div>
    </div>
  );
}
