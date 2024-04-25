import FacebookIcon from '@/components/svgs/facebook';
import GithubIcon from '@/components/svgs/github';
import InstagramIcon from '@/components/svgs/instagram';
import TwitterIcon from '@/components/svgs/twitter';
import YoutubeIcon from '@/components/svgs/youtube';

import Link from 'next/link';

import { socialLinkProps } from '@/types/types';

const Copyright = () => {
  const socialLinks: socialLinkProps[] = [
    { platform: 'Facebook', href: '#', icon: <FacebookIcon /> },
    { platform: 'Instagram', href: '#', icon: <InstagramIcon /> },
    { platform: 'Twitter', href: '#', icon: <TwitterIcon /> },
    { platform: 'Github', href: '#', icon: <GithubIcon /> },
    { platform: 'Youtube', href: '#', icon: <YoutubeIcon /> },
  ];

  return (
    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
      <span className="text-sm text-white lg:text-base">&copy; 2024 - All Rights Reserved</span>
      <ul className="flex items-center gap-4">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              title={link.platform}
              className="text-white hover:text-neutral-300"
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Copyright;
