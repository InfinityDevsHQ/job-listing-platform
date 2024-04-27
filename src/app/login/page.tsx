'use client';
import LoginForm from '@/components/forms/login-form/login-form';
import Poster from '@/components/poster';
import useLoginData from '@/stores/login-store';
import { useState } from 'react';

const Login = () => {
  const { loginData, setLoginData } = useLoginData();
  // Manages Login Inputs
  const [open, setOpen] = useState<'EmailPassword' | 'PasswordLess'>('EmailPassword');
  return (
    <div className="grid h-screen grid-cols-2 overflow-hidden bg-primary-900 lg:bg-transparent">
      <LoginForm loginData={loginData} setLoginData={setLoginData} open={open} setOpen={setOpen} />
      <Poster imgUrl="/assets/images/auth/login_vector.png" />
    </div>
  );
};

export default Login;
