'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import AppSelect from '@/components/ui/app-select';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { useCountries } from '@/hooks/useCountries';
import { useLanguages } from '@/hooks/useLnaguages';
import { timezones } from '@/lib/time-zones';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building2Icon, Clock, Globe2, Languages } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const editProfileSchema = z.object({
  preferLanguage: z.string().min(2, {
    message: 'Must select a language',
  }),
  timeZone: z.string().min(2, { message: 'Must select a time zone' }),
  country: z.string().min(2, { message: 'Must select a country' }),
  city: z.string().min(2, { message: 'Please Enter a valid city' }),
});

export default function EditProfileForm() {
  const { data: user } = useUserProfile();
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const form = useForm({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      preferLanguage: user?.user_data.language,
      timeZone: user?.user_data.timezone,
      country: user?.user_data.country,
      city: user?.user_data.city,
    },
  });
  const { isLoading: languagesLoading, error: languagesError, data: languages } = useLanguages();
  const { isLoading: countriesLoading, error: countriesError, data: countries } = useCountries();
  async function onSubmit(values: z.infer<typeof editProfileSchema>) {
    setOnboardingData({
      ...onboardingData,
      language: values.preferLanguage,
      timezone: values.timeZone,
      country: values.country,
      city: values.city,
    });
  }
  return (
    <Form {...form}>
      <form>
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
                    value: language.default_language,
                    label: language.default_language,
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
      </form>
    </Form>
  );
}
