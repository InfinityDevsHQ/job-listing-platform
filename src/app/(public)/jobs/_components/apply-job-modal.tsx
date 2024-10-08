'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import ApplyJobForm from '@/components/forms/apply-job-form/apply-job-form';
import UserHeader from '@/components/gernal/user-header';
import { Button } from '@/components/ui/button-new';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/useMediaQuey';
import { ArrowRight, SendHorizonal } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
const ApplyJobModal = ({ jobId, skills }: { jobId: string; skills: string[] }) => {
  const [open, setOpen] = useState(false);
  const { data: user } = useUserProfile();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!user) {
    return (
      <Link className="flex w-full items-center justify-end" href={'/login'}>
        <Button size="lg" type="button" className="max-w-max" variant={'primary'}>
          Apply
          <SendHorizonal className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    );
  }
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex items-center">
            <Button size="lg" className="max-w-max" variant={'primary'}>
              Apply <SendHorizonal className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-gray-50 lg:max-w-4xl">
          <DialogHeader className="flex flex-col gap-6">
            <DialogTitle>Apply For this role.</DialogTitle>
            <UserHeader user_name={'Infinity Devs'} user_role={'hello@test.com'} />
          </DialogHeader>
          <ApplyJobForm jobId={jobId} skills={skills} />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size="lg" className="h-9 bg-primary sm:h-11">
            Apply
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-gray-50 p-4 lg:p-8">
          <DrawerHeader className="flex flex-col gap-6">
            <DrawerTitle>Apply For this role.</DrawerTitle>
            <UserHeader user_name={'Infinity Devs'} user_role={'hello@test.com'} />
          </DrawerHeader>
          <ApplyJobForm jobId={jobId} skills={skills} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default ApplyJobModal;
