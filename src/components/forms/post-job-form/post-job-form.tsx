'use client';
import SyncIcon from '@/components/svgs/sync';
import Button from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/text-area';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
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
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder={'Title'} className="max-w-full flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder={'City'} className="max-w-full flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder={'Employment'} className="max-w-full flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder={'Germany'} className="max-w-full flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder={'Language'} className="max-w-full flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
              <FormField
                control={form.control}
                name="remunerationRageStart"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder={'From'} className="max-w-full flex-1" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="remunerationRageEnd"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder={'To'} className="max-w-full flex-1" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder={'EUR'} className="max-w-full flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextArea placeholder={'Description'} className="max-w-full flex-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2 flex flex-col items-center justify-between gap-2 lg:flex-row">
            <p className="font-sans text-sm text-gray-500">
              We will use this information to develop a detailed job description, requirements list,
              and set of necessary skills.
            </p>
            <Button
              type="submit"
              text={isLoading ? 'Loading..' : 'Analyze'}
              variant="primary"
              size="full"
              leadingIcon={!isLoading && <SyncIcon />}
              className="justify-center lg:hidden"
            />
            <Button
              type="submit"
              text="Analyze"
              variant="primary"
              className="hidden items-center lg:flex"
              leadingIcon={!isLoading && <SyncIcon />}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}