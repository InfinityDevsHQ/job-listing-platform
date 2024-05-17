'use client';
import Pagination from '@/app/(auth)/onboarding/_components/pagination';
import { useCountries } from '@/app/utils/rq/hooks/use-countries';
import { useLanguages } from '@/app/utils/rq/hooks/use-languages';
import AppSelect from '@/components/ui/app-select';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { useQueryParams } from '@/hooks/useQueryParams';
import { timezones } from '@/lib/time-zones';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building2Icon, Clock, Globe2, Languages } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const locationFormSchema = z.object({
  preferLanguage: z.string().min(2, {
    message: 'Must select a language',
  }),
  timeZone: z.string().min(2, { message: 'Must select a time zone' }),
  country: z.string().min(2, { message: 'Must select a country' }),
  city: z.string().min(2, { message: 'Please Enter a valid city' }),
});

export default function LocationForm() {
  const { data: languages } = useLanguages();
  const { data: countries } = useCountries();

  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const addQueryParams = useQueryParams();
  const form = useForm<z.infer<typeof locationFormSchema>>({
    resolver: zodResolver(locationFormSchema),
    defaultValues: {
      preferLanguage: '',
      timeZone: '',
      country: '',
      city: '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof locationFormSchema>) {
    setOnboardingData({
      ...onboardingData,
      language: values.preferLanguage,
      timezone: values.timeZone,
      country: values.country,
      city: values.city,
    });
    addQueryParams('step', 'upload-cv');
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="preferLanguage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AppSelect
                  placeholder="Preferred Language"
                  leadingIcon={<Languages size={16} />}
                  {...field}
                  options={languages?.map((language) => ({
                    value: language || '',
                    label: language || '',
                  }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeZone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AppSelect
                  placeholder="Time Zone"
                  leadingIcon={<Clock size={16} />}
                  {...field}
                  options={timezones.map((time) => ({
                    value: time,
                    label: time,
                  }))}
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
                <AppSelect
                  placeholder="Select Country"
                  {...field}
                  leadingIcon={<Globe2 size={16} />}
                  options={countries?.map((country) => ({
                    label: country.name,
                    value: country.name,
                  }))}
                />
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
                <Input {...field} placeholder="City" leadingIcon={<Building2Icon size={16} />} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination handleBack={() => addQueryParams('', '')} isNextSubmit />
      </form>
    </Form>
  );
}
