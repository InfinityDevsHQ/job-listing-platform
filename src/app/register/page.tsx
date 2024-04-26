'use client';
import Poster from '@/_components/poster';
import RegisterPage from '@/forms/register-form/register-page';
import { useState } from 'react';

export default function Register() {
  const [opened, setOpened] = useState<'Candidate' | 'Company'>('Candidate');

  return (
    <div className="grid h-full grid-cols-2 overflow-hidden bg-primary-900 lg:bg-transparent">
      <RegisterPage opened={opened} setOpened={setOpened} />
      <Poster imgUrl="/assets/images/auth/login_vector.png" />
    </div>
  );
}
export default Register;
