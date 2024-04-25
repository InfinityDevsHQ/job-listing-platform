'use client';
import Button from '@/components/svgs/ui/button';
import Input from '@/components/svgs/ui/input';
import TextArea from '@/components/svgs/ui/text-area';
import usePostJobDataStore from '@/stores/job-post-form-data-store';
import { postJobFormSchema } from '@/types/schemas/post-job-form-data-schema';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ZodIssue } from 'zod';
export default function PostJobForm() {
  const { postJobData, setPostJobData } = usePostJobDataStore();
  const [errors, setErrors] = useState({
    jobTitle: '',
    city: '',
    employment: '',
    country: '',
    language: '',
    remunerationRageStart: '',
    remunerationRageEnd: '',
    currency: '',
    description: '',
  });
  const router = useRouter();
  function handleChange(e) {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' });
    setPostJobData({ ...postJobData, [name]: value });
    console.log(postJobData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validate = postJobFormSchema.safeParse(postJobData);
    if (validate.success) {
      console.log('DatA Validated', validate.data);
      router.push('/job-post-success');
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4  rounded-md border border-gray-200 bg-gray-50 p-4 lg:gap-8 lg:p-8"
    >
      <div className="grid grid-cols-2 gap-4 lg:gap-8">
        <div className="hidden items-center justify-center  lg:flex">
          <Image
            src={'/assets/boarding/location_poster.png'}
            alt="Location Poster"
            width={580}
            height={580}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-4 rounded-custom-20 lg:col-span-1 lg:gap-8">
          <h3 className="font-sans text-base font-bold text-gray-700">Post a job listing</h3>
          <Input
            type="text"
            id="jobTitle"
            name={'jobTitle'}
            value={postJobData.jobTitle}
            placeholder={'Title'}
            helpText={errors.jobTitle && errors.jobTitle}
            className="max-w-full flex-1"
            containerClassName="flex-1"
            onChange={handleChange}
          />
          <Input
            type="text"
            id="city"
            name={'city'}
            value={postJobData.city}
            placeholder={'City'}
            helpText={errors.city && errors.city}
            className="max-w-full flex-1"
            containerClassName="flex-1"
            onChange={handleChange}
          />
          <Input
            type="text"
            id="employment"
            name={'employment'}
            value={postJobData.employment}
            placeholder={'Employment'}
            helpText={errors.employment && errors.employment}
            className="max-w-full flex-1"
            containerClassName="flex-1"
            onChange={handleChange}
          />
          <Input
            type="text"
            id="country"
            name={'country'}
            value={postJobData.country}
            placeholder={'Germany'}
            helpText={errors.country && errors.country}
            className="max-w-full flex-1"
            containerClassName="flex-1"
            onChange={handleChange}
          />
          <Input
            type="text"
            id="language"
            name={'language'}
            value={postJobData.language}
            placeholder={'Language'}
            helpText={errors.language && errors.language}
            className="max-w-full flex-1"
            containerClassName="flex-1"
            onChange={handleChange}
          />
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
            <Input
              type="text"
              id="remunerationRageStart"
              name={'remunerationRageStart'}
              value={postJobData.remunerationRageStart}
              placeholder={'From'}
              helpText={errors.remunerationRageStart && errors.remunerationRageStart}
              className="max-w-full flex-1"
              containerClassName="flex-1"
              onChange={handleChange}
            />
            <Input
              type="text"
              id="remunerationRageEnd"
              name={'remunerationRageEnd'}
              value={postJobData.remunerationRageEnd}
              placeholder={'To'}
              helpText={errors.remunerationRageEnd && errors.remunerationRageEnd}
              className="max-w-full flex-1"
              containerClassName="flex-1"
              onChange={handleChange}
            />
          </div>

          <Input
            type="text"
            id="currency"
            name={'currency'}
            value={postJobData.currency}
            placeholder={'EUR'}
            helpText={errors.currency && errors.currency}
            className="max-w-full flex-1"
            containerClassName="flex-1"
            onChange={handleChange}
          />
          <TextArea
            type="text"
            id="description"
            name={'description'}
            value={postJobData.description}
            placeholder={'Description'}
            helpText={errors.description && errors.description}
            className="max-w-full flex-1"
            containerClassName="flex-1"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-between gap-2 lg:flex-row">
          <p className="font-sans text-sm text-gray-500">
            We will use this information to develop a detailed job description, requirements list,
            and set of necessary skills.
          </p>
          <Button
            type="submit"
            text="Analyze"
            variant="primary"
            size="full"
            className="lg:hidden"
          />
          <Button type="submit" text="Analyze" variant="primary" className="hidden lg:flex" />
        </div>
      </div>
    </form>
  );
}
