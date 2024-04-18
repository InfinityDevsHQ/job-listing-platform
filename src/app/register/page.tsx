"use client";
import Poster from "@/_components/poster";
import { useState } from "react";
import useRegisterStore from "@/stores/register-store";
import FormsHeader from "@/_components/forms-header";
import RegisterForm from "@/forms/register-form/register-form";
// For testing, update Later with api
const EmployOptions = [
  {
    value: 200,
    text: "200",
  },
  {
    value: 500,
    text: "500",
  },
];
const Countries = [
  { value: "Pakistan", text: "Pakistan" },
  { value: "Australia", text: "Australia" },
];
const Languages = [
  {
    value: "en",
    text: "English",
  },
  {
    value: "ur",
    text: "Urdu",
  },
];

export default function Register() {
  const [opened, setOpened] = useState<"Candidate" | "Company">("Candidate");
  const [employs, setEmploys] = useState<number | string>(
    EmployOptions[0].value
  );
  const [country, setCountry] = useState(Countries[0].value);
  const [language, setLanguage] = useState<string>(Languages[0].value);

  const { registerData, setRegisterData } = useRegisterStore();
  function handleChange(event) {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  }
  return (
    <main className="grid grid-cols-2 lg:h-screen overflow-hidden">
      <div className="overflow-auto col-span-2 lg:col-span-1 flex-center lg:block flex-col px-3.9 lg:px-0 bg-primary-900 lg:bg-primary-50">
        <FormsHeader />
        <RegisterForm
          opened={opened}
          setOpened={setOpened}
          handleChange={handleChange}
          employOptions={EmployOptions}
          employs={employs}
          setEmploys={setEmploys}
          countries={Countries}
          country={country}
          setCountry={setCountry}
          language={language}
          setLanguage={setLanguage}
          languages={Languages}
          registerFormData={registerData}
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
