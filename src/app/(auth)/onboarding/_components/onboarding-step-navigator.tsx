'use client';
import { Button } from '@/components/ui/button-new';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { useQueryParams } from '@/hooks/useQueryParams';
import { cn } from '@/lib/utils';
import { Contact, Filter, Flag, Locate, Upload } from 'lucide-react';
type OnboardingStepNavigatorProps = {
  step?: string;
};
export default function OnboardingStepNavigator({ step }: OnboardingStepNavigatorProps) {
  const addQueryParams = useQueryParams();
  const handleTabSelect = (value: string) => {
    addQueryParams('step', value);
  };
  // useEffect(() => {
  //   window.history.replaceState({}, document.title, window.location.pathname);
  //   if (!step) {
  //     window.history.replaceState({}, document.title, window.location.pathname);
  //   }
  // }, [step]);
  return (
    <Tabs className="mb-3">
      <TabsList className="flex items-center bg-transparent">
        <Button
          onClick={() => handleTabSelect('location')}
          variant={step === 'location' ? 'primary' : 'outline'}
          className={cn(
            'flex cursor-default items-center gap-2 !border-none',
            step !== 'location' ? 'bg-transparent' : ''
          )}
        >
          <Locate className="h-3 w-3" />
          1. Location
        </Button>

        <Button
          onClick={() => handleTabSelect('upload-cv')}
          variant={step === 'upload-cv' ? 'primary' : 'outline'}
          className={cn(
            'flex cursor-default items-center gap-2 !border-none',
            step !== 'upload-cv' ? 'bg-transparent' : ''
          )}
        >
          <Upload className="h-3 w-3" />
          2. Upload CV
        </Button>

        <Button
          onClick={() => handleTabSelect('filter-jobs')}
          variant={step === 'filter-jobs' ? 'primary' : 'outline'}
          className={cn(
            'flex cursor-default items-center gap-2 !border-none',
            step !== 'filter-jobs' ? 'bg-transparent' : ''
          )}
        >
          <Filter className="h-3 w-3" />
          3. Filter Jobs
        </Button>

        <Button
          onClick={() => handleTabSelect('contact')}
          variant={step === 'contact' ? 'primary' : 'outline'}
          className={cn(
            'flex cursor-default items-center gap-2 !border-none',
            step !== 'contact' ? 'bg-transparent' : ''
          )}
        >
          <Contact className="h-3 w-3" />
          4. Contact
        </Button>
        <Button
          onClick={() => handleTabSelect('terms-and-conditions')}
          variant={step === 'terms-and-conditions' ? 'primary' : 'outline'}
          className={cn(
            'flex cursor-default items-center gap-2 !border-none',
            step !== 'terms-and-conditions' ? 'bg-transparent' : ''
          )}
        >
          <Flag className="h-3 w-3" />
          5. Finish
        </Button>
      </TabsList>
    </Tabs>
  );
}
