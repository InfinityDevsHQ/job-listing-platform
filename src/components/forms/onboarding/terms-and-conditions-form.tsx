'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import Pagination from '@/components/ui/pagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const termsAndConditionsFormSchema = z.object({
  termsAgreed: z.string().refine((value) => value === 'true', {
    message: 'Please agree to terms to mov forward',
  }),
});

export default function TermsAndConditionsForm() {
  const addQueryParams = useQueryParams();
  const form = useForm({
    resolver: zodResolver(termsAndConditionsFormSchema),
    defaultValues: {
      termsAgreed: 'false',
    },
  });
  async function onSubmit(values: z.infer<typeof termsAndConditionsFormSchema>) {
    console.log(values);
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
                <div className="flex items-center">
                  <Checkbox id="terms" {...field} />
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
