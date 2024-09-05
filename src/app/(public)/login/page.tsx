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
    <div className="relative grid min-h-screen items-center justify-center overflow-x-hidden p-4 sm:px-0 lg:grid-cols-2">
      <Image
        src={'/assets/auth/login-poster.png'}
        alt="Login Poster"
        width={10000}
        height={10000}
        className="absolute left-0 top-0 -z-10 h-full w-full lg:hidden"
      />
      <div className="lg:bg-dark-backgroundDar col-span-2 mx-auto flex w-full max-w-xl flex-col gap-4 rounded-2xl lg:col-span-1 lg:gap-8">
        <Image
          src={'/assets/logo_white_vertical.png'}
          alt="Logo"
          width={80}
          height={86}
          className="mx-auto lg:hidden"
        />
        <PageHeader containerClassName="lg:pt-20" title="Login to your Account" />
        <Divider size={2} text="Select Method to Login" mobileVariant="primary" variant="light" />
        <SocialAuthWidget google linkedin github auth="login" />
        <Divider size={2} text="or" mobileVariant="primary" variant="light" />
        <Tabs defaultValue="email-password" className="flex w-full flex-col flex-wrap gap-4">
          <TabsList className="bg-primary-50 lg:bg-dark-greenDark">
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
      <div className="relative hidden h-full w-full bg-dark-greenLight lg:block">
        <Image
          src={'/assets/auth/login-poster.png'}
          alt="Login Poster"
          width={10000}
          height={10000}
          className="absolute left-0 top-0 -z-10 h-full w-full"
        />
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto max-w-2xl text-center text-gray-50">
            <Image
              src={'/assets/auth/login-vector.png'}
              alt="LoginVector"
              quality={100}
              width={534}
              height={388}
              className="mx-auto mb-8 h-auto w-auto"
            />
            <h4 className="mb-5 text-3xl font-bold uppercase">Project ai-fugu</h4>
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
