import { create } from 'zustand';

type JobListings = {
  allCountries: any[];
};

const useCountriesData = create<JobListings>((set) => ({
  allCountries: [],
}));

async function fetchDataAndUpdateStore() {
  try {
    const response = await fetch('http://devel.clickjob.ai:8000/api/v1/platform/country', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const allCountries = await response.json();
    useCountriesData.setState({ allCountries });
  } catch (error) {
    console.error('Error fetching job listings', error);
  }
}
fetchDataAndUpdateStore();
export default useCountriesData;
