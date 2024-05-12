'use client';
import LoginRegisterToggler from '@/components/forms/auth/_components/login-register-toggler';
import SocialAuthWidget from '@/components/forms/auth/_components/social-auth-widget';
import RegisterCandidateForm from '@/components/forms/auth/register/candidate';
import RegisterCompanyForm from '@/components/forms/auth/register/company';
import Divider from '@/components/ui/divider';
import PageHeader from '@/components/ui/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import usePageStore from '@/stores/pageStore/store';

const Register = () => {
  const [currentUserRole, setCurrentUserRole] = usePageStore((state) => [
    state.currentUserRole,
    state.setCurrentUserRole,
  ]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8">
      <div className="lg:px- mx-auto flex w-full max-w-xl flex-col gap-8 rounded-2xl bg-stone-100 p-4 shadow ring-1 ring-gray-200/50 backdrop-blur-md">
        <PageHeader title="Create your Account" />
        <Divider
          size={2}
          text="Select Method to Register"
          mobileVariant={currentUserRole === 'candidate' ? 'primary' : 'secondary'}
          variant="light"
        />
        <SocialAuthWidget google linkedin github auth="register" />
        <Divider
          size={2}
          text="OR"
          mobileVariant={currentUserRole === 'candidate' ? 'primary' : 'secondary'}
          variant="light"
        />
        <Tabs
          defaultValue="candidate"
          onValueChange={(val) => setCurrentUserRole(val)}
          className="flex w-full flex-col gap-4"
        >
          <TabsList className="bg-primary-50 lg:bg-transparent">
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
  );
};

export default Register;
