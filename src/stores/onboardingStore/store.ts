import { OnboardingData } from '@/types/types';
import { create } from 'zustand';

interface OnboardingStore {
  onboardingData: OnboardingData;
  setOnboardingData: (data: Partial<OnboardingData>) => void;
}

const useOnboardingStore = create<OnboardingStore>((set) => ({
  onboardingData: {
    is_terms_agreed: false,
    city: '',
    country: '',
    full_time: false,
    part_time: false,
    freelance: false,
    volunteer: false,
    on_site: false,
    remote: false,
    timezone: '',
    hybrid: false,
    phone: '',
    linkedin: '',
    twitter: '',
    github: '',
    language: '',
  },
  setOnboardingData: (data) =>
    set((state) => ({
      onboardingData: { ...state.onboardingData, ...data },
    })),
}));

export default useOnboardingStore;
