import { create } from "zustand";

type JobListings = {
  data: any[];
};

const useJobListingsData = create<JobListings>((set) => ({
  data: [],
}));

async function fetchDataAndUpdateStore() {
  try {
    const response = await fetch(
      "http://devel.clickjob.ai:8001/api/v1/pgsql/job-listings/all?skip=0&limit=10&allow_for_translated_jobs=false",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    useJobListingsData.setState({ data });
  } catch (error) {
    console.error("Error fetching job listings", error);
  }
}
fetchDataAndUpdateStore();
export default useJobListingsData;
