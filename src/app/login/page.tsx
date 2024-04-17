"use client";
import AppsAuth from "@/_components/apps-auth";
import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import LoginInputs from "./_components/login-inputs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Poster from "@/_components/poster";
import LoginInputsToggler from "./_components/login-inputs-toggler";
import { useState } from "react";
import useLoginData from "@/stores/login-store";
import CompanyArrow from "@/components/svgs/company-arrow";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import LoginForm from "@/forms/login-form/login-form";
export default function Login() {
  const { loginData, setLoginData } = useLoginData();
  // Manages Login Inputs
  const [open, setOpen] = useState<"EmailPassword" | "PasswordLess">(
    "EmailPassword"
  );
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="col-span-2 lg:col-span-1 flex-center lg:block flex-col px-3.9 lg:px-0 bg-primary lg:bg-red-200">
        <div className="mb-16 mt-10 lg:mb-37 lg:ml-10">
          <Image
            src={"/assets/logo_white_vertical.png"}
            className="lg:hidden"
            alt="Logo"
            width={77}
            height={58}
          />
          <Image
            src={"/assets/logo.png"}
            className="hidden lg:inline-block"
            alt="Logo"
            width={208}
            height={50}
          />
        </div>
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
    </main>
  );
}
