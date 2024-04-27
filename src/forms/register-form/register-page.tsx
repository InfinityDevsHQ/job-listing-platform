import AppsAuth from '@/_components/apps-auth';
import LoginRegisterToggler from '@/_components/login-register-toggler';
import PageHeader from '@/_components/page-header';
import TabNavigator from '@/_components/tab-navigator';
import VectorText from '@/_components/vector-text';
// import RegisterCandidateForm from './register-candidate-form';
import RegisterCandidateForm from '@/forms/register';

type RegisterFormProps = {
  opened: 'Company' | 'Candidate';
  setOpened: (value: 'Company' | 'Candidate') => void;
};
export default function RegisterPage({ opened, setOpened }: RegisterFormProps) {
  const tabs = [
    {
      tabText: 'Candidate',
      clickHandler: () => setOpened('Candidate'),
      active: opened === 'Candidate',
    },
    {
      tabText: 'Company',
      clickHandler: () => setOpened('Company'),
      active: opened === 'Company',
    },
  ];

  return (
    <div className="col-span-2 flex flex-col gap-4 px-4 pt-8 lg:col-span-1 lg:max-h-screen lg:gap-8 lg:overflow-y-auto lg:px-8">
      <PageHeader title="Create your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google linkedin github auth="register" />
      <VectorText text="OR" />
      <TabNavigator tabs={tabs} />
      {/* {opened === 'Company' ? <RegisterCompanyForm /> : <RegisterCandidateForm />} */}
      <RegisterCandidateForm />
      <LoginRegisterToggler currentPage="register" />
    </div>
  );
}
