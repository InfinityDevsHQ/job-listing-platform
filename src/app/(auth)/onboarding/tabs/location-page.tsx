import LocationForm from '@/components/forms/onboarding/location-form';
import { getCountries } from '@/lib/countries';
import getLanguages from '@/lib/languages';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';

export default async function LocationPage() {
  const languages = await getLanguages();
  const countries = await getCountries();
  console.log(countries);
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
        <LocationForm languages={languages} />
      </div>
    </div>
  );
}
