import { cn } from '@/lib/utils';

type StatusPillProps = {
  online_status: 'Online' | 'Offline';
};

export default function StatusPill({ online_status }: StatusPillProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 self-center rounded-md border bg-white px-4 py-2',
        online_status === 'Offline'
          ? 'border-red-500 text-red-500'
          : 'border-secondary-500 text-secondary-500'
      )}
    >
      <span
        className={cn(
          'inline-block h-4 w-4 rounded-full',
          online_status === 'Offline' ? 'bg-red-500' : 'bg-secondary-500'
        )}
      ></span>
      <span>{online_status}</span>
    </div>
  );
}
