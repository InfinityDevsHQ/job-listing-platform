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
export default function Login() {
  const { loginData, setLoginData } = useLoginData();
  // Manages Login Inputs
  const [open, setOpen] = useState("EmailPassword");
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
        <form className="flex flex-col gap-8 px-35">
          <PageHeader title="Login to your Account" />
          <VectorText text="Select Method to Login" />
          <AppsAuth google github linkedin auth="login" />
          <VectorText text="or" />
          <LoginInputsToggler open={open} loginSetOpen={setOpen} />
          <LoginInputs
            loginData={loginData}
            setLoginData={setLoginData}
            openInputs={open}
          />
          <Button className="flex items-center gap-2.5 font-sans bg-primary-900 px-4 py-2 text-base leading-6 text-white font-medium">
            <span>Login</span>
            <CompanyArrow
              width={16}
              height={16}
              fill="white"
              className="pt-1"
            />
          </Button>
          <LoginRegisterToggler currentPage="login" />
        </form>
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
