'use client';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyProfileOne from '@/components/svgs/company-profile-one';
import CompanyMail from '@/components/svgs/coompany-mail';
import AppSelect from '@/components/ui/app-select';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import useAuthStore from '@/stores/authStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon, LoaderCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  company_name: z.string().min(4, { message: 'Company Name Should at least 4 characters long.' }),
  company_mail: z.string().email({ message: 'Please Enter valid email address' }),
  company_phone_number: z.string().min(6, { message: 'Please EnterValid phon number' }),
  employees_count: z.string().min(1, { message: 'Please Select One' }),
  company_country: z.string().min(4, { message: 'Please Select One' }),
  company_city: z.string().min(2, { message: 'Please Enter a valid city name' }),
  preferred_language: z.string().min(2, { message: 'Please Select' }),
});
const Employees = ['100 - 200', '500 - 1000'];
export default function RegisterCandidateForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: '',
      company_mail: '',
      company_phone_number: '',
      employees_count: '',
      company_country: '',
      company_city: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Company Name" leadingIcon={<CompanyProfileOne />} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company_mail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email"
                  leadingIcon={<CompanyMail width={14} height={11} />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company_phone_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Phone Number"
                  leadingIcon={<CompanyLock width={14} height={15} />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employees_count"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AppSelect
                  {...field}
                  placeholder="Number of employees"
                  options={Employees.map((option) => ({ label: option, value: option }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company_country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AppSelect
                  {...field}
                  placeholder="Country"
                  options={Employees.map((option) => ({ label: option, value: option }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company_city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="City"
                  leadingIcon={<CompanyLock width={14} height={15} />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferred_language"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AppSelect
                  {...field}
                  placeholder="Preferred Language"
                  options={Employees.map((option) => ({ label: option, value: option }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="hidden w-full lg:flex" variant={'primary'}>
          Register
          {isLoading ? (
            <LoaderCircleIcon className="animate ml-2 h-4 w-4 animate-spin" />
          ) : (
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
        <Button type="submit" className="w-full lg:hidden" variant={'outline'}>
          Register
          {isLoading ? (
            <LoaderCircleIcon className="animate ml-2 h-4 w-4 animate-spin" />
          ) : (
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
      </form>
    </Form>
  );
}
