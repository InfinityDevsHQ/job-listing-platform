'use client';
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
import useAuthStore from '@/stores/authStore/store';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const ApplyJobModal = ({ jobId }: { jobId: string }) => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const onClickLogin = () => {
    router.replace('/login');
  };
  if (!isAuthenticated) {
    return (
      <Button size="lg" type="button" onClick={onClickLogin}>
        Login to apply for this job
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    );
  }
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="lg">
            Apply <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="xl:min-w-4xl  bg-gray-200  lg:max-w-4xl">
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
