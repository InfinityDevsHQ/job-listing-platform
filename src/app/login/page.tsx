'use client';
import Poster from '@/components/poster';

import AppsAuth from '@/components/apps-auth';
import LoginRegisterToggler from '@/components/login-register-toggler';
import PageHeader from '@/components/page-header';
import Button from '@/components/ui/button';
import VectorText from '@/components/vector-text';

import CompanyArrow from '@/components/svgs/company-arrow';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyMail from '@/components/svgs/coompany-mail';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Input from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useToast } from '@/hooks/use-toast';
import useTogglePasswordDisplay from '@/hooks/use-toggle-password-display';
import { login } from '@/lib/auth';
import useAuthStore from '@/stores/authStore/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  username: z.string().email({ message: 'Email must be valid' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export default function Register() {
  const router = useRouter();
  const [showPassword, togglePasswordVisibility] = useTogglePasswordDisplay();
  const setUser = useAuthStore((state) => state.setUser);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  // 2. Define a submit handler.
  async function onSubmit({ username, password }: z.infer<typeof formSchema>) {
    const body = {
      username: username,
      password: password,
    };

    login(body)
      .then((data) => {
        localStorage.setItem('access_token', data.access_token);
        console.log('data', data);
        // setUser(data?.user);
        router.push('/profile');
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: error.message || 'Uh oh! Something went wrong.',
        });
      });
  }

  return (
    <div className="grid h-full grid-cols-2 overflow-hidden bg-primary-900 lg:bg-transparent">
      <div className="col-span-2 flex flex-col gap-4 px-4 pt-8 lg:col-span-1 lg:max-h-screen lg:gap-8 lg:overflow-y-auto lg:px-8">
        <PageHeader title="Create your Account" />
        <VectorText text="Select Method to Login" />
        <AppsAuth google linkedin github auth="register" />
        <VectorText text="OR" />
        <Tabs defaultValue="email-password" className="w-full">
          <TabsList className="bg-primary-50 lg:bg-transparent">
            <TabsTrigger value="email-password">Email / Password</TabsTrigger>
            <TabsTrigger value="password-less">Password Less</TabsTrigger>
          </TabsList>
          <TabsContent value="email-password">
            <Form {...form}>
              <form className="flex flex-col gap-8" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="username"
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
                  trailingIcon={
                    <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
                  }
                />
                {isLoading && 'Loading...'}
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="password-less">
            <Form {...form}>
              <form className="flex flex-col gap-8" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="username"
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
                <Button
                  text="Continue"
                  variant={'primary'}
                  className="!max-w-full justify-center"
                  type="submit"
                  trailingIcon={
                    <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
                  }
                />
                {isLoading && 'Loading...'}
              </form>
            </Form>
          </TabsContent>
        </Tabs>
        <LoginRegisterToggler currentPage="login" />
      </div>
      <Poster imgUrl="/assets/images/auth/login_vector.png" />
    </div>
  );
}
