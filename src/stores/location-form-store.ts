import { create } from "zustand";
type LocationConstProp = {
  locationFormData: LocationFormData;
  setLocationFormData: (value: LocationFormData) => void;
};
const useLocationFormData = create<LocationConstProp>((set) => ({
  locationFormData: {
    preferLanguage: "",
    timeZone: "",
    country: "",
    city: "",
    password: "",
  },
  setLocationFormData: (data) =>
    set((state) => ({
      locationFormData: { ...state.locationFormData, ...data },
    })),
}));

export default useLocationFormData;
