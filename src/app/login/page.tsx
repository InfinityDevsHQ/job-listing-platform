"use client";
import Poster from "@/_components/poster";
import { useState } from "react";
import useLoginData from "@/stores/login-store";
import LoginForm from "@/forms/login-form/login-form";
import FormsHeader from "@/_components/forms-header";
export default function Login() {
  const { loginData, setLoginData } = useLoginData();
  // Manages Login Inputs
  const [open, setOpen] = useState<"EmailPassword" | "PasswordLess">(
    "EmailPassword"
  );
  return (
    <div className="grid grid-cols-2 lg:h-screen overflow-hidden">
      <div className="overflow-auto  col-span-2 lg:col-span-1 flex-center lg:block flex-col px-3.9 lg:px-0 bg-primary-900 lg:bg-primary-50">
        <FormsHeader />
        <LoginForm
          loginData={loginData}
          setLoginData={setLoginData}
          open={open}
          setOpen={setOpen}
        />
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
}
