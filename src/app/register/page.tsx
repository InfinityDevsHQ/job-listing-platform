"use client";
import Poster from "@/_components/poster";
import { useState } from "react";
import FormsHeader from "@/_components/forms-header";
import RegisterPage from "@/forms/register-form/register-page";

export default function Register() {
  const [opened, setOpened] = useState<"Candidate" | "Company">("Candidate");

  return (
    <main className="grid grid-cols-2 lg:h-screen overflow-hidden">
      <div className="overflow-auto col-span-2 lg:col-span-1 flex-center lg:block flex-col px-3.9 lg:px-0 bg-primary-900 lg:bg-primary-50">
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
    </main>
  );
}
