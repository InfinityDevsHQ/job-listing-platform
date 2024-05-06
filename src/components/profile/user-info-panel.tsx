import { cn } from '@/lib/utils';
import {
  ClipboardIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button-new';
type UserInfoPanel = {
  online_status: 'Offline' | 'Online';
};
const UserInfoPanel = ({ online_status }: UserInfoPanel) => {
  return (
    <div className="hidden flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1 lg:flex lg:p-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={'/assets/candidates/candidate.png'}
          alt="test"
          width={150}
          height={150}
          className={cn('rounded-full border-4 border-gray-100 ring-4 ring-gray-500', {
            'ring-green-500': !online_status,
          })}
        />
        <div className="flex flex-col">
          <h4 className="pt-2 text-center text-xl font-bold text-neutral-950 lg:text-3xl">
            Saad Gulzar
          </h4>
          <p className="text-xl text-gray-500">Software Engineer</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Contact</h4>
        {/* TODO: create info-list component  */}
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
              <MapPinIcon className="h-5 w-5 text-primary-900" />
            </span>
            <p className="flex h-full flex-col justify-between">
              <span className="font-bold text-gray-700 lg:text-base">Location</span>
              <span className="text-gray-700 lg:text-base">Berlin, Germany</span>
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
              <ClockIcon className="h-5 w-5 text-primary-900" />
            </span>
            <p className="flex h-full flex-col justify-between">
              <span className="font-bold text-gray-700 lg:text-base">Timezone</span>
              <span className="text-gray-700 lg:text-base">(GMT +05:00) Islamabad</span>
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
              <MailIcon className="h-5 w-5 text-primary-900" />
            </span>
            <p className="flex h-full flex-col justify-between">
              <span className="font-bold text-gray-700 lg:text-base">Email</span>
              <span className="text-gray-700 lg:text-base">hello@test.com</span>
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
              <LinkIcon className="h-5 w-5 text-primary-900" />
            </span>
            <p className="flex h-full flex-col justify-between">
              <span className="flex items-center gap-2 font-bold text-gray-700 lg:text-base">
                <span>Public Profile</span>
                <Button variant="outline" size="icon-xs">
                  <ClipboardIcon className="h-4 w-4" />
                </Button>
              </span>
              <span className="text-gray-700 lg:text-base">clickjob.ai/john-doe</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Resume</h4>
        {/* TODO: create info-list component  */}
        <ul className="flex flex-col gap-8">
          <li className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
              <FileIcon className="h-5 w-5 text-primary-900" />
            </span>
            <p className="flex h-full flex-col justify-between">
              <span className="flex items-center gap-2 font-bold text-gray-700 lg:text-base">
                Saad Gulzar Resume
                <Button variant="outline" size="icon-xs">
                  <ExternalLinkIcon className="h-4 w-4" />
                </Button>
              </span>
              <span className="text-gray-700 lg:text-base">Created 4 Hours Ago</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserInfoPanel;
