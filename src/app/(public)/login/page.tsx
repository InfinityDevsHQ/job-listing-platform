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
    <div className="relative flex min-h-screen items-center justify-center overflow-x-hidden p-4 md:p-8">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-dark-background3 bg-dark-background p-2 xs:p-4 md:p-8 lg:col-span-1 lg:gap-6 lg:p-8">
        <Image
          src={'/assets/logo_white_vertical.png'}
          alt="Logo"
          width={80}
          height={86}
          className="lg:hidde mx-auto"
        />
        <PageHeader containerClassName="md:p-0" title="Login to your Account" />
        <Divider size={2} text="Select Method to Login" mobileVariant="primary" variant="light" />
        <SocialAuthWidget google linkedin github auth="login" />
        <Divider size={2} text="or" mobileVariant="primary" variant="light" />
        <Tabs defaultValue="email-password" className="flex w-full flex-col flex-wrap gap-4">
          <TabsList className="bg-dark-greenDark">
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
    </div>
  );
};

export default Login;
