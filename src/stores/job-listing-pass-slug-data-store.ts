import { create } from "zustand";

type JobListings = {
  searchedJob: any[];
};

const useJobListingsById = create<JobListings>((set) => ({
  searchedJob: [],
}));
const jobListingId: number = 1;
async function fetchDataAndUpdateStore() {
  try {
    const response = await fetch(
      `http://devel.clickjob.ai:8001/api/v1/pgsql/job-listings/${jobListingId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const searchedJob = await response.json();
    useJobListingsById.setState({ searchedJob });
  } catch (error) {
    console.error("Error fetching job listings", error);
  }
}
fetchDataAndUpdateStore();
export default useJobListingsById;
