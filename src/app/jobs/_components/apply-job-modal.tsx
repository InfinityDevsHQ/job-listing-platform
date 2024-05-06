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
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
const ApplyJobModal = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={'lg'}>
            Apply <ArrowRight className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="xl:min-w-4xl  bg-gray-200  lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Apply For this role.</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ApplyJobForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size={'lg'}>
            Apply
            <ArrowRight className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-gray-200 p-8">
          <DrawerHeader>
            <DrawerTitle>Apply For this role.</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <ApplyJobForm />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default ApplyJobModal;
