'use client';
import Poster from '@/components/poster';

import LoginRegisterToggler from '@/components/forms/auth/_components/login-register-toggler';
import PageHeader from '@/components/page-header';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import SocialAuthWidget from '@/components/forms/auth/_components/social-auth-widget';
import LoginForm from '@/components/forms/auth/login';
import Divider from '@/components/ui/divider';

const Login = () => {
  return (
    <div className="grid h-full grid-cols-2 overflow-hidden bg-primary-900 lg:bg-transparent">
      <div className="col-span-2 flex max-h-screen flex-col gap-8 overflow-y-auto px-4 pt-8 lg:col-span-1 lg:px-8">
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
      <Poster
        bgUrl="/assets/images/auth/auth_candidate_background.png"
        imgUrl="/assets/images/auth/login_vector.svg"
      />
    </div>
  );
};

export default Login;
