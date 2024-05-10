import { create } from 'zustand';

type Country = {
  id: number;
  name: string;
  flag_icon: string;
};

type CountryStore = {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  selectedCountry: {
    id: 0,
    name: '',
    flag_icon: '',
  },
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));
