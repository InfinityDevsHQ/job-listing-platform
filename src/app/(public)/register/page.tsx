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
    <div className="relative grid h-screen items-center justify-center lg:grid-cols-2 lg:overflow-hidden">
      <Image
        src={'/assets/auth/login-poster.png'}
        alt="Login Poster"
        width={100000}
        height={1000000}
        className="absolute left-0 top-0 -z-10 h-full w-full lg:hidden"
      />
      <div className="flex h-screen items-center justify-center lg:overflow-y-auto">
        <div className="flex flex-col gap-8 rounded-2xl  pt-32 lg:w-[500px]">
          <Image
            src={'/assets/logo_white_vertical.png'}
            alt="Logo"
            width={80}
            height={86}
            className="mx-auto lg:hidden"
          />
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

export default Register;
