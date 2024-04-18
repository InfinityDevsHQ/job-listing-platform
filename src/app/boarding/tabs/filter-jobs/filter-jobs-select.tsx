import CollaborationType from "./collabration-type";
import EmploymentType from "./employment-type";

export default function FilterJobsSelect({
  employmentType,
  setEmploymentType,
  collaborationType,
  setCollaborationType,
}: FilterJobsProps) {
  return (
    <>
      <EmploymentType
        employmentType={employmentType}
        setEmploymentType={setEmploymentType}
      />
      <CollaborationType
        collaborationType={collaborationType}
        setCollaborationType={setCollaborationType}
      />
    </>
  );
}
