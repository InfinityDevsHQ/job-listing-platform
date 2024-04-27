'use client';
import AppsAuth from '@/_components/apps-auth';
import LoginRegisterToggler from '@/_components/login-register-toggler';
import PageHeader from '@/_components/page-header';
import Poster from '@/_components/poster';
import VectorText from '@/_components/vector-text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegisterCandidateForm from '@/forms/register/candidate';
import RegisterCompanyForm from '@/forms/register/company';

export default function Register() {
  return (
    <div className="grid h-full grid-cols-2 overflow-hidden bg-primary-900 lg:bg-transparent">
      <div className="col-span-2 flex flex-col gap-4 px-4 pt-8 lg:col-span-1 lg:max-h-screen lg:gap-8 lg:overflow-y-auto lg:px-8">
        <PageHeader title="Create your Account" />
        <VectorText text="Select Method to Login" />
        <AppsAuth google linkedin github auth="register" />
        <VectorText text="OR" />
        <Tabs defaultValue="candidate" className="w-full">
          <TabsList className="bg-primary-50 lg:bg-transparent">
            <TabsTrigger value="candidate">Candidate</TabsTrigger>
            <TabsTrigger value="company" className="data-[state=active]:bg-secondary-900">
              Company
            </TabsTrigger>
          </TabsList>
          <TabsContent value="candidate">
            <RegisterCandidateForm />
          </TabsContent>
          <TabsContent value="company">
            <RegisterCompanyForm />
          </TabsContent>
        </Tabs>
        <LoginRegisterToggler currentPage="register" />
      </div>
      <Poster imgUrl="/assets/images/auth/login_vector.png" />
    </div>
  );
}
