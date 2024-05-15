'use client';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyProfileOne from '@/components/svgs/company-profile-one';
import CompanyMail from '@/components/svgs/coompany-mail';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { registerCandidate } from '@/lib/auth';
import { storeToken } from '@/lib/auth-token';
import useAuthStore from '@/stores/authStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon, EyeIcon, EyeOffIcon, LoaderCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, setIsAuthenticated } = useAuthStore();

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

  async function onSubmit({ name, email, password }: z.infer<typeof formSchema>) {
    const body = {
      name,
      email,
      password,
      is_recruiter: false,
      is_social_login: false,
    };
    return registerCandidate(body)
      .then(async (data) => {
        await storeToken({ token: data.access_token });
        setIsAuthenticated(true);
        setUser(data?.user);
        router.replace('/onboarding');
      })
      .catch((error) => {
        toast.error(error.message || 'Uh oh! Something went wrong.');
      });
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  leadingIcon={<CompanyLock width={14} height={15} />}
                  trailingIcon={
                    showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )
                  }
                  onClickTrailing={() => {
                    setShowPassword(!showPassword);
                  }}
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  leadingIcon={<CompanyLock width={14} height={15} />}
                  trailingIcon={
                    showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )
                  }
                  onClickTrailing={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
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
