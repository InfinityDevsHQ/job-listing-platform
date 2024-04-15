import CompanyFacebook from "@/components/svgs/company-facebook";
import CompanyGithub from "@/components/svgs/company-github";
import CompanyInsta from "@/components/svgs/company-insta";
import CompanyTwitter from "@/components/svgs/company-twitter";
import CompanyYoutube from "@/components/svgs/company-youtube";
import Link from "next/link";

export default function Copyright() {
  return (
    <div className="col-span-2 flex flex-col lg:flex-row gap-10 items-center justify-between">
      <span className="text-sm lg:text-base font-normal lg:!font-medium leading-6 text-white">
        &copy; 2023 Project Al-fugu, Inc. All rights reserved.
      </span>
      <div className="flex items-center gap-5">
        <span>
          <Link href={"#"}>
            <CompanyFacebook width={30} height={30} />
          </Link>
        </span>
        <span>
          <Link href={"#"}>
            <CompanyInsta width={30} height={30} />
          </Link>
        </span>
        <span>
          <Link href={"#"}>
            <CompanyTwitter width={30} height={30} />
          </Link>
        </span>
        <span>
          <Link href={"#"}>
            <CompanyGithub width={30} height={30} />
          </Link>
        </span>
        <span>
          <Link href={"#"}>
            <CompanyYoutube width={30} height={30} />
          </Link>
        </span>
      </div>
    </div>
  );
}
