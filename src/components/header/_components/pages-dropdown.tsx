'use client';
import { Button } from '@/components/ui/button-new';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Book, ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export const PagesDropdown = () => {
  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Candidates',
      link: '/candidates',
    },
    {
      name: 'Companies',
      link: '/companies',
    },
    {
      name: 'Job Details',
      link: '/jobs/110',
    },
    {
      name: 'Create a Job',
      link: '/jobs/create',
    },
    {
      name: 'Login',
      link: '/login',
    },
    {
      name: 'Profile',
      link: '/profile',
    },
    {
      name: 'Register',
      link: '/register',
    },
    {
      name: 'Recruit',
      link: '/recruit',
    },
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger value={'Pages'} asChild className="hidden lg:flex">
        <Button variant="outline">
          <Book className="mr-2 h-4 w-4" />
          Pages
          <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 mt-1 w-36 rounded-lg border bg-white p-1 ">
        {links?.map((link, index) => (
          <Fragment key={index}>
            <DropdownMenuItem>
              <Link href={link.link}>
                <span className="flex items-center gap-2 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-gray-200">
                  <span className="-gap-1 flex flex-col">
                    <span className="font-medium capitalize">{link.name}</span>
                  </span>
                </span>
              </Link>
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
