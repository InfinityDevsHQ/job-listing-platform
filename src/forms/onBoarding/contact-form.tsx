'use client';
import CompanyGithubSecond from '@/components/svgs/company-github-second';
import CompanyPhone from '@/components/svgs/company-phone';
import TwitterIcon from '@/components/svgs/twitter';
import Input from '@/components/ui/input';
import Pagination from '@/components/ui/pagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import useOnBoardingContactData from '@/stores/on-boarding-contact-from-store';
import { onBoardingContactFormSchema } from '@/types/schemas/onboarding-contact-form-schema';
import { useState } from 'react';
import { ZodIssue } from 'zod';

export default function ContactForm() {
  const { onBoardingContactData, setOnBoardingContactData } = useOnBoardingContactData();
  const addQueryParams = useQueryParams();
  const [errors, setErrors] = useState({
    phoneNumber: '',
    linkedin: '',
    twitter: '',
    github: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' });
    setOnBoardingContactData({ ...onBoardingContactData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = onBoardingContactFormSchema.safeParse(onBoardingContactData);
    if (validate.success) {
      console.log('DatA Validated', validate.data);
      addQueryParams('step', 'terms-and-conditions');
    } else {
      console.warn('Invalid data type', validate.error.errors);
      const validationErrors = validate.error.errors;
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      setErrors({ ...errors, ...formattedErrors });
      console.log(formattedErrors);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 lg:gap-8">
        <Input
          variant={'primary'}
          name="phoneNumber"
          value={onBoardingContactData.phoneNumber}
          helpText={errors.phoneNumber}
          type="text"
          placeholder="Phone Number"
          onChange={handleChange}
          leadingIcon={<CompanyPhone width={16} height={16} />}
        />
        <h3 className="text-mute font-sans text-base font-bold lg:text-lg lg:font-semibold">
          Social Networks
        </h3>
        <Input
          variant={'primary'}
          name="linkedin"
          value={onBoardingContactData.linkedin}
          helpText={errors.linkedin}
          onChange={handleChange}
          type="text"
          placeholder="Linkedin"
        />
        <Input
          variant={'primary'}
          name="twitter"
          value={onBoardingContactData.twitter}
          helpText={errors.twitter}
          onChange={handleChange}
          type="text"
          placeholder="X"
          leadingIcon={<TwitterIcon width={16} height={16} />}
        />
        <Input
          variant={'primary'}
          name="github"
          value={onBoardingContactData.github}
          helpText={errors.github}
          onChange={handleChange}
          type="text"
          placeholder="github"
          leadingIcon={<CompanyGithubSecond width={16} height={16} />}
        />
        <Pagination
          handleBack={() => addQueryParams('step', 'filter-jobs')}
          skip
          handleNext={handleSubmit}
        />
      </div>
    </form>
  );
}
