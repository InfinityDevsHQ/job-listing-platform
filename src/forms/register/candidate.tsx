'use client';
import CompanyArrow from '@/components/svgs/company-arrow';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyProfileOne from '@/components/svgs/company-profile-one';
import CompanyMail from '@/components/svgs/coompany-mail';
import Button from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import useTogglePasswordDisplay from '@/hooks/use-toggle-password-display';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

const formSchema = z
  .object({
    name: z.string().min(2, { message: 'Username must be at least 2 characters long' }),
    email: z.string().email({ message: 'Email must be valid' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export default function RegisterCandidateForm() {
  const [showPassword, togglePasswordVisibility] = useTogglePasswordDisplay();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Name" leadingIcon={<CompanyProfileOne />} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Password"
                  leadingIcon={<CompanyLock width={14} height={15} />}
                  trailingIcon={<CompanyEye width={16} height={13} />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Confirm Password"
                  leadingIcon={<CompanyLock width={14} height={15} />}
                  trailingIcon={<CompanyEye width={16} height={13} />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <button type="submit">Continue</button> */}
        <Button
          text="Continue"
          variant={'primary'}
          className="!max-w-full justify-center"
          type="submit"
          trailingIcon={<CompanyArrow width={16} height={16} fill="white" className="pt-1" />}
        />
        {isLoading && 'Loading...'}
      </form>
    </Form>
  );
}
