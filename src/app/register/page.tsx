'use client';
import LoginRegisterToggler from '@/components/forms/auth/_components/login-register-toggler';
import SocialAuthWidget from '@/components/forms/auth/_components/social-auth-widget';
import RegisterCandidateForm from '@/components/forms/auth/register/candidate';
import RegisterCompanyForm from '@/components/forms/auth/register/company';
import Poster from '@/components/poster';
import Divider from '@/components/ui/divider';
import PageHeader from '@/components/ui/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import usePageStore from '@/stores/pageStore/store';

const Register = () => {
  const [currentUserRole, setCurrentUserRole] = usePageStore((state) => [
    state.currentUserRole,
    state.setCurrentUserRole,
  ]);
  return (
    <div
      className={cn('grid h-full grid-cols-2 overflow-hidden bg-neutral-950 lg:bg-transparent', {
        'bg-secondary-900': currentUserRole === 'company',
      })}
    >
      <div className="col-span-2 flex max-h-screen flex-col gap-8 overflow-y-auto px-4 pt-8 lg:col-span-1 lg:px-8">
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
      <Poster
        bgUrl={
          currentUserRole == 'candidate'
            ? '/assets/images/auth/auth_candidate_background.png'
            : '/assets/images/auth/auth_company_background.png'
        }
        imgUrl={
          currentUserRole == 'candidate'
            ? '/assets/images/auth/register_candidate_vector.svg'
            : '/assets/images/auth/register_company_vector.svg'
        }
      />
    </div>
  );
};

export default Register;
