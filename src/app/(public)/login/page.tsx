'use client';

import LoginRegisterToggler from '@/components/forms/auth/_components/login-register-toggler';
import PageHeader from '@/components/ui/page-header';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import SocialAuthWidget from '@/components/forms/auth/_components/social-auth-widget';
import LoginForm from '@/components/forms/auth/login';
import Divider from '@/components/ui/divider';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-8 rounded-2xl bg-stone-100 p-4 shadow ring-1 ring-gray-200/50 backdrop-blur-md">
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
    </div>
  );
};

export default Login;
