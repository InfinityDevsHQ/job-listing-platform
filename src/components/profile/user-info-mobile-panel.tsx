import {
  ClipboardIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button-new';
import UserHeader from '../user-header';

const UserInfoMobilePanel = ({ online_status }: { online_status: 'Offline' | 'Online' }) => {
  return (
    <Accordion type="single" collapsible className="flex w-full flex-col gap-4 lg:hidden">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <UserHeader
            online_status={online_status}
            user_name="Saad Gulzar"
            user_role="Software Engineer"
          />
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4 rounded-md bg-white">
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-gray-700 lg:text-xl">Contact</h4>
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
                      Public Profile
                      <Button size="icon-xs">
                        <ClipboardIcon className="h-4 w-4" />
                      </Button>
                    </span>
                    <span className="text-gray-700 lg:text-base">clickjob.ai/john-doe</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-gray-700 lg:text-xl">Resume</h4>
              {/* TODO: create info-list component  */}
              <ul className="flex flex-col gap-8">
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                    <FileIcon className="h-5 w-5 text-primary-900" />
                  </span>
                  <p className="flex h-full flex-col justify-between">
                    <span className="flex items-center gap-2 font-bold text-gray-700 lg:text-base">
                      Saad Gulzar Resume
                      <Button size="icon-xs">
                        <ExternalLinkIcon className="h-4 w-4" />
                      </Button>
                    </span>
                    <span className="text-gray-700 lg:text-base">Created 4 Hours Ago</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default UserInfoMobilePanel;
