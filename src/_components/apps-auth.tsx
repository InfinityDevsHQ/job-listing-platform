import CompanyGithub from "@/components/svgs/company-github-second";
import CompanyGoogle from "@/components/svgs/company-google";
import CompanyLinkedin from "@/components/svgs/company-linedin";
import Link from "next/link";
type AppsAuthProps = {
  google?: boolean;
  github?: boolean;
  linkedin?: boolean;
  auth: "login" | "register";
};
export default function AppsAuth({
  google,
  github,
  linkedin,
  auth,
}: AppsAuthProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {google && (
        <Link
          href={"#"}
          className="flex gap-2 items-center bg-neutral-50 px-4 py-2 border border-neutral-200 text-black font-sans leading-6 font-medium lg:text-15"
        >
          <CompanyGoogle />
          <span>Google</span>
        </Link>
      )}
      {github && (
        <Link
          href={"#"}
          className="flex gap-2 items-center bg-neutral-50 px-4 py-2 border border-neutral-200 text-black font-sans leading-6 font-medium lg:text-15"
        >
          <CompanyGithub />
          <span>Github</span>
        </Link>
      )}
      {linkedin && (
        <Link
          href={"#"}
          className="flex gap-2 items-center bg-neutral-50 px-4 py-2 border border-neutral-200 text-black font-sans leading-6 font-medium lg:text-15"
        >
          <CompanyLinkedin />
          <span>Linkedin</span>
        </Link>
      )}
    </div>
  );
}
