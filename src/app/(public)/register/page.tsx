'use client';
import LoginRegisterToggler from '@/components/forms/auth/_components/login-register-toggler';
import SocialAuthWidget from '@/components/forms/auth/_components/social-auth-widget';
import RegisterCandidateForm from '@/components/forms/auth/register/candidate';
import RegisterCompanyForm from '@/components/forms/auth/register/company';
import Divider from '@/components/ui/divider';
import PageHeader from '@/components/ui/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import usePageStore from '@/stores/pageStore/store';
import Image from 'next/image';
const Register = () => {
  const [currentUserRole, setCurrentUserRole] = usePageStore((state) => [
    state.currentUserRole,
    state.setCurrentUserRole,
  ]);
  return (
    <div className="relative flex h-full items-center justify-center p-4 md:p-8 lg:min-h-screen">
      <div className="flex h-full max-w-2xl items-center justify-center rounded-2xl border border-dark-background3 bg-dark-background p-4 md:p-8 lg:h-full">
        <div className="flex flex-col gap-4 pt-2 lg:w-[500px] lg:gap-8">
          <Image
            src={'/assets/logo_white_vertical.png'}
            alt="Logo"
            width={80}
            height={86}
            className="mx-auto"
          />
          <PageHeader containerClassName="md:py-0" title="Create your Account" />
          <Divider
            size={2}
            text="Select Method to Register"
            mobileVariant={currentUserRole === 'candidate' ? 'primary' : 'secondary'}
            variant="light"
          />
          <SocialAuthWidget google linkedin github auth="register" />
          <Divider
            size={2}
            text="or"
            mobileVariant={currentUserRole === 'candidate' ? 'primary' : 'secondary'}
            variant="light"
          />
          <Tabs
            defaultValue="candidate"
            onValueChange={(val) => setCurrentUserRole(val)}
            className="flex w-full flex-col gap-4"
          >
            <TabsList className="bg-dark-greenDark">
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
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
      </div>
    </div>
  );
};

export default Register;
