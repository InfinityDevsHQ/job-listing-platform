import AppsAuth from '@/components/apps-auth';
import LoginRegisterToggler from '@/components/login-register-toggler';
import PageHeader from '@/components/page-header';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyLock from '@/components/svgs/company-lock';
import CompanyMail from '@/components/svgs/coompany-mail';
import TabNavigator from '@/components/tab-navigator';
import Button from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import VectorText from '@/components/vector-text';
import useTogglePasswordDisplay from '@/hooks/use-toggle-password-display';
import { loginFormSchema } from '@/types/schemas/loginformschema';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ZodIssue } from 'zod';
type LoginFormProps = {
  setOpen: (value: 'EmailPassword' | 'PasswordLess') => void;
  open: 'EmailPassword' | 'PasswordLess';
  loginData: LoginFormData;
  setLoginData: (data: unknown) => void;
};
export default function LoginForm({ open, setOpen, loginData, setLoginData }: LoginFormProps) {
  // for tracking and displaying zod validation error
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    email: '',
    password: '',
  });
  const [showPassword, togglePasswordVisibility] = useTogglePasswordDisplay(false);
  const Tabs = [
    {
      tabText: 'Email / Password',
      clickHandler: () => setOpen('EmailPassword'),
      active: open === 'EmailPassword',
    },
    {
      tabText: 'Password Less',
      clickHandler: () => setOpen('PasswordLess'),
      active: open === 'PasswordLess',
    },
  ];
  const handleChange = (event: ChangeEvent<HTMLInputElement> | FormEvent<HTMLFormElement>) => {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      const { name, value } = target;
      setLoginData({ ...loginData, [name]: value });
      setErrors({ ...errors, [name]: '' });
    }
  };
  console.log('Remember Me:', loginData.remember);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationResult = loginFormSchema.safeParse(loginData);
    if (validationResult.success) {
    } else {
      const validationErrors = validationResult.error.errors;
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      const updatedErrors =
        open === 'EmailPassword'
          ? { ...errors, ...formattedErrors }
          : { ...errors, email: formattedErrors.email || '' };
      setErrors(updatedErrors);
    }
    if (!errors.password && errors.email) {
      // Form Submission logic
    }
    console.log(errors);
  }

  return (
    <form
      className="col-span-2 flex flex-col gap-4 px-4 pt-8 lg:col-span-1 lg:max-h-screen lg:gap-8 lg:overflow-y-auto lg:px-8"
      onSubmit={handleSubmit}
    >
      <PageHeader title="Login to your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google github linkedin auth="login" />
      <VectorText text="OR" />
      <TabNavigator tabs={Tabs} />
      <>
        <Input
          variant={'primary'}
          placeholder="Email"
          name="email"
          type="email"
          value={loginData.email}
          helpText={errors.email && errors.email}
          onChange={(e) => handleChange(e)}
          leadingIcon={<CompanyMail width={16} height={16} />}
        />

        {open === 'EmailPassword' && (
          <>
            <Input
              variant={'primary'}
              placeholder="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              onTrailingClick={togglePasswordVisibility}
              value={loginData.password}
              helpText={errors.password && errors.password}
              min={8}
              onChange={(e) => handleChange(e)}
              leadingIcon={<CompanyLock width={14} height={15} />}
              trailingIcon={<CompanyEye width={16} height={13} />}
            />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  className="bg-white data-[state=checked]:bg-white"
                  id="reminder"
                  checked={loginData.remember}
                  onClick={() => setLoginData({ ...loginData, remember: !loginData.remember })}
                  name="remember"
                />
                <label htmlFor="reminder" className="text-neutral-50 lg:text-gray-800">
                  Remember Me
                </label>
              </div>
              <Link href={'#'} className="text-neutral-50 lg:text-gray-800">
                Forgot Password?
              </Link>
            </div>
          </>
        )}
      </>

      <Button
        variant={'primary'}
        text="Login"
        type="submit"
        trailingIcon={<ArrowRight className="h-5 w-5" />}
        className="!max-w-full justify-center"
      />
      <LoginRegisterToggler currentPage="login" />
    </form>
  );
}
