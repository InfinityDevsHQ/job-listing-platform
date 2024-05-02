import LocationForm from '@/components/forms/onboarding/location-form';
import { getCountries } from '@/lib/countries';
import getLanguages from '@/lib/languages';
import { Country } from '@/types/types';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';

export default async function onboardingStepOne() {
  const FULFILLED = 'fulfilled';
  try {
    const [languagesResult, countriesResult] = await Promise.allSettled([
      getLanguages(),
      getCountries(),
    ]);

    console.log(languagesResult);
    const languages: string[] = languagesResult.status === FULFILLED ? languagesResult.value : [];
    const countries: Country[] = countriesResult.status === FULFILLED ? countriesResult.value : [];

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
        <div className="col-span-2 flex w-full flex-col justify-center gap-4 lg:col-span-1">
          <BoardingHeader title="1. Location" />
          <LocationForm languages={languages} countries={countries} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(`Something Went Wrong  ${error}`);
  }
}
