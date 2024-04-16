import Poster from "@/_components/poster";
import Image from "next/image";
import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import AppsAuth from "@/_components/apps-auth";
import { Button } from "@/components/ui/button";
import RegisterCompanyInputs from "./_components/register-company-inputs";
export default function Register() {
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
          <VectorText text="Select Account Type" />
          <VectorText text="Select Method to Login" />
          <AppsAuth />
          <RegisterCompanyInputs />
          <VectorText text="or Continue with Email" />
          {/* Replace text with Gray/800 and bg with gray-200 later */}
          <Button className="font-sans bg-white px-4 py-2 text-16 leading-6 text-gray-medium font-medium">
            Cancel
          </Button>
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
