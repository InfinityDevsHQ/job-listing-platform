'use client';
import SyncIcon from '@/components/svgs/sync';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/text-area';
import usePostJobDataStore from '@/stores/job-post-form-data-store';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const postJobFormSchema = z.object({
  jobTitle: z.string().min(2, { message: 'Job title must be at least 2 characters long' }),
  city: z.string().min(2, { message: 'City name must be at least 2 characters long' }),
  employment: z.string().min(2, { message: 'Employment type must be at least 2 characters long' }),
  country: z.string().min(2, { message: 'Country name must be at least 2 characters long' }),
  language: z.string().min(2, { message: 'Language name must be at least 2 characters long' }),
  remunerationRageStart: z
    .string()
    .min(1, { message: 'Remuneration range start must be specified' }),
  remunerationRageEnd: z.string().min(1, { message: 'Remuneration range end must be specified' }),
  currency: z.string().min(2, { message: 'Currency name must be at least 2 characters long' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters long' }),
});
export default function PostJobForm() {
  const form = useForm<z.infer<typeof postJobFormSchema>>({
    resolver: zodResolver(postJobFormSchema),
    defaultValues: {
      jobTitle: '',
      city: '',
      employment: '',
      country: '',
      language: '',
      remunerationRageStart: '',
      remunerationRageEnd: '',
      currency: '',
      description: '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof postJobFormSchema>) {
    console.log(values);
  }
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

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4  rounded-md border border-gray-200 bg-gray-50 p-4 lg:gap-8 lg:p-8"
        onSubmit={form.handleSubmit(onSubmit)}
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
              leadingIcon={<SyncIcon />}
              className="justify-center lg:hidden"
            />
            <Button
              type="submit"
              text="Analyze"
              variant="primary"
              className="hidden items-center lg:flex"
              leadingIcon={<SyncIcon />}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
