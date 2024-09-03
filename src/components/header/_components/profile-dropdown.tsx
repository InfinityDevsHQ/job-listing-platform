'use client';
import { USER_PROFILE, useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { ALL_JOBS_KEY } from '@/app/utils/rq/hooks/use-jobs';
import { removeToken } from '@/lib/auth';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useQueryClient } from '@tanstack/react-query';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const ProfileDropdown = () => {
  const { data } = useUserProfile();
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    removeToken();
    router.replace('/login');
    await queryClient.invalidateQueries({
      queryKey: [USER_PROFILE],
    });
    await queryClient.invalidateQueries({
      queryKey: [ALL_JOBS_KEY],
    });
  };
  if (!data?.user_data) {
    return;
  }
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm">
          <span>Profile</span>
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 w-52 rounded-md border border-gray-300 bg-white p-2">
        <DropdownMenuItem>
          <Link href="/profile" legacyBehavior passHref>
            <span className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-gray-200 focus-visible:outline-none">
              {data?.user_data?.profile_picture && (
                <Image
                  src={data?.user_data?.profile_picture}
                  alt="test"
                  width={40}
                  height={40}
                  className={cn('rounded-full border-2 border-gray-200', {
                    'border-green-500': data?.user_data?.online_status !== 'Offline', //TODO: add user online state
                  })}
                />
              )}
              <span className="-gap-1 flex flex-col text-gray-500">
                <span className="font-medium">{data?.user_data?.name}</span>
                <span className="text-xs">Software Engineer</span>
              </span>
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <span className="mt-2 flex items-center rounded-md px-4 py-1 text-gray-500 hover:cursor-pointer hover:bg-gray-200">
          <Link href="/my-applications" legacyBehavior passHref>
            <DropdownMenuItem disabled>My Applications</DropdownMenuItem>
          </Link>
        </span>
        <span className="flex items-center rounded-md px-4 py-1 text-gray-500 hover:cursor-pointer hover:bg-gray-200">
          <Link
            className=" rounded-md px-4 py-1 hover:cursor-pointer hover:bg-gray-200"
            href="/job-offers"
            legacyBehavior
            passHref
          >
            <DropdownMenuItem disabled>Job Offers</DropdownMenuItem>
          </Link>
        </span>

        <span className="flex items-center rounded-md px-4 py-1 text-gray-500 hover:cursor-pointer hover:bg-gray-200">
          <Link
            className=" rounded-md px-4 py-1 hover:cursor-pointer hover:bg-gray-200"
            href="/jobs-filter"
            legacyBehavior
            passHref
          >
            <DropdownMenuItem disabled>Jobs Filter</DropdownMenuItem>
          </Link>
        </span>
        <span className="flex items-center rounded-md px-4 py-1 text-gray-500 hover:cursor-pointer hover:bg-gray-200">
          <Link
            className=" rounded-md px-4 py-1 hover:cursor-pointer hover:bg-gray-200"
            href="/settings"
            legacyBehavior
            passHref
          >
            <DropdownMenuItem disabled>Settings</DropdownMenuItem>
          </Link>
        </span>
        <span className="flex items-center rounded-md px-4 py-1 text-gray-500 hover:cursor-pointer hover:bg-gray-200">
          <Link
            className=" rounded-md px-4 py-1 hover:cursor-pointer hover:bg-gray-200"
            href="/email-notifications"
            legacyBehavior
            passHref
          >
            <DropdownMenuItem disabled>Email Notifications</DropdownMenuItem>
          </Link>
        </span>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-red-50 ">
          <span className="flex items-center rounded-md px-4 py-1 text-gray-500 hover:cursor-pointer hover:bg-red-700 hover:text-white hover:outline-none">
            <button onClick={async () => await logout()} type="button" className="all">
              Log out
            </button>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
