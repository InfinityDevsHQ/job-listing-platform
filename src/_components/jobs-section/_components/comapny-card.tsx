import CompanyArrow from "@/components/svgs/company-arrow";
import CompanyM from "@/components/svgs/company-arrow";
import CompanyPhone from "@/components/svgs/company-phone";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
type CompanyCardProps = {
  imgUrl: string;
  companyName: string;
  description: string;
};
export default function CompanyCard({
  imgUrl,
  companyName,
  description,
}: CompanyCardProps) {
  return (
    <div
      className="flex flex-col gap-3.9 lg:gap-8  p-3.9 lg:p-8 bg-gray-basic
    lg:bg-white rounded-20 lg:rounded-none lg:border border-neutral-200"
    >
      <header className="flex items-center gap-5">
        <span className="inline-block p-5 rounded-100 bg-gray-2">
          <Image
            src={imgUrl}
            alt={`${companyName} logo`}
            width={30}
            height={30}
            className="lg:hidden"
          />
          <Image
            src={imgUrl}
            alt={`${companyName} logo`}
            width={56}
            height={56}
            className="hidden lg:block"
          />
        </span>
        <h3 className="font-roboto font-bold text-3xl lg:text-mid-2 leading-9  tracking-fit text-deep-blue">
          {companyName}
        </h3>
      </header>
      <p className="text-xs leading-3.5 font-normal font-roboto">
        {description}
      </p>
      <div className="flex justify-between lg:hidden">
        <Link
          href={"/login"}
          className="flex items-center gap-1.3 bg-secondary  h-higher px-2.5 rounded-full"
        >
          <CompanyArrow width={13} height={12} />
          <span className="text-sm  text-white font-bold ">Login</span>
          <CompanyArrow width={13} height={12} />
        </Link>
      </div>
      <div className="hidden lg:flex justify-between leading-6 text-base font-sans font-medium">
        <Link href={"/login"} className="flex gap-2.5 px-4 py-2 items-center">
          <span>M</span>
          <span>Continue</span>
          <span>
            <CompanyPhone width={15} height={15} />
          </span>
        </Link>
      </div>
    </div>
  );
}
