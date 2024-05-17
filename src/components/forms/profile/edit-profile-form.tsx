'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { useCountries } from '@/app/utils/rq/hooks/use-countries';
import { useLanguages } from '@/app/utils/rq/hooks/use-languages';
import CompanyGithubSecond from '@/components/svgs/company-github-second';
import TwitterIcon from '@/components/svgs/twitter';
import AppSelect from '@/components/ui/app-select';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { timezones } from '@/lib/time-zones';
import { updateUserProfile } from '@/lib/user';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { UserProfile } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building2Icon, Clock, Globe2, Languages, Linkedin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const editProfileSchema = z.object({
  preferLanguage: z.string(),
  timeZone: z.string(),
  country: z.string(),
  city: z.string(),
  phoneNumber: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
  github: z.string(),
  objective: z.string(),
  summary: z.string(),
  expertise: z.union([z.string(), z.array(z.string())]),
  ai_skill_tags: z.union([z.string(), z.array(z.string())]),
});
type EditProfileFormProps = {
  formName?: 'user-info' | 'about-us';
};

export default function EditProfileForm({ formName = 'user-info' }: EditProfileFormProps) {
  const { data: user } = useUserProfile();
  console.log('user================================================================', user);
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      preferLanguage: user?.user_data.prefered_language || '',
      timeZone: user?.user_data.timezone || '',
      country: user?.user_data.country,
      city: user?.user_data.city,
      phoneNumber: user?.user_data.phone_number || '',
      linkedin: user?.candidate_data.social?.linkedin || '',
      twitter: user?.candidate_data.social?.twitter || '',
      github: user?.candidate_data.social?.github || '',
      objective: user?.candidate_data.ai_objective || '',
      summary: user?.candidate_data.ai_cv_summary || '',
      expertise: user?.candidate_data.ai_expertise || '',
      ai_skill_tags: user?.candidate_data.ai_skill_tags || '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const { isLoading: languagesLoading, error: languagesError, data: languages } = useLanguages();
  const { isLoading: countriesLoading, error: countriesError, data: countries } = useCountries();

  console.log(
    'languages================================================================',
    languagesLoading,
    languages
  );

  async function onSubmit(values: z.infer<typeof editProfileSchema>) {
    console.log('running.......', values);
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
        ai_objective: values.objective,
        ai_cv_summary: values.summary,
        ai_expertise: values.expertise,
        ai_skill_tags: values.ai_skill_tags,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {formName === 'user-info' && (
          <>
            <FormField
              control={form.control}
              name="preferLanguage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <AppSelect
                      placeholder={user?.user_data.prefered_language || 'Preferred Language'}
                      leadingIcon={<Languages size={16} />}
                      {...field}
                      options={languages?.map((language) => ({
                        value: language,
                        label: language,
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
                      placeholder={user?.user_data.timezone || 'Timezone'}
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
                      placeholder={user?.user_data.selected_country || 'Select Country'}
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
                    <Input
                      {...field}
                      placeholder="City"
                      leadingIcon={<Building2Icon size={16} />}
                    />
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
          </>
        )}
        {formName === 'about-us' && (
          <>
            <FormField
              control={form.control}
              name="objective"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Ai Objectives" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Ai CV Summary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expertise"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Ai Expertise" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ai_skill_tags"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="AI Skill Tags" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <Button type="submit">{isLoading ? 'Saving....' : 'Save'}</Button>
      </form>
    </Form>
  );
}
