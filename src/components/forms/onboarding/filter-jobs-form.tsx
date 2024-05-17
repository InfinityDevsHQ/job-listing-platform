'use client';
import Pagination from '@/app/(auth)/onboarding/_components/pagination';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { useQueryParams } from '@/hooks/useQueryParams';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const jobFilterSchema = z.object({
  full_time: z.boolean(),
  part_time: z.boolean(),
  freelance: z.boolean(),
  volunteer: z.boolean(),
  on_site: z.boolean(),
  remote: z.boolean(),
  hybrid: z.boolean(),
});

export default function FilterJobsForm() {
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const addQueryParams = useQueryParams();
  const form = useForm({
    resolver: zodResolver(jobFilterSchema),
    defaultValues: {
      full_time: false,
      part_time: false,
      freelance: false,
      volunteer: false,
      on_site: false,
      remote: false,
      hybrid: false,
    },
  });
  async function onSubmit(values: z.infer<typeof jobFilterSchema>) {
    // Updating Dat in the store
    console.log(values);
    setOnboardingData({
      ...onboardingData,
      full_time: values.full_time,
      part_time: values.part_time,
      freelance: values.freelance,
      volunteer: values.volunteer,
      remote: values.remote,
      on_site: values.on_site,
      hybrid: values.hybrid,
    });
    console.log(onboardingData);
    addQueryParams('step', 'contact');
  }
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className="text-mute font-sans text-base font-bold lg:text-lg lg:font-semibold">
          Employment Type
        </h3>
        <div className="flex gap-4 lg:gap-8">
          <FormField
            name="full_time"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex gap-4 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      {...field}
                      value={field.value === false ? 'false' : 'true'}
                      id="full_time"
                      onClick={(e) => field.onChange(field.value === false ? true : false)}
                    />
                    <Label htmlFor="full_time">Full-Time</Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="part_time"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex gap-4 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      {...field}
                      value={field.value === false ? 'false' : 'true'}
                      id="part_time"
                      onClick={(e) => field.onChange(field.value === false ? true : false)}
                    />
                    <Label htmlFor="part_time">Part-Time</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="freelance"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex gap-4 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      {...field}
                      value={field.value === false ? 'false' : 'true'}
                      id="freelance"
                      onClick={(e) => field.onChange(field.value === false ? true : false)}
                    />
                    <Label htmlFor="freelance">FreeLance</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="volunteer"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex gap-4 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      {...field}
                      value={field.value === false ? 'false' : 'true'}
                      id="volunteer"
                      onClick={(e) => field.onChange(field.value === false ? true : false)}
                    />
                    <Label htmlFor="volunteer">Volunteer</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <h3 className="text-mute font-sans text-base font-bold lg:text-lg lg:font-semibold">
          Collaboration Type
        </h3>
        <div className="flex gap-4 lg:gap-8">
          <FormField
            name="on_site"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex gap-4 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      {...field}
                      value={field.value === false ? 'false' : 'true'}
                      id="on_site"
                      onClick={(e) => field.onChange(field.value === false ? true : false)}
                    />
                    <Label htmlFor="on_site">On-Site</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="remote"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex gap-4 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      {...field}
                      value={field.value === false ? 'false' : 'true'}
                      id="remote"
                      onClick={(e) => field.onChange(field.value === false ? true : false)}
                    />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="hybrid"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl className="flex gap-4 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      {...field}
                      value={field.value === false ? 'false' : 'true'}
                      id="hybrid"
                      onClick={(e) => field.onChange(field.value === false ? true : false)}
                    />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Pagination
          skip
          handleBack={() => addQueryParams('step', 'upload-cv')}
          handleSkip={() => addQueryParams('step', 'contact')}
          isNextSubmit
        />
      </form>
    </Form>
  );
}
