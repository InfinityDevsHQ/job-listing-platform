'use client';
import { Button } from '@/components/ui/button-new';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { useQueryParams } from '@/hooks/useQueryParams';
import { cn } from '@/lib/utils';
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
          className={cn('cursor-default !border-none', step !== 'location' ? 'bg-transparent' : '')}
        >
          1. Location
        </Button>

        <Button
          onClick={() => handleTabSelect('upload-cv')}
          variant={step === 'upload-cv' ? 'primary' : 'outline'}
          className={cn(
            'cursor-default !border-none',
            step !== 'upload-cv' ? 'bg-transparent' : ''
          )}
        >
          2. Upload CV
        </Button>

        <Button
          onClick={() => handleTabSelect('filter-jobs')}
          variant={step === 'filter-jobs' ? 'primary' : 'outline'}
          className={cn(
            'cursor-default !border-none',
            step !== 'filter-jobs' ? 'bg-transparent' : ''
          )}
        >
          3. Filter Jobs
        </Button>

        <Button
          onClick={() => handleTabSelect('contact')}
          variant={step === 'contact' ? 'primary' : 'outline'}
          className={cn('cursor-default !border-none', step !== 'contact' ? 'bg-transparent' : '')}
        >
          4. Contact
        </Button>
        <Button
          onClick={() => handleTabSelect('terms-and-conditions')}
          variant={step === 'terms-and-conditions' ? 'primary' : 'outline'}
          className={cn(
            'cursor-default !border-none',
            step !== 'terms-and-conditions' ? 'bg-transparent' : ''
          )}
        >
          5. Finish
        </Button>
      </TabsList>
    </Tabs>
  );
}
