'use client';
import Pagination from '@/app/(auth)/onboarding/_components/pagination';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { useQueryParams } from '@/hooks/useQueryParams';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
const termsAndConditionsFormSchema = z.object({
  termsAgreed: z.string().refine((value) => value === 'true', {
    message: 'Please agree to terms to move forward',
  }),
});

export default function TermsAndConditionsForm() {
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const addQueryParams = useQueryParams();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(termsAndConditionsFormSchema),
    defaultValues: {
      termsAgreed: 'false',
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof termsAndConditionsFormSchema>) {
    // Updating Store on submitting data
    setOnboardingData({
      ...onboardingData,
      is_terms_agreed: values.termsAgreed === 'true',
    });

    toast.success('Profile Created Successfully.');
    router.push('/profile');
  }
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className="mt-4 font-sans text-base font-bold text-mute-1 lg:mt-8 lg:text-lg lg:font-semibold">
          Terms And Conditions
        </h3>
        <FormField
          name="termsAgreed"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  id="terms"
                  {...field}
                  onClick={(e) => field.onChange(field.value === 'false' ? 'true' : 'false')}
                  pill
                >
                  <Label htmlFor="terms">
                    I agree to
                    <Link href="/tos">Terms and Conditions</Link>
                  </Label>
                </Checkbox>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination
          handleBack={() => addQueryParams('step', 'contact')}
          isNextSubmit
          nextLoading={isLoading}
        />
      </form>
    </Form>
  );
}
