import { cn } from '@/lib/utils';
import Image from 'next/image';
type UserHeaderProps = {
  online_status?: 'Online' | 'Offline';
  user_name: string;
  user_role: string;
};
const UserHeader = ({ online_status, user_name, user_role }: UserHeaderProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={'/assets/candidates/candidate.png'}
        alt="test"
        width={50}
        height={50}
        className={cn(`rounded-full border-2 border-gray-100 ring-2 ring-gray-500`, {
          'ring-green-500': !online_status,
        })}
      />
      <div className="flex flex-col items-start gap-0">
        <h4 className="text-lg font-bold text-neutral-950">{user_name}</h4>
        <p className="text-base font-normal text-gray-500">{user_role}</p>
      </div>
    </div>
  );
};
export default UserHeader;
