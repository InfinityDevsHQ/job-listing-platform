'use client';
import { Button } from '@/components/ui/button-new';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';
type OnboardingStepNavigatorProps = {
  step?: string;
};
export default function OnboardingStepNavigator({ step }: OnboardingStepNavigatorProps) {
  const addQueryParams = useQueryParams();
  const handleTabSelect = (value: string) => {
    addQueryParams('step', value);
  };
  useEffect(() => {
    window.history.replaceState({}, document.title, window.location.pathname);
    if (!step) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [step]);
  return (
    <Tabs>
      <TabsList className="flex items-center gap-4">
        <Button
          onClick={() => handleTabSelect('')}
          variant={!step ? 'default' : 'outline'}
          className="!border-none"
        >
          Intro
        </Button>

        <Button
          onClick={() => handleTabSelect('location')}
          variant={step === 'location' ? 'default' : 'outline'}
          className="!border-none"
        >
          1. Location
        </Button>

        <Button
          onClick={() => handleTabSelect('upload-cv')}
          variant={step === 'upload-cv' ? 'default' : 'outline'}
          className="!border-none"
        >
          2. Upload CV
        </Button>

        <Button
          onClick={() => handleTabSelect('filter-jobs')}
          variant={step === 'filter-jobs' ? 'default' : 'outline'}
          className="!border-none"
        >
          3. Filter Jobs
        </Button>
        <Button
          onClick={() => handleTabSelect('filter-jobs')}
          variant={step === 'filter-jobs' ? 'default' : 'outline'}
          className="!border-none"
        >
          3. Filter Jobs
        </Button>
        <Button
          onClick={() => handleTabSelect('contact')}
          variant={step === 'contact' ? 'default' : 'outline'}
          className="!border-none"
        >
          4. Contact
        </Button>
        <Button
          onClick={() => handleTabSelect('terms-and-conditions')}
          variant={step === 'terms-and-conditions' ? 'default' : 'outline'}
          className="!border-none"
        >
          5. Finish
        </Button>
      </TabsList>
    </Tabs>
  );
}
