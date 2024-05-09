import { Mail, Smartphone } from 'lucide-react';
import Image from 'next/image';

const Assister = () => {
  return (
    <section className="flex flex-col items-center gap-4 rounded-md border border-primary-950 bg-neutral-950 p-8 lg:flex-row lg:items-center lg:gap-12">
      <Image
        src={'/assets/avatar.png'}
        alt="Image"
        width={150}
        height={150}
        className="rounded-full ring-2 ring-white lg:hidden"
      />
      <Image
        src={'/assets/avatar.png'}
        alt="Image"
        width={243}
        height={243}
        className="hidden rounded-full ring-2 ring-white lg:block"
      />
      <div className="flex flex-col gap-4 lg:gap-8">
        <h5 className="text-center text-xl font-bold text-white lg:text-left lg:text-5xl">
          We&apos;re happy to help you.
        </h5>
        <p className="text-center text-base text-white lg:text-left lg:text-2xl">
          Take a look at our Frequently Asked Questions or contact our Anet, who will be glad to
          assist you:
        </p>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center text-xl text-white lg:text-lg">
            <Mail className="mr-2" />
            <p>info@fugu.com</p>
          </div>
          <div className="flex items-center text-xl text-white lg:text-lg">
            <Smartphone className="mr-2" />
            <p>+123 456 789456</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Assister;
