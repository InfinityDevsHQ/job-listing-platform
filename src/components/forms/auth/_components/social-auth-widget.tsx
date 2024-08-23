import CompanyGithub from '@/components/svgs/company-github-second';
import CompanyGoogle from '@/components/svgs/company-google';
import CompanyLinkedin from '@/components/svgs/company-linedin';
import { Button } from '@/components/ui/button-new';
import Link from 'next/link';

type AppsAuthProps = {
  google?: boolean;
  github?: boolean;
  linkedin?: boolean;
  auth: 'login' | 'register';
};
const SocialAuthWidget = ({ google, github, linkedin, auth }: AppsAuthProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {google && (
        <Link href={'#'}>
          <Button variant="outline" className="flex gap-2 bg-primary-background">
            <CompanyGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
        </Link>
      )}
      {github && (
        <Link href={'#'}>
          <Button variant="outline" className="flex gap-2 bg-primary-background">
            <CompanyGithub className="mr-2 h-4 w-4" />
            Github
          </Button>
        </Link>
      )}
      {linkedin && (
        <Link href={'#'}>
          <Button variant="outline" className="flex gap-2 bg-primary-background">
            <CompanyLinkedin />
            Linkedin
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SocialAuthWidget;
