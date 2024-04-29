'use client';
import CompanyArrow from '@/components/svgs/company-arrow';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyMail from '@/components/svgs/coompany-mail';
import Button from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import useTogglePasswordDisplay from '@/hooks/use-toggle-password-display';
import { login } from '@/lib/auth';
import useAuthStore from '@/stores/authStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Email must be valid' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, togglePasswordVisibility] = useTogglePasswordDisplay();
  const setUser = useAuthStore((state) => state.setUser);
  const { toast } = useToast();

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
        // setUser(data?.user);
        router.push('/profile');
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: error.message || 'Uh oh! Something went wrong.',
          // description: 'Friday, February 10, 2023 at 5:57 PM',
        });
      });
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-8" onSubmit={form.handleSubmit(onSubmit)}>
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
