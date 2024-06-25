'use client';

import LoginRegisterToggler from '@/components/forms/auth/_components/login-register-toggler';
import PageHeader from '@/components/ui/page-header';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import SocialAuthWidget from '@/components/forms/auth/_components/social-auth-widget';
import LoginForm from '@/components/forms/auth/login';
import Divider from '@/components/ui/divider';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 items-center justify-center overflow-x-hidden">
      <div className="col-span-2 mx-auto  flex w-full max-w-xl flex-col gap-8 rounded-2xl bg-primary-50 lg:col-span-1">
        <PageHeader title="Login to your Account" />
        <Divider size={2} text="Select Method to Login" mobileVariant="primary" variant="light" />
        <SocialAuthWidget google linkedin github auth="login" />
        <Divider size={2} text="OR" mobileVariant="primary" variant="light" />
        <Tabs defaultValue="email-password" className="flex w-full flex-col gap-4">
          <TabsList className="bg-primary-50 lg:bg-transparent">
            <TabsTrigger value="email-password">Email / Password</TabsTrigger>
            <TabsTrigger value="password-less">Password Less</TabsTrigger>
          </TabsList>
          <TabsContent value="email-password">
            <LoginForm activeTab="email-password" />
          </TabsContent>
          <TabsContent value="password-less">
            <LoginForm activeTab="password-less" />
          </TabsContent>
        </Tabs>
        <LoginRegisterToggler currentPage="login" />
      </div>
      <div className="relative hidden h-full w-full lg:block">
        <Image
          src={'/assets/auth/login-poster.png'}
          alt="Login Poster"
          width={100000}
          height={1000000}
          className="absolute left-0 top-0 -z-10 h-full w-full"
        />
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto max-w-2xl text-center text-gray-50">
            <Image
              src={'/assets/auth/login-vector.png'}
              alt="LoginVector"
              width={534}
              height={388}
              className="mx-auto mb-8 h-auto w-auto"
            />
            <h4 className="mb-5 text-3xl font-bold uppercase">Project al-fugu</h4>
            <p>
              Mauris pharetra imperdiet iaculis elementum nulla. Tellus morbi nunc non vitae enim
              amet. Faucibus eleifend sit leo varius suspendisse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
