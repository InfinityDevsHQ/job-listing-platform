type JobCardProps = {
  title: string;
  description: string;
};
export default function JobInfoCard({ title, description }: JobCardProps) {
  return (
    <li className="w-full flex-col items-center justify-center rounded-2xl border border-dark-background bg-dark-background3 p-2 lg:flex lg:max-w-full lg:p-4">
      <h5 className="text-xxs capitalize text-dark-name lg:text-base">{title}</h5>
      <p className="text-xs font-bold capitalize text-dark-nameWhite lg:text-xl">{description}</p>
    </li>
  );
}
