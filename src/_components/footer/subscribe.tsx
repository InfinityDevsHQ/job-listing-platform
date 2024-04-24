'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useState } from 'react';

export default function Subscribe() {
  const [mail, setMail] = useState('');
  function handleSubmit() {
    console.log('Here:', mail);
  }
  return (
    <>
      <div className="col-span-2 mb-8 flex flex-col gap-5 text-center lg:col-span-1 lg:gap-8 lg:text-left">
        <h2 className="lg:text-mid-1 lg:leading-12 lg:tracking-tightest text-base font-bold text-white">
          Subscribe to our newsletter
        </h2>
        <p className="section-description text-white">
          Mauris pharetra imperdiet iaculis elementum nulla. Tellus morb
        </p>
      </div>
      <form
        className="col-span-2  flex justify-center gap-5 self-center lg:col-span-1 lg:gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          containerClassName="self-stretch h-full"
          className="placeholder:text-gray-1 border-gray-1 !w-full flex-1 self-stretch rounded-lg border bg-white bg-opacity-25 px-1 py-1.5 font-semibold lg:border-2 lg:border-gray-300 lg:bg-opacity-100 lg:py-2 lg:pl-3 lg:pr-14 lg:placeholder:text-gray-600"
          name="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Button type="submit" text="Subscribe" variant={'primary'} onClick={() => {}} />
      </form>
      <span className="col-span-2 mb-8 border-b border-neutral-50" />
    </>
  );
}
