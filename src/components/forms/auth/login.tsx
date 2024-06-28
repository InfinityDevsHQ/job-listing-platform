'use client';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyMail from '@/components/svgs/coompany-mail';
import { Button } from '@/components/ui/button-new';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { login } from '@/lib/auth';
import useAuthStore from '@/stores/authStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon, EyeIcon, EyeOffIcon, LoaderCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Email must be valid' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = ({ activeTab }: { activeTab: string }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setAccessToken, setIsAuthenticated } = useAuthStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    const body = {
      username: email,
      password,
    };
    if (!(email === 'hello@infinitydevs.io' && password === 'hello@infinitydevs.io')) {
      toast.error('Invalid username or password');

      return;
    }
    try {
      const data = await login(body);
      if (data.access_token) {
        setIsAuthenticated(true);
        router.push('/profile');
      }
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message || 'Uh oh! Invalid credentials.';
      }
      toast.error(message);
    }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 lg:gap-8" onSubmit={form.handleSubmit(onSubmit)}>
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
        {activeTab == 'email-password' && (
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
        )}
        <Button type="submit" className="hidden w-full lg:block" variant={'primary'}>
          Login
          {isLoading ? (
            <LoaderCircleIcon className="animate ml-2 h-4 w-4 animate-spin" />
          ) : (
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
        <Button type="submit" className="w-full lg:hidden" variant={'outline'}>
          Login
          {isLoading ? (
            <LoaderCircleIcon className="animate ml-2 h-4 w-4 animate-spin" />
          ) : (
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
