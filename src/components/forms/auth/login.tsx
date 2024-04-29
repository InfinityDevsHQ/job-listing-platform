'use client';
import CompanyArrow from '@/components/svgs/company-arrow';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyMail from '@/components/svgs/coompany-mail';
import Button from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { login } from '@/lib/auth';
import { getUser } from '@/lib/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
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
  // const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  // 2. Define a submit handler.
  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    const body = {
      username: email,
      password,
    };
    login(body)
      .then((data) => {
        console.log('data', data);
        localStorage.setItem('access_token', data.access_token);
        getUser()
          ?.then((user) => {
            console.log('user <======> ', user);
            // if (user.is_recruiter) {
            //   router.push('/recruiter/dashboard');
            // } else {
            //   router.push('/candidate/dashboard');
            // }
          })
          .catch((error) => {
            console.log('error <======> ', error);
          });
        // setUser(data?.user);
        router.push('/profile');
      })
      .catch((error) => {
        toast.error(error.message || 'Uh oh! Something went wrong.');
      });
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
};

export default LoginForm;
