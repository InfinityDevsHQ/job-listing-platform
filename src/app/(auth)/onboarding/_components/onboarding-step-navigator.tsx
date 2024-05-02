'use client';
import Button from '@/components/ui/button';
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
          text="Intro"
          onClick={() => handleTabSelect('')}
          variant={!step ? 'primary' : 'default'}
          className="!border-none"
        />
        <Button
          text="1. Location"
          onClick={() => handleTabSelect('location')}
          variant={step === 'location' ? 'primary' : 'default'}
          className="!border-none"
        />
        <Button
          text="2. Upload Cv"
          onClick={() => handleTabSelect('upload-cv')}
          variant={step === 'upload-cv' ? 'primary' : 'default'}
          className="!border-none"
        />
        <Button
          text="3. Filter Jobs"
          onClick={() => handleTabSelect('filter-jobs')}
          variant={step === 'filter-jobs' ? 'primary' : 'default'}
          className="!border-none"
        />
        <Button
          text="4. Contacts"
          onClick={() => handleTabSelect('contact')}
          variant={step === 'contact' ? 'primary' : 'default'}
          className="!border-none"
        />
        <Button
          text="5. Finish"
          onClick={() => handleTabSelect('terms-and-conditions')}
          variant={step === 'terms-and-conditions' ? 'primary' : 'default'}
          className="!border-none"
        />
      </TabsList>
    </Tabs>
  );
}
