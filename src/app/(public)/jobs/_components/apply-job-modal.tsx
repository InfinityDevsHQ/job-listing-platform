'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import ApplyJobForm from '@/components/forms/apply-job-form/apply-job-form';
import { Button } from '@/components/ui/button-new';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/useMediaQuey';
import { ArrowRight, SendHorizonal } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
const ApplyJobModal = ({ jobId }: { jobId: string }) => {
  const [open, setOpen] = useState(false);
  const { data: user } = useUserProfile();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!user) {
    return (
      <Link className="flex w-full items-center justify-end" href={'/login'}>
        <Button size="lg" type="button" className="max-w-max" variant={'primary'}>
          Apply
          <SendHorizonal className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    );
  }
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex w-full items-center">
            <Button size="lg" className="max-w-max" variant={'primary'}>
              Apply <SendHorizonal className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="xl:min-w-4xl bg-gray-200  lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Apply For this role.</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ApplyJobForm jobId={jobId} />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size="lg">
            Apply
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-gray-200 p-8">
          <DrawerHeader>
            <DrawerTitle>Apply For this role.</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <ApplyJobForm jobId={jobId} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default ApplyJobModal;
