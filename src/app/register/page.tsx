'use client';
import LoginRegisterToggler from '@/components/forms/auth/_components/login-register-toggler';
import SocialAuthWidget from '@/components/forms/auth/_components/social-auth-widget';
import RegisterCandidateForm from '@/components/forms/auth/register/candidate';
import RegisterCompanyForm from '@/components/forms/auth/register/company';
import PageHeader from '@/components/page-header';
import Poster from '@/components/poster';
import Divider from '@/components/ui/divider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const Register = () => {
  const [activeTab, setActiveTab] = useState('candidate');
  return (
    <div className="grid h-full grid-cols-2 overflow-hidden bg-primary-900 lg:bg-transparent">
      <div className="col-span-2 flex flex-col gap-4 px-4 pt-8 lg:col-span-1 lg:max-h-screen lg:gap-8 lg:overflow-y-auto lg:px-8">
        <PageHeader title="Create your Account" />
        <Divider
          size={2}
          text="Select Method to Register"
          mobileVariant="primary"
          variant="light"
        />
        <SocialAuthWidget google linkedin github auth="register" />
        <Divider size={2} text="OR" mobileVariant="primary" variant="light" />
        <Tabs
          defaultValue="candidate"
          onValueChange={(val) => setActiveTab(val)}
          className="w-full"
        >
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
        <LoginRegisterToggler currentPage="register" activeTab={activeTab} />
      </div>
      <Poster
        bgUrl={
          activeTab == 'candidate'
            ? '/assets/images/auth/auth_candidate_background.png'
            : '/assets/images/auth/auth_company_background.png'
        }
        imgUrl={
          activeTab == 'candidate'
            ? '/assets/images/auth/register_candidate_vector.svg'
            : '/assets/images/auth/register_company_vector.svg'
        }
      />
    </div>
  );
};

export default Register;
