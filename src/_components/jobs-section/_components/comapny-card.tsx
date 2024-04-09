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
      className="flex flex-col gap-[15px] lg:gap-8  p-[15px] lg:p-8 bg-[#f7f7f7]
    lg:bg-white rounded-20 lg:rounded-none lg:border border-neutral-200"
    >
      <header className="flex items-center gap-5">
        <span className="inline-block p-5 rounded-100 bg-[#D9D9D9]">
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
        <h3 className="font-roboto font-bold text-3xl lg:text-[32px] leading-[40px]  tracking-[-0.002em] text-[#1D192F] ">
          {companyName}
        </h3>
      </header>
      <p className="text-xs leading-[14px] font-normal font-roboto">
        {description}
      </p>
      <div className="flex justify-between lg:hidden">
        <span />
        <Link
          href={"/login"}
          className="flex items-center gap-five bg-secondary  h-[35px] px-2.5 rounded-full"
        >
          <span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9766 6.87891L7.60156 11.2539C7.27344 11.6094 6.69922 11.6094 6.37109 11.2539C6.01562 10.9258 6.01562 10.3516 6.37109 10.0234L9.24219 7.125H0.875C0.382812 7.125 0 6.74219 0 6.25C0 5.78516 0.382812 5.375 0.875 5.375H9.24219L6.37109 2.50391C6.01562 2.17578 6.01562 1.60156 6.37109 1.27344C6.69922 0.917969 7.27344 0.917969 7.60156 1.27344L11.9766 5.64844C12.332 5.97656 12.332 6.55078 11.9766 6.87891Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-sm  text-white font-bold ">Login</span>
          <span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9766 6.87891L7.60156 11.2539C7.27344 11.6094 6.69922 11.6094 6.37109 11.2539C6.01562 10.9258 6.01562 10.3516 6.37109 10.0234L9.24219 7.125H0.875C0.382812 7.125 0 6.74219 0 6.25C0 5.78516 0.382812 5.375 0.875 5.375H9.24219L6.37109 2.50391C6.01562 2.17578 6.01562 1.60156 6.37109 1.27344C6.69922 0.917969 7.27344 0.917969 7.60156 1.27344L11.9766 5.64844C12.332 5.97656 12.332 6.55078 11.9766 6.87891Z"
                fill="white"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="hidden lg:flex justify-between leading-[24px] text-base font-geist font-medium">
        <span />
        <Button className="flex gap-2.5 px-4 py-2 items-center">
          <span>M</span>
          <span>Continue</span>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2539 8.29688L13.3164 9.60938C13.8086 9.80078 14.082 10.3203 13.9727 10.8398L13.3164 13.9023C13.207 14.3945 12.7422 14.7773 12.25 14.7773C12.0586 14.7773 11.8945 14.75 11.7305 14.75C11.457 14.75 11.1836 14.7227 10.9375 14.6953C4.78516 14.0391 0 8.84375 0 2.5C0 2.00781 0.355469 1.54297 0.847656 1.43359L3.91016 0.777344C4.42969 0.667969 4.94922 0.941406 5.14062 1.43359L6.45312 4.49609C6.64453 4.93359 6.53516 5.45312 6.15234 5.75391L5.03125 6.68359C5.76953 7.94141 6.80859 8.98047 8.06641 9.71875L8.99609 8.59766C9.29688 8.21484 9.81641 8.10547 10.2539 8.29688ZM12.0586 13.4375L12.6328 10.7305L9.89844 9.55469L9.10547 10.5391C8.69531 11.0312 7.98438 11.168 7.41016 10.8398C5.96094 9.99219 4.75781 8.78906 3.91016 7.33984C3.58203 6.76562 3.71875 6.05469 4.21094 5.64453L5.19531 4.85156L4.01953 2.11719L1.3125 2.69141C1.39453 8.59766 6.15234 13.3555 12.0586 13.4375Z"
                fill="white"
              />
            </svg>
          </span>
        </Button>
      </div>
    </div>
  );
}
