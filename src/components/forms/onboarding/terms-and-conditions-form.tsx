'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import Pagination from '@/components/ui/pagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import { uploadOnBoardingData } from '@/lib/onboarding';
import useOnboardingStore from '@/stores/onboardingStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const termsAndConditionsFormSchema = z.object({
  termsAgreed: z.string().refine((value) => value === 'true', {
    message: 'Please agree to terms to move forward',
  }),
});

export default function TermsAndConditionsForm() {
  const { onboardingData, setOnboardingData } = useOnboardingStore();
  const addQueryParams = useQueryParams();
  const form = useForm({
    resolver: zodResolver(termsAndConditionsFormSchema),
    defaultValues: {
      termsAgreed: 'false',
    },
  });
  async function onSubmit(values: z.infer<typeof termsAndConditionsFormSchema>) {
    // Updating Store on submitting data
    setOnboardingData({
      ...onboardingData,
      is_terms_agreed: values.termsAgreed === 'true' ? true : false,
    });
    const resp = await uploadOnBoardingData(onboardingData);
    console.log({ resp });
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
                <div className="flex items-center gap-1">
                  <Checkbox
                    id="terms"
                    {...field}
                    onClick={(e) => field.onChange(field.value === 'false' ? 'true' : 'false')}
                  />
                  <Label htmlFor="terms">
                    I agree to
                    <Link href="/tos">Terms and Conditions</Link>
                  </Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination handleBack={() => addQueryParams('step', 'contact')} isNextSubmit />
      </form>
    </Form>
  );
}
