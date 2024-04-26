'use client';
import FormsHeader from '@/_components/forms-header';
import Poster from '@/_components/poster';
import RegisterPage from '@/forms/register-form/register-page';
import { useState } from 'react';

const Register = () => {
  const [opened, setOpened] = useState<'Candidate' | 'Company'>('Candidate');

  return (
    <div className="grid grid-cols-2 overflow-hidden lg:h-screen">
      <div className="flex-center px-3.9 col-span-2 flex-col overflow-auto bg-primary-900 lg:col-span-1 lg:block lg:bg-primary-50 lg:px-0">
        <FormsHeader />
        <RegisterPage opened={opened} setOpened={setOpened} />
      </div>
      <Poster
        imgUrl="/assets/login_poster.png"
        heading="Clickjob.ai"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            officia hic ducimus voluptatibus libero asperiores veritatis magni
            aliquam. Rem vitae cupiditate velit tenetur veritatis repellat,
            delectus placeat minima saepe architecto?"
      />
    </div>
  );
};
export default Register;
