import { Country } from '@/types/types';
import { create } from 'zustand';

type CountryStore = {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  selectedCountry: {
    default_language: '',
    flag_icon: '',
    id: 0,
    default_currency: '',
    currencies: [],
    languages: [],
    name: '',
    order_in_the_menu: 0,
  },
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));
