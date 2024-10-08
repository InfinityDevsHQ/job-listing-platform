'use client';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/text-area';
import { postJobListing } from '@/lib/jobs';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Building,
  DollarSign,
  Languages,
  LoaderCircleIcon,
  MapPin,
  RefreshCcw,
  User,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof postJobFormSchema>) {
    const body = {
      title: values.jobTitle,
      city: values.city,
      category: '',
      country: values.country,
      employment_type: values.employment,
      description: values.description,
      job_requirements: '',
      welcomed_skills: '',
      language: values.language,
      is_dummy: true,
      short_description: '',
      skill_tags: [],
      work_location_type: '',
      remuneration_from: Number(values.remunerationRageStart),
      remuneration_to: Number(values.remunerationRageEnd),
      remuneration_currency: values.currency,
    };
    postJobListing(body)
      .then((data) => {
        router.push('/jobs/create/success');
      })
      .catch((error) => {
        toast.error(error.message || 'Uh oh! Something went wrong');
      });
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 rounded-lg border border-dark-background3 bg-dark-primary md:p-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          <div className="hidden items-center justify-center  lg:flex">
            <Image
              src={'/assets/post-jobs/post_poster.png'}
              alt="Location Poster"
              width={432}
              quality={100}
              height={408}
              className="h-auto w-auto"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4 rounded-custom-20 lg:col-span-1 lg:gap-8">
            <h3 className="font-sans text-base font-bold text-dark-nameWhite lg:text-2xl">
              Post a job listing
            </h3>
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder={'Title'} />
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
                    <Input
                      {...field}
                      leadingIcon={<Building className="size-4" />}
                      placeholder={'City'}
                    />
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
                    <Input
                      {...field}
                      placeholder={'Employment'}
                      leadingIcon={<User className="size-4" />}
                    />
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
                    <Input
                      {...field}
                      placeholder={'Germany'}
                      leadingIcon={<MapPin className="size-4" />}
                    />
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
                    <Input
                      {...field}
                      placeholder={'Language'}
                      leadingIcon={<Languages className="size-4" />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
              <FormField
                control={form.control}
                name="remunerationRageStart"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder={'From'}
                        leadingIcon={<ArrowRightFromLine className="size-4" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="remunerationRageEnd"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder={'To'}
                        leadingIcon={<ArrowLeftFromLine className="size-4" />}
                      />
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
                    <Input
                      {...field}
                      placeholder={'EUR'}
                      leadingIcon={<DollarSign className="size-4" />}
                    />
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
                    <TextArea
                      {...field}
                      placeholder={'Description'}
                      className="max-w-full flex-1 border-dark-background3 bg-dark-background text-dark-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2 flex flex-col items-center justify-between gap-2 lg:flex-row">
            <p className="font-sans text-sm text-dark-name lg:text-xl">
              We will use this information to develop a detailed job description, requirements list,
              and set of necessary skills.
            </p>
            <Button type="submit" variant={'primary'} className="self-stretch">
              {isLoading ? (
                <LoaderCircleIcon className="animate mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCcw className="mr-2 h-4 w-4" />
              )}
              Analyze
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
