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
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
        <h2 className="text-xl font-semibold text-gray-50 lg:text-2xl">
          Sign Up for Our Newsletter
        </h2>
        <form
          className="flex flex-shrink-0 items-center justify-center gap-2 lg:max-w-xl"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Email"
            name="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Button type="submit" text="Subscribe" variant={'primary'}/>
        </form>
      </div>
    </>
  );
}
