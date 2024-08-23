import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { BellIcon, ChevronDown, MailIcon } from 'lucide-react';

export const Notifications = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="group relative inline-flex h-10 w-max items-center justify-center rounded-md bg-white p-2 text-sm font-medium"
        >
          Notifications
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 w-72 rounded-md border bg-white py-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <DropdownMenuItem
              key={index}
              className="text-neutral-950 focus:bg-transparent focus:text-neutral-900"
            >
              <span className="mx-1 flex items-center justify-between gap-2 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-gray-200">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <BellIcon className="h-4 w-4 text-gray-500" />
                </span>
                <span className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
                <MailIcon className="h-4 w-5 flex-shrink-0 text-gray-400" />
              </span>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
