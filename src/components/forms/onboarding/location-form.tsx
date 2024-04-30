'use client';
import CompanyGlobe from '@/components/svgs/company-globe';
import AppSelect from '@/components/ui/app-select';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import Pagination from '@/components/ui/pagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
type LocationFormProps = {
  languages: string[];
};
const locationFormSchema = z.object({
  preferLanguage: z.string().min(2, {
    message: 'Must select a language',
  }),
  timeZone: z.string().min(2, { message: 'Must select a time zone' }),
  country: z.string().min(2, { message: 'Country name must be at least 2 characters long' }),
  city: z.string().min(2, { message: 'Must select a city' }),
});

export default function LocationForm({ languages }: LocationFormProps) {
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
    console.log(values);
  }
  const addQueryParams = useQueryParams();
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="preferLanguage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AppSelect {...field} />
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
                <AppSelect {...field} />
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
                  variant={'primary'}
                  placeholder="Country"
                  leadingIcon={<CompanyGlobe />}
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
                <AppSelect {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Pagination previous={false} isNextSubmit />
      </form>
    </Form>
  );
}
