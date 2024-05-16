import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { BellIcon, ChevronDown, MailIcon } from 'lucide-react';

export const Notifications = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="group relative inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium"
        >
          Notifications
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 bg-white pb-0">
        <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
          <span className="flex items-center justify-between gap-2">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
              <BellIcon className="h-4 w-4 text-gray-500" />
            </span>
            <span className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
          <span className="flex items-center justify-between gap-2">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
              <BellIcon className="h-4 w-4 text-gray-500" />
            </span>
            <span className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
          <span className="flex items-center justify-between gap-2">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
              <BellIcon className="h-4 w-4 text-gray-500" />
            </span>
            <span className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
          <span className="flex items-center justify-between gap-2">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
              <BellIcon className="h-4 w-4 text-gray-500" />
            </span>
            <span className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-neutral-950 focus:bg-transparent focus:text-neutral-900">
          <span className="flex items-center justify-between gap-2">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
              <BellIcon className="h-4 w-4 text-gray-500" />
            </span>
            <span className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
