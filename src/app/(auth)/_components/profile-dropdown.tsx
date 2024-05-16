import { USER_PROFILE, useUserProfile } from '@/app/utils/rq/hooks/use-auth';
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
    await queryClient.invalidateQueries({
      queryKey: [USER_PROFILE],
    });
    router.push('/login');
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium">
          <span>Profile</span>
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 bg-white">
        <DropdownMenuItem>
          <Link href="/profile" legacyBehavior passHref>
            <span className="flex items-center gap-2">
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
              <span className="-gap-1 flex flex-col">
                <span className="font-medium">{data?.user_data?.name}</span>
                <span className="text-xs">Software Engineer</span>
              </span>
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href="/my-applications" legacyBehavior passHref>
          <DropdownMenuItem disabled>My Applications</DropdownMenuItem>
        </Link>
        <Link href="/job-offers" legacyBehavior passHref>
          <DropdownMenuItem disabled>Job Offers</DropdownMenuItem>
        </Link>
        <Link href="/jobs-filter" legacyBehavior passHref>
          <DropdownMenuItem disabled>Jobs Filter</DropdownMenuItem>
        </Link>
        <Link href="/settings" legacyBehavior passHref>
          <DropdownMenuItem disabled>Settings</DropdownMenuItem>
        </Link>
        <Link href="/email-notifications" legacyBehavior passHref>
          <DropdownMenuItem disabled>Email Notifications</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-red-50 focus:text-red-900">
          <button onClick={() => logout()}>Log out</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
