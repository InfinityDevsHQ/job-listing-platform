import { create } from 'zustand';

type JobListings = {
  searchedJob: JobData;
};

const useJobListingsById = create<JobListings>((set) => ({
  searchedJob: [],
}));

export async function fetchDataAndUpdateStore(searchId: number) {
  console.log('fetching...', searchId);
  try {
    const response = await fetch(
      `http://devel.clickjob.ai:8001/api/v1/pgsql/job-listings/${searchId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );
    const searchedJob = await response.json();
    useJobListingsById.setState({ searchedJob });
    console.log(searchedJob);
  } catch (error) {
    console.error('Error fetching job listings', error);
  }
}
export default useJobListingsById;
