'use client';
import Pagination from '@/components/ui/pagination';
import Pill from '@/components/ui/pill';
import { useQueryParams } from '@/hooks/useQueryParams';
import useTermsAndConditionsData from '@/stores/terms-and-conditions-data-store';
import { termsAndConditionsFormSchema } from '@/types/schemas/terms-and-conditions-schema';
import Link from 'next/link';
import { useState } from 'react';

export default function TermsAndConditionsForm() {
  const { termsData, setTermsData } = useTermsAndConditionsData();
  const [errors, setErrors] = useState('');
  const addQueryParams = useQueryParams();
  function handleSubmit(e) {
    e.preventDefault();
    const validate = termsAndConditionsFormSchema.safeParse(termsData);
    if (validate.success) {
      console.log('DatA Validated', validate.data);
      setErrors('');
    } else {
      setErrors('Please Agree to the terns abd conditions');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
      <h3 className="mt-4 font-sans text-base font-bold text-mute-1 lg:mt-8 lg:text-lg lg:font-semibold">
        Terms And Conditions
      </h3>
      <Pill
        active={termsData.termsAgreed}
        setValue={() => setTermsData({ ...termsData, termsAgreed: !termsData.termsAgreed })}
        helpText={errors && errors}
      >
        <p
          className={`font-sans text-xxs lg:text-base ${
            termsData.termsAgreed ? 'text-white' : 'text-mute-1'
          }`}
        >
          <span>I agree to</span>{' '}
          <Link href={'/tos'} className="underline">
            Terms and Conditions
          </Link>
        </p>
      </Pill>
      <Pagination handleBack={() => addQueryParams('step', 'contact')} />
    </form>
  );
}
