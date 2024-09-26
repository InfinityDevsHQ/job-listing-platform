import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { BellIcon, ChevronDown, MailIcon } from 'lucide-react';

export const Notifications = () => {
  return (
    <div className="hidden lg:block">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="group relative inline-flex h-10 w-max items-center justify-center rounded-md border border-dark-background3 bg-dark-background p-2 text-sm font-medium text-dark-nameWhite"
          >
            Notifications
            <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-50 w-72 rounded-md border border-dark-background3 bg-dark-background py-2">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <DropdownMenuItem
                key={index}
                className="text-neutral-950 focus:bg-transparent focus:text-dark-name focus-visible:outline-none"
              >
                <span className="mx-1 flex items-center justify-between gap-2 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-dark-primary ">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-dark-primary">
                    <BellIcon className="h-4 w-4 text-dark-name" />
                  </span>
                  <span className="text-xs text-dark-name">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                  <MailIcon className="h-4 w-5 flex-shrink-0 text-dark-name" />
                </span>
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
