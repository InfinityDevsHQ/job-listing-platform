import { cn } from '@/lib/utils';

type StatusPillProps = {
  online_status: 'Online' | 'Offline';
};

export default function StatusPill({ online_status }: StatusPillProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 self-center rounded-2xl border bg-dark-primary px-2 py-1 lg:px-3 lg:py-1',
        online_status === 'Offline'
          ? 'border-gray-500 text-gray-500'
          : 'border-secondary-500 text-secondary-500'
      )}
    >
      <span
        className={cn(
          'inline-block h-2 w-2 rounded-full lg:h-4 lg:w-4',
          online_status === 'Offline' ? 'bg-gray-500' : 'bg-secondary-500'
        )}
      ></span>
      <span className="text-xs font-semibold lg:text-base">{online_status}</span>
    </div>
  );
}
