import { cn } from '@/lib/utils';
import Image from 'next/image';
import StatusPill from '../profile/status-pill';
type UserHeaderProps = {
  online_status?: 'Online' | 'Offline';
  user_name: string;
  user_role: string;
  className?: string;
};
const UserHeader = ({ online_status, user_name, user_role, className }: UserHeaderProps) => {
  return (
    <div className={cn('flex flex-1 items-center gap-4', className)}>
      <Image
        src={'/assets/candidates/candidate.png'}
        alt="test"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-1 flex-col items-start gap-0">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-lg font-bold text-neutral-950">{user_name}</h4>
          {online_status && <StatusPill online_status={online_status} />}
        </div>
        <p className="text-base font-normal text-gray-500">{user_role}</p>
      </div>
    </div>
  );
};
export default UserHeader;
