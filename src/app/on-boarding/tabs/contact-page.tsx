import ContactForm from '@/components/forms/on-boarding/contact-form';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';
export default function ContactPage() {
  return (
    <div className="grid w-full grid-cols-2">
      <div className="col-span-2 hidden w-full items-center justify-center lg:col-span-1 lg:flex">
        <Image
          src={'/assets/boarding/contact_poster.png'}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="col-span-2 flex w-full flex-col justify-center gap-4 lg:col-span-1">
        <BoardingHeader
          title="4. Contact"
          description="Share you contact info, get noticed by employers!"
        />
        <ContactForm />
      </div>
    </div>
  );
}
