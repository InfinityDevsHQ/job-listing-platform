import PostJobForm from "@/forms/post-job-form/post-job-form";
import AdvancedPromotion from "./_components/advanced-promotion";

export default function PostJob() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <PostJobForm />
      <AdvancedPromotion />
    </div>
  );
}
