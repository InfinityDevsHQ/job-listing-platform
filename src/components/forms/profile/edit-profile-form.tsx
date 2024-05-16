'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import CompanyGithubSecond from '@/components/svgs/company-github-second';
import TwitterIcon from '@/components/svgs/twitter';
import AppSelect from '@/components/ui/app-select';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { useCountries } from '@/hooks/useCountries';
import { useLanguages } from '@/hooks/useLnaguages';
import { timezones } from '@/lib/time-zones';
import { updateUserProfile } from '@/lib/user';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { UserProfile } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building2Icon, Clock, Globe2, Languages, Linkedin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const editProfileSchema = z.object({
  preferLanguage: z.string().min(2, {
    message: 'Must select a language',
  }),
  timeZone: z.string().min(2, { message: 'Must select a time zone' }),
  country: z.string().min(2, { message: 'Must select a country' }),
  city: z.string().min(2, { message: 'Please Enter a valid city' }),
  phoneNumber: z.string().min(6, { message: 'Phone number must be at least 6 characters long' }),
  linkedin: z.string().url({ message: 'Invalid LinkedIn URL' }),
  twitter: z.string().url({ message: 'Invalid Twitter URL' }),
  github: z.string().url({ message: 'Invalid GitHub URL' }),
});

export default function EditProfileForm() {
  const { data: user } = useUserProfile();
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      preferLanguage: user?.user_data.language,
      timeZone: user?.user_data.timezone || '',
      country: user?.user_data.country,
      city: user?.user_data.city,
      phoneNumber: user?.user_data.phone_number || '',
      linkedin: user?.candidate_data.social?.linkedin || '',
      twitter: user?.candidate_data.social?.twitter || '',
      github: user?.candidate_data.social?.github || '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  const { isLoading: languagesLoading, error: languagesError, data: languages } = useLanguages();
  const { isLoading: countriesLoading, error: countriesError, data: countries } = useCountries();
  async function onSubmit(values: z.infer<typeof editProfileSchema>) {
    console.log('running');
    setOnboardingData({
      ...onboardingData,
      language: values.preferLanguage,
      timezone: values.timeZone,
      country: values.country,
      city: values.city,
      phone: values.phoneNumber,
      github: values.github,
      linkedin: values.linkedin,
      twitter: values.twitter,
    });

    const body = {
      user_data: {
        ...user?.user_data,
        language: values.preferLanguage,
        timezone: values.timeZone,
        country: values.country,
        city: values.city,
        phone_number: values.phoneNumber,
      },
      candidate_data: {
        ...user?.candidate_data,
        social: {
          ...user?.candidate_data?.social,
          github: values.github,
          linkedin: values.linkedin,
          twitter: values.twitter,
        },
      },
    };

    const response = await updateUserProfile(body as UserProfile);
    console.log(response);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
        <>
          <FormField
            name="phoneNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    variant={'primary'}
                    placeholder="Phone Number"
                    leadingIcon={<Phone width={16} height={16} />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <h3 className="text-mute font-sans text-base font-bold lg:text-lg lg:font-semibold">
            Social Networks
          </h3>
          <FormField
            name="linkedin"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    variant={'primary'}
                    placeholder="Linkedin"
                    leadingIcon={<Linkedin />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="twitter"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    variant={'primary'}
                    placeholder="X"
                    leadingIcon={<TwitterIcon />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="github"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    variant={'primary'}
                    placeholder="Github"
                    leadingIcon={<CompanyGithubSecond width={16} height={16} />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
        <Button type="submit">{isLoading ? 'Saving....' : 'Save'}</Button>
      </form>
    </Form>
  );
}
