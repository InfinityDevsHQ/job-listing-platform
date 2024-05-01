'use client';
import InfoList from '@/components/ui/info-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { deleteToken, getToken } from '@/lib/auth-token';
import { getUser } from '@/lib/user';
import { cn } from '@/lib/utils';
import useAuthStore from '@/stores/authStore/store';
import { FileIcon, LinkIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Profile = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const logout = async () => {
    await deleteToken();
    router.push('/login');
  };

  const setUser = useAuthStore((state) => state.setUser);

  const checkToken = async () => {
    const accessToken = await getToken();
    if (!accessToken) {
      router.push('/login');
      return;
    }
  };

  useEffect(() => {
    checkToken();

    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <div className="flex flex-col gap-8 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1 lg:p-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={'/assets/candidates/candidate.png'}
            alt="test"
            width={150}
            height={150}
            className={cn('rounded-full border-4 border-gray-100 ring-4 ring-gray-500', {
              'ring-green-500': !user.online_status,
            })}
          />
          <h4 className="pt-2 text-xl font-bold text-neutral-950 lg:text-4xl">{user.name}</h4>
          <p className="text-2xl text-gray-500">Software Engineer</p>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Contact</h4>
          {/* TODO: create info-list component  */}
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
                <MapPinIcon className="h-5 w-4 text-gray-500" />
              </span>
              <p className="flex h-full flex-col justify-between">
                <p className="font-bold text-gray-700 lg:text-base">Location</p>
                <p className="text-gray-700 lg:text-base">Berlin, Germany</p>
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Resume</h4>
          {/* TODO: create info-list component  */}
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
                <FileIcon className="h-5 w-4 text-gray-500" />
              </span>
              <p className="flex h-full flex-col justify-between">
                <p className="font-bold text-gray-700 lg:text-base">Saad Gulzar Resume</p>
                <p className="text-gray-700 lg:text-base">Created 4 Hours Ago</p>
              </p>
              <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary-100">
                <LinkIcon className="h-5 w-4 text-primary-900" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-3 lg:p-8">
        <Tabs defaultValue="about" className="flex flex-col gap-4">
          <TabsList className="mx-0 bg-primary-50">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="ai-insights">Ai Powered Insights</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="flex flex-col gap-4 lg:gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-gray-700">Profile</h2>
              <p className="text-base text-gray-500">
                I am looking to enhance my skills in advanced web development and contribute to
                innovative projects. Seeking opportunities to excel in UI design and collaborative
                environments. Passionate about creating efficient and user-friendly web systems.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-gray-700">Summary</h2>
              <p className="text-base text-gray-500">
                Testing, and debugging. Proficient in HTML, CSS, Tailwind CSS, JavaScript, Vue.js,
                React.js, Node.js, Express.js, and MongoDB. Experienced in autonomous project
                management and collaborative teamwork. Successfully developed interactive web
                applications with modern frameworks. Specialized in frontend architecture and
                improving website performance. Completed 100+ projects with high ratings on Fiverr
                and Upwork. Strong expertise in HTML, CSS, JavaScript, Tailwind CSS, Vue.js,
                React.js, and Node.js projects.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-gray-700">Expertise</h2>
              <InfoList
                list={[
                  'Advanced web development',
                  'UI design',
                  'Testing methodologies',
                  'Debugging',
                  'Project management',
                  'Collaborative teamwork',
                  'Frontend architecture',
                ]}
              />
            </div>
          </TabsContent>
          <TabsContent value="ai-insights"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Profile;
