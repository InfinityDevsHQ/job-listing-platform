'use client';
import Pagination from '@/app/(auth)/onboarding/_components/pagination';
import CompanyGithubSecond from '@/components/svgs/company-github-second';
import TwitterIcon from '@/components/svgs/twitter';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { useQueryParams } from '@/hooks/useQueryParams';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Linkedin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// TODO: Validate Urls more strictly to check if urls contains words like github, linkedin e.t.c
const onBoardingContactFormSchema = z.object({
  phoneNumber: z.string().min(6, { message: 'Phone number must be at least 6 characters long' }),
  linkedin: z.string().url({ message: 'Invalid LinkedIn URL' }),
  twitter: z.string().url({ message: 'Invalid Twitter URL' }),
  github: z.string().url({ message: 'Invalid GitHub URL' }),
});
export default function ContactForm() {
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const addQueryParams = useQueryParams();
  const form = useForm<z.infer<typeof onBoardingContactFormSchema>>({
    resolver: zodResolver(onBoardingContactFormSchema),
    defaultValues: {
      phoneNumber: '',
      linkedin: '',
      twitter: '',
      github: '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof onBoardingContactFormSchema>) {
    setOnboardingData({
      ...onboardingData,
      phone: values.phoneNumber,
      github: values.github,
      linkedin: values.linkedin,
      twitter: values.twitter,
    });
    console.log(onboardingData);
    addQueryParams('step', 'terms-and-conditions');
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 lg:gap-8">
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
          <Pagination
            handleBack={() => addQueryParams('step', 'filter-jobs')}
            handleSkip={() => addQueryParams('step', 'terms-and-conditions')}
            skip
            isNextSubmit
          />
        </div>
      </form>
    </Form>
  );
}
