"use client";
import Poster from "@/_components/poster";
import Image from "next/image";
import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import AppsAuth from "@/_components/apps-auth";
import { Button } from "@/components/ui/button";
import RegisterCompanyInputs from "./_components/register-company-inputs";
import InputsToggler from "./_components/register-inputs-toggler";
import { useState } from "react";
import useRegisterStore from "@/stores/register-store";
import RegisterCandidateInputs from "./_components/register-candidate-inputs";
import CompanyArrow from "@/components/svgs/company-arrow";
import LoginRegisterToggler from "@/_components/login-register-toggler";
export default function Register() {
  const [opened, setOpened] = useState("Candidate");
  const { registerData, setRegisterData } = useRegisterStore();
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
          <PageHeader title="Create your Account" />
          <VectorText text="Select Method to Login" />
          <AppsAuth google linkedin github auth="register" />
          <VectorText text="or" />
          <InputsToggler open={opened} registerSetOpen={setOpened} />

          {opened === "Company" ? (
            <RegisterCompanyInputs />
          ) : (
            <RegisterCandidateInputs />
          )}
          <Button className="flex items-center gap-2.5 font-sans bg-primary-900 px-4 py-2 text-base leading-6 text-white font-medium">
            <span>Continue</span>
            <CompanyArrow
              width={16}
              height={16}
              fill="white"
              className="pt-1"
            />
          </Button>
          <LoginRegisterToggler currentPage="register" />
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
