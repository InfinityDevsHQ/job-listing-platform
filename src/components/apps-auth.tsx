import CompanyGithub from '@/components/svgs/company-github-second';
import CompanyGoogle from '@/components/svgs/company-google';
import CompanyLinkedin from '@/components/svgs/company-linedin';
import Button from '@/components/ui/button';
import Link from 'next/link';
type AppsAuthProps = {
  google?: boolean;
  github?: boolean;
  linkedin?: boolean;
  auth: 'login' | 'register';
};
export default function AppsAuth({ google, github, linkedin, auth }: AppsAuthProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {google && (
        <Link href={'#'}>
          <Button variant="white-primary" leadingIcon={<CompanyGoogle />} text="Google" />
        </Link>
      )}
      {github && (
        <Link href={'#'}>
          <Button variant="white-primary" leadingIcon={<CompanyGithub />} text="Github" />
        </Link>
      )}
      {linkedin && (
        <Link href={'#'}>
          <Button variant="white-primary" leadingIcon={<CompanyLinkedin />} text="Linkedin" />
        </Link>
      )}
    </div>
  );
}
