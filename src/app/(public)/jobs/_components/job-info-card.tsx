type JobCardProps = {
  title: string;
  description: string;
};
export default function JobInfoCard({ title, description }: JobCardProps) {
  return (
    <li className="max-w-max rounded-md border border-gray-200 bg-gray-50 p-2 lg:p-4">
      <h5 className="text-xxs capitalize text-gray-500 lg:text-base">{title}</h5>
      <p className="text-xs font-bold capitalize text-gray-700 lg:text-xl">{description}</p>
    </li>
  );
}
