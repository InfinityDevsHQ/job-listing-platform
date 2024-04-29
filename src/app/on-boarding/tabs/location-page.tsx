import LocationForm from '@/components/forms/on-boarding/location-form';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';

export default function LocationPage() {
  // Also add dropdowns later
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
        <LocationForm />
      </div>
    </div>
  );
}
